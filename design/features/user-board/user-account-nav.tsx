'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useAuthClient } from '@/auth/provider'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { UserAvatar } from '@/design/components'
import { UserMetaData } from '@/types'

export function UserAccountNav() {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('UserSideNav')

  const authClient = useAuthClient()
  const supaClient = authClient?.supaClient
  const { user_metadata } = authClient?.supaUser || {}
  const user = user_metadata as UserMetaData

  async function signOut() {
    if (supaClient) {
      const { error } = await supaClient.auth.signOut()
      console.log('signOut error:', error)
      router.refresh()
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {user && <UserAvatar user={user} className="h-8 w-8" />}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-2xl p-4">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <span className="my-2 font-bold text-xl">User Profile</span>
            <div className="flex items-center">
              <div>{user && <UserAvatar user={user} className="mx-2 h-24 w-24" />}</div>
              <div>
                {user?.user_name && <p className="my-2 font-medium">{user.user_name}</p>}
                {user?.email && (
                  <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator className="m-4" />
        <DropdownMenuItem asChild className="cursor-pointer">
          <div className="flex">
            <div className="flex items-center rounded-xl bg-blue-100 size-10 mr-4">
              <Icons.User className="m-auto text-sky-500" />
            </div>
            <Link className="text-lg hover:text-sky-500" href={`/${locale}/profile`}>
              {t('profile')}
            </Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-4" />
        <DropdownMenuItem className="cursor-pointer" onSelect={signOut}>
          <Button className="m-auto bg-blue-500 w-72 hover:bg-blue-700 rounded-3xl">
            {t('sign_out')}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
