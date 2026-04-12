'use client'

import Example from '@/components/ui/testimonial'

export default function TeamSection() {
    return (
        <section id="team" className="scroll-mt-24 bg-muted/50">
            <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
                <div className="mb-10 md:mb-12">
                    <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
                        Meet Our Team
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-3xl text-pretty text-base leading-relaxed sm:text-lg">
                        Our talented professionals bring diverse expertise and passion to every project. Together,
                        we collaborate to deliver exceptional results and innovative solutions for our clients.
                    </p>
                </div>

                <Example />
            </div>
        </section>
    )
}
