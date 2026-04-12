import { HeroHeader } from '@/components/blocks/hero-section-1'
import FooterSection from '@/components/blocks/footer'
import { Feature108Demo } from '@/components/blocks/feature108-demo'
import { Logos3Demo } from '@/components/blocks/logos3-demo'
import { Feature72Demo } from '@/components/blocks/feature-72-demo'
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
                        <section className="py-12 md:py-16">
                            <div className="mx-auto max-w-4xl px-6">
                                <div className="rounded-2xl border bg-background p-6 text-center shadow-sm sm:p-8 md:p-10">
                                    <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-[0.16em] sm:text-xs">
                                        Co Founder
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold sm:text-xl md:text-2xl">
                                        Induja Manavimukthi
                                    </h3>
                                    <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl">
                                        We focus on practical AI automation that gives businesses clear, measurable growth.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <Cta3Demo />
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    )
}
