'use client';

import { motion } from 'framer-motion';

export default function SmokeShopHero() {
  return (
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
  );
}
