'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Greece', 'Henrietta', 'Waterloo', 'Lingerie', 'Smoke Shop', 'Toys', 'Movies'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md shadow-md border-b border-zinc-800">
      {/* Top Bar */}
      <div className="h-20 sm:h-24 px-6 pt-2 flex justify-between items-center">
        <Link href="/" className="group">
          <img
            src="/Images/ShowWorld girl pink.png"
            alt="Show World Logo"
            className="h-20 transition duration-300 group-hover:brightness-0 group-hover:invert"
          />
        </Link>
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center md:justify-center w-full gap-4 px-6 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        {menuItems.map((label) => (
          <Link
            key={label}
            href={
              label === 'Greece'
                ? '/greece'
                : label === 'Henrietta'
                ? '/henrietta'
                : label === 'Waterloo'
                ? '/waterloo'
                : '#'
            }
            className="text-white hover:text-pink-400 transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
