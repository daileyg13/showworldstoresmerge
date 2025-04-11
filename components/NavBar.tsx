// components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  const menuItems = ['Greece', 'Henrietta', 'Waterloo', 'Lingerie', 'Smoke Shop', 'Toys', 'Movies'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md py-3 px-6 flex flex-wrap items-center justify-between text-sm md:text-base shadow-md">
      <img src="/Images/ShowWorld girl pink.png" alt="Show World Logo" className="h-20" />
      <div className="flex flex-wrap gap-4 justify-center w-full md:w-auto mt-2 md:mt-0">
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
            className="hover:text-pink-400 transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
