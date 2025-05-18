'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/libs/utils'
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from 'recharts'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/design/components'
import {
  renderLabel
} from '@/design/features/user-board/common'
import * as Icons from '@/design/icons'

export const PropertyTypesChart = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('DashboardPage')

  const propertyTypeData = [
    { name: 'Residential', value: 45, color: "#FFB6C1", textColor: "text-pink-600" },
    { name: 'Commercial', value: 25, color: "#FFD700", textColor: "text-yellow-600" },
    { name: 'Industrial', value: 15, color: "#87CEEB", textColor: "text-blue-600" },
    { name: 'Land', value: 15, color: "#32CD32", textColor: "text-green-600" }
  ]

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div className='w-full'>
            <div className='flex items-center'>
              <Icons.Home className='w-6 h-6 mr-2' />
              <CardTitle className='text-2xl font-semibold'>{t('property_types')}</CardTitle>
            </div>
            <CardDescription>
              {t('property_types_description')}
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
      <CardContent
        className='flex items-center justify-between'
      >
        <ResponsiveContainer width='70%' height={300}>
          <PieChart>
            <Pie
              data={propertyTypeData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              blendStroke
              className="focus:outline-hidden"
              startAngle={90}
              animationDuration={600}
              animationBegin={0}
              animationEasing="ease-out"
              label={renderLabel}
              endAngle={-270}
              labelLine={false}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
            >
              {propertyTypeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  className='origin-center transition-transform duration-200 ease-out hover:scale-110 focus:outline-hidden outline-hidden'
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className='w-3/5'>
          {propertyTypeData.map((entry, index) => (
            <div className='flex justify-between mx-2 my-1' key={index}>
              <div className='flex space-x-2'>
                <Icons.Circle
                  className={`size-6 m-auto ${entry.textColor}`}
                />
                <span className={`text-2xl ${entry.textColor}`}>{entry.name}</span>
              </div>
              <span className={`text-2xl ${entry.textColor}}`}>{entry.value}%</span>
            </div>
          ))}
        </div>
        
      </CardContent>
    </Card>
  )
}