import { useTranslations } from 'next-intl'
import { HeroLeftImage } from '@/design/features/landing'
import { buttonVariants, Section } from '@/design/components'

export const FirstHero = () => {
  const t = useTranslations('FirstHero')
  return (
    <Section>
      <HeroLeftImage
        imgSrc="/images/landing/first-hero-image.png"
        banner={<></>}
        title={t('title')}
        description={t('description')}
        buttons={
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href={`https://github.com/lazybrain80/nextsampler-template-starter`}
            >
              {t('get_start')}
            </a>
          </>
        }
      />
    </Section>
  )
}
