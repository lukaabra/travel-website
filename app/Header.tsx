import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="p-5 bg-blue-500 flex flex-row items-center">
      <div>
        <Link href="/" className="px-2 py-1">
          <i className="fa-solid fa-2x fa-passport"></i>
        </Link>
      </div>
      <div className="ml-auto">
        <Link href="/destinations" className="mx-6 px-2 py-1 white">
          Destinations
        </Link>
        <Link href="/reviews" className="mx-6 px-2 py-1">
          Reviews
        </Link>
        <Link href="/about" className="mx-6 px-2 py-1">
          About us
        </Link>
        <Link href="/contact" className="mx-6 px-2 py-1 bg-white text-blue rounded-lg">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
