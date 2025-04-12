import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeaturedItem {
  title: string
  img: string
  link: string
}

export default function Carousel() {
  const featuredList: FeaturedItem[] = [
    {
      title: "INMI Bloomgasm Rose - Purple",
      img: "/Images/Purple Rose.PNG",
      link: "http://shopshowworld.com/inmi-bloomgasm-rose-purple-p67038.html"
    },
    {
      title: "PDX Interactive Bad Girl 69",
      img: "/Images/Dirty Talk.png",
      link: "http://shopshowworld.com/pdx-interactive-bad-girl-69-p53862.html"
    },
    {
      title: "ZOLO Upstroke 69",
      img: "/Images/Zolo.PNG",
      link: "http://shopshowworld.com/zolo-upstroke-69-p81402.html"
    },
    {
      title: "Bodywand Recharge Pulse - Black 2.3",
      img: "/Images/Body Wand.PNG",
      link: "http://shopshowworld.com/bodywand-recharge-pulse-black-23-p33039.html"
    },
    {
      title: "INYA The Rose - Red",
      img: "/Images/Red Rose.PNG",
      link: "http://shopshowworld.com/inya-the-rose-red-p65371.html"
    },
    {
      title: "We-Vibe Chorus - Cosmic Blue",
      img: "/Images/We Vibe Chorus.PNG",
      link: "http://shopshowworld.com/we-vibe-chorus-cosmic-blue-p66618.html"
    },
    {
      title: "Perfection G-Spot - Pink 2.3",
      img: "/Images/Perfection G-spot.PNG",
      link: "http://shopshowworld.com/perfection-g-spot-pink-23-p38398.html"
    },
    {
      title: "Thrusting Jack Rabbit - Purple 2.3",
      img: "/Images/Jack Rabbit Thrusting.PNG",
      link: "http://shopshowworld.com/thrusting-jack-rabbit-purple-23-p24722.html"
    },
    {
      title: "Dicky Sipping Straws - 10pk",
      img: "/Images/Dicky Sipping Straws.PNG",
      link: "http://shopshowworld.com/bp-dicky-sipping-straws-10pk-144-p3181.html"
    }
  ];
  const featured = [...featuredList].sort(() => Math.random() - 0.5);

  return (
    <section className="py-20 px-6">
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <h2 className="text-5xl font-light text-center mb-10 text-pink-500 neon-glow" style={{ fontFamily: 'Pacifico, cursive' }}>
        Trending Now
      </h2>
      <div className="relative overflow-visible py-8">
        <div className="flex animate-carousel gap-6 w-max overflow-visible py-4">
          {featured.map(({ title, img, link }, index) => (
            <Card
              key={title}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-105 z-10"
            >
              <div style={{ animationDelay: `${index * 2}s` }}>
                <CardContent className="p-4 flex flex-col items-center">
                  <img
                    src={img}
                    alt={title}
                    className="rounded-md mb-4 w-full object-contain h-48"
                  />
                  <p className="font-medium text-center text-sm mb-2">{title}</p>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button>View Product</Button>
                  </a>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
