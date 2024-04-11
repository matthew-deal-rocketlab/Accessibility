import { cn } from '@/lib/utils'
import Link from 'next/link'

type LinkType = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function LinkButton({ href, children, className }: LinkType) {
  return (
    <Link
      href={href}
      className={cn(
        'h-fit w-fit rounded-lg border-2 border-white px-4 py-2',
        'focus:outline-none focus:ring-2 focus:ring-white',
        className,
      )}>
      {children}
    </Link>
  )
}
