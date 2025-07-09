import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { generateToken, setSessionCookie } from '@/lib/auth';

export async function POST(request: Request) {
    const { email, password, name } = await request.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { email, password: hashedPassword, name },
    });

    const token = generateToken(user.id);
    const response = NextResponse.json({ success: true });
    setSessionCookie(token);

    return response;
}