import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Section } from '@/design/components'

interface Showcase {
  title: string
  description: string
  imageUrl: string
}

const showcases: Showcase[] = [
  {
    title: 'showcase1_title',
    description: 'showcase1_description',
    imageUrl: '/images/showcase/dashboard.png',
  },
  {
    title: 'showcase2_title',
    description: 'showcase2_description',
    imageUrl: '/images/showcase/noteapp.png',
  },
  {
    title: 'showcase3_title',
    description: 'showcase3_description',
    imageUrl: '/images/showcase/components.png',
  },
]

const ShowcaseCard = ({ showcase, t }: { showcase: Showcase; t: (key: string) => string }) => (
  <div className="bg-white group border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
    <div className="relative w-full h-60">
      <Image
        src={showcase.imageUrl}
        alt={t(showcase.title)}
        fill
        className="group-hover:scale-105 transition-transform"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{t(showcase.title)}</h3>
      <p className="text-gray-600 text-sm">{t(showcase.description)}</p>
    </div>
  </div>
)

export const ExampleShowcase = () => {
  const t = useTranslations('ExampleShowcase')

  return (
    <Section>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('page_title')}</h2>
        <p className="text-gray-600 text-lg">{t('page_description')}</p>
      </div>
      {/* Showcase Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((showcase, index) => (
          <ShowcaseCard key={index} showcase={showcase} t={t} />
        ))}
      </div>
    </Section>
  )
}
