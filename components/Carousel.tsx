'use client';

import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedItem {
  title: string;
  img: string;
  link: string;
}

export default function Carousel() {
  const featuredList: FeaturedItem[] = [
    {
      title: 'Pecker Cake Pan - 10in',
      img: '/Images/Pecker Cake Pan.png',
      link: 'http://www.shopshowworld.com/bp-10in-pecker-cake-pan-144-p3195.html',
    },
    {
      title: 'INMI Bloomgasm Rose - Purple',
      img: '/Images/Purple Rose.PNG',
      link: 'http://shopshowworld.com/inmi-bloomgasm-rose-purple-p67038.html',
    },
    {
      title: 'PDX Interactive Bad Girl 69',
      img: '/Images/Dirty Talk.png',
      link: 'http://shopshowworld.com/pdx-interactive-bad-girl-69-p53862.html',
    },
    {
      title: 'ZOLO Upstroke 69',
      img: '/Images/Zolo.PNG',
      link: 'http://shopshowworld.com/zolo-upstroke-69-p81402.html',
    },
    {
      title: 'Bodywand Recharge Pulse - Black 2.3',
      img: '/Images/Body Wand.PNG',
      link: 'http://shopshowworld.com/bodywand-recharge-pulse-black-23-p33039.html',
    },
    {
      title: 'INYA The Rose - Red',
      img: '/Images/Red Rose.PNG',
      link: 'http://shopshowworld.com/inya-the-rose-red-p65371.html',
    },
    {
      title: 'We-Vibe Chorus - Cosmic Blue',
      img: '/Images/WE Vibe Chorus.PNG',
      link: 'http://shopshowworld.com/we-vibe-chorus-cosmic-blue-p66618.html',
    },
    {
      title: 'Perfection G-Spot - Pink 2.3',
      img: '/Images/Perfection G-spot.PNG',
      link: 'http://shopshowworld.com/perfection-g-spot-pink-23-p38398.html',
    },
    {
      title: 'Thrusting Jack Rabbit - Purple 2.3',
      img: '/Images/Jack Rabbit Thrusting.PNG',
      link: 'http://shopshowworld.com/thrusting-jack-rabbit-purple-23-p24722.html',
    },
    {
      title: 'GITD Rainbow Naughty Straws - 6pk',
      img: '/Images/Rainbow Naughty Straws.PNG',
      link: 'http://www.shopshowworld.com/gitd-rainbow-naughty-straws-6pk-144-p54076.html',
    },
    {
      title: 'Lace Mini Dress - Plus',
      img: '/Images/Lace Mini Dress.png',
      link: 'http://www.shopshowworld.com/lace-mini-dress-plus-1405-p2007668.html',
    },
    {
      title: 'Top Plaid Skirt Set - One Size',
      img: '/Images/top-plaid-skirt-set.png',
      link: 'http://www.shopshowworld.com/top-plaid-skirt-set-one-size-1465-p2009349.html',
    },
    {
      title: 'Sheer Backseam Stocking - Plus Black',
      img: '/Images/sheer-backseam-stocking.PNG',
      link: 'http://www.shopshowworld.com/sheer-backseam-stocking-plus-black-p63733.html',
    },
    {
      title: 'Lace Top Net Cuban Heel Garter - OS Black',
      img: '/Images/lace-top-net-cuban.PNG',
      link: 'http://www.shopshowworld.com/lace-top-net-cuban-heel-garter-os-black-p63752.html',
    },
    {
      title: 'Fuck Sauce Water Base Lube',
      img: '/Images/Fuck Sauce.png',
      link: 'http://www.shopshowworld.com/fuck-sauce-water-base-lube-p66356.html',
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = 270; // Width of card + gap

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  };

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

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full hidden group-hover:block"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Scrollable carousel */}
        <div
          ref={carouselRef}
          className="flex animate-carousel gap-6 w-max overflow-x-auto scroll-smooth py-4 px-2 scrollbar-hide"
        >
          {featuredList.map(({ title, img, link }) => (
            <Card
              key={title}
              className="min-w-[250px] max-w-[250px] h-[350px] flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-105 z-10"
            >
              <CardContent className="p-4 flex flex-col justify-between items-center h-full">
                <div className="flex flex-col items-center w-full">
                  <img
                    src={img}
                    alt={title}
                    className="rounded-md mb-4 w-full object-contain h-48"
                  />
                  <p className="font-medium text-center text-sm mb-2 h-10 leading-tight overflow-hidden">
                    {title}
                  </p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">View Product</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full hidden group-hover:block"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
