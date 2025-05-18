'use client'

import { cn } from '@/libs/utils'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'

import { ShowProperty } from './property-dialog'


export const PropertyTable = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations('DashboardPage')
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false)
  const properties = [
    {
      id: 1,
      name: 'Luxury Villa',
      location: 'Beverly Hills',
      price: '$2,500,000',
      status: 'Listed',
      image: '/images/dashboard/photo_0.jpeg'
    },
    {
      id: 2,
      name: 'Modern Apartment',
      location: 'Manhattan',
      price: '$1,200,000',
      status: 'Pending',
      image: '/images/dashboard/photo_1.jpeg'
    }
  ]

  return (
    <div className={cn(className)}>
      <div className='p-6 border-b'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-semibold'>{t('property_listings')}</h3>
          <button
            onClick={() => setShowAddPropertyModal(true)}
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
          >
            Add Property
          </button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table className='w-full'>
          <TableHeader className='bg-gray-50'>
            <TableRow>
              <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('property')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('location')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('price')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('status')}</TableHead>
              <TableHead className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>{t('actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='divide-y divide-gray-200'>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell className='px-6 py-4'>
                  <div className='flex items-center'>
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={24}
                      height={24}
                      className='h-10 w-10 rounded-full object-cover'
                    />
                    <span className='ml-3'>{property.name}</span>
                  </div>
                </TableCell>
                <TableCell className='px-6 py-4'>{property.location}</TableCell>
                <TableCell className='px-6 py-4'>{property.price}</TableCell>
                <TableCell className='px-6 py-4'>
                  <span className={`px-2 py-1 rounded-full text-xs ${property.status === 'Listed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {property.status}
                  </span>
                </TableCell>
                <TableCell className='px-6 py-4'>
                  <div className='flex space-x-3'>
                    <ShowProperty property={property} />
                    <Button className='bg-white text-gray-600 hover:text-gray-800 hover:bg-slate-300'>
                      <Icons.Edit2 size={18} />
                    </Button>
                    <Button className='bg-white text-red-600 hover:text-red-800 hover:bg-slate-300'>
                      <Icons.Trash2 size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}