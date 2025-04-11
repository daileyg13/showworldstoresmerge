import * as React from "react"

export function Button({ children, className, asChild = false }: { children: React.ReactNode, className?: string, asChild?: boolean }) {
  const Comp: any = asChild ? 'a' : 'button';
  return <Comp className={`inline-flex items-center justify-center rounded-md bg-pink-600 text-white hover:bg-pink-700 px-4 py-2 text-sm font-medium ${className}`}>{children}</Comp>
}
