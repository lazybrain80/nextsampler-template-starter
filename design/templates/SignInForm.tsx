'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils'
import { signInWithEmail } from '@/auth'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { buttonVariants, Label, Input, toast } from '@/design/components'
import { ChevronLeft, Spinner } from '@/design/icons'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const userEmailAuthSchema = z.object({
  email: z.string().email(),
})

type FormData = z.infer<typeof userEmailAuthSchema>

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userEmailAuthSchema),
  })

  const locale = useLocale()
  const t = useTranslations('SignInPage')

  const [pending, setPending] = useState<boolean>(false)

  async function handleEmailSubmit(formData: FormData) {
    setPending(true)

    const email = formData.email
    const response = await signInWithEmail(locale, email)

    if (response?.error) {
      toast({
        description: 'An error occurred while authenticating. Please try again.',
      })
    } else {
      toast({
        description: `To continue, click the link in the email sent to: ${email}`,
      })
    }

    setPending(false)
  }

  return (
    <>
      <Link
        href={`/${locale}`}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('leavePage')}
        </>
      </Link>
      <div className="p-20 px-30 rounded-3xl shadow-2xl">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Image src="/icon_logo.svg" className="mx-auto mb-10" width={80} height={80} alt="" />
            <h1 className="text-2xl font-semibold tracking-tight">{t('welcome_back')}</h1>
            <p className="text-sm text-muted-foreground">{t('signin_title')}</p>
          </div>
          <div className="w-full rounded-b-md">
            <form onSubmit={handleSubmit(handleEmailSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="email@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={pending}
                    {...register('email')}
                  />
                  {errors?.email && (
                    <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <button className={cn(buttonVariants())} disabled={pending}>
                  {pending && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
                  {t('email_signin')}
                </button>
              </div>
            </form>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">{t('other_signin')}</span>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/signin/bg-left.png"
        className="absolute bottom-0 left-0"
        width={320}
        height={320}
        alt=""
      />
      <Image
        src="/images/signin/bg-right.png"
        className="absolute bottom-0 right-0"
        width={320}
        height={320}
        alt=""
      />
    </>
  )
}
