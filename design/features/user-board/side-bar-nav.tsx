'use client'

import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'
import type { SidebarNavItem } from '@/types'
import * as Icons from '@/design/icons'
import { appName } from '@/config/site'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/design/components'

export interface SidebarNavProps {
  items: SidebarNavItem[]
}

const iconMap = new Map([
  ['home', Icons.Home],
  ['dashboard', Icons.LineChart],
  ['dashboard2', Icons.PieChart],
  ['page', Icons.Page],
  ['post', Icons.Post],
  ['laptop', Icons.Laptop],
  ['user', Icons.UserCircle],
  ['book', Icons.BookOpen],
  ['cart', Icons.ShoppingCart],
  ['settings', Icons.Settings],
  ['profile', Icons.UserCog],
  ['users', Icons.Users],
  ['projects', Icons.Projects],
  ['connections', Icons.Connections],
  ['notes', Icons.NotebookPen],
  ['calendar', Icons.Calendar],
  ['invoice', Icons.ListTodo],
  ['ecommerce', Icons.ShoppingBag],
  ['shopping', Icons.ShoppingBasket],
  ['items-search', Icons.PackageSearch],
  ['components', Icons.Components],
  ['forms', Icons.FileText],
  ['charts', Icons.ChartLine],
  ['tables', Icons.Table],
])

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isMobile } = useMediaQuery()

  useLayoutEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }, [isSidebarOpen, isMobile])

  return items.length ? (
    <div
      className={`${isSidebarOpen && !isMobile ? 'w-64' : 'w-24'} bg-slate-100 transition-all duration-300 px-3 py-8`}
    >
      <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg">
        <div
          className={cn(
            'flex items-center py-4 justify-between',
            isSidebarOpen && 'px-4',
            !isSidebarOpen && 'justify-center'
          )}
        >
          {isSidebarOpen && (
            <div className="flex items-center space-x-2">
              <Image
                className="mr-1"
                src="/icon_logo.svg"
                width={24}
                height={24}
                priority
                quality={100}
                alt={appName}
              />
              <span className="font-alt text-xl text-black">{appName}</span>
            </div>
          )}
          {!isMobile && (
            <button
              className="px-2 py-2 rounded hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <Icons.ChevronLeft size={24} /> : <Icons.ChevronRight size={24} />}
            </button>
          )}
        </div>
        <nav className="flex-1 space-y-1 py-4 overflow-y-auto scrollbar-hide">
          {items.map((item, index) => {
            return (
              <div key={item.id} className={cn('mb-2')}>
                <div className={cn('flex items-center', !isSidebarOpen && 'm-auto')}>
                  {!isSidebarOpen && <Icons.Ellipsis className="m-auto text-gray-700" />}
                  {isSidebarOpen && (
                    <span className="px-6 py-2 text-sm text-gray-700">{item.title}</span>
                  )}
                </div>

                {item.items ? (
                  <SidebarNavItems
                    id={item.title + index}
                    items={item.items}
                    pathname={pathname}
                    sideExtended={isSidebarOpen}
                  />
                ) : null}
              </div>
            )
          })}
        </nav>
        {/* Footer */}
        <div className="border-t border-gray-700 p-4">
          {isSidebarOpen && (
            <div className="text-xs text-gray-400">
              <p>Version 0.0.0</p>
              <p>© 2025 NextSampler</p>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null
}

interface SidebarNavItemsProps {
  id: string
  items: SidebarNavItem[]
  pathname: string | null
  sideExtended: boolean
}

function SidebarNavItems({ id, items, pathname, sideExtended }: SidebarNavItemsProps) {
  return items?.length ? (
    <div key={id} className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled ? (
          item.items?.length ? (
            <SidebarMultiItems
              key={item.title + index}
              item={item}
              pathname={pathname}
              sideExtended={sideExtended}
            />
          ) : (
            <SidebarSingleItem
              key={item.title + index}
              item={item}
              pathname={pathname}
              sideExtended={sideExtended}
            />
          )
        ) : (
          <span
            key={item.title + item.href}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
          >
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}

interface SidebarMultiItemsProps {
  item: SidebarNavItem
  pathname: string | null
  sideExtended: boolean
}

function SidebarMultiItems({ item, pathname, sideExtended }: SidebarMultiItemsProps) {
  const Icon = item.icon ? (iconMap.get(item.icon) ?? Icons.Home) : Icons.ArrowRight
  return item.items?.length ? (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem key={item.id} className="AccordionItem" value="item-1">
        {sideExtended ? (
          <AccordionTrigger
            className={cn(
              'flex items-center rounded-r-3xl hover:bg-slate-200 mb-2',
              sideExtended && 'w-[95%]'
            )}
          >
            <div
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium',
                item.disabled && 'cursor-not-allowed opacity-80',
                !sideExtended && 'm-auto'
              )}
            >
              <Icon className={cn(sideExtended && 'mr-2')} />
              {sideExtended && <span className="text-lg">{item.title}</span>}
            </div>
          </AccordionTrigger>
        ) : (
          <Icons.GripHorizontal className="m-auto text-gray-700" />
        )}
        {item.items.map((item, index) => (
          <AccordionContent key={item.title + index}>
            <SidebarSingleItem asSub item={item} pathname={pathname} sideExtended={sideExtended} />
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  ) : null
}

interface SidebarSingleItemProps {
  item: SidebarNavItem
  pathname: string | null
  sideExtended: boolean
  asSub?: boolean
}

function SidebarSingleItem({
  item,
  pathname,
  sideExtended,
  asSub = false,
}: SidebarSingleItemProps) {
  const Icon = item.icon ? (iconMap.get(item.icon) ?? Icons.Home) : Icons.ArrowRight
  return (
    <div className={cn('mb-2')}>
      <Link
        key={item.title + item.href}
        href={item.href ? item.href : ''}
        className={cn('flex items-center w-[95%] rounded-r-3xl hover:bg-slate-200', {
          'bg-muted': pathname === item.href,
        })}
      >
        <div
          className={cn(
            'group flex items-center px-4 py-2 text-sm font-medium',
            item.disabled && 'cursor-not-allowed opacity-80',
            !sideExtended && 'm-auto',
            sideExtended && asSub && 'ml-5 text-gray-500'
          )}
        >
          <Icon className={cn(sideExtended && 'mr-2')} />
          {sideExtended && <span className="px-2 py-1 text-lg">{item.title}</span>}
        </div>
      </Link>
    </div>
  )
}
