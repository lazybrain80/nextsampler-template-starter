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
  Popover,
  PopoverTrigger,
  PopoverContent,
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
import { 
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/design/components'

<Popover>
  <PopoverTrigger asChild>
    <Button>
      <Icons.BadgeCheck className="w-5 h-5" />
      <span className="ml-2">Click me for Popover</span>
    </Button>
  </PopoverTrigger>
  <PopoverContent className="p-4 bg-white rounded-lg shadow-lg">
    <div className="flex flex-col space-y-2">
      <Button variant="ghost">Option 1</Button>
      <Button variant="ghost">Option 2</Button>
      <Button variant="ghost">Option 3</Button>
    </div>
  </PopoverContent>
</Popover>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const PopoverExample = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Icons.BadgeCheck className="w-5 h-5" />
          <span className="ml-2">Click me for Popover</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col space-y-2">
          <Button variant="ghost">Option 1</Button>
          <Button variant="ghost">Option 2</Button>
          <Button variant="ghost">Option 3</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export const SimplePopover = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Popover example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          {/** component sample */}
          <PopoverExample />
        </div>
      </CardContent>
    </Card>
  )
}
