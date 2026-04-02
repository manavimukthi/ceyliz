'use client'

import * as React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Layout, Pointer, Zap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface TabContent {
  badge: string
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}

interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

interface Feature108Props {
  badge?: string
  heading?: string
  description?: string
  tabs?: Tab[]
}

const Feature108 = ({
  badge = 'shadcnblocks.com',
  heading = 'A Collection of Components Built With Shadcn & Tailwind',
  description = 'Join us to build flawless web solutions.',
  tabs = [
    {
      value: 'tab-1',
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: 'Boost Revenue',
      content: {
        badge: 'Modern Tactics',
        title: 'Make your site a true standout.',
        description:
          'Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.',
        buttonText: 'See Plans',
        imageSrc:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Business analytics dashboard',
      },
    },
    {
      value: 'tab-2',
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: 'Higher Engagement',
      content: {
        badge: 'Expert Features',
        title: 'Boost your site with top-tier design.',
        description:
          'Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.',
        buttonText: 'See Tools',
        imageSrc:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Team collaboration session',
      },
    },
    {
      value: 'tab-3',
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: 'Stunning Layouts',
      content: {
        badge: 'Elite Solutions',
        title: 'Build an advanced web experience.',
        description:
          'Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.',
        buttonText: 'See Options',
        imageSrc:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Modern software workspace',
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <Badge appearance="stroke">{badge}</Badge>
          <h2 className="max-w-2xl text-2xl font-semibold sm:text-3xl md:text-4xl leading-tight">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">{description}</p>
        </div>

        <Tabs.Root defaultValue={tabs[0].value} className="mt-8">
          <Tabs.List className="flex flex-col w-full items-stretch justify-center gap-2 sm:flex-row sm:items-center sm:gap-3 md:gap-6">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-muted flex items-center justify-center sm:justify-start gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
              >
                {tab.icon} <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="bg-muted/70 mx-auto mt-8 max-w-screen-xl rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
            {tabs.map((tab) => (
              <Tabs.Content
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-6 sm:gap-8 lg:grid-cols-2"
              >
                <div className="flex flex-col gap-4">
                  <Badge appearance="stroke" className="w-fit bg-background text-xs">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">{tab.content.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-lg">{tab.content.description}</p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="h-full min-h-64 w-full rounded-xl object-cover"
                />
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </div>
    </section>
  )
}

export { Feature108 }
