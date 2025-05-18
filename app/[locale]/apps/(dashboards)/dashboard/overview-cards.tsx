'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
  Card,
  CardContent
} from '@/design/components'

export const OverviewCards = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('DashboardPage')
  const overviewCards = [
    {
      title: t('total_properties'),
      value: '156',
      icon: '/images/dashboard/overview-card-icon_0.svg',
      headerBg: 'bg-blue-300',
      contentBg: 'bg-blue-100',
      textColor: 'text-blue-400'
    },
    {
      title: t('properties_sold'),
      value: '43',
      icon: '/images/dashboard/overview-card-icon_1.svg',
      headerBg: 'bg-green-300',
      contentBg: 'bg-green-100',
      textColor: 'text-green-400'
    },
    {
      title: t('total_revenue'),
      value: '$2.4M',
      icon: '/images/dashboard/overview-card-icon_2.svg',
      headerBg: 'bg-yellow-300',
      contentBg: 'bg-yellow-100',
      textColor: 'text-yellow-400'
    },
    {
      title: t('conversion_rate'),
      value: '68%',
      icon: '/images/dashboard/overview-card-icon_3.svg',
      headerBg: 'bg-red-300',
      contentBg: 'bg-red-100',
      textColor: 'text-red-400'
    }
  ]
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
      {overviewCards.map((card, index) => (
        <Card key={index} className='rounded-2xl shadow-lg'>
          <CardContent className={`${card.contentBg} flex items-center justify-between`}>
            <Image
              src={card.icon}
              alt='overview card icon'
              width={80}
              height={80}
              className={`${card.headerBg} rounded-full p-4 mt-4`}
            />
            <div className='flex flex-col items-end p-4 mt-4'>
              <span className={`${card.textColor} text-3xl`}>{card.title}</span>
              <p className={`${card.textColor} text-2xl font-bold`}>{card.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}