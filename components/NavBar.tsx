'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Menu = dynamic(() => import('lucide-react').then(mod => mod.Menu), { ssr: false });
const X = dynamic(() => import('lucide-react').then(mod => mod.X), { ssr: false });

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Greece', href: '/greece' },
    { label: 'Henrietta', href: '/henrietta' },
    { label: 'Waterloo', href: '/waterloo' },
    { label: 'Smoke Shop', href: '/smokeshop' },
  ];

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-md border-b border-zinc-800' : 'bg-transparent'
        } ${isOpen ? 'overflow-hidden max-h-screen' : ''}`}
      >
        <div className="h-24 sm:h-32 px-4 sm:px-6 pt-2 flex justify-between md:justify-center items-center relative">
          <Link href="/" className="group block absolute left-4 md:relative md:left-0" aria-label="Home">
            <Image
              src="/Images/ShowWorld girl pink.webp"
              alt="Show World Logo"
              width={64}
              height={64}
              priority
              className="block md:hidden h-14 w-auto transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <Image
              src="/Images/ShopShowWorldBanner White Letters.webp"
              alt="Show World Banner"
              width={400}
              height={96}
              priority
              className="hidden md:block h-24 sm:h-28 w-auto transition duration-300 group-hover:brightness-0 group-hover:invert mx-auto"
            />
          </Link>

          <div className="flex gap-4 sm:gap-6 items-center absolute right-4">
            <button
              onClick={toggleMenu}
              className="text-pink-400 md:hidden p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`flex-col md:flex md:flex-row md:items-center md:justify-center w-full gap-4 px-6 pb-4 transition-all duration-300 ease-in-out text-center ${
            isOpen ? 'flex bg-black/80 backdrop-blur-md md:bg-transparent animate-slide-down' : 'hidden'
          } md:flex`}
        >
          {menuItems.map(({ label, href }) => {
            const isActive = pathname === href;
            const linkClasses = `text-lg transition-all duration-300 px-4 py-2 rounded-md block w-full md:w-auto ${
              isActive ? 'text-pink-400 font-semibold underline underline-offset-4' : 'text-white hover:text-pink-400 hover:drop-shadow-[0_0_4px_#ec4899]'
            }`;

            return (
              <Link key={label} href={href} className={linkClasses} aria-label={label}>
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

    </>
  );
}
