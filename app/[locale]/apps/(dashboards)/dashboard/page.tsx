'use client'

import { BoardHeader } from '@/design/features/user-board'
import {
  SalesPerformanceChart,
  PropertyTypesChart
} from './chart-cards'
import { PropertyTable } from './property-table'
import { OverviewCards } from './overview-cards'

const DashboardPage = () => {
  return (
    <div className='flex-1 overflow-auto bg-slate-100'>
      <div className='p-8'>
        {/* Header */}
        <BoardHeader title={'Dashboard2'} />
        {/* Overview Cards */}
        <OverviewCards />
        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <SalesPerformanceChart className='bg-white p-2 rounded-2xl shadow-lg' />
          <PropertyTypesChart className='bg-white p-2 rounded-2xl shadow-lg' />
        </div>

        {/* Properties Table */}
        <PropertyTable className='bg-white rounded-2xl shadow-lg' />
      </div>
    </div>
  )
}

export default DashboardPage
