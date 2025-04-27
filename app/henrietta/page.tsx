import StorePageLayout from "@/components/StorePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show World Henrietta NY | 24/7 Adult Store & Smoke Shop",
  description: "Show World Henrietta offers adult toys, lingerie, and smoke accessories around the clock. Rochester’s go-to boutique for pleasure and fantasy!",
};

export default function HenriettaStore() {
  return (
    <StorePageLayout
      title="Show World - Henrietta"
      description="Visit our Henrietta location for the full Show World experience!"
      address={`1167 Brighton-Henrietta Townline Rd\nRochester, NY 14623`}
      mapLink="https://www.google.com/maps/dir/?api=1&destination=1167+Brighton-Henrietta+Townline+Rd+Rochester+NY+14623"
      phone="(585) 424-2580"
    />
  );
}
