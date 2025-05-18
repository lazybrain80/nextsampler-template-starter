export const appName = 'NextSampler'
export const appUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
export const appDesc =
  'We are providing an easier and faster way to get started with SaaS applications.'
export const siteMeta = {
  title: {
    template: `${appName}: %s`,
    default: `${appName}`,
  },
  description: appDesc,
  url: appUrl,
  // Google doesn't use the"keywords"meta tag in our web search ranking.
  // It's possible that Google could use this information in the future,
  // but it's unlikely. Google has ignored the keywords meta tag for years and currently we see no need to change that policy.
  keywords: ['Next.js', 'Radix-ui', 'Sass', 'Fast', 'Simple', 'Easy', 'Cloud Native'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: appUrl,
    locale: 'en_US, ko_KR',
    title: appName,
    description: appDesc,
    siteName: appName,
    images: [
      {
        url: `${appUrl}/icon_logo.svg`,
        alt: `${appName} Logo`,
        type: 'image/svg+xml',
        width: 1200,
        height: 630,
      },
    ],
  },
  authors: [
    {
      name: 'lazybrain80',
    },
  ],
  creator: 'Lazybrain80',
  icons: {
    icon: '/icon_logo.svg',
  },
}
