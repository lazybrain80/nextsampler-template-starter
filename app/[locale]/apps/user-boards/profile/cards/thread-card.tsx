'use client'

import { cn } from '@/libs/utils'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Input,
  UserAvatar
} from '@/design/components'
import * as Icons from '@/design/icons'
import { ReplyCard, ReplyContentProps } from './reply-card'

interface ThreadContentProps {
  name: string
  avatar_url: string
  created_at: string
  post: string
  tags: string[]
  replies: ReplyContentProps[]
  likes: number
  dislikes: number
}

interface ThreadCardProps {
  className?: string
  content: ThreadContentProps
}

export const ThreadCard = ({ className, content, ...props }: ThreadCardProps) => {
  const { name, avatar_url, created_at, post, tags, replies, likes, dislikes } = content
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
        <div className='flex items-center mt-4'>
          <Button className='flex items-center space-x-2 bg-blue-100 text-blue-500 px-3 py-1 rounded-full'>
            <Icons.ThumbsUp />
            <span>Like</span>
            <span>({likes})</span>
          </Button>
          <Button className='flex items-center space-x-2 bg-gray-100 text-slate-500 px-3 py-1 rounded-full ml-4'>
            <Icons.ThumbsDown />
            <span>Dislike</span>
            <span>({dislikes})</span>
          </Button>
        </div>
        <div>
          {replies.map((r, index) => (
            <ReplyCard
              key={index}
              className='mt-4 rounded-2xl shadow-xs'
              content={r}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter
        className='p-4 border-t border-slate-200'
      >
        <div className='flex space-x-4 items-center w-full'>
          <UserAvatar
            className='h-8 w-8'
            user={{
              name,
              avatar_url
            }}
          />
          <Input
            className='w-full'
            placeholder='Write a comment...'
          />
          <Button
            className='rounded-2xl bg-blue-500 text-white'
          >
            Comment
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}