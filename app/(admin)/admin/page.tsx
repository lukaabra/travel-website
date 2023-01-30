'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

function Admin() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Access denied!</div>;
  }

  return (
    <div>
      <div className="p-5">
        <h1>Admin ID: {session.id}</h1>
        <p>Name: {session.name}</p>
        <p>Email: {session.email}</p>
      </div>
    </div>
  );
}

export default Admin;
