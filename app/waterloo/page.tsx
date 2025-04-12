import StorePageLayout from "@/components/StorePageLayout";

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
