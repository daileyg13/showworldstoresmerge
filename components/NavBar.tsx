// components/NavBar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Greece', 'Henrietta', 'Waterloo', 'Lingerie', 'Smoke Shop', 'Toys', 'Movies'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md px-6 shadow-md h-20 sm:h-24 flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <img src="/Images/ShowWorld girl pink.png" alt="Show World Logo" className="h-20" />
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`flex-col md:flex md:flex-row md:items-center md:justify-center w-full gap-4 mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
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
