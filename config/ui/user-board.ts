import { getTranslations, getLocale } from 'next-intl/server'
import type { PageNavConfig } from '@/types'

export const getUserBoardConfig = async (): Promise<PageNavConfig> => {
  const t = await getTranslations('UserSideNav')
  const locale = await getLocale()
  return {
    mainNav: [],
    sidebarNav: [
      {
        id: 'home',
        title: 'HOME',
        items: [
          {
            id: 'dashboard',
            title: t('dashboard'),
            href: `/${locale}/apps/dashboard`,
            icon: 'dashboard',
          },
          {
            id: 'front-page',
            title: 'Front pages',
            icon: 'laptop',
            items: [
              {
                id: 'home',
                title: 'Home',
                href: `/${locale}`,
                icon: 'home',
              },
              {
                id: 'features',
                title: 'Features',
                href: `/${locale}/features`,
                icon: 'page',
              },
              {
                id: 'showcase',
                title: 'Showcase',
                href: `/${locale}/showcase`,
                icon: 'post',
              },
              {
                id: 'pricing',
                title: 'Pricing',
                href: `/${locale}/pricing`,
                icon: 'cart',
              },
            ],
          },
        ],
      },
      {
        id: 'apps',
        title: 'APPS',
        items: [
          {
            id: 'users',
            title: 'Users',
            icon: 'user',
            items: [
              {
                id: 'profile',
                title: 'Profile',
                href: `/${locale}/apps/user-boards/profile`,
                icon: 'profile',
              },
            ],
          },
          {
            id: 'notes',
            title: 'Notes',
            href: `/${locale}/apps/notes`,
            icon: 'notes',
          },
        ],
      },
      {
        id: 'ui',
        title: 'UI',
        items: [
          {
            id: 'components',
            title: 'Components',
            icon: 'components',
            items: [
              {
                id: 'accordion',
                title: 'Accordion',
                href: `/${locale}/components/accordion`,
              },
              {
                id: 'avatar',
                title: 'Avatar',
                href: `/${locale}/components/avatar`,
              },
              {
                id: 'button',
                title: 'Button',
                href: `/${locale}/components/button`,
              },
              {
                id: 'card',
                title: 'Card',
                href: `/${locale}/components/card`,
              },
              {
                id: 'checkbox',
                title: 'Checkbox',
                href: `/${locale}/components/checkbox`,
              },
              {
                id: 'dialog',
                title: 'Dialog',
                href: `/${locale}/components/dialog`,
              },
              {
                id: 'popover',
                title: 'Popover',
                href: `/${locale}/components/popover`,
              },
              {
                id: 'progress',
                title: 'Progress',
                href: `/${locale}/components/progress`,
              },
              {
                id: 'radio',
                title: 'Radio',
                href: `/${locale}/components/radio`,
              },
              {
                id: 'select',
                title: 'Select',
                href: `/${locale}/components/select`,
              },
              {
                id: 'separator',
                title: 'Separator',
                href: `/${locale}/components/separator`,
              },
              {
                id: 'slider',
                title: 'Slider',
                href: `/${locale}/components/slider`,
              },
              {
                id: 'table',
                title: 'Table',
                href: `/${locale}/components/table`,
              },
              {
                id: 'tabs',
                title: 'Tabs',
                href: `/${locale}/components/tabs`,
              },
              {
                id: 'textarea',
                title: 'Textarea',
                href: `/${locale}/components/textarea`,
              },
              {
                id: 'tooltip',
                title: 'Tooltip',
                href: `/${locale}/components/tooltip`,
              },
            ],
          },
        ],
      },
    ],
  }
}
