import { Button } from "@/components/ui/button"
import NavBar from "@/components/NavBar"
import Carousel from "@/components/Carousel"

<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

export default function WaterlooStore() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      <NavBar />

      <main className="pt-32 text-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-pink-500">Show World - Waterloo</h1>
        <p className="mb-4 text-lg">Visit our Waterloo location for the full Show World experience!</p>
        <h2 className="text-5xl font-light text-center mb-10 text-blue-400 neon-glow" style={{ fontFamily: 'Pacifico, cursive' }}>Open 24/7</h2>
        <div className="flex flex-col md:flex-row justify-center items-end gap-32">
          <div className="text-center">
            <p className="text-sm mb-2">Address:</p>
            <p className="text-sm leading-tight">1490 Ninefoot Road<br />Waterloo, NY 13165</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=1490+Ninefoot+Road+Waterloo+NY+13165" target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">Get Directions</Button>
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">Phone: (315) 539-5466</p>
            <a href="tel:+13155395466">
              <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">Call Us</Button>
            </a>
          </div>
        </div>
      </main>

      <section className="py-20 px-6">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <h2 className="text-5xl font-light text-center mb-10 text-pink-500 neon-glow" style={{ fontFamily: 'Pacifico, cursive' }}>
          Trending Now
        </h2>
        <Carousel />
      </section>

      <footer className="bg-zinc-950 py-6 text-center text-sm text-zinc-400 mt-20">
        <div className="flex flex-col items-center gap-2">
          <img src="/Images/ShowWorld girl pink.png" alt="Show World Logo" className="h-6" />
          <p>&copy; 2025 Show World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
