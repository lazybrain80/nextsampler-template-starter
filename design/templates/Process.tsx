import { useTranslations } from 'next-intl'

import { Card, CardHeader, CardTitle, CardContent, Section } from '@/design/components'

export const Process = () => {
  const t = useTranslations('Process')
  return (
    <Section className="md:mb-[10rem]">
      <div className="h-[28rem] rounded-3xl bg-violet-100 text-center items-center justify-center flex flex-col">
        <div className="mt-1 text-5xl font-bold">{t('title')}</div>
        <div className="mt-2 max-w-(--breakpoint-lg) text-lg text-muted-foreground">{t('description')}</div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 w-8/12 absolute space-x-5 mt-[30rem]">
          <Card className="h-[21rem] rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl mb-5">
                <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                  <span className="text-purple-500">1</span>
                </div>
                {t('step1_title')}
              </CardTitle>
              <CardContent>{t('step1_description')}</CardContent>
            </CardHeader>
          </Card>
          <Card className="h-[21rem] rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl mb-5">
                <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                  <span className="text-purple-500">2</span>
                </div>
                {t('step2_title')}
              </CardTitle>
              <CardContent>{t('step2_description')}</CardContent>
            </CardHeader>
          </Card>
          <Card className="h-[21rem] rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl mb-5">
                <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
                  <span className="text-purple-500">3</span>
                </div>
                {t('step3_title')}
              </CardTitle>
              <CardContent>{t('step3_description')}</CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Section>
  )
}
