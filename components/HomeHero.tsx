'use client';

import { useMemo } from 'react';
import { Card, CardContent } from '../components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Lingerie',
    img: '/Images/Lingerie.webp',
    link: 'http://www.shopshowworld.com/c.html?c=79&b=Most+Recent',
  },
  {
    title: 'Smoke Shop',
    img: '/Images/Smoke Shop.webp',
    link: '/smokeshop',
  },
  {
    title: 'Adult Toys',
    img: '/Images/Adult Toys.webp',
    link: 'http://www.shopshowworld.com/c.html?b=Most+Popular',
  },
];

export default function HomeHero() {
  const delays = useMemo(
    () => categories.map(() => `${Math.random() * 5}s`),
    []
  );

  return (
    <section className="pt-32 sm:pt-40 lg:pt-52 px-4 pb-16 text-center bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {categories.map(({ title, img, link }, index) => (
          <Card key={title} className="w-full bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              {link ? (
                title === 'Smoke Shop' ? (
                  <Link href={link}>
                    <Image
                      src={img}
                      alt={title}
                      width={250}
                      height={167}
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="rounded-lg mb-4 w-full object-cover h-60 neon-glow"
                      style={{ animationDelay: delays[index] }}
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={img}
                      alt={title}
                      width={250}
                      height={167}
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="rounded-lg mb-4 w-full object-cover h-60 neon-glow"
                      style={{ animationDelay: delays[index] }}
                      priority={index === 0}
                    />
                  </a>
                )
              ) : (
                <Image
                  src={img}
                  alt={title}
                  width={250}
                  height={167}
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="rounded-lg mb-4 w-full object-cover h-60 neon-glow"
                  style={{ animationDelay: delays[index] }}
                  loading="lazy"
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
