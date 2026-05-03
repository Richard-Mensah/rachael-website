import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: Props) {
  return (
    <p className={cn('text-xs font-bold uppercase tracking-widest text-brand-gold', className)}>
      {children}
    </p>
  )
}
