import StorePageLayout from "@/components/StorePageLayout";

export default function GreeceStore() {
  return (
    <StorePageLayout
      title="Show World - Greece"
      description="Visit our Greece location for the full Show World experience!"
      address={`1765 Mt Reed Blvd\nRochester, NY 14606`}
      mapLink="https://www.google.com/maps/dir/?api=1&destination=1765+Mt+Reed+Blvd+Rochester+NY+14615"
      phone="(585) 254-0600"
    />
  );
}
