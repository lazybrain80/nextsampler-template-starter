'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import {
  buttonVariants,
  Section,
  LocaleSwitcher,
  Logo,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/design/components'
import { UserAccountNav } from '@/design/features/user-board'
import { CenteredMenu, MobileNavbar } from '@/design/features/landing'
import { cn } from '@/libs/utils'
import { useScroll } from '@/hooks/use-scroll'
import { MainNavItem } from '@/types'
import { EyeClosedIcon } from '@radix-ui/react-icons'
import { useAuthClient } from '@/auth/provider'

const ListItem = React.forwardRef<React.ComponentRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

export const Navbar = ({ items }: { items: MainNavItem[] }) => {
  const locale = useLocale()
  const t = useTranslations('Navbar')
  const scrolled = useScroll(50)

  const authClient = useAuthClient()
  const supaUser = authClient?.supaUser

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const userSingInOutForm = !supaUser ? (
    <>
      <li className="">
        <LocaleSwitcher />
      </li>
      <li className="ml-1 mr-2.5">
        <Link href={`/${locale}/signin`}>{t('sign_in')}</Link>
      </li>
      <li className="">
        <Link className={buttonVariants()} href={`/${locale}/signup`}>
          {t('sign_up')}
        </Link>
      </li>
    </>
  ) : (
    <>
      <li className="">
        <LocaleSwitcher />
      </li>
      <li className="ml-1 mr-2.5">
        <UserAccountNav />
      </li>
    </>
  )

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  const handleMenuItemClick = () => {
    toggleMenu()
  }

  return (
    <header
      className={`py-0 sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scrolled ? 'border-b' : 'bg-background/0'
      }`}
    >
      <Section className="py-0 my-5 w-full">
        <CenteredMenu logo={<Logo />} rightMenu={<>{userSingInOutForm}</>}>
          <NavigationMenu className="hidden gap-10 md:flex">
            <NavigationMenuList className="space-x-10 text-xl">
              {items?.length
                ? items.map((item, index) => (
                    <NavigationMenuItem key={index} className="hover:text-blue-700">
                      <Link href={item.disabled ? '#' : `/${locale}${item.href}`}>
                        {item.title}
                      </Link>
                    </NavigationMenuItem>
                  ))
                : null}
            </NavigationMenuList>
          </NavigationMenu>
          <button
            className="flex items-center space-x-2 md:hidden ml-10"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <EyeClosedIcon /> : ''}
            <span className="font-bold">Menu</span>
          </button>
          {showMobileMenu && items && (
            <MobileNavbar items={items} menuItemClick={handleMenuItemClick} />
          )}
        </CenteredMenu>
      </Section>
    </header>
  )
}
