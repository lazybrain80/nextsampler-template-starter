import Image from 'next/image'

export const HeroRightImage = ({
  imgSrc,
  banner,
  title,
  description,
  buttons,
  review,
}: {
  imgSrc: string
  banner?: React.ReactNode
  title: React.ReactNode
  description: string
  buttons: React.ReactNode
  review?: React.ReactNode
}) => (
  <>
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        {banner ? <div className="mt-5">{banner}</div> : <></>}
        <div className="text-6xl font-bold tracking-tight">{title}</div>
        <div className="my-10 max-w-(--breakpoint-md) text-xl text-muted-foreground">{description}</div>
        <div className="flex gap-x-5 max-sm:flex-col">{buttons}</div>
        {review && <div className="mt-20">{review}</div>}
      </div>
      <div className={`rounded-xl`}>
        <Image
          className="hidden gap-10 md:flex rounded-xl"
          src={imgSrc}
          width={640}
          height={640}
          alt="First Image"
        />
      </div>
    </div>
  </>
)
