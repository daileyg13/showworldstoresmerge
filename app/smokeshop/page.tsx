// app/smokeshop/page.tsx
import SmokeShopPage from '@/components/SmokeShopPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Show World Smoke Shop | Pipes, Vapes & Smoking Accessories",
  description: "Explore premium pipes, vapes, rolling papers, and smoking accessories at Show World’s Smoke Shop. Top brands, 24/7 head shop shopping, all in one place!",
};

export default function SmokeShop() {
  return <SmokeShopPage />;
}