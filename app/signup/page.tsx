// app/signup/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/retroui/Button';
import { Label } from '@/components/retroui/Label';
import { Input } from '@/components/retroui/Input';
import Form from 'next/form';

export default function SignUpPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        console.log("Submit response", response);
        if (response.ok) {
            router.push('/');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center mx-auto">
            <Form action="/api/signup" className="p-6 max-w-sm w-full rounded-lg border shadow-md">
                <h1 className="text-2xl mb-4">Sign Up</h1>
                <div className="mb-4 items-center gap-1.5">
                    {/* className="block mb-2" */}
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        // className="p-2 border rounded"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    {/* className="block mb-2" */}
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        type="password"
                        id='password'
                        // className="w-full p-2 border rounded"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Sign Up
                </Button>
                <p className="mt-4 text-center">
                    Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
                </p>
            </Form>
        </div>
    )
}