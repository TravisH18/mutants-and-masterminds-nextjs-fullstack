// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';


// export async function middleware(request: NextRequest) {
//     const session = request.cookies.get('session')?.value;
//     const { pathname } = request.nextUrl;
//     const publicPaths = ['/login', '/signup'];

//     if (pathname.startsWith('/api') || publicPaths.includes(pathname)) {
//         return NextResponse.next();
//     }

//     try {
//         if (!session) throw new Error('No session');
//         const decoded = await verifyToken(session);
//         if (!decoded) throw new Error('Invalid session');

//         // You can add user data to the request if needed
//         const requestHeaders = new Headers(request.headers);
//         requestHeaders.set('x-user-id', decoded.userId.toString());

//         return NextResponse.next({
//             request: {
//                 headers: requestHeaders,
//             },
//         });
//     } catch (error) {
//         if (!publicPaths.includes(pathname)) {
//             return NextResponse.redirect(new URL('/login', request.url));
//         }
//         return NextResponse.next();
//     }
// }

// Example of default export
export default function middleware(request: NextRequest) {
  // Middleware logic
}