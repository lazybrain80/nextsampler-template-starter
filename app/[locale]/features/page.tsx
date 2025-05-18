'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { Section } from '@/design/components'
import * as Icons from '@/design/icons'

const keyFeatureIcons = [
  {
    icon: <Icons.Star className="w-8 h-8" />,
    modules: [
      { name: 'next', version: '15' },
      { name: 'react', version: '19' },
    ],
  },
  {
    icon: <Icons.Users className="w-8 h-8" />,
    modules: [
      { name: 'tailwindcss', version: '4' },
      { name: 'tailwindcss-animated', version: '2' },
    ],
  },
  {
    icon: <Icons.Sun className="w-8 h-8" />,
    modules: [{ name: 'typescript', version: '5' }],
  },
  {
    icon: <Icons.Components className="w-8 h-8" />,
    modules: [{ name: 'radix-ui', version: 'latest' }],
  },
  {
    icon: <Icons.Check className="w-8 h-8" />,
    modules: [
      { name: 'supabase/supabase-js', version: '2' },
      { name: 'supabase/ssr', version: '0.6' },
    ],
  },
  {
    icon: <Icons.Languages className="w-8 h-8" />,
    modules: [
      { name: 'next-intl', version: '4' },
      { name: 'next-themes', version: '0.4' },
    ],
  },
]

interface KeyFeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  modules?: { name: string; version: string }[]
}

const KeyFeatureCard = ({ title, description, icon, modules = [] }: KeyFeatureCardProps) => {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur border border-blue-100 shadow-md hover:shadow-lg transition text-center flex flex-col items-center px-6 py-8 space-y-4">
      <div className="bg-blue-50 text-blue-600 rounded-full p-3 shadow-inner">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      {modules && (
        <ul className="w-full text-xs text-gray-500 space-y-1">
          {modules.map((mod, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-blue-50 px-3 py-1.5 rounded-md text-gray-800 font-mono text-[13px] border border-blue-100 shadow-sm"
            >
              <span className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {mod.name}
              </span>
              <span className="text-blue-600 font-semibold text-sm">v{mod.version}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const FeaturesPage = () => {
  const t = useTranslations('FeaturesPage')
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">{t('title')}</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {keyFeatureIcons.map((feature, index) => (
          <KeyFeatureCard
            key={index}
            title={t(`key_feature_title_${index}`)}
            description={t(`key_feature_description_${index}`)}
            icon={feature.icon}
            modules={feature.modules}
          />
        ))}
      </div>
    </Section>
  )
}

export default FeaturesPage
