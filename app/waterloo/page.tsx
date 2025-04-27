import StorePageLayout from "@/components/StorePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show World Waterloo NY | Adult Store & Lingerie Boutique",
  description: "Stop by Show World in Waterloo, NY for adult products, lingerie, and smoking gear. Open 24/7 to fuel your pleasure and lifestyle needs!"
}
export default function WaterlooStore() {
  return (
    <StorePageLayout
      title="Show World - Waterloo"
      description="Visit our Waterloo location for the full Show World experience!"
      address={`1490 Ninefoot Road\nWaterloo, NY 13165`}
      mapLink="https://www.google.com/maps/dir/?api=1&destination=1490+Ninefoot+Road+Waterloo+NY+13165"
      phone="(315) 539-5466"
    />
  );
}
