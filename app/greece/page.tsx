import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function GreeceStore() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      <NavBar />

      <main className="pt-32 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-pink-500">
          Show World - Greece
        </h1>
        <p className="mb-4 text-lg sm:text-xl">
          Visit our Greece location for the full Show World experience!
        </p>

        {/* Open 24/7 - Neon Styled */}
        <h2
          className="text-5xl font-light text-center mb-10 text-blue-400 neon-glow"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Open 24/7
        </h2>

        {/* Address & Call-to-Action */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-32">
          <div className="text-center">
            <p className="text-sm mb-2">Address:</p>
            <p className="text-sm leading-tight">
              1765 Mt Reed Blvd<br />
              Rochester, NY 14615
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1765+Mt+Reed+Blvd+Rochester+NY+14615"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">
                Get Directions
              </Button>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm mb-2">Phone: (585) 254-0600</p>
            <a href="tel:+15852540600">
              <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Carousel />
      <Footer />
    </div>
  );
}
