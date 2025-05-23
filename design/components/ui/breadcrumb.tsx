import Link from 'next/link'
import { ChevronRight, ChevronDown } from '@/design/icons'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown-menu'

export interface BreadcrumbMenuItem {
  label: React.ReactNode
  href: string
}

export interface BreadcrumbItem {
  label: React.ReactNode | string
  href?: string
  active?: boolean
  menu?: BreadcrumbMenuItem[]
  separator?: React.ReactNode
  params?: Record<string, any>
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  separator?: React.ReactNode
}

const replaceLabelPattern = (label: string, params?: Record<string, any>): string => {
  if (!params) return label
  return label.replace(/:([a-zA-Z0-9_]+)/g, (match, key) => {
    return params[key] !== undefined ? String(params[key]) : match
  })
}

export const Breadcrumb = ({
  items,
  className = '',
  separator = <ChevronRight width={16} height={16} />,
}: BreadcrumbProps) => {
  return (
    <nav className={`flex items-center text-sm text-gray-500 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1">
        {items.map((item, idx) => {
          let labelNode: React.ReactNode = item.label
          if (typeof item.label === 'string' && item.label.includes(':')) {
            labelNode = replaceLabelPattern(item.label, item.params)
          }
          return (
            <li key={idx} className="inline-flex items-center">
              {idx > 0 && (
                <span className="mx-1 text-gray-400">
                  {item.separator !== undefined ? item.separator : separator}
                </span>
              )}
              {item.menu && item.menu.length > 0 ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hover:underline text-gray-600 font-medium flex items-center focus:outline-none">
                      {labelNode}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.menu.map((menuItem, menuIdx) => (
                      <DropdownMenuItem asChild key={menuIdx}>
                        <Link href={menuItem.href} className="w-full">
                          {menuItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.href && !item.active ? (
                <Link href={item.href} className="flex items-center hover:underline text-gray-600">
                  {labelNode}
                </Link>
              ) : (
                <span className="flex items-center font-bold text-black text-lg">{labelNode}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
