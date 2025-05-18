import Image from 'next/image'

export const LeadMain = ({
  banner,
  title,
  description,
  buttons,
  review,
}: {
  banner: React.ReactNode
  title: React.ReactNode
  description: string
  buttons: React.ReactNode
  review?: React.ReactNode
}) => (
  <>
    <div className="flex justify-center">
      <div className="w-7/10 md:w-1/2">
        <div className="mt-20 text-left">{banner}</div>
        <div className="my-10 text-left text-5xl font-bold tracking-tight">{title}</div>
        <div className="my-10 max-w-(--breakpoint-md) text-xl text-muted-foreground text-white">
          {description}
        </div>
        <div className="my-10 flex gap-x-5 max-sm:flex-col">{buttons}</div>
        {review && <div className="my-10">{review}</div>}
      </div>
      <Image
        className="my-10 hidden gap-10 md:flex"
        src="/images/landing/lead_main.png"
        width={639}
        height={450}
        alt="lead"
      />
    </div>
  </>
)
