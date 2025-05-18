'use client'
import { Section } from '@/design/components'
import { SignInForm } from '@/design/templates'

export default function LoginPage() {
  
  return (
    <Section className='container flex h-screen w-screen flex-col items-center justify-center mx-auto'>
      <SignInForm />
    </Section>
  );
}
