import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/libs/utils'

const badgeVariants = cva(
  'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
        secondary:
          'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
        destructive: 'bg-amber-500 hover:bg-amber-500/80 border-transparent text-white',
        outline: 'text-foreground',
        // 새로운 variant 추가
        success: 'bg-green-500 hover:bg-green-600 border-transparent text-white',
        danger: 'bg-red-500 hover:bg-red-600 border-transparent text-white',
        info: 'bg-blue-500 hover:bg-blue-600 border-transparent text-white',
        warning: 'bg-orange-500 hover:bg-orange-600 border-transparent text-white',
        light: 'bg-light hover:bg-light/80 border-transparent text-light-foreground',
        dark: 'bg-dark hover:bg-dark/80 border-transparent text-dark-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode // icon prop 추가
}

function Badge({ className, variant, icon, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && <span className="mr-2">{icon}</span>} {/* icon이 있을 경우 렌더링 */}
      {props.children}
    </div>
  )
}

export { Badge, badgeVariants }
