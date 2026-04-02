 'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  Briefcase,
  CalendarDays,
  Database,
  Mail,
  Megaphone,
  MessageSquare,
} from 'lucide-react'

const integrationGroups = [
  {
    title: 'Communication',
    variant: 'primary' as const,
    icon: MessageSquare,
    items: ['Slack', 'WhatsApp Business', 'Telegram', 'Gmail', 'Outlook'],
  },
  {
    title: 'AI & Chatbots',
    variant: 'info' as const,
    icon: Bot,
    items: [
      'OpenAI (ChatGPT)',
      'Anthropic (Claude)',
      'Google Gemini',
      'Dialogflow',
    ],
  },
  {
    title: 'CRM & Sales',
    variant: 'success' as const,
    icon: Briefcase,
    items: ['HubSpot', 'Salesforce', 'Zoho CRM', 'Pipedrive'],
  },
  {
    title: 'Automation Platforms',
    variant: 'warning' as const,
    icon: BarChart3,
    items: ['Zapier', 'Make (Integromat)', 'n8n', 'Power Automate'],
  },
  {
    title: 'Productivity',
    variant: 'secondary' as const,
    icon: CalendarDays,
    items: ['Google Workspace', 'Notion', 'Trello', 'Asana', 'Calendly'],
  },
  {
    title: 'E-Commerce',
    variant: 'mono' as const,
    icon: Megaphone,
    items: ['Shopify', 'WooCommerce', 'Stripe'],
  },
  {
    title: 'Marketing',
    variant: 'destructive' as const,
    icon: Megaphone,
    items: ['Mailchimp', 'ActiveCampaign', 'Meta Ads', 'Google Ads'],
  },
  {
    title: 'Data & Storage',
    variant: 'primary' as const,
    icon: Database,
    items: ['Google Sheets', 'Airtable', 'Dropbox', 'OneDrive'],
  },
]

const variantClasses: Record<string, string> = {
  primary: 'text-sky-600',
  info: 'text-cyan-600',
  success: 'text-emerald-600',
  warning: 'text-amber-600',
  secondary: 'text-violet-600',
  mono: 'text-zinc-600 dark:text-zinc-300',
  destructive: 'text-rose-600',
}

export const Component = () => {
  const integrations = integrationGroups.flatMap((group) =>
    group.items.map((item) => ({
      item,
      variant: group.variant,
      icon: group.icon,
      key: `${group.title}-${item}`,
    }))
  )

  return (
    <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-3">
      {integrations.map((integration, index) => {
        const Icon = integration.icon

        return (
          <motion.div
            key={integration.key}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.02 }}
          >
            <Badge
              appearance="stroke"
              className="group h-16 w-full justify-start gap-3 rounded-3xl bg-background/90 px-5 text-base font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Icon
                className={`size-5 transition-transform duration-300 group-hover:scale-110 ${variantClasses[integration.variant]}`}
              />
              <span className="truncate">{integration.item}</span>
            </Badge>
          </motion.div>
        )
      })}
      <div className="text-muted-foreground col-span-full text-center text-xs">
        More integrations available on request.
      </div>
    </div>
  )
}
