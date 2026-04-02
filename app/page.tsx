import { HeroSection } from '@/components/blocks/hero-section-1'
import DemoOne from '@/components/ui/demo'
import { Features } from '@/components/blocks/features-4'
import IntegrationsSection from '@/components/blocks/integrations'
import TestimonialSection from '@/components/blocks/testimonials'
import Pricing from '@/components/blocks/pricing'
import FAQSection from '@/components/blocks/faq'
import TeamSection from '@/components/blocks/team'
import CallToAction from '@/components/blocks/cta'
import FooterSection from '@/components/blocks/footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DemoOne />
      <Features />
      <IntegrationsSection />
      <Pricing />
      <TestimonialSection />
      <FAQSection />
      <TeamSection />
      <CallToAction />
      <FooterSection />
    </>
  )
}
