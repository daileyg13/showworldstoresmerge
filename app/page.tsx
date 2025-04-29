'use client';

import { useEffect, useState, useMemo } from "react";
import { Card, CardContent } from "../components/ui/card";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

// Dynamically import the Carousel to reduce INP cost on initial load
const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });

export default function HomePage() {
  const categories = [
    { title: "Lingerie", img: "/Images/Lingerie.webp", link: "http://www.shopshowworld.com/c.html?c=79&b=Most+Recent" },
    { title: "Smoke Shop", img: "/Images/Smoke Shop.webp", link: "/smokeshop" },
    { title: "Adult Toys", img: "/Images/Adult Toys.webp", link: "http://www.shopshowworld.com/c.html?b=Most+Popular" },
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
                  title === "Smoke Shop" ? (
                    <Link href={link}>
                      <Image
                        src={img}
                        alt={title}
                        width={400}
                        height={400}
                        className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
                        style={{ animationDelay: delays[index] }}
                        loading="lazy"
                      />
                    </Link>
                  ) : (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={img}
                        alt={title}
                        width={400}
                        height={400}
                        className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
                        style={{ animationDelay: delays[index] }}
                        priority={title === "Lingerie"}
                      />
                    </a>
                  )
                ) : (
                  <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={400}
                    className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
                    style={{ animationDelay: delays[index] }}
                    loading="lazy"
                  />
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
