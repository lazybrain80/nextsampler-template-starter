'use client'

import React, { useEffect, useState } from 'react'
import { BoardHeader, BoardPage } from '@/design/features/user-board'
import { UserMetaData } from '@/types'

import { SimpleAvatar } from './simple-avatar'
import { SimpleProfile } from './simple-profile'
import { StyledUserProfile } from './styled-profile'

const AvatarPage = () => {
  const [user, setUser] = useState<UserMetaData | null>(null)

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        const userData = data.results[0]
        setUser({
          name: `${userData.name.first} ${userData.name.last}`,
          email: userData.email,
          avatar_url: userData.picture.large,
        })
      })
  }, [])

  return (
    <BoardPage>
      {/* Page Header */}
      <BoardHeader title={'Avatar'} />
      {/* Avatar examples */}
      {user && (
        <div className="space-y-4">
          <SimpleAvatar user={user} />
          <SimpleProfile user={user} />
          <StyledUserProfile user={user} />
        </div>
      )}
    </BoardPage>
  )
}

export default AvatarPage
