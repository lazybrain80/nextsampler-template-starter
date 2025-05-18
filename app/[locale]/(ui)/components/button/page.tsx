'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { BasicButtons } from './basic-button'
import { SizeButtons } from './size-button'
import { RoundedButtons } from './rounded-button'

const ButtonPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Button'} />
      {/* Button examples */}
      <BasicButtons />
      <SizeButtons />
      <RoundedButtons />
    </div>
  )
}

export default ButtonPage
