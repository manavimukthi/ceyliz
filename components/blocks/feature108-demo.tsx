import { Layout, Pointer, Zap } from 'lucide-react'

import { Feature108 } from '@/components/ui/shadcnblocks-com-feature108'

const demoData = {
  badge: 'About Ceyliz',
  heading: 'How We Build AI Automation That Actually Works',
  description: 'From strategy to delivery, we build practical AI systems tailored to real business needs.',
  tabs: [
    {
      value: 'tab-1',
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: 'Our Mission',
      content: {
        badge: 'Our Mission',
        title: 'Reliable automation built for growth',
        description:
          'Build reliable automation that saves time, improves customer response, and helps teams scale without extra overhead.',
        buttonText: 'Book a Call',
        imageSrc:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Modern office building',
      },
    },
    {
      value: 'tab-2',
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: 'How We Work',
      content: {
        badge: 'How We Work',
        title: 'Fast deployment with weekly optimization',
        description:
          'We design custom workflows, deploy fast, and keep optimizing your AI journey with clear weekly progress.',
        buttonText: 'See Our Process',
        imageSrc:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Team workshop',
      },
    },
    {
      value: 'tab-3',
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: 'Who We Support',
      content: {
        badge: 'Who We Support',
        title: 'Built for ambitious service businesses',
        description:
          'Service businesses, agencies, and online brands that want modern automation without complexity.',
        buttonText: 'Talk to Us',
        imageSrc:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Business team planning',
      },
    },
  ],
}

function Feature108Demo() {
  return <Feature108 {...demoData} />
}

export { Feature108Demo }
