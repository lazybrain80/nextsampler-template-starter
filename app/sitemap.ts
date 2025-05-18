import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const host = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/features', priority: 0.8 },
    { path: '/pricing', priority: 0.8 },
    { path: '/showcase', priority: 0.8 },
  ]

  return routes.flatMap(route =>
    routing.locales.map(locale => ({
      url: `${host}/${locale}${route.path === '' ? '' : route.path}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(altLocale => [
            altLocale,
            `${host}/${altLocale}${route.path === '' ? '' : route.path}`,
          ])
        ),
      },
    }))
  )
}
