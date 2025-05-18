'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import {
  BoardHeader,
  ProfileHeader
} from '@/design/features/user-board'
import {
  Card,
} from '@/design/components'
import {
  IntroductionCard,
  TeamsCard,
  InputCard,
  ThreadCard
} from './cards'
import * as Icons from '@/design/icons'

const ThreadList = [
  {
    name: 'Obi-Wan Kenobi',
    avatar_url: '/images/profile/user-avatar-0.svg',
    created_at: '2h ago',
    post: "It's been a while, everyone. I miss my peaceful days. Lately, I've been training with my lightsaber again.",
    tags: ['TheWayOfTheJedi', 'jedi'],
    likes: 12,
    dislikes: 2,
    replies:[
      {
        name: 'Master Yoda',
        avatar_url: '/images/avatars/avatar_jedi_yoda.svg',
        created_at: '2h ago',
        post: "Long time it has been, Obi-Wan. If training you need, always ready I am. Feel the dark side rising again, I do.",
        tags: ['TheWayOfTheJedi', 'jedi']
      },
      {
        name: 'Darth Vader',
        avatar_url: '/images/avatars/avatar_vader.svg',
        created_at: '1h ago',
        post: "Obi-Wan, what use is your training? The era of the Jedi is over. Your futile resistance only makes me stronger.",
        tags: ['ThePowerOfDarthVader']
      },
      {
        name: 'Stormtrooper',
        avatar_url: '/images/avatars/avatar_stormtrooper.svg',
        created_at: '1h ago',
        post: "@DarthVader, that's right! Without the Jedi, we can achieve victory. As loyal soldiers of the Empire, we will fulfill our mission!",
        tags: ['ThePowerOfTheEmpire']
      },
      {
        name: 'R2-D2',
        avatar_url: '/images/avatars/avatar_r2d2.svg',
        created_at: '30 min ago',
        post: "Beep beep beep!",
        tags: []
      },
      {
        name: 'C-3PO',
        avatar_url: '/images/avatars/avatar_c3po.svg',
        created_at: '30 min ago',
        post: "@R2D2, your mechanical language is still quite difficult to understand. But Obi-Wan, it’s good to hear you’re training again! We always support you.",
        tags: ['TheExistenceOfJedi']
      }
    ]
  },
  {
    name: 'Obi-Wan Kenobi',
    avatar_url: '/images/profile/user-avatar-0.svg',
    created_at: '3 month ago',
    post: 'Training has been a great way to clear my mind. The galaxy feels different these days, and I sense a disturbance in the Force.',
    tags: ['TheForceIsAwakening', 'jedi', 'force'],
    likes: 0,
    dislikes: 0,
    replies:[]
  },
  {
    name: 'Obi-Wan Kenobi',
    avatar_url: '/images/profile/user-avatar-0.svg',
    created_at: '6 month ago',
    post: 'I’ve been reflecting on past battles. Each one teaches us something valuable. The lessons of the past prepare us for the future.',
    tags: ['WisdomOfTheJedi', 'force', 'battle'],
    likes: 0,
    dislikes: 0,
    replies:[]
  },
  {
    name: 'Obi-Wan Kenobi',
    avatar_url: '/images/profile/user-avatar-0.svg',
    created_at: '1 year ago',
    post: 'To all my fellow Jedi and allies: stay vigilant. The light must shine bright against the darkness. Together, we can overcome anything.',
    tags: ['UnityInTheForce', 'TheForceIsWithUs', 'force'],
    likes: 0,
    dislikes: 0,
    replies:[]
  },
  
]


const ProfilePage = () => {
  const t = useTranslations('ProfilePage')
  return (
    <div className='flex-1 overflow-auto bg-slate-100 p-8'>
      {/* Page Header */}
      <BoardHeader title={'Profile'} />
      {/* Profile Header */}
      <ProfileHeader
        className='rounded-2xl'
      />
      {/* Profile Content */}
      <div className='grid grid-flow-col grid-cols-3 gap-6 my-6'>
        <div className='col-span-1'>
          <div className='grid grid-flow-row gap-6'>
            <IntroductionCard className='bg-white rounded-2xl shadow-lg p-4' />
            <TeamsCard className='bg-white rounded-2xl shadow-lg p-4' />
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-flow-col grid-cols-3 gap-6 mb-6'>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <div className='flex items-center py-2'>
                <div className='bg-blue-100 rounded-2xl h-12 w-12 flex items-center justify-center'>
                  <Icons.ListTodo className='text-blue-300' />
                </div>
                <div className='ml-4'>
                  <div className='text-xl font-bold'>{'3737'}</div>
                  <div className='text-slate-500'>{'Tasks Done'}</div>
                </div>
              </div>
            </Card>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <div className='flex items-center py-2'>
                <div className='bg-green-100 rounded-2xl h-12 w-12 flex items-center justify-center'>
                  <Icons.BookCheck className='text-green-300' />
                </div>
                <div className='ml-4'>
                  <div className='text-xl font-bold'>{'342'}</div>
                  <div className='text-slate-500'>{'Projects'}</div>
                </div>
              </div>
            </Card>
            <Card className='bg-white rounded-2xl shadow-lg p-4'>
              <div className='flex items-center py-2'>
                <div className='bg-red-100 rounded-2xl h-12 w-12 flex items-center justify-center'>
                  <Icons.Skull className='text-red-300' />
                </div>
                <div className='ml-4'>
                  <div className='text-xl font-bold'>{'487,423'}</div>
                  <div className='text-slate-500'>{'Kills'}</div>
                </div>
              </div>
            </Card>
          </div>
          <InputCard className='bg-white rounded-2xl shadow-lg p-4' />
          {ThreadList.map((thread, index) => (
            <ThreadCard
              key={index}
              className='bg-white rounded-2xl shadow-lg p-4 mt-6'
              content={thread}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProfilePage