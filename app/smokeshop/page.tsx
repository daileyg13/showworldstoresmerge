// app/smokeshop/page.tsx
'use client';

import NavBar from '@/components/NavBar';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const brandLogos = [
  '/brands/logo1.png',
  '/brands/logo2.png',
  '/brands/logo3.png',
  '/brands/logo4.png',
  '/brands/logo5.png',
  '/brands/logo6.png',
  '/brands/logo7.png',
  '/brands/logo8.png',
  '/brands/logo9.png',
  '/brands/logo10.png',
  '/brands/logo11.png',
  '/brands/logo12.png',
  '/brands/logo13.png',
  '/brands/logo14.png',
  '/brands/logo15.png',
  '/brands/logo16.png',
  '/brands/logo17.png',
  '/brands/logo18.png',
  '/brands/logo19.png',
  '/brands/logo20.png',
  '/brands/logo21.png',
  '/brands/logo22.png',
];

export default function SmokeShopPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero section */}
      <section className="pt-40 pb-12 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/Images/Smoke Shop.png"
            alt="Smoke Shop Neon Logo"
            className="neon-glow mx-auto w-full max-w-[700px] h-auto"
          />
        </motion.div>
        <p className="text-lg text-gray-300 mt-4">The best in smoke gear, curated for your pleasure</p>
      </section>

      {/* Smoke Shop Favorites */}
      <section className="pt-32 pb-16 text-center px-4">
        <h2 className="text-3xl font-semibold mb-8">Smoke Shop Favorites</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brandLogos.map((src, index) => (
            <div key={index} className="bg-white p-2 rounded-lg shadow-md">
              <img src={src} alt={`Brand ${index + 1}`} className="w-full h-auto object-contain max-h-20" />
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