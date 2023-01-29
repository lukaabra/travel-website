'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const login = async (email: string, password: string) => {
  const body = JSON.stringify({ email, password });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const data = await res.json();

  return data;
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login(email, password);

      if (data.error) {
        setError(data.error);
        return;
      }

      router.push('/admin');
    } catch (error) {
      console.log(error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Username"
      />

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
        Search
      </button>
    </form>
  );
}

export default Login;
