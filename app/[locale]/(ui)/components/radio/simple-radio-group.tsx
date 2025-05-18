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
  RadioGroup,
  RadioGroupItem,
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
  RadioGroup,
  RadioGroupItem
} from '@/design/components'

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-6">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" />
      <span>Option 1</span>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="option2" />
      <span>Option 2</span>
    </div>
  </div>
</RadioGroup>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleRadioGroup = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Simple RadioGroup </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          {/* RadioGroup example */}
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <span>Option 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <span>Option 2</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="option3" />
                <span>Option 3</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option4" id="option4" />
                <span>Option 4</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option5" id="option5" />
                <span>Option 5</span>
              </div>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}
