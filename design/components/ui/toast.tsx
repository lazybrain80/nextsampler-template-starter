import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { VariantProps, cva } from 'class-variance-authority'
import { TwitterX } from '@/design/icons'

import { cn } from '@/libs/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & {
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  }
>(({ className, position = 'bottom-right', ...props }, ref) => {
  const positionClasses = {
    'bottom-right': 'bottom-0 right-0 flex-col gap-2 p-4',
    'bottom-left': 'bottom-0 left-0 flex-col gap-2 p-4',
    'top-right': 'top-0 right-0 flex-col-reverse gap-2 p-4',
    'top-left': 'top-0 left-0 flex-col-reverse gap-2 p-4',
  }
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        'flex fixed z-100',
        `${positionClasses[position as keyof typeof positionClasses]} outline-hidden`,
        className
      )}
      {...props}
    />
  )
})
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva('flex justify-between items-center shadow-lg rounded-lg', {
  variants: {
    type: {
      default: 'bg-white',
      success: 'bg-green-100',
      error: 'bg-red-100',
    },
    position: {
      right: 'data-[state=closed]:slide-out-to-right-full',
      left: 'data-[state=closed]:slide-out-to-left-full',
    },
    animation: {
      basic: 'p-4 w-84 outline-hidden focus-visible:ring-2 focus-visible:ring-mauveA12',
      primary:
        'w-full space-x-4 overflow-hidden border p-6 pr-8 data-[swipe=move]:transition-none group relative pointer-events-auto transition-all data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full',
    },
  },
  defaultVariants: {
    type: 'default',
    animation: 'basic',
  },
})

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, animation, position = 'right', type, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        toastVariants({
          animation,
          type,
          position: position?.includes('right') ? 'right' : 'left',
        }),
        className
      )}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground focus:group-[.destructive]:ring-destructive',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600',
      className
    )}
    toast-close=""
    {...props}
  >
    <TwitterX className="size-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
