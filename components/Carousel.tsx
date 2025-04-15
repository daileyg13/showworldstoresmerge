'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedItem {
  title: string;
  img: string;
  link: string;
}

const featuredList: FeaturedItem[] = [
  {
    title: "Pecker Cake Pan - 10in",
    img: "/Images/Pecker Cake Pan.png",
    link: "http://www.shopshowworld.com/bp-10in-pecker-cake-pan-144-p3195.html",
  },
  {
    title: "INMI Bloomgasm Rose - Purple",
    img: "/Images/Purple Rose.PNG",
    link: "http://shopshowworld.com/inmi-bloomgasm-rose-purple-p67038.html",
  },
  {
    title: "PDX Interactive Bad Girl 69",
    img: "/Images/Dirty Talk.png",
    link: "http://shopshowworld.com/pdx-interactive-bad-girl-69-p53862.html",
  },
  {
    title: "ZOLO Upstroke 69",
    img: "/Images/Zolo.PNG",
    link: "http://shopshowworld.com/zolo-upstroke-69-p81402.html",
  },
  {
    title: "Bodywand Recharge Pulse - Black 2.3",
    img: "/Images/Body Wand.PNG",
    link: "http://shopshowworld.com/bodywand-recharge-pulse-black-23-p33039.html",
  },
  {
    title: "INYA The Rose - Red",
    img: "/Images/Red Rose.PNG",
    link: "http://shopshowworld.com/inya-the-rose-red-p65371.html",
  },
  {
    title: "We-Vibe Chorus - Cosmic Blue",
    img: "/Images/WE Vibe Chorus.PNG",
    link: "http://shopshowworld.com/we-vibe-chorus-cosmic-blue-p66618.html",
  },
  {
    title: "Perfection G-Spot - Pink 2.3",
    img: "/Images/Perfection G-spot.PNG",
    link: "http://shopshowworld.com/perfection-g-spot-pink-23-p38398.html",
  },
  {
    title: "Thrusting Jack Rabbit - Purple 2.3",
    img: "/Images/Jack Rabbit Thrusting.PNG",
    link: "http://shopshowworld.com/thrusting-jack-rabbit-purple-23-p24722.html",
  },
  {
    title: "GITD Rainbow Naughty Straws - 6pk",
    img: "/Images/Rainbow Naughty Straws.PNG",
    link: "http://www.shopshowworld.com/gitd-rainbow-naughty-straws-6pk-144-p54076.html",
  },
  {
    title: "Lace Mini Dress - Plus",
    img: "/Images/Lace Mini Dress.png",
    link: "http://www.shopshowworld.com/lace-mini-dress-plus-1405-p2007668.html",
  },
  {
    title: "Top Plaid Skirt Set - One Size",
    img: "/Images/top-plaid-skirt-set.png",
    link: "http://www.shopshowworld.com/top-plaid-skirt-set-one-size-1465-p2009349.html",
  },
  {
    title: "Sheer Backseam Stocking - Plus Black",
    img: "/Images/sheer-backseam-stocking.PNG",
    link: "http://www.shopshowworld.com/sheer-backseam-stocking-plus-black-p63733.html",
  },
  {
    title: "Lace Top Net Cuban Heel Garter - OS Black",
    img: "/Images/lace-top-net-cuban.PNG",
    link: "http://www.shopshowworld.com/lace-top-net-cuban-heel-garter-os-black-p63752.html",
  },
  {
    title: "Fuck Sauce Water Base Lube",
    img: "/Images/Fuck Sauce.png",
    link: "http://www.shopshowworld.com/fuck-sauce-water-base-lube-p66356.html",
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const itemsToShow = 4;

  const handlePrev = () => {
    setIndex((prevIndex) =>
      (prevIndex - itemsToShow + featuredList.length) % featuredList.length
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + itemsToShow) % featuredList.length);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + itemsToShow) % featuredList.length);
    }, 4000);
    return () => clearInterval(autoplay);
  }, []);

  const visibleItems = featuredList
    .slice(index, index + itemsToShow)
    .concat(
      index + itemsToShow > featuredList.length
        ? featuredList.slice(0, (index + itemsToShow) % featuredList.length)
        : []
    );

  return (
    <section className="py-20 px-6">
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
      <div className="flex justify-center items-center">
        <div className="flex gap-4">
          {visibleItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-[250px]"
            >
              <Card className="w-full h-[350px] transition-transform hover:scale-105">
                <CardContent className="p-4 flex flex-col justify-between items-center h-full">
                  <div className="flex flex-col items-center w-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-md mb-4 w-full object-contain h-48"
                    />
                    <p className="font-medium text-center text-sm mb-2 h-10 leading-tight overflow-hidden">
                      {item.title}
                    </p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full">View Product</Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 gap-4">
        <button onClick={handlePrev}>
          <ChevronLeft className="w-8 h-8 text-white hover:text-pink-400" />
        </button>
        <button onClick={handleNext}>
          <ChevronRight className="w-8 h-8 text-white hover:text-pink-400" />
        </button>
      </div>
    </section>
  );
}
