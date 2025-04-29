'use client';

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero"; // <-- Import the new component

const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });

export default function HomePage() {
  const [showAgeCheck, setShowAgeCheck] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const hasVisited = localStorage.getItem("ageVerified");
    if (!hasVisited) {
      setShowAgeCheck(true);
    }
  }, []);

  const handleAgeVerification = () => {
    localStorage.setItem("ageVerified", "true");
    setShowAgeCheck(false);
  };

  if (!hasMounted) return null;

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      {showAgeCheck && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-zinc-900 p-8 rounded-xl max-w-md text-center shadow-lg border border-pink-400">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Age Verification</h2>
            <p className="mb-6">You must be 18 years or older to enter this site.</p>
            <button
              onClick={handleAgeVerification}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
            >
              I am 18 or older
            </button>
          </div>
        </div>
      )}

      <NavBar />

      {/* Hero Section */}
      <HomeHero /> {/* <-- Using the new Hero component */}

      {/* Featured Carousel */}
      <section className="py-10 px-6">
        <Carousel />
      </section>

      <Footer />
    </div>
  );
}




///npm run dev
