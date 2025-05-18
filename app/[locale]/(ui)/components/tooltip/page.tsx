'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleTooltip } from './simple-tooltip'

const TooltipExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Tooltip'} />
      {/* Tooltip examples */}
      <SimpleTooltip />
    </div>
  )
}

export default TooltipExamplePage
