'use client'

import { cn } from '@/utils/cn'

export const CenteredMenu = ({
  logo,
  children,
  rightMenu,
}: {
  logo: React.ReactNode
  children: React.ReactNode
  rightMenu: React.ReactNode
}) => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="hidden gap-6 md:flex">{logo}</div>

      <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">{children}</div>

      <div className={cn('flex items-center space-x-3 ml-auto')}>
        <ul className="flex flex-row items-center gap-x-1.5 text-lg font-medium [&_li[data-fade]:hover]:opacity-100 [&_li[data-fade]]:opacity-60">
          {rightMenu}
        </ul>
      </div>
    </div>
  )
}
