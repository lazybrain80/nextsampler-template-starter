'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
} from '@/design/components'
import * as Icons from '@/design/icons'

const SampleCodeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icons.Code className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Badge Basic Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { Button } from '@/design/components'
{/* rounded = ['sm', 'lg', 'xl', '2xl', 'full'] */}
<Button variant="default" rounded={'sm'}>
  Rounded-sm Button
</Button>
<Button variant="default" rounded={'lg'}>
  Rounded-lg Button
</Button>
<Button variant="default" rounded={'xl'}>
  Rounded-xl Button
</Button>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const RoundedButtons = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Rounded Buttons </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <Button variant="default">Default Button</Button>
          <Button variant="default" rounded={'sm'}>
            Rounded-sm Button
          </Button>
          <Button variant="default" rounded={'lg'}>
            Rounded-lg Button
          </Button>
          <Button variant="default" rounded={'xl'}>
            Rounded-xl Button
          </Button>
          <Button variant="default" rounded={'2xl'}>
            Rounded-2xl Button
          </Button>
          <Button variant="default" rounded={'full'}>
            Rounded-full Button
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
