import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Background, Section } from '@/design/components'
import { FeatureCard } from '@/design/features/landing'

export const Features = () => {
  const t = useTranslations('Features')

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={
              <Image src="/icons/brand/nextjs-logo.svg" width={32} height={32} alt="Next.js logo" />
            }
            title={t('feature1_title')}
          >
            {t('feature1_description')}
          </FeatureCard>
          <FeatureCard
            icon={
              <Image src="/icons/brand/react-logo.svg" width={32} height={32} alt="React logo" />
            }
            title={t('feature2_title')}
          >
            {t('feature2_description')}
          </FeatureCard>

          <FeatureCard
            icon={
              <Image
                src="/icons/brand/tailwindcss-logo.svg"
                width={32}
                height={32}
                alt="Tailwindcss logo"
              />
            }
            title={t('feature3_title')}
          >
            {t('feature3_description')}
          </FeatureCard>
          <FeatureCard
            icon={
              <Image
                src="/icons/brand/typescript-logo.svg"
                width={32}
                height={32}
                alt="Typescript logo"
              />
            }
            title={t('feature4_title')}
          >
            {t('feature4_description')}
          </FeatureCard>
          <FeatureCard
            icon={
              <Image
                src="/icons/brand/supabase-logo.svg"
                width={32}
                height={32}
                alt="Supabase logo"
              />
            }
            title={t('feature5_title')}
          >
            {t('feature5_description')}
          </FeatureCard>
          <FeatureCard
            icon={
              <Image src="/icons/brand/radix-logo.svg" width={32} height={32} alt="Radix-UI logo" />
            }
            title={t('feature6_title')}
          >
            {t('feature6_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  )
}
