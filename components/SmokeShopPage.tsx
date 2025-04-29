'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import SmokeShopHero from '@/components/SmokeShopHero';
import Image from 'next/image';
import { useMemo } from 'react';

const NavBar = dynamic(() => import('@/components/NavBar'), { ssr: false });
const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });

const originalBrandLogos = [
  '/Brands/logo1.webp', '/Brands/logo2.webp', '/Brands/logo3.webp', '/Brands/logo4.webp',
  '/Brands/logo5.webp', '/Brands/logo6.webp', '/Brands/logo7.webp', '/Brands/logo8.webp',
  '/Brands/logo9.webp', '/Brands/logo10.webp', '/Brands/logo11.webp', '/Brands/logo12.webp',
  '/Brands/logo13.webp', '/Brands/logo14.webp', '/Brands/logo15.webp', '/Brands/logo16.webp',
  '/Brands/logo17.webp', '/Brands/logo18.webp', '/Brands/logo19.webp', '/Brands/logo20.webp',
  '/Brands/logo21.webp', '/Brands/logo22.webp', '/Brands/logo23.webp', '/Brands/logo24.webp',
];

export default function SmokeShopPage() {
  const brandLogos = useMemo(() => (
    [...originalBrandLogos].sort(() => Math.random() - 0.5)
  ), []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <NavBar />

      <SmokeShopHero />

      {/* Smoke Shop Favorites */}
      <section className="pt-20 pb-12 text-center px-4" role="region" aria-label="Smoke Shop Favorites">
        <h2 className="text-3xl font-semibold mb-8">Smoke Shop Favorites</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brandLogos.map((src, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md">
              <Image
                src={src}
                alt={`Smoke Shop Brand Logo ${index + 1}`}
                width={200}
                height={80}
                className="w-full h-auto object-contain max-h-20"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Carousel */}
      <section className="px-4 pb-16">
        <Carousel />
      </section>

      <Footer />
    </div>
  );
}
