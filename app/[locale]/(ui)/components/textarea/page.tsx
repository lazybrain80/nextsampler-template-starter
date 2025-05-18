'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleTextarea } from './simple-textarea'
const TextareaExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Textarea'} />
      {/* Textarea examples */}
      <SimpleTextarea />
    </div>
  )
}

export default TextareaExamplePage
