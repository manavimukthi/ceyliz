import { ArrowRight } from 'lucide-react'

import { Card } from '@/components/ui/card'

interface Post {
  id: string
  title: string
  summary: string
  label: string
  author: string
  published: string
  url: string
  image: string
  tags?: string[]
}

interface Blog8Props {
  heading?: string
  description?: string
  posts?: Post[]
}

const Blog8 = ({
  heading = 'Portfolio Projects',
  description = 'Explore recent automation projects we built for growing businesses. Each project is focused on speed, conversion, and measurable results.',
  posts = [
    {
      id: 'post-1',
      title: 'Facebook Lead Automation for Content Creator Brand',
      summary:
        'Built an end-to-end pipeline that captures leads from Facebook, qualifies them with AI, and sends hot prospects to the sales team in real time.',
      label: 'Automation',
      author: 'Ceyliz Team',
      published: '12 Mar 2026',
      url: '/contact',
      image:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80',
      tags: ['Facebook', 'Lead Gen'],
    },
    {
      id: 'post-2',
      title: 'AI Customer Support Flow with CRM Integration',
      summary:
        'Delivered a chatbot and workflow suite that handles support queries 24/7, updates CRM records automatically, and escalates priority tickets instantly.',
      label: 'AI Support',
      author: 'Ceyliz Team',
      published: '28 Mar 2026',
      url: '/contact',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
      tags: ['AI Chatbot', 'CRM'],
    },
  ],
}: Blog8Props) => {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-5 max-w-3xl text-pretty text-3xl font-semibold sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">{post.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>View project</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} className="block">
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Blog8 }
