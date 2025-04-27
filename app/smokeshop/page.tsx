// app/smokeshop/page.tsx
import NavBar from '@/components/NavBar';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import SmokeShopHero from '@/components/SmokeShopHero';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show World Smoke Shop | Pipes, Vapes & Smoking Accessories",
  description: "Explore premium pipes, vapes, rolling papers, and smoking accessories at Show World’s Smoke Shop. Top brands, 24/7 head shop shopping, all in one place!"
};

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
  '/Brands/logo23.png',
  '/Brands/logo24.png',
].sort(() => Math.random() - 0.5);

export default function SmokeShopPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <NavBar />

      <SmokeShopHero />

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
