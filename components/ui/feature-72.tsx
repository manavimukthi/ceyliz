import { ArrowRight } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  image: string
}

interface Feature72Props {
  heading?: string
  description?: string
  linkUrl?: string
  linkText?: string
  features?: Feature[]
}

export const Feature72 = ({
  heading = 'Powerful Features',
  description =
    'Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.',
  linkUrl = '/contact',
  linkText = 'Book a demo',
  features = [
    {
      id: 'feature-1',
      title: 'Modern Design',
      description:
        'Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'feature-2',
      title: 'Responsive Layout',
      description:
        'Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'feature-3',
      title: 'Easy Integration',
      description:
        'Simple integration process with comprehensive documentation and dedicated support team.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'feature-4',
      title: 'Advanced Analytics',
      description:
        'Powerful analytics tools to help you understand your users and make data-driven decisions.',
      image:
        'https://images.unsplash.com/photo-1551281044-8b1b7a9d6a6c?auto=format&fit=crop&w=1400&q=80',
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-10">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground text-sm sm:text-base lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group inline-flex items-center text-sm font-medium sm:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-border"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
