import React, { useMemo } from 'react'
import { cn } from '@/utils/cn'

const justifyStyleMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  even: 'justify-evenly',
} as const

export const FlexJustify = {
  start: 'start',
  center: 'center',
  end: 'end',
  between: 'between',
  around: 'around',
  even: 'even',
} as const

export type TFlexJustify = keyof typeof FlexJustify

const alignStyleMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
} as const

export const FlexAlign = {
  start: 'start',
  center: 'center',
  end: 'end',
} as const

export type TFlexAlign = keyof typeof FlexAlign

const getGapClass = (gap: FlexProps['gap']) => {
  if (gap === 'small') return 'gap-2'
  if (gap === 'medium') return 'gap-4'
  if (gap === 'large') return 'gap-8'
  return ''
}

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: TFlexJustify
  align?: TFlexAlign
  direction?: 'row' | 'column'
  gap?: number | 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      justify = 'start',
      align = 'start',
      direction = 'row',
      gap,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const flexClasses = useMemo(
      () =>
        cn(
          'flex',
          direction === 'row' ? 'flex-row' : 'flex-col',
          justifyStyleMap[justify],
          alignStyleMap[align],
          getGapClass(gap),
          'overflow-hidden',
          className
        ),
      [justify, align, direction, gap, className]
    )
    // Handle gap as a number or string
    const style = useMemo(
      () => (typeof gap === 'number' ? { gap: `${gap}px`, ...props.style } : props.style),
      [gap, props.style]
    )

    return (
      <div ref={ref} className={flexClasses} style={style} {...props}>
        {children}
      </div>
    )
  }
)

Flex.displayName = 'Flex'
