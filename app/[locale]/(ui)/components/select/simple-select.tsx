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
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
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
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from '@/design/components'

<Select>
  <SelectTrigger className="w-64">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectScrollUpButton />
    <SelectGroup>
      <SelectLabel>Group 1</SelectLabel>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectSeparator />
      <SelectLabel>Group 2</SelectLabel>
      <SelectItem value="option3">Option 3</SelectItem>
      <SelectItem value="option4">Option 4</SelectItem>
    </SelectGroup>
    <SelectScrollDownButton />
  </SelectContent>
</Select>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleSelectExample = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Select Example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton />
            <SelectGroup>
              <SelectLabel>Group 1</SelectLabel>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectSeparator />
              <SelectLabel>Group 2</SelectLabel>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
            </SelectGroup>
            <SelectScrollDownButton />
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export const ScrollableSelectExample = () => {
  return (
    <Card className="rounded-2xl bg-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Scrollable Select Example </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent className="max-h-40 overflow-auto">
            <SelectScrollUpButton />
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              {Array.from({ length: 20 }, (_, i) => (
                <SelectItem key={i} value={`option${i + 1}`}>
                  Option {i + 1}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectScrollDownButton />
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}
