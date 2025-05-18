'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleTable } from './simple-table'

const TableExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Table'} />
      {/* Table examples */}
      <SimpleTable />
    </div>
  )
}

export default TableExamplePage
