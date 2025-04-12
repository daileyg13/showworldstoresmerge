import { Card, CardContent } from "../components/ui/card"
import NavBar from "@/components/NavBar"
import Carousel from "@/components/Carousel"

export default function HomePage() {
  const categories = [
    { title: "Lingerie", img: "/Images/Lingerie.png" },
    { title: "Smoke Shop", img: "/Images/Smoke Shop.png" },
    { title: "Adult Toys", img: "/Images/Adult Toys.png" }
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <NavBar />
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-zinc-900 to-zinc-800 px-4 mt-24 sm:mt-32">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
    {categories.map(({ title, img }) => (
      <Card key={title} className="w-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <img
            src={img}
            alt={title}
            className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
            style={{ animationDelay: `${Math.random() * 5}s` }}
          />
          <p className="text-2xl font-bold">{title}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
      <Carousel />
      <footer className="bg-zinc-950 py-6 text-center text-sm text-zinc-400">
        <div className="flex flex-col items-center gap-2">
          <img src="/Images/ShowWorld girl pink.png" alt="Show World Logo" className="h-6" />
          <p>&copy; 2025 Show World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

///npm run dev
