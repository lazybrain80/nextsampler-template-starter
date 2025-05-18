import Image from 'next/image'
import Link from 'next/link'
import { appName } from '@/config/site'

export function Logo() {
  return (
    <Link href='/' className='flex items-center text-3xl font-semibold mr-10'>
      <Image
        className='mr-2'
        src='/icon_logo.svg'
        width={40}
        height={40}
        priority
        quality={100}
        alt={appName}
      />
      <span className='font-alt text-3xl text-black'>{appName}</span>
    </Link>
  )
}
