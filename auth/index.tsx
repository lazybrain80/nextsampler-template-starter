'use server'

import { redirect } from 'next/navigation'

import { createSupabaseServerClient } from '@/libs/supabase/serverClient'
import { ActionResponse } from '@/types/action-response'
import { getURL } from '@/utils/get-url'

export async function signInWithOAuth(
  locale: string,
  provider: 'github' | 'google',
  redirectURL: string
): Promise<ActionResponse> {
  const supabase = await createSupabaseServerClient()
  const redirectTo = redirectURL
    ? getURL(`/${locale}/auth/callback?redirectURL=${encodeURIComponent(redirectURL)}`)
    : getURL(`/${locale}/auth/callback`)

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  })

  if (error) {
    console.error(error)
    return { data: null, error: error }
  }

  return redirect(data.url)
}

export async function signInWithEmail(locale: string, email: string): Promise<ActionResponse> {
  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: getURL(`/${locale}/auth/callback`),
    },
  })

  if (error) {
    console.error(error)
    return { data: null, error: error }
  }

  return { data: null, error: null }
}

export async function signOut(): Promise<ActionResponse> {
  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    return { data: null, error: error }
  }

  return { data: null, error: null }
}
