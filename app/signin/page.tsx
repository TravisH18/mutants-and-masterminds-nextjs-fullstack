'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/retroui/Button';
import { Label } from '@/components/retroui/Label';
import { Input } from '@/components/retroui/Input';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto">
      <div className="p-6 max-w-sm w-full rounded-lg border shadow-md">
        <h1 className="text-2xl mb-4">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor='password'>Password</Label>
            <Input
              type="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Sign In
          </Button>
        </form>
        <div className="mt-4">
          <Button 
            onClick={() => signIn('google')} 
            className="w-full bg-red-500 text-white p-2 rounded mb-2"
          >
            Sign in with Google
          </Button>
          <Button 
            onClick={() => signIn('discord')} 
            className="w-full bg-indigo-500 text-white p-2 rounded"
          >
            Sign in with Discord
          </Button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
}