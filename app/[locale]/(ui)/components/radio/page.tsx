'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleRadioGroup } from './simple-radio-group'
const RadioGroupExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Radio'} />
      {/* Radio examples */}
      <SimpleRadioGroup />
    </div>
  )
}

export default RadioGroupExamplePage
