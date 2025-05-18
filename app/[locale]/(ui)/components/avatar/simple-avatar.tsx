'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { CustomUserAvatar, UserAvatarProps } from './custom-avatar'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Alert Basic Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { CustomUserAvatar, UserAvatarProps } from './custom-avatar'

<CustomUserAvatar user={user} size="h-32 w-32" shape="round-rect" />
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleAvatar = ({ user }: UserAvatarProps) => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Basic example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-16">
          <div>
            <div className="border p-4">
              <div className="font-semibold mb-2">Round Rect Avatars</div>
              <div className="flex items-center justify-center space-x-8">
                <CustomUserAvatar user={user} size="h-32 w-32" shape="round-rect" />
                <CustomUserAvatar user={user} size="h-20 w-20" shape="round-rect" />
                <CustomUserAvatar user={user} size="h-16 w-16" shape="round-rect" />
                <CustomUserAvatar
                  user={{ ...user, avatar_url: '' }}
                  size="h-12 w-12"
                  shape="round-rect"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-8 w-8"
                  shape="round-rect"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-6 w-6"
                  shape="round-rect"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border p-4">
              <div className="font-semibold mb-2">Circle Avatars</div>
              <div className="flex items-center justify-center space-x-8">
                <CustomUserAvatar user={user} size="h-32 w-32" shape="circle" />
                <CustomUserAvatar user={user} size="h-20 w-20" shape="circle" />
                <CustomUserAvatar user={user} size="h-16 w-16" shape="circle" />
                <CustomUserAvatar
                  user={{ ...user, avatar_url: '' }}
                  size="h-12 w-12"
                  shape="circle"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-8 w-8"
                  shape="circle"
                />
                <CustomUserAvatar
                  user={{ ...user, name: 'Anonymous' }}
                  size="h-6 w-6"
                  shape="circle"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
