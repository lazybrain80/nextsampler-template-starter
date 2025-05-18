import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '@/design/components'

export const ScrollableSelectExample = () => {
  return (
    <Card className="rounded-2xl bg-white shadow-2xl">
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
