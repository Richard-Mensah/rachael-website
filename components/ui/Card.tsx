import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  topBorder?: boolean
}

export default function Card({ children, className, topBorder = false }: Props) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md',
        topBorder && 'border-t-4 border-brand-gold',
        className
      )}
    >
      {children}
    </div>
  )
}
