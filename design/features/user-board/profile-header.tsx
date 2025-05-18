'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { cn } from '@/libs/utils'

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'

export const ProfileHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const locale = useLocale()
  const pathname = usePathname()

  const profileTabs = [
    {
      id: 'profile',
      label: 'My Profile',
      href: `/${locale}/apps/user-boards/profile`,
      icon: Icons.UserCircle,
    },
    { id: 'teams', label: 'Teams', href: `/${locale}/apps/user-boards/teams`, icon: Icons.Users },
    {
      id: 'projects',
      label: 'Projects',
      href: `/${locale}/apps/user-boards/projects`,
      icon: Icons.Layers,
    },
    {
      id: 'connections',
      label: 'Connections',
      href: `/${locale}/apps/user-boards/connections`,
      icon: Icons.Share,
    },
  ]

  return (
    <Card className={cn(className)}>
      <CardHeader className="relative h-96 bg-[url(/images/profile/header-bg.png)] bg-cover bg-no-repeat">
        <div
          className={cn(
            'absolute bottom-[calc(-3rem)] left-[calc(50%-3rem)] z-10',
            'rounded-full w-24 h-24 bg-green-500',
            'animate-ping'
          )}
        />
        <div
          className={cn(
            'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
            'flex items-center z-10'
          )}
        >
          <Image
            src="/images/profile/user-avatar-0.svg"
            width={100}
            height={100}
            className="w-32 h-32 rounded-full border-4 border-white m-auto"
            alt="Profile Picture"
          />
        </div>
      </CardHeader>
      <CardContent className="relative h-48 bg-white rounded-2xl shadow-xl p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <CardTitle className="text-2xl">{'My name'}</CardTitle>
              <span className="relative flex size-3 mx-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
              <span className="text-gray-500 text-sm m-0">{'Active'}</span>
            </div>
            <CardDescription className="text-lg">{'May the Force be with you.'}</CardDescription>
          </div>
          <div className="flex items-center">
            <Button className="bg-transparent hover:bg-gray-100">
              <div className="bg-black border-2 rounded-full border-black">
                <Icons.TwitterX />
              </div>
            </Button>
            <Button className="text-gray-500 text-sm bg-transparent hover:bg-gray-100">
              <div className="bg-blue-50 border-2 rounded-full border-blue-600">
                <Icons.Meta />
              </div>
            </Button>
            <Button className="text-gray-500 text-sm bg-transparent hover:bg-gray-100">
              <div className="bg-yellow-50 border-2 rounded-full border-yellow-600">
                <Icons.Google />
              </div>
            </Button>
            <Button className="text-gray-500 text-sm bg-transparent hover:bg-gray-100">
              <div className="bg-blue-500 border-2 rounded-full border-blue-500">
                <Icons.LinkedIn />
              </div>
            </Button>
            <Button className="text-black text-sm bg-transparent hover:bg-gray-100">
              <Icons.GitHub className="w-8 h-8" />
            </Button>
            <Button className="text-gray-500 text-sm bg-transparent hover:bg-gray-100">
              <div className="bg-red-500 border-2 rounded-full border-red-500">
                <Icons.Youtube />
              </div>
            </Button>
            <Button className="bg-blue-500 rounded-full w-36 ml-6">Edit Profile</Button>
          </div>
        </div>
        <div
          className={cn(
            'absolute bottom-0 right-0 w-full flex justify-end items-center',
            'bg-slate-200'
          )}
        >
          {profileTabs.map(tab => (
            <a
              key={tab.id}
              className={cn(
                'flex items-center px-4 mr-2 h-12',
                pathname === tab.href ? 'border-b border-indigo-600 text-indigo-600' : ''
              )}
              href={tab.href}
            >
              <div className="flex items-center">
                <tab.icon className="w-4 h-4 mr-2" />
                <div className="text-sm">{tab.label}</div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
