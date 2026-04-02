import { HeroHeader } from '@/components/blocks/hero-section-1'
import FooterSection from '@/components/blocks/footer'
import { Feature108Demo } from '@/components/blocks/feature108-demo'
import { Logos3Demo } from '@/components/blocks/logos3-demo'
import { Feature72Demo } from '@/components/blocks/feature-72-demo'
import { UniqueTestimonialDemo } from '@/components/blocks/unique-testimonial-demo'
import { Cta3Demo } from '@/components/blocks/cta-3-demo'

export default function AboutPage() {
    return (
        <>
            <HeroHeader />

            <main className="py-24 md:py-32">
                <section className="mx-auto max-w-5xl px-6">
                    <div className="p-0">
                        <Feature108Demo />
                        <Logos3Demo />
                        <Feature72Demo />
                        <UniqueTestimonialDemo />
                        <Cta3Demo />
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    )
}
