// lib/auth.ts

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";

export const {handlers, auth} = NextAuth({
  providers: [Google, Discord]
})
// import jwt from 'jsonwebtoken';
// import { jwtVerify, SignJWT } from 'jose';
// import { cookies } from 'next/headers';

// const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// export async function generateToken(userId: number) {
//   return await new SignJWT({ userId })
//     .setProtectedHeader({ alg: 'HS256' })
//     .setIssuedAt()
//     .setExpirationTime('1d')
//     .sign(secret);
// }

// export const verifyToken = async (token: string) =>  {
//   try {
//     const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
//     const { payload } = await jwtVerify(token, secret);
//     return payload;
//   } catch (error) {
//     return null;
//   }
// };

// export async function setSessionCookie(token: string) {
//     const cookieStore = await cookies();
//     cookieStore.set('session', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         maxAge: 60 * 60 * 24, // 1 day
//         path: '/',
//     });
// };

// export async function getSession() {
//     const cookieStore = await cookies();
//     const session = cookieStore.get('session')?.value;
//     if (!session) return null;
//     try {
//         return verifyToken(session);
//     } catch {
//         return null;
//     }
// };