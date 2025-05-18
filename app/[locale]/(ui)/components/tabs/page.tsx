'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleTabs } from './simple-tabs'
const TabsExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Tabs'} />
      {/* Tabs examples */}
      <SimpleTabs />
    </div>
  )
}

export default TabsExamplePage
