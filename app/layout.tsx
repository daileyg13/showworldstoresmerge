// app/layout.tsx
import '../styles/globals.css'
import type { Metadata } from 'next'
import ClientSpeedInsights from './ClientSpeedInsights'

export const metadata: Metadata = {
  title: 'Show World',
  description: 'Pleasure, fashion & fantasy lifestyle gear',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <ClientSpeedInsights />
      </body>
    </html>
  )
}
