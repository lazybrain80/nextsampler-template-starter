'use client'

import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar
} from 'recharts'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/design/components'
import * as Icons from '@/design/icons'

export const SalesPerformanceChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('DashboardPage')
  const mockSalesData = [
    { month: 'Jan', sales: 65, pre: 50 },
    { month: 'Feb', sales: 59, pre: 60 },
    { month: 'Mar', sales: 80, pre: 70 },
    { month: 'Apr', sales: 81, pre: 75 },
    { month: 'May', sales: 56, pre: 60 },
    { month: 'Jun', sales: 55, pre: 50 },
  ]
  return (
    <Card className={cn(className)}>
      <CardHeader className='w-full'>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <div className='flex items-center'>
              <Icons.DollarSignCircle className='w-6 h-6 mr-2' />
              <CardTitle className='text-2xl font-semibold'>
                {t('sales_performance')}
              </CardTitle>
            </div>
            <CardDescription>
              {t('sales_performance_description')}
            </CardDescription>
          </div>
          <div className='w-1/3'>
            <Select defaultValue='2025'>
              <SelectTrigger>
                <SelectValue placeholder='Select year...' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='2020'> 2020 </SelectItem>
                <SelectItem value='2021'> 2021 </SelectItem>
                <SelectItem value='2022'> 2022 </SelectItem>
                <SelectItem value='2023'> 2023 </SelectItem>
                <SelectItem value='2024'> 2024 </SelectItem>
                <SelectItem value='2025'> 2025 </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={300}>
          <ComposedChart data={mockSalesData}>
            <defs>
              <linearGradient id='colorSales' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#3B82F6' stopOpacity={0.4} />
                <stop offset='75%' stopColor='#3B82F6' stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id='colorPre' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#34D399' stopOpacity={0.4} />
                <stop offset='75%' stopColor='#34D399' stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='3' stroke='#e0e0e0' />
            <XAxis dataKey='month' tick={{ fill: '#8884d8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#8884d8', fontSize: 12 }} axisLine={false} tickLine={false}/>
            <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', borderColor: '#ccc' }} itemStyle={{ color: '#8884d8' }} />
            <Area type='monotone' dataKey='sales' stroke='#3B82F6' fill='url(#colorSales)' fillOpacity={1} />
            <Bar dataKey='sales' barSize={16} fill='#3B82F6' />

            <Area type='monotone' dataKey='pre' stroke='#34D399' fill='url(#colorPre)' fillOpacity={1} />
            <Bar dataKey='pre' barSize={16} fill='#34D399' />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}