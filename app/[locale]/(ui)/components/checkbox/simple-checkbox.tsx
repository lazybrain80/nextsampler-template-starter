'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Checkbox,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/design/components'
import * as Icons from '@/design/icons'

const CustomCheckbox = ({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Checkbox>) => (
  <div className="flex items-center space-x-4">
    <Checkbox id={id} {...props} className={`w-6 h-6 ${props.className || ''}`} />
    <label htmlFor={id} className="text-lg font-medium text-gray-700">
      {label}
    </label>
  </div>
)

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
          <DialogTitle>Checkbox Sample Code</DialogTitle>
          <pre className="bg-slate-100 p-4 rounded-lg">
            {`
import { Checkbox } from '@/design/components'

const CustomCheckbox = ({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Checkbox>) => (
  <div className="flex items-center space-x-4">
    <Checkbox id={id} {...props} className={'w-6 h-6 \${props.className || ''}'} />
    <label htmlFor={id} className="text-lg font-medium text-gray-700">
      {label}
    </label>
  </div>
)

<CustomCheckbox id="checkbox-1" label="Default Checkbox" />
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleCheckbox = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Checkbox Examples </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {/* Checkbox Examples */}
          <CustomCheckbox id="checkbox-1" label="Default Checkbox" />
          <CustomCheckbox id="checkbox-2" label="Checked by Default" defaultChecked />
          <CustomCheckbox id="checkbox-3" label="Disabled Checkbox" disabled />
          <CustomCheckbox id="checkbox-4" label="Disabled & Checked" defaultChecked disabled />
          <CustomCheckbox id="checkbox-5" label="Custom Border Color" className="border-red-500" />
          <CustomCheckbox
            id="checkbox-6"
            label="Custom Background Color"
            className="bg-green-500"
          />
          <CustomCheckbox id="checkbox-7" label="Larger Checkbox" className="size-6" />
          <CustomCheckbox id="checkbox-8" label="Rounded Checkbox" className="rounded-full" />
          <CustomCheckbox id="checkbox-9" label="Checkbox with Shadow" className="shadow-lg" />
          <CustomCheckbox id="checkbox-10" label="Hover Effect" className="hover:bg-slate-300" />
        </div>
      </CardContent>
    </Card>
  )
}
