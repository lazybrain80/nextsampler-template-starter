'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { HorizontalSeparator } from './horizontal-separator'
import { VerticalSeparator } from './vertical-separator'

const SeparatorExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Separator'} />
      {/* Separator examples */}
      <HorizontalSeparator />
      <VerticalSeparator />
    </div>
  )
}

export default SeparatorExamplePage
