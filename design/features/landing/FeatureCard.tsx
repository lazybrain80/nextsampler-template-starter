import { cn } from '@/libs/utils'

export const FeatureCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div
      className={cn(
        'display flex items-center justify-center',
        'size-12 rounded-lg p-2',
        'bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200'
      )}
    >
      {icon}
    </div>

    <div className="mt-2 text-lg font-bold">{title}</div>

    <div className="my-3 w-8 border-t border-purple-400" />

    <div className="mt-2 text-muted-foreground">{children}</div>
  </div>
)
