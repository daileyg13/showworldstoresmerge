import type { ReactNode } from "react";
import type { Metadata } from "next";
import "../styles/globals.css";

// TEMP: comment these out
// import ClientSpeedInsights from "./ClientSpeedInsights";
// import ClientAnalytics from "./ClientAnalytics";

export const metadata: Metadata = {
  title: "Show World | 24/7 Adult Boutique and Smoke Shop",
  description:
    "Discover Rochester’s 24/7 destination for lingerie, adult toys, smoking accessories, and more. Visit us in Greece, Henrietta, and Waterloo!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <ClientSpeedInsights />
        <ClientAnalytics /> */}
      </body>
    </html>
  );
}
