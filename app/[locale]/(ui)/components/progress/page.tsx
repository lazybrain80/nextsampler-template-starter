'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleProgress } from './simple-progress'

const ProgressExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Progress'} />
      {/* Progress examples */}
      <SimpleProgress />
    </div>
  )
}

export default ProgressExamplePage
