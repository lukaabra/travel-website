import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="p-5 bg-blue-500">
      <Link href="/" className="px-2 py-1 bg-white text-blue rounded-lg">
        Home
      </Link>
      <Link href="/todos" className="px-2 py-1 bg-white text-blue rounded-lg">
        Todos
      </Link>
    </div>
  );
}

export default Header;
