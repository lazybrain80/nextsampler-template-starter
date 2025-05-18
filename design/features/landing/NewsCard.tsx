import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/design/components'

export const NewsCard = ({
  date,
  imgSrc,
  title,
  content,
  link,
}: {
  date: string
  imgSrc: string
  title: string
  content: string
  link: string
}) => {
  return (
    <Card>
      <CardHeader>
        <div className={`rounded-xl`}>
          <Image
            className="hidden gap-10 md:flex rounded-xl"
            src={imgSrc}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="First Image"
          />
        </div>
      </CardHeader>
      <CardTitle className="p-5">
        <div className="font-normal mb-5 text-purple-500">{date}</div>
        <div className="text-3xl font-bold">{title}</div>
      </CardTitle>
      <CardContent className="font-light">{content}</CardContent>
      <CardFooter>
        <Link className="text-purple-500" href={link}>
          {title}에 대해 자세히 보기
        </Link>
      </CardFooter>
    </Card>
  )
}
