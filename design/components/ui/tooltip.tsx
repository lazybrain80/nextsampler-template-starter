'use client'

import React, { forwardRef } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/libs/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipPortal = TooltipPrimitive.Portal

const TooltipContent = forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, align = 'center', ...props }, ref) => {
  const combinedClassName = cn(
    'z-99999 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50',
    'data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1',
    'data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
    className
  )

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={combinedClassName}
      {...props}
    />
  )
})
TooltipContent.displayName = TooltipPrimitive.Content.displayName

const TooltipArrow = forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => {
  const combinedClassName = cn('fill-white shadow-md', className)

  return <TooltipPrimitive.Arrow ref={ref} className={combinedClassName} {...props} />
})
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipPortal, TooltipProvider, TooltipArrow }
