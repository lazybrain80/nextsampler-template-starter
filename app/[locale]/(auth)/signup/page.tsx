import Link from 'next/link'
import { Section } from '@/design/components'
import { SignInForm } from '@/design/templates'

export default function SignUp() {

  return (
    <Section className='container flex h-screen w-screen flex-col items-center justify-center mx-auto'>
      <SignInForm />
      <span className='text-neutral5 m-auto max-w-sm text-sm'>
        By clicking continue, you agree to our{' '}
        <Link href='/terms' className='underline'>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href='/privacy' className='underline'>
          Privacy Policy
        </Link>
        .
      </span>
    </Section>
  )
}
