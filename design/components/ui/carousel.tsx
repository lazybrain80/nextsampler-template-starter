'use client'

import React from 'react'
import { useSnapCarousel } from 'react-snap-carousel'
import { cn } from '@/utils/cn'
import * as Icons from '@/design/icons'
import { Button } from './button'

interface CarouselProps<T> {
  readonly classname?: string
  readonly items: T[]
  readonly renderItemAction: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>
}

interface CarouselRenderItemProps<T> {
  readonly index: number
  readonly item: T
  readonly isSnapPoint: boolean
}

export const Carousel = <T extends any>({
  classname,
  items,
  renderItemAction,
}: CarouselProps<T>) => {
  const {
    scrollRef,
    pages,
    goTo,
    prev,
    next,
    activePageIndex,
    hasPrevPage,
    hasNextPage,
    snapPointIndexes,
  } = useSnapCarousel()
  return (
    <div className={cn('relative', classname)}>
      <Button
        className={cn(
          `mx-2 ${!hasPrevPage ? 'opacity-30' : ''}`,
          'bg-white/80 text-gray-400 hover:text-gray-700 hover:bg-gray-100',
          'absolute left-0 bottom-1 transform -translate-y-1/2',
          'rounded-full'
        )}
        disabled={!hasPrevPage}
        onClick={() => prev()}
      >
        <Icons.ChevronLeft />
      </Button>
      <ul className="flex overflow-auto scroll-snap-x-mandatory scrollbar-hide p-2" ref={scrollRef}>
        {items.map((item, index) =>
          renderItemAction({
            index,
            item,
            isSnapPoint: snapPointIndexes.has(index),
          })
        )}
      </ul>
      <Button
        className={cn(
          `mx-2 ${!hasNextPage ? 'opacity-30' : ''}`,
          'bg-white/80 text-gray-400 hover:text-gray-700 hover:bg-gray-100',
          'absolute right-0 bottom-1 transform -translate-y-1/2',
          'rounded-full'
        )}
        disabled={!hasNextPage}
        onClick={() => next()}
      >
        <Icons.ChevronRight />
      </Button>
      <div className="flex justify-center items-center" aria-hidden>
        {pages.map((_, i) => (
          <div
            key={i}
            className={cn(
              `${activePageIndex === i ? 'w-2 opacity-30' : 'w-4'}`,
              'bg-slate-500 text-gray-500 hover:text-gray-700 hover:bg-gray-100',
              'mt-2 h-1 rounded-full mx-1 cursor-pointer'
            )}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

interface CarouselItemProps {
  readonly className?: string
  readonly isSnapPoint: boolean
  readonly children?: React.ReactNode
}

export const CarouselItem = ({ className, isSnapPoint, children }: CarouselItemProps) => (
  <li className={cn(`shrink-0 ${isSnapPoint ? 'scroll-snap-align-start' : ''}`, 'p-1', className)}>
    {children}
  </li>
)
