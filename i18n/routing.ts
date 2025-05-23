import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const allLocales = [
  { id: 'en', name: 'English' },
  { id: 'ko', name: '한국어' },
]

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: allLocales.map(locale => locale.id),

  // Used when no locale matches
  defaultLocale: 'en',
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
