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
  Progress,
} from '@/design/components'
import * as Icons from '@/design/icons'
import { useState, useEffect } from 'react'

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
import { Progress } from '@/design/components'

<div>
  <p className="text-sm font-medium">Default Progress</p>
  <Progress value={50} />
</div>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleProgress = () => {
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(prev => (prev < 100 ? prev + 1 : 0))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Simple progress </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* 기본 Progress */}
          <div>
            <p className="text-sm font-medium">Default Progress</p>
            <Progress value={50} />
          </div>

          {/* 색상이 있는 Progress */}
          <div>
            <p className="text-sm font-medium">Colored Progress</p>
            <Progress color={'bg-blue-500'} value={75} className="bg-green-500" />
          </div>

          {/* 애니메이션이 있는 Progress */}
          <div>
            <p className="text-sm font-medium">Animated Progress</p>
            <Progress color={'bg-orange-500'} value={30} className="animate-pulse" />
          </div>

          {/* 커스텀 크기의 Progress */}
          <div>
            <p className="text-sm font-medium">Custom Size Progress</p>
            <Progress color={'bg-red-500'} value={90} className="h-2" />
          </div>

          {/* 1초마다 증가하는 Progress */}
          <div>
            <p className="text-sm font-medium">Auto-Incrementing Progress</p>
            <Progress color={'bg-indigo-700'} value={progressValue} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
