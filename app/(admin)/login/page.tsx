'use client';

import { signIn } from 'next-auth/react';
import React, { FormEvent } from 'react';

function Login() {
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    await signIn(undefined, { callbackUrl: `${window.location.origin}/admin` });
  };

  return <button onClick={handleSignIn}>Sign in</button>;
}

export default Login;
