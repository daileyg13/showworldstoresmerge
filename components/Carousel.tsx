'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FeaturedItem {
  title: string;
  img: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const originalList: FeaturedItem[] = [
  { title: "Pecker Cake Pan -10in", img: "/Images/Pecker Cake Pan.webp" },
  { title: "INMI Bloomgasm Rose -Purple", img: "/Images/Purple Rose.webp" },
  { title: "PDX Interactive Bad Girl 69", img: "/Images/Dirty Talk.webp" },
  { title: "ZOLO Upstroke 69", img: "/Images/Zolo.webp" },
  { title: "Bodywand Recharge Pulse -Black", img: "/Images/Body Wand.webp" },
  { title: "INYA The Rose -Red", img: "/Images/Red Rose.webp" },
  { title: "We-Vibe Chorus -Cosmic Blue", img: "/Images/WE Vibe Chorus.webp" },
  { title: "Perfection G-Spot -Pink", img: "/Images/Perfection G-spot.webp" },
  { title: "Thrusting Jack Rabbit -Purple", img: "/Images/Jack Rabbit Thrusting.webp" },
  { title: "GITD Rainbow Naughty Straws -6pk", img: "/Images/Rainbow Naughty Straws.webp" },
  { title: "Lace Mini Dress", img: "/Images/Lace Mini Dress.webp" },
  { title: "Top Plaid Skirt Set", img: "/Images/top-plaid-skirt-set.webp" },
  { title: "Sheer Backseam Stocking", img: "/Images/sheer-backseam-stocking.webp" },
  { title: "Lace Top Net Cuban Heel Garter", img: "/Images/lace-top-net-cuban.webp" },
  { title: "Fuck Sauce Water Base Lube", img: "/Images/Fuck Sauce.webp" }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [featuredList] = useState(() => shuffleArray(originalList));
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const itemsToShow = isMobile ? 4 : 4;

  const handlePrev = () => {
    setIndex((prevIndex) =>
      (prevIndex - itemsToShow + featuredList.length) % featuredList.length
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + itemsToShow) % featuredList.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const autoplay = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + itemsToShow) % featuredList.length);
    }, 4000);
    return () => clearInterval(autoplay);
  }, [itemsToShow, isHovered, featuredList.length]);

  const visibleItems = useMemo(() => (
    featuredList
      .slice(index, index + itemsToShow)
      .concat(
        index + itemsToShow > featuredList.length
          ? featuredList.slice(0, (index + itemsToShow) % featuredList.length)
          : []
      )
  ), [index, itemsToShow, featuredList]);

  const handleTouchStart = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (handleTouchStart.current === null) return;
    const deltaX = e.changedTouches[0].clientX - handleTouchStart.current;
    if (deltaX > 50) handlePrev();
    else if (deltaX < -50) handleNext();
    handleTouchStart.current = null;
  };

  return (
    <section className="py-20 px-4 sm:px-6">
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <h2
        className="text-5xl font-light text-center mb-10 text-pink-500 neon-glow"
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        Trending Now
      </h2>
      <div
        className="flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        ref={carouselRef}
      >
        <div className="flex flex-wrap justify-center gap-4 max-w-screen-xl px-2 sm:px-0">
          {visibleItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-[45vw] sm:w-[250px]"
            >
              <Card className="w-full h-[350px] transition-transform hover:scale-105">
                <CardContent className="p-4 flex flex-col justify-between items-center h-full">
                  <div className="flex flex-col items-center w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="rounded-md mb-4 w-full object-contain h-48"
                      width={200}
                      height={133}
                      sizes="(max-width: 768px) 50vw, 250px"
                      loading="lazy"
                    />
                    <p className="font-medium text-center text-sm mb-2 h-10 leading-tight overflow-hidden">
                      {item.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 gap-4">
        <button onClick={handlePrev} aria-label="Previous">
          <ChevronLeft className="w-8 h-8 text-white hover:text-pink-400" />
        </button>
        <button onClick={handleNext} aria-label="Next">
          <ChevronRight className="w-8 h-8 text-white hover:text-pink-400" />
        </button>
      </div>
    </section>
  );
}