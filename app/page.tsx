import { Card, CardContent } from "../components/ui/card";
import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function HomePage() {
  const categories = [
    { title: "Lingerie", img: "/Images/Lingerie.png" },
    { title: "Smoke Shop", img: "/Images/Smoke Shop.png" },
    { title: "Adult Toys", img: "/Images/Adult Toys.png" },
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 px-4 pb-16 text-center bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {categories.map(({ title, img }) => (
            <Card key={title} className="w-full bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={img}
                  alt={title}
                  className="rounded-lg mb-4 w-full object-cover h-80 neon-glow"
                  style={{ animationDelay: `${Math.random() * 5}s` }}
                />
                <p className="text-2xl font-bold text-white">{title}</p>
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
