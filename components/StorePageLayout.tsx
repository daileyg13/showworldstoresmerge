// components/StorePageLayout.tsx
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { Button } from "./ui/button";

interface StorePageLayoutProps {
  title: string;
  description: string;
  address: string;
  mapLink: string;
  phone: string;
  children?: React.ReactNode;
}

export default function StorePageLayout({
  title,
  description,
  address,
  mapLink,
  phone,
  children,
}: StorePageLayoutProps) {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      <NavBar />

      <main className="pt-32 sm:pt-40 lg:pt-52 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-pink-500">
          {title}
        </h1>
        <p className="mb-4 text-lg sm:text-xl">{description}</p>

        <h2
          className="text-5xl font-light text-center mb-10 text-blue-400 neon-glow"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Open 24/7
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-32">
          <div className="text-center">
            <p className="text-sm mb-2">Address:</p>
            <p className="text-sm leading-tight whitespace-pre-line">{address}</p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">
                Get Directions
              </Button>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm mb-2">Phone: {phone}</p>
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
              <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">
                Call Us
              </Button>
            </a>
          </div>
        </div>

        {children}
      </main>

      <Carousel />
      <Footer />
    </div>
  );
}
