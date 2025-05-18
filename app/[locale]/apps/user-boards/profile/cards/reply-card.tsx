'use client'

import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  UserAvatar
} from '@/design/components'
import * as Icons from '@/design/icons'

export interface ReplyContentProps {
  name: string
  avatar_url: string
  created_at: string
  post: string
  tags: string[]
}

interface ReplyCardProps {
  className?: string
  content: ReplyContentProps
}

export const ReplyCard = ({ className, content, ...props }: ReplyCardProps) => {
  const { name, avatar_url, created_at, post, tags } = content
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className='flex items-center'>
          <UserAvatar
            className='h-16 w-16'
            user={{
              name,
              avatar_url
            }}
          />
          <span className='ml-4 text-xl font-bold'>{name}</span>
          <Icons.Dot className='ml-2 text-slate-500' />
          <span className='text-slate-500'>{created_at}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className='text-xl'>{post}</div>
        <div className='flex space-x-2 mt-4'>
          {tags.map((tag, index) => (
            <Button
              key={index}
              className='rounded-full bg-gray-200 text-gray-700 px-3 py-1 text-sm'
            >
              #{tag}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}