'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

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
    { label: 'Lingerie', href: 'http://www.shopshowworld.com/c.html?c=79&b=Most+Recent', external: true },
    { label: 'Smoke Shop', href: '#' },
    { label: 'Toys', href: 'http://www.shopshowworld.com/c.html?b=Most+Popular', external: true },
    { label: 'Movies', href: 'http://www.shopshowworld.com/videos?b=Most+Recent', external: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
        }`}
      >
        {/* Top Bar */}
        <div className="h-20 sm:h-24 px-6 pt-2 flex justify-between items-center">
          <Link href="/" className="group">
            <img
              src="/Images/ShowWorld girl pink.png"
              alt="Show World Logo"
              className="h-20 transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </Link>

          {/* Icons */}
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setShowSearch(true)}
              className="text-pink-400 hover:scale-110 transition-transform"
            >
              <Search className="cursor-pointer" />
            </button>

            <a
              href="http://www.shopshowworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <ShoppingBag className="text-pink-400 cursor-pointer" />
            </a>

{/* Mobile Menu Toggle */}
<button onClick={toggleMenu} className="text-pink-400 md:hidden">
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>

          </div>
        </div>

        {/* Menu Items */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:justify-center w-full gap-4 px-6 pb-4 transition-all duration-300 ease-in-out ${
            isOpen
              ? 'flex bg-black/80 backdrop-blur-md md:bg-transparent'
              : 'hidden'
          } md:flex`}
        >
          {menuItems.map(({ label, href, external }) => {
            const isActive = pathname === href;

            const linkClasses = `text-lg transition-all duration-300 px-2 py-1 rounded-md ${
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
