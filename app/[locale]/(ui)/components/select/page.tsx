'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleSelectExample } from './simple-select'
import { ScrollableSelectExample } from './scrollable-select'

const SelectExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Select'} />
      {/* Select examples */}
      <SimpleSelectExample />
      <ScrollableSelectExample />
    </div>
  )
}

export default SelectExamplePage
