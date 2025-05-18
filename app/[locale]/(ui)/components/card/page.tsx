'use client'

import React from 'react'
import { BoardHeader } from '@/design/features/user-board'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/design/components'
import * as Icons from '@/design/icons'

const SampleCodeDialog1 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Card Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import {   
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/design/components'

<Card>
  <CardHeader className="border-b border-gray-300 bg-gray-100">
    <CardTitle>Sample Card Title</CardTitle>
    <CardDescription>This is a sample card description.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the content of the sample card. You can put any information here.</p>
    <ul>
      <li>Additional content item 1</li>
      <li>Additional content item 2</li>
      <li>Additional content item 3</li>
    </ul>
  </CardContent>
  <CardFooter className="border-t border-gray-300 bg-gray-100">
    <Button>Action</Button>
  </CardFooter>
</Card>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const CardPage = () => {
  return (
    <div className="flex-1 overflow-auto bg-slate-100 p-8 space-y-6">
      {/* Page Header */}
      <BoardHeader title={'Card'} />
      {/* Card examples */}
      <Card>
        <CardHeader className="border-b border-gray-300 bg-gray-100">
          <CardTitle>
            <div className="flex items-center justify-between">
              <div> Sample Card Title </div>
              <SampleCodeDialog1 />
            </div>
          </CardTitle>
          <CardDescription>This is a sample card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the sample card. You can put any information here.</p>
          <ul>
            <li>Additional content item 1</li>
            <li>Additional content item 2</li>
            <li>Additional content item 3</li>
          </ul>
        </CardContent>
        <CardFooter className="border-t border-gray-300 bg-gray-100">
          <Button>Action</Button>
        </CardFooter>
      </Card>

      {/* Additional Card Examples */}
      <Card className="bg-blue-100">
        <CardHeader className="border-b border-blue-300 bg-blue-200">
          <CardTitle>Blue Card</CardTitle>
          <CardDescription>This card has a blue background.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the blue card.</p>
          <ul>
            <li>Additional content item 1</li>
            <li>Additional content item 2</li>
            <li>Additional content item 3</li>
          </ul>
        </CardContent>
        <CardFooter className="border-t border-blue-300 bg-blue-200">
          <Button>Action</Button>
        </CardFooter>
      </Card>

      <Card className="border border-red-500">
        <CardHeader className="border-b border-red-500 bg-red-100">
          <CardTitle>Red Border Card</CardTitle>
          <CardDescription>This card has a red border.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the red border card.</p>
          <ul>
            <li>Additional content item 1</li>
            <li>Additional content item 2</li>
            <li>Additional content item 3</li>
          </ul>
        </CardContent>
        <CardFooter className="border-t border-red-500 bg-red-100">
          <Button>Action</Button>
        </CardFooter>
      </Card>

      <Card className="shadow-xl">
        <CardHeader className="border-b border-gray-300 bg-gray-100">
          <CardTitle>Shadow Card</CardTitle>
          <CardDescription>This card has a shadow effect.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the shadow card.</p>
          <ul>
            <li>Additional content item 1</li>
            <li>Additional content item 2</li>
            <li>Additional content item 3</li>
          </ul>
        </CardContent>
        <CardFooter className="border-t border-gray-300 bg-gray-100">
          <Button>Action</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardPage
