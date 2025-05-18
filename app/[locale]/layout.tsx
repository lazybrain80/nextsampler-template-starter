import '@/styles/globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/utils/cn'
import { siteMeta } from '@/config/site'
import { Toaster, TailwindIndicator, ThemeProvider } from '@/design/components'
import { createSupabaseServerClient } from '@/libs/supabase/serverClient'
import { AuthProvider } from '@/auth/provider'

type MetaProps = Promise<{ locale: string }>
type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: MetaProps
}>

export const metadata: Metadata = siteMeta

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  const supabase = createSupabaseServerClient()
  const { data } = await (await supabase).auth.getUser()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn('font-sans antialiased', 'm-auto flex h-full w-full flex-col no-scrollbar')}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <AuthProvider supaUser={data.user}>{children}</AuthProvider>
          </NextIntlClientProvider>
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
