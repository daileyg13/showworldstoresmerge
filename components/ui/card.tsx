import * as React from "react"

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`rounded-lg border bg-zinc-900 text-white shadow-sm ${className}`}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
