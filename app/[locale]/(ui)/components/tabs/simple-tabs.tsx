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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
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
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@/design/components'

<Tabs defaultValue="tab1" className="w-full">
  <TabsList className="flex space-x-2">
    <TabsTrigger value="tab1" className="px-4 py-2 rounded-lg">
      Tab 1
    </TabsTrigger>
    <TabsTrigger value="tab2" className="px-4 py-2 rounded-lg">
      Tab 2
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 bg-blue-100 rounded-lg">
    <p className="text-blue-700 font-semibold">This is the content for Tab 1.</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 bg-green-100 rounded-lg">
    <p className="text-green-700 font-semibold">This is the content for Tab 2.</p>
  </TabsContent>
</Tabs>
`}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const SimpleTabs = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Tabs Example </div>
            <SampleCodeDialog />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="flex space-x-2">
            <TabsTrigger value="tab1" className="px-4 py-2 rounded-lg">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" className="px-4 py-2 rounded-lg">
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab3" className="px-4 py-2 rounded-lg">
              Tab 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="p-4 bg-blue-100 rounded-lg">
            <p className="text-blue-700 font-semibold">This is the content for Tab 1.</p>
          </TabsContent>
          <TabsContent value="tab2" className="p-4 bg-green-100 rounded-lg">
            <p className="text-green-700 font-semibold">This is the content for Tab 2.</p>
          </TabsContent>
          <TabsContent value="tab3" className="p-4 bg-yellow-100 rounded-lg">
            <p className="text-yellow-700 font-semibold">This is the content for Tab 3.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
