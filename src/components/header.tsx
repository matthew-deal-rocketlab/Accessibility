import { cn } from '@/lib/utils'

const header = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const

export type Header = (typeof header)[keyof typeof header]

type HeaderProps = {
  level: Header
  text: string
  variant?: 'large' | 'medium' | 'small'
  className?: string
}

export default function HeaderTag({
  level,
  text,
  variant = 'large',
  className = '',
}: HeaderProps) {
  const HeaderTag = level as keyof JSX.IntrinsicElements

  // Determine the classNames based on the variant using cn
  const variantClassNames = cn(
    {
      'text-2xl font-bold': variant === 'large',
      'text-xl font-semibold': variant === 'medium',
      'text-lg': variant === 'small',
    },
    className,
  )

  return <HeaderTag className={variantClassNames}>{text}</HeaderTag>
}
