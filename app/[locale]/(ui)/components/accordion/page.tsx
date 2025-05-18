'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { CustomAccordionCard } from './custom-accordion'
import { BasicAccordionCard } from './basic-accordion'

const AccordionPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Accordion'} />
      {/* Accordion examples */}
      <BasicAccordionCard />
      <CustomAccordionCard />
    </div>
  )
}

export default AccordionPage
