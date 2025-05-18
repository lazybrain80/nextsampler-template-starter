import React from 'react'
import { cn } from '@/utils/cn'

interface TextGradientProps {
  className?: string
  text: string
}

function AnimatedGradientText({ className, text = '' }: TextGradientProps) {
  return (
    <span
      className={cn(
        `bg-linear-to-r from-orange-700 via-blue-500 to-green-500 text-transparent bg-clip-text bgsize-300 animate-gradient`,
        className
      )}
    >
      {text}
    </span>
  )
}

export { AnimatedGradientText }
