'use client'
import { CustomUserAvatar, UserAvatarProps } from './custom-avatar'
import { Card, CardHeader, CardTitle, CardContent } from '@/design/components'

export const SimpleProfile = ({ user }: UserAvatarProps) => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Profile with avatar </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <CustomUserAvatar user={user} size="h-20 w-20" shape="circle" />
          <div>
            <div className="text-lg font-semibold">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
            <div className="text-sm text-gray-500">User Profile</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
