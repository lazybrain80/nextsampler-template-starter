'use client'

import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/design/components'

const examples = [
  {
    image: '/images/showcase/dashboard.png',
  },
  {
    image: '/images/showcase/components.png',
  },
  {
    image: '/images/showcase/noteapp.png',
  },
  {
    image: '/images/showcase/profile.png',
  },
]

interface KeyFeatureCardProps {
  index: number
  title: string
  description: string
  imageUrl: string
}

const ShowcaseCard = ({ index, title, description, imageUrl }: KeyFeatureCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="md:w-1/2 w-full h-64 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="md:w-1/2 w-full p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}

const ShowCasePage = () => {
  const t = useTranslations('ShowCasePage')
  const locale = useLocale()
  return (
    <Section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-600 text-lg">{t('description')}</p>
        <div className="flex justify-center items-center mt-8 gap-6">
          <Link
            href={`/${locale}/apps/dashboard`}
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            {t('link_demo')}
          </Link>
        </div>
      </div>

      <div className="grid gap-16 md:grid-cols-1">
        {examples.map((example, index) => (
          <ShowcaseCard
            key={index}
            index={index}
            title={t(`showcase_${index}_title`)}
            description={t(`showcase_${index}_description`)}
            imageUrl={example.image}
          />
        ))}
      </div>
    </Section>
  )
}

export default ShowCasePage
