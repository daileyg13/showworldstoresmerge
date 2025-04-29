import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-6 text-center text-sm text-zinc-400 mt-20">
      <div className="flex flex-col items-center gap-2">
        <a href="/" aria-label="Go to homepage">
          <Image
            src="/Images/ShowWorld girl pink.webp"
            alt="Show World Logo"
            width={80}
            height={20}
            className="h-5 w-auto"
            loading="lazy"
          />
        </a>
        <p>&copy; 2025 Show World. All rights reserved.</p>
      </div>
    </footer>
  );
}
