import StorePageLayout from "@/components/StorePageLayout";

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
