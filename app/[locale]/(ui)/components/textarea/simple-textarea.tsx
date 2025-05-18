import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Textarea,
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
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { Textarea } from '@/design/components'

<Textarea 
  placeholder="Type something..." 
  className="w-96"
/>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleTextarea = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Textarea example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Default</label>
            <Textarea placeholder="Type something..." className="w-96" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Disabled</label>
            <Textarea placeholder="Type something..." className="w-96" disabled />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Read Only</label>
            <Textarea placeholder="Type something..." className="w-96" readOnly />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Default with Value
            </label>
            <Textarea
              placeholder="Type something..."
              className="w-96"
              defaultValue="This is a default value"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Disabled with Value
            </label>
            <Textarea
              placeholder="Type something..."
              className="w-96"
              defaultValue="This is a default value"
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Read Only with Value
            </label>
            <Textarea
              placeholder="Type something..."
              className="w-96"
              defaultValue="This is a default value"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Disabled & Read Only with Value
            </label>
            <Textarea
              placeholder="Type something..."
              className="w-96"
              defaultValue="This is a default value"
              disabled
              readOnly
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
