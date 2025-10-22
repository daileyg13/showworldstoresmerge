// components/DollPageLayout.tsx
'use client';

import localFont from 'next/font/local';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Footer from './Footer';
import { Button } from './ui/button';

const NavBar = dynamic(() => import('./NavBar'), { ssr: false });
const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

const ltcBroadway = localFont({
  src: [
    {
      path: '../fonts/LTCBroadway.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
}

export default function DollPageLayout({ children }: Props) {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      <NavBar />

      <main className="pt-32 sm:pt-40 lg:pt-52 text-center px-4" role="main">
        <h1 className={`${ltcBroadway.className} text-4xl sm:text-5xl font-bold mb-6 text-pink-500`}>
          Available Dolls
        </h1>

        {children}

        <p className="text-lg sm:text-xl mt-6">
          We currently have <strong>Hannah, Nina, Bella, Amber and Lola</strong> in stock!
        </p>
      </main>

      <Carousel />
      <Footer />
    </div>
  );
}
