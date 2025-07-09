import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { generateToken, setSessionCookie } from '@/lib/auth';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = await generateToken(user.id);
    const response = NextResponse.json({ success: true });
    await setSessionCookie(token);

    return response;
}