import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import { buttonVariants, AnimatedGradientText, Section } from '@/design/components'
import { LeadMain } from '@/design/features/landing'
import { ChevronRight } from '@/design/icons'

export const Lead = () => {
  const t = useTranslations('Main')
  const locale = useLocale()

  return (
    <Section className="h-max animate-gradient bg-linear-to-r from-[#00b57f] via-[#01a6a6] to-[#00a318] bgsize-300">
      <LeadMain
        banner={
          <Link href={`/${locale}/features`}>
            <div className="flex items-center justify-center w-[30%] space-x-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg group">
              🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
              <AnimatedGradientText text={t('introducing')} />
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </Link>
        }
        title={t.rich('title', {
          important: chunks => (
            <span className="animate-gradient bg-linear-to-r from-[#f889da] via-[#b877fd] to-[#75bdf8] bg-clip-text text-transparent bgsize-300">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href={`https://github.com/lazybrain80/nextsampler-template-starter`}
            >
              {t('primary_button')}
            </a>
          </>
        }
      />
    </Section>
  )
}
