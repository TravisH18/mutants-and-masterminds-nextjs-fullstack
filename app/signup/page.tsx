// app/signup/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/retroui/Button';
import { Label } from '@/components/retroui/Label';
import { Input } from '@/components/retroui/Input';
import Form from 'next/form';
import { signIn } from 'next-auth/react';
import bcrypt from 'bcrypt'
//import { signOut, useSession } from 'next-auth/react';

export default function SignUpPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Hash password before sending
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: hashedPassword
            }),
        });
        
        if (response.ok) {
            // Sign in after successful signup
            const result = await signIn('credentials', {
                redirect: false,
                email: formData.email,
                password: formData.password,
            });
            
            if (!result?.error) {
                router.push('/');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center mx-auto">
            <div className="p-6 max-w-sm w-full rounded-lg border shadow-md">
                <h1 className="text-2xl mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            type="password"
                            id='password'
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Sign Up
                    </Button>
                </form>
                <div className="mt-4">
                    <Button 
                        onClick={() => signIn('google')} 
                        className="w-full bg-red-500 text-white p-2 rounded mb-2"
                    >
                        Sign up with Google
                    </Button>
                    <Button 
                        onClick={() => signIn('discord')} 
                        className="w-full bg-indigo-500 text-white p-2 rounded"
                    >
                        Sign up with Discord
                    </Button>
                </div>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/signin" className="text-blue-500">Sign in</a>
                </p>
            </div>
        </div>
    )
}