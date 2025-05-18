import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Input,
  Label,
} from '@/design/components'
import * as Icons from '@/design/icons'

const FullFeatureDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-500 text-white hover:bg-purple-600 flex items-center space-x-2">
          <Icons.Settings className="w-5 h-5" />
          <span>Full Feature Dialog</span>
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent className="max-w-lg mx-auto mt-20 bg-white rounded-lg shadow-lg">
          <DialogHeader className="bg-purple-100">
            <DialogTitle>Full Feature Dialog</DialogTitle>
            <DialogDescription>This dialog demonstrates all available features.</DialogDescription>
          </DialogHeader>
          <div className="p-8 space-y-4">
            <div>
              <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full"
              />
            </div>
          </div>
          <DialogFooter className="bg-gray-100 flex justify-end space-x-2 p-4">
            <DialogClose asChild>
              <Button className="bg-gray-500 text-white hover:bg-gray-600">Cancel</Button>
            </DialogClose>
            <Button className="bg-purple-500 text-white hover:bg-purple-600">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export const FullFeatureExamples = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> FullFeature Dialog Examples </div>
            <></>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <FullFeatureDialog />
        </div>
      </CardContent>
    </Card>
  )
}
