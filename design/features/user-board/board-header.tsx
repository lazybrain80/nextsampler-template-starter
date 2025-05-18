import { Card, CardContent, LocaleSwitcher } from '@/design/components'
import { UserAccountNav } from './user-account-nav'
import { cn } from '@/libs/utils'

export const BoardHeader = ({
  className,
  title,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn('rounded-2xl shadow-lg  mb-8', className)}>
      <CardContent className="bg-white flex items-center justify-between p-4">
        <div>
          <h1 className="ml-4 text-2xl font-semibold text-gray-800">{title}</h1>
        </div>
        <div className="flex items-center gap-4 mr-4">
          <LocaleSwitcher />
          <UserAccountNav />
        </div>
      </CardContent>
    </Card>
  )
}
