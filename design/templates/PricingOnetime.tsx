'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Section } from '@/design/components'
import * as Icons from '@/design/icons'
const features = ['feature1', 'feature2', 'feature3', 'feature4']

export const PricingOnetimePayment = () => {
  const t = useTranslations('PricingOnetimePayment')

  return (
    <Section className="relative px-6 bg-gray-50 min-h-screen flex justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90vw] max-w-5xl h-[90vh] bg-linear-to-b from-[#2b9cf8] via-[#7902f8] to-transparent rounded-3xl blur-[1px] scale-105"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
        <p className="text-white text-lg mb-10">{t('description')}</p>

        <div className="mx-auto max-w-xl border rounded-2xl p-10 shadow-2xl bg-white/90 backdrop-blur-xs">
          <div className="text-5xl font-extrabold mb-4">20$</div>
          <div className="text-sm text-gray-500 mb-8">{t('payment_desc')}</div>

          <ul className="text-left space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <Icons.CircleCheckBig className="text-green-500 w-5 h-5" />
                {t(feature)}
              </li>
            ))}
          </ul>

          <Link
            href="https://next-sampler.lemonsqueezy.com"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            {t('buy_now')}
          </Link>
        </div>
      </div>
    </Section>
  )
}
