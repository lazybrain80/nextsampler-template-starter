export const CenteredMain = ({
  banner,
  title,
  description,
  buttons,
}: {
  banner: React.ReactNode
  title: React.ReactNode
  description: string
  buttons: React.ReactNode
}) => (
  <>
    <div className="text-center">{banner}</div>

    <div className="mt-3 text-center text-5xl font-bold tracking-tight">{title}</div>

    <div className="mx-auto mt-5 max-w-(--breakpoint-md) text-center text-xl text-muted-foreground">
      {description}
    </div>

    <div className="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">{buttons}</div>
  </>
)
