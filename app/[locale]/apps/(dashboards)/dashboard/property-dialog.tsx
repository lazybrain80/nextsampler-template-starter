'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button
} from '@/design/components'
import * as Icons from '@/design/icons'

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  status: string;
  image: string;
}

interface propertyDialogProps {
  property: Property
}

export const ShowProperty = ({ property }: propertyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-blue-600 hover:text-blue-800 hover:bg-slate-300">
          <Icons.Eye size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{property.name}</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <Image
          src={property.image}
          alt={property.name}
          width={1024}
          height={768}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Location:</p>
            <p>{property.location}</p>
          </div>
          <div>
            <p className="font-semibold">Price:</p>
            <p>{property.price}</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p>{property.status}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}