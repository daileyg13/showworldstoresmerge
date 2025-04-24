// app/smokeshop/page.tsx
'use client';

import NavBar from '@/components/NavBar';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
const brandLogos = [
  '/Brands/logo1.png',
  '/Brands/logo2.png',
  '/Brands/logo3.png',
  '/Brands/logo4.png',
  '/Brands/logo5.png',
  '/Brands/logo6.png',
  '/Brands/logo7.png',
  '/Brands/logo8.png',
  '/Brands/logo9.png',
  '/Brands/logo10.png',
  '/Brands/logo11.png',
  '/Brands/logo12.png',
  '/Brands/logo13.png',
  '/Brands/logo14.png',
  '/Brands/logo15.png',
  '/Brands/logo16.png',
  '/Brands/logo17.png',
  '/Brands/logo18.png',
  '/Brands/logo19.png',
  '/Brands/logo20.png',
  '/Brands/logo21.png',
  '/Brands/logo22.png',
];

export default function SmokeShopPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero section */}
      <section className="pt-40 pb-4 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/Images/Smoke Shop2.png"
            alt="Smoke Shop Neon Logo"
            className="neon-glow mx-auto w-full max-w-[700px] h-auto"
          />
        </motion.div>
        <p className="text-lg text-gray-300 mt-2">Western New York's Largest Selection of Smoking Accessories</p>
        <h2
          className="text-5xl font-light text-center mt-8 text-blue-400 neon-glow"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Open 24/7
        </h2>
      </section>

      {/* Smoke Shop Favorites */}
      <section className="pt-20 pb-12 text-center px-4">
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
