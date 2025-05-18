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
          <DialogTitle>Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`import {   
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/design/components'

<Dialog>
  <DialogTrigger asChild>
    <Button>Basic Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader className="bg-gray-100">
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <div className="p-8 bg-white">Dialog Content</div>
  </DialogContent>
</Dialog>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const BasicDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-500 text-white hover:bg-gray-600">Basic Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="bg-gray-100">
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <div className="p-8 bg-white">Dialog Content</div>
      </DialogContent>
    </Dialog>
  )
}

const InfoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">Info Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="bg-blue-100">
          <DialogTitle>Information</DialogTitle>
        </DialogHeader>
        <div className="p-8 bg-white">This is an informational dialog.</div>
      </DialogContent>
    </Dialog>
  )
}

const WarningDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Warning Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="bg-yellow-100">
          <DialogTitle>Warning</DialogTitle>
        </DialogHeader>
        <div className="p-8 bg-white text-yellow-600">This is a warning dialog.</div>
      </DialogContent>
    </Dialog>
  )
}

const SuccessDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 text-white hover:bg-green-600">Success Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="bg-green-100">
          <DialogTitle>Success</DialogTitle>
        </DialogHeader>
        <div className="p-8 bg-white text-green-600">This is a success dialog.</div>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleDialog = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Dialog Examples </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <BasicDialog />
          <InfoDialog />
          <WarningDialog />
          <SuccessDialog />
        </div>
      </CardContent>
    </Card>
  )
}
