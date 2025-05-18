'use client'

import { cn } from '@/libs/utils'
import { Card, CardHeader, CardTitle, CardDescription } from '@/design/components'
import * as Icons from '@/design/icons'

export const IntroductionCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{'Introduction'}</CardTitle>
        <CardDescription>
          {`Hello there! I'm Obi-Wan Kenobi, Jedi Knight and General of the Galactic Republic. May the Force be with you.`}
        </CardDescription>
      </CardHeader>
      <hr />
      <CardHeader>
        <CardTitle className="my-2">{'Contact'}</CardTitle>
        <div className="flex items-center py-2">
          <div className="bg-red-100 rounded-full h-12 w-12 flex items-center justify-center">
            <Icons.Phone className="text-red-300" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{'Call'}</div>
            <div className="text-slate-500">{'(+82) 123-456-7890'}</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="bg-green-100 rounded-full h-12 w-12 flex items-center justify-center">
            <Icons.Mail className="text-green-300" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{'Email'}</div>
            <div className="text-slate-500">{'email@example.com'}</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="bg-pink-100 rounded-full h-12 w-12 flex items-center justify-center">
            <Icons.Instagram className="text-pink-300" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{'Instagram'}</div>
            <div className="text-slate-500">@{'my name'}</div>
          </div>
        </div>
      </CardHeader>

      <hr className="my-2" />
      <CardHeader>
        <CardTitle>{'Other'}</CardTitle>
        <div className="flex items-center py-2">
          <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
            <Icons.MapPin className="text-blue-300" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{'Location'}</div>
            <div className="text-slate-500">{'Seoul, South Korea'}</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="bg-amber-100 rounded-full h-12 w-12 flex items-center justify-center">
            <Icons.GraduationCap className="text-amber-300" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{'Education'}</div>
            <div className="text-slate-500">{'Sungkyunkwan University of computer science'}</div>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="bg-slate-100 rounded-full h-12 w-12 flex items-center justify-center">
            <Icons.Languages className="text-slate-300" />
          </div>
          <div className="ml-4">
            <div className="font-semibold">{'Language'}</div>
            <div className="text-slate-500">{'Korean'}</div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
