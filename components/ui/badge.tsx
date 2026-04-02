import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground border-transparent',
        secondary: 'bg-secondary text-secondary-foreground border-transparent',
        success: 'bg-emerald-600 text-white border-transparent',
        warning: 'bg-amber-500 text-amber-950 border-transparent',
        info: 'bg-sky-600 text-white border-transparent',
        destructive: 'bg-destructive text-destructive-foreground border-transparent',
        mono: 'bg-zinc-900 text-zinc-100 border-transparent dark:bg-zinc-100 dark:text-zinc-900',
      },
      appearance: {
        solid: '',
        stroke: 'bg-transparent text-foreground border-border',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      appearance: 'solid',
    },
    compoundVariants: [
      {
        appearance: 'stroke',
        className: 'bg-transparent text-foreground border-border',
      },
    ],
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, appearance, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, appearance }), className)} {...props} />
}
