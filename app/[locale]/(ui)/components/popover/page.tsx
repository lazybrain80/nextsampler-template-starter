'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimplePopover } from './simple-popover'

const PopoverExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Popover'} />
      {/* Popover examples */}
      <SimplePopover />
    </div>
  )
}

export default PopoverExamplePage
