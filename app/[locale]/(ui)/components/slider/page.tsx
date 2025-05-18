'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import { SimpleSlider } from './simple-slider'
const SliderExamplePage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Slider'} />
      {/* Slider examples */}
      <SimpleSlider />
    </div>
  )
}

export default SliderExamplePage
