'use client';

import { useEffect, useState, useMemo } from "react";
import { Card, CardContent } from "../components/ui/card";
import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function HomePage() {
  const categories = [
    { title: "Lingerie", img: "/Images/Lingerie.png", link: "http://www.shopshowworld.com/c.html?c=79&b=Most+Recent" },
    { title: "Smoke Shop", img: "/Images/Smoke Shop.png", link: "/smokeshop" },
    { title: "Adult Toys", img: "/Images/Adult Toys.png", link: "http://www.shopshowworld.com/c.html?b=Most+Popular" },
  ];

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

  const delays = useMemo(
    () => categories.map(() => `${Math.random() * 5}s`),
    []
  );

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
      <section className="pt-32 sm:pt-40 lg:pt-52 px-4 pb-16 text-center bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {categories.map(({ title, img, link }, index) => (
            <Card key={title} className="w-full bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={img}
                      alt={title}
                      className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
                      style={{ animationDelay: delays[index] }}
                    />
                  </a>
                ) : (
                  <img
                    src={img}
                    alt={title}
                    className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
                    style={{ animationDelay: delays[index] }}
                  />
                )}
                {(title !== "Lingerie" && title !== "Adult Toys" && title !== "Smoke Shop") && (
                  <p className="text-2xl font-bold text-white">{title}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-10 px-6">
        <Carousel />
      </section>

      <Footer />
    </div>
  );
}











///npm run dev
