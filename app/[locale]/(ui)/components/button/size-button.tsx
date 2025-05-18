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

<Button variant="default" size={'sm'}>
  Size 'sm' Button
</Button>
<Button variant="default" size={'lg'}>
  Size 'lg' Button
</Button>
<Button variant="default" size={'icon'}>
  <Icons.Check className="w-5 h-5" />
</Button>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SizeButtons = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Size Buttons </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <Button variant="default">Default Button</Button>
          <Button variant="default" size={'sm'}>
            Size 'sm' Button
          </Button>
          <Button variant="default" size={'lg'}>
            Size 'lg' Button
          </Button>
          <Button variant="default" size={'icon'}>
            <Icons.Check className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
