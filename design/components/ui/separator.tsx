'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/libs/utils'

interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  variant?: 'dashed' | 'dotted' | 'solid'
  innerText?: React.ReactNode
  innerPosition?: 'start' | 'center' | 'end'
}

const variantClassMap = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
} as const

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      variant = 'solid',
      innerText,
      innerPosition = 'center',
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal'
    const orientationClass = isHorizontal
      ? 'w-full h-0 border-t border-border'
      : 'h-full w-0 border-l border-border'
    const variantClass = variantClassMap[variant] || variantClassMap.solid

    // if innerText is provided, we need to adjust the separator and text position
    if (isHorizontal && innerText) {
      let justify = 'justify-center'
      if (innerPosition === 'start') justify = 'justify-start'
      if (innerPosition === 'end') justify = 'justify-end'
      return (
        <div className={cn('relative flex items-center w-full', justify, className)}>
          <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn('flex-1 shrink-0', orientationClass, variantClass)}
            {...props}
          />
          <span
            className={cn(
              'whitespace-nowrap text-xs text-muted-foreground bg-white px-2 absolute',
              innerPosition === 'center' && 'left-1/2 -translate-x-1/2',
              innerPosition === 'start' && 'left-0 -translate-x-0',
              innerPosition === 'end' && 'right-0 translate-x-0'
            )}
          >
            {innerText}
          </span>
        </div>
      )
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn('shrink-0', orientationClass, variantClass, className)}
        {...props}
      />
    )
  }
)

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
