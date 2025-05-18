'use client'

import Link from 'next/link'
import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/design/components'
import * as Icons from '@/design/icons'

export const TeamsCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return(
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{'Teams'}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center py-2'>
          <div className='bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center'>
            <Icons.Shield className='text-blue-300' />
          </div>
          <div className='ml-4'>
            <div className='font-semibold'>{'Guardians of the Galaxy'}</div>
            <div className='text-slate-500'>{'2450 members'}</div>
          </div>
        </div>
        <div className='flex items-center py-2'>
          <div className='bg-green-100 rounded-full h-12 w-12 flex items-center justify-center'>
            <Icons.Swords className='text-green-300' />
          </div>
          <div className='ml-4'>
            <div className='font-semibold'>{'Oath of the Lightsaber'}</div>
            <div className='text-slate-500'>{'3423 members'}</div>
          </div>
        </div>
      </CardContent>
      <Link href='/ko/dashboard' className='text-blue-500 font-semibold p-6'>
          {'View all teams'}
      </Link>
    </Card>
  )
}