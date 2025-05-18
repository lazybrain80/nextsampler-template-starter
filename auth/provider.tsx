'use client'

import { createContext, useContext, useState, useMemo, useLayoutEffect } from 'react'

import type { SupabaseClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import { User } from '@supabase/supabase-js'

interface AuthClient {
  supaClient: SupabaseClient | undefined
  supaUser: User | null
}

interface AuthProviderProp {
  children: React.ReactNode
}

const AuthContext = createContext<AuthClient | undefined>(
  undefined,
)

export const AuthProvider: React.FC<AuthProviderProp & { supaUser: User | null }> = ({ supaUser, children }) => {
  const [supaClient, setSupaClient] = useState<SupabaseClient | undefined>(undefined)

  useLayoutEffect(() => {
    setSupaClient(createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ))
  }, [])

  const authValue = useMemo(() => {
		return {
      supaClient,
			supaUser,
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [supaClient, supaUser])

  return (
    <>
      <AuthContext.Provider value={authValue}>
        {children}
      </AuthContext.Provider>
    </>
  )
}


export const useAuthClient = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    return undefined
  }
  return context
}

