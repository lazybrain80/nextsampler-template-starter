'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { buttonVariants, Section } from '@/design/components'
import { CTABanner } from '@/design/features/landing'

export const CTA = () => {
  const t = useTranslations('CTA')

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={
          <Link
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            href="https://nextsampler.com/en"
          >
            {t('button_text')}
          </Link>
        }
      />
    </Section>
  )
}
