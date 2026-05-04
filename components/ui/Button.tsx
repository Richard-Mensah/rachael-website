import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' && 'bg-brand-gold text-white hover:bg-brand-gold/80',
        variant === 'secondary' && 'border border-white/40 text-white hover:bg-white/10',
        className
      )}
    >
      {children}
    </button>
  )
}
