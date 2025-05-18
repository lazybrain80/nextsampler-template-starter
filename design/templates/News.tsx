import { Section } from '@/design/components'
import { NewsCard } from '@/design/features/landing/NewsCard'

const NewsInfo = [
  {
    date: 'February 15, 2023',
    imgSrc: '/images/landing/news_image_0.jpg',
    title: 'Enhancing Data Integration Strategies',
    content:
      'Discover effective techniques to improve data integration efforts while ensuring security and accessibility.',
    link: '/news/1',
  },
  {
    date: 'February 20, 2023',
    imgSrc: '/images/landing/news_image_1.jpg',
    title: 'Maximizing Collaboration in the Cloud',
    content:
      'Learn how to leverage collaboration tools in the cloud to enhance team productivity and data accessibility.',
    link: '/news/1',
  },
  {
    date: 'February 25, 2023',
    imgSrc: '/images/landing/news_image_2.jpg',
    title: 'Securing Data in a Digital World',
    content:
      'Explore essential strategies to ensure data security and optimize usability in an interconnected environment.',
    link: '/news/1',
  },
]

export const News = () => {
  // const t = useTranslations('News')

  return (
    <Section
      title="Latest Insights"
      subtitle="Latest News"
      description="Explore articles written to reflect the latest design and user experience trends. Just add your content and publish instantly."
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
        {NewsInfo.map((news, index) => (
          <NewsCard
            key={index}
            date={news.date}
            imgSrc={news.imgSrc}
            title={news.title}
            content={news.content}
            link={news.link}
          />
        ))}
      </div>
    </Section>
  )
}
