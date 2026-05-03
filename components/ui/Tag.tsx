import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  variant?: 'navy' | 'purple' | 'gold'
  className?: string
}

export default function Tag({ children, variant = 'navy', className }: Props) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
        variant === 'navy' && 'bg-brand-navy/10 text-brand-navy',
        variant === 'purple' && 'bg-brand-purple/10 text-brand-purple',
        variant === 'gold' && 'bg-brand-gold/10 text-brand-gold',
        className
      )}
    >
      {children}
    </span>
  )
}
