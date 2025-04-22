import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Show World',
  description: 'Pleasure, fashion & fantasy lifestyle gear',
  icons: {
    icon: '/favicon.ico',       // primary favicon
    shortcut: '/favicon.ico',   // fallback for older browsers
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}