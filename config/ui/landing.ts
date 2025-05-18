import { getTranslations } from 'next-intl/server'
import { PageNavConfig } from '@/types'

export const getLandingNavbarConfig = async (): Promise<PageNavConfig> => {
  const t = await getTranslations('Navbar')
  return {
    mainNav: [
      {
        title: t('features'),
        href: `/features`,
      },
      {
        title: t('showcase'),
        href: `/showcase`,
      },
    ],
    sidebarNav: [],
  }
}
