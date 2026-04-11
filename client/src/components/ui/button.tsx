import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-cncf-blue text-white hover:bg-cncf-navy-mid focus-visible:outline-cncf-teal',
        outline:
          'border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline-white',
        secondary:
          'bg-lucknow-gold text-cncf-navy hover:bg-lucknow-gold-dim focus-visible:outline-lucknow-gold-dim',
        ghost:
          'text-cncf-navy hover:bg-slate-100 focus-visible:outline-cncf-blue',
        link: 'text-cncf-blue underline-offset-4 hover:underline focus-visible:outline-cncf-blue',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
