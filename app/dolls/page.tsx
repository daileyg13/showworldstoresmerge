// app/dolls/page.tsx
import DollPageLayout from "@/components/DollPageLayout";

const dolls = [
  "/Images/Dolls/doll_1_optimized.webp",
  "/Images/Dolls/doll_2_optimized.webp",
  "/Images/Dolls/doll_3_optimized.webp",
  "/Images/Dolls/doll_4_optimized.webp",
  "/Images/Dolls/doll_5_optimized.webp",
  "/Images/Dolls/doll_6_optimized.webp",
];

export default function DollsPage() {
  return (
    <DollPageLayout>
      <h1 className="text-pink-400 text-2xl md:text-3xl font-bold mb-12 text-center">
        Available Dolls: <span className="text-white font-normal">Hannah, Nina, Goldie, Bella, Amber and Lola</span> in stock!
      </h1>

      <div className="flex flex-col gap-12 items-center">
        {dolls.map((imgSrc, index) => (
          <div
            key={index}
            className="max-w-4xl w-full bg-zinc-900 p-6 rounded-lg shadow-md"
          >
            <img
              src={imgSrc}
              alt={`Doll ${index + 1}`}
              className="w-full h-auto rounded-md border border-zinc-700"
            />
          </div>
        ))}
      </div>
    </DollPageLayout>
  );
}
