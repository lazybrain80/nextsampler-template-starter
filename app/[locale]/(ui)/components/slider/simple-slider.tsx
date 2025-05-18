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
  Slider,
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
import { Slider } from '@/design/components'

<Slider defaultValue={[50]} max={100} step={1} className="w-96" />
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleSlider = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Slider example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-10">
          {/* 기본 Slider */}
          <Slider defaultValue={[50]} max={100} step={1} className="w-96" />

          {/* 다중 핸들 Slider */}
          <Slider defaultValue={[25, 75]} max={100} step={5} className="w-96" />

          {/* 최소값과 최대값 표시 Slider */}
          <div>
            <Slider defaultValue={[30]} max={100} step={10} className="w-96" />
            <div className="flex justify-between w-96 text-sm text-gray-500">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
