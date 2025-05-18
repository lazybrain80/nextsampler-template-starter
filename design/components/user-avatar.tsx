import type { AvatarProps } from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback, AvatarImage } from "@/design/components"
import { UserMetaData } from '@/types'
import { User } from "@/design/icons"

interface UserAvatarProps extends AvatarProps {
  user: UserMetaData
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
    {user.avatar_url
      ? (
        <AvatarImage alt="Picture" src={user.avatar_url} />
      )
      : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <User className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
