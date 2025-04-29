'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SmokeShopHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section className="pt-40 pb-4 text-center px-4" role="region" aria-label="Smoke Shop Hero">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="/Images/Smoke Shop2.png"
          alt="Smoke Shop Neon Logo"
          className="neon-glow mx-auto w-full max-w-[700px] h-auto"
          loading="eager"
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
