import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/libs/utils'
import * as Icons from '@/design/icons'

const alertVariants = cva('w-full rounded-xl border p-2', {
  variants: {
    variant: {
      default: 'bg-blue-400 text-blue-400',
      success: 'bg-green-400 text-green-400',
      error: 'bg-red-400 text-red-400',
      warning: 'bg-orange-400 text-orange-400',
    },
    type: {
      fill: 'text-white border-0',
      outline: 'bg-transparent border-2 border-current',
    },
  },
  defaultVariants: {
    variant: 'default',
    type: 'fill',
  },
})

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, type, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, type }), 'flex items-center', className)}
    {...props}
  >
    {variant === 'error' ? (
      <Icons.CircleAlert className="w-6 h-6 mr-4" />
    ) : variant === 'warning' ? (
      <Icons.TriangleAlert className="w-6 h-6 mr-4" />
    ) : variant === 'success' ? (
      <Icons.CircleCheckBig className="w-6 h-6 mr-4" />
    ) : (
      <Icons.BadgeInfo className="w-6 h-6 mr-4" />
    )}
    <div>{props.children}</div>
  </div>
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('font-bold', className)} {...props}>
      {props.children}
    </h5>
  )
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
