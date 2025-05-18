'use client'

import { UserMetaData } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/design/components'
import { User } from '@/design/icons'

export interface UserAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
  user: UserMetaData
  size?: string
  shape?: 'circle' | 'round-rect'
}

export const CustomUserAvatar = ({
  user,
  size = 'h-8 w-8',
  shape = 'circle',
  ...props
}: UserAvatarProps) => {
  const shapeClass = shape === 'round-rect' ? 'rounded-lg' : 'rounded-full'
  return (
    <Avatar {...props} className={`${size} ${shapeClass}`}>
      {user.avatar_url ? (
        <AvatarImage alt="Picture" src={user.avatar_url} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <User className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
