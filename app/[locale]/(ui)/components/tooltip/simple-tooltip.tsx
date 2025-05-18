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
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipArrow,
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
            {`import { 
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipPortal,
  TooltipProvider } from '@/design/components'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Hover me</button>
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent>This is a tooltip example!</TooltipContent>
    </TooltipPortal>
  </Tooltip>
</TooltipProvider>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const TooltipExample = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Hover me</button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className="bg-blue-500 text-white px-4 py-2 rounded-md" sideOffset={5}>
            This is a tooltip example!
            <TooltipArrow className="fill-blue-500" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  )
}

const TooltipExampleSecondary = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md">Hover me</button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            side="bottom"
            sideOffset={10}
          >
            Tooltip with bottom alignment!
            <TooltipArrow className="fill-gray-500" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  )
}

const TooltipExampleLarge = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg">Hover me</button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
            side="right"
            sideOffset={8}
          >
            Large button tooltip!
            <TooltipArrow className="fill-green-500" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  )
}

const TooltipExampleWithIcon = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-md">
            <Icons.Info className="w-4 h-4 mr-2" />
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            className="bg-purple-500 text-white px-4 py-2 rounded-md"
            side="left"
            sideOffset={12}
          >
            Tooltip with an icon!
            <TooltipArrow className="fill-purple-500" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  )
}

const TooltipExampleRounded = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="px-4 py-2 bg-red-500 text-white rounded-full">Hover me</button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className="bg-red-500 text-white px-4 py-2 rounded-full" sideOffset={5}>
            Fully rounded button tooltip!
            <TooltipArrow className="fill-red-500" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  )
}

export const SimpleTooltip = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Tooltip example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-4">
          <TooltipExample />
          <TooltipExampleSecondary />
          <TooltipExampleLarge />
          <TooltipExampleWithIcon />
          <TooltipExampleRounded />
        </div>
      </CardContent>
    </Card>
  )
}
