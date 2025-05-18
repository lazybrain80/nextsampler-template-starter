'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleDialog } from './simple-dialog'
import { FullFeatureExamples } from './full-feature-dialog'

const DialogExamplesPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Dialog'} />
      {/* Dialog examples */}
      <SimpleDialog />
      <FullFeatureExamples />
    </div>
  )
}

export default DialogExamplesPage
