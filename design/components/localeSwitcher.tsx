'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/design/components'
import { usePathname, useRouter, allLocales } from '@/i18n/routing'

const flagMap = new Map([
  ['ko', '/locale/ko.png'],
  ['en', '/locale/en.png']
])

export const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [userLocale , setUserLocale] = useState<string>('en')

  useEffect(() =>{
    setUserLocale(locale)
  }, [locale])

  const handleChange = (value: string) => {
    setUserLocale(value)
    router.push(pathname, { locale: value })
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='p-2 focus-visible:ring-offset-0' variant='ghost' size='icon' aria-label='lang-switcher'>
          <Image
            src={flagMap.get(userLocale) || ''}
            width={24}
            height={24}
            alt='locale flag'
            className='h-8 w-8 rounded-full object-cover'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
          {allLocales.map(l => (
            <DropdownMenuRadioItem key={l.id} value={l.id}>
              <Image
                src={flagMap.get(l.id) || ''}
                width={24}
                height={24}
                alt='locale flag'
                className='h-6 w-6 mr-1 rounded-full object-cover'
              />
              {l.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
