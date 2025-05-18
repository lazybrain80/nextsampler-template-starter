import type * as Lucide from 'lucide-react'

import type { Customer } from '@saasfly/db'

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export interface PageNavConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SidebarNavItem = {
  id: string
  title: string
  disabled?: boolean
  external?: boolean
  icon?: string
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items?: SidebarNavItem[]
    }
)

export interface SubscriptionPlan {
  title?: string
  description?: string
  benefits?: string[]
  limitations?: string[]
  prices?: {
    monthly: number
    yearly: number
  }
  stripeIds?: {
    monthly: string | null
    yearly: string | null
  }
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<Customer, 'stripeCustomerId' | 'stripeSubscriptionId' | 'stripePriceId'> & {
    stripeCurrentPeriodEnd: number
    isPaid: boolean | '' | null
    interval: string | null
    isCanceled?: boolean
  }

export interface MdxDocContent {
  content: string
}

export interface UserMetaData {
  avatar_url?: string
  email?: string
  email_verified?: boolean
  full_name?: string
  iss?: string
  name?: string
  phone_verified?: boolean
  picture?: string
  preferred_username?: string
  provider_id?: string
  sub?: string
  user_name?: string
}
