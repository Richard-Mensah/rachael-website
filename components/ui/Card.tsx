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
        'rounded-xl bg-brand-off-white p-5',
        topBorder && 'border-t-4 border-brand-purple',
        className
      )}
    >
      {children}
    </div>
  )
}
