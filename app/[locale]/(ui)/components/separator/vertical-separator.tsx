import { Card, CardHeader, CardTitle, CardContent, Separator } from '@/design/components'

export const VerticalSeparator = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div> Vertical Separator Example </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-4">
          <div>Left Content</div>
          <Separator className="h-16" orientation="vertical" decorative={true} />
          <div>Right Content</div>
        </div>
      </CardContent>
    </Card>
  )
}
