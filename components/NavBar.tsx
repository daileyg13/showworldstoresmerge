'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Menu = dynamic(() => import('lucide-react').then(mod => mod.Menu), { ssr: false });
const X = dynamic(() => import('lucide-react').then(mod => mod.X), { ssr: false });
const Search = dynamic(() => import('lucide-react').then(mod => mod.Search), { ssr: false });
const ShoppingBag = dynamic(() => import('lucide-react').then(mod => mod.ShoppingBag), { ssr: false });

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const pathname = usePathname();

  const menuItems = [
    { label: 'Greece', href: '/greece' },
    { label: 'Henrietta', href: '/henrietta' },
    { label: 'Waterloo', href: '/waterloo' },
    { label: 'Smoke Shop', href: '/smokeshop' },
    { label: 'Lingerie', href: 'http://www.shopshowworld.com/c.html?c=79&b=Most+Recent', external: true },
    { label: 'Toys', href: 'http://www.shopshowworld.com/c.html?b=Most+Popular', external: true },
    { label: 'Movies', href: 'http://www.shopshowworld.com/videos?b=Most+Recent', external: true },
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const encoded = encodeURIComponent(query.trim());
      window.location.href = `http://www.shopshowworld.com/c.php?q=${encoded}&search-type=Toys`;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md shadow-md border-b border-zinc-800'
            : 'bg-transparent'
        } ${isOpen ? 'overflow-hidden max-h-screen' : ''}`}
      >
        {/* Top Bar */}
        <div className="h-24 sm:h-32 px-4 sm:px-6 pt-2 flex justify-between md:justify-center items-center relative">
          <Link href="/" className="group block absolute left-4 md:relative md:left-0">
            <img
              src="/Images/ShowWorld girl pink.png"
              alt="Show World Logo"
              className="block md:hidden h-14 transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <img
              src="/Images/ShopShowWorldBanner White Letters.png"
              alt="Show World Banner"
              className="hidden md:block h-24 sm:h-28 transition duration-300 group-hover:brightness-0 group-hover:invert mx-auto"
            />
          </Link>

          {/* Icons */}
          <div className="flex gap-4 sm:gap-6 items-center absolute right-4">
            <button
              onClick={() => setShowSearch(true)}
              className="text-pink-400 hover:scale-110 transition-transform p-2 sm:p-1"
            >
              <Search className="cursor-pointer w-6 h-6 sm:w-5 sm:h-5" />
            </button>

            <a
              href="http://www.shopshowworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform p-2 sm:p-1"
            >
              <ShoppingBag className="text-pink-400 cursor-pointer w-6 h-6 sm:w-5 sm:h-5" />
            </a>

            <button onClick={toggleMenu} className="text-pink-400 md:hidden p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:justify-center w-full gap-4 px-6 pb-4 transition-all duration-300 ease-in-out text-center ${
            isOpen
              ? 'flex bg-black/80 backdrop-blur-md md:bg-transparent animate-slide-down'
              : 'hidden'
          } md:flex`}
        >
          {menuItems.map(({ label, href, external }) => {
            const isActive = pathname === href;

            const linkClasses = `text-lg transition-all duration-300 px-4 py-2 rounded-md block w-full md:w-auto ${
              isActive
                ? 'text-pink-400 font-semibold underline underline-offset-4'
                : 'text-white hover:text-pink-400 hover:drop-shadow-[0_0_4px_#ec4899]'
            }`;

            return external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                {label}
              </a>
            ) : (
              <Link key={label} href={href} className={linkClasses}>
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Search Modal */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-zinc-900 p-6 rounded-xl w-full max-w-md text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-2 right-2 text-zinc-400 hover:text-pink-400"
            >
              <X size={24} />
            </button>
            <form onSubmit={handleSearchSubmit}>
              <label htmlFor="search" className="block mb-2 text-pink-400 text-sm font-semibold">
                What are you looking for?
              </label>
              <input
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="e.g. We Vibe"
                autoFocus
              />
              <button
                type="submit"
                className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
