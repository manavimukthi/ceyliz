import { HeroHeader } from '@/components/blocks/hero-section-1'
import FooterSection from '@/components/blocks/footer'

export default function PrivacyPage() {
    return (
        <>
            <HeroHeader />

            <main className="py-24 md:py-32">
                <section className="mx-auto max-w-4xl px-6">
                    <div className="rounded-2xl border bg-background/60 p-6 shadow-sm md:p-10">
                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
                        <p className="text-muted-foreground mt-4 text-sm md:text-base">
                            Last updated: April 1, 2026
                        </p>

                        <div className="mt-8 space-y-8 text-sm leading-7 md:text-base">
                            <section>
                                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                                <p className="text-muted-foreground mt-2">
                                    We collect information you provide directly, including your name, email, phone number, business details, and any data submitted through our forms, automations, or support channels.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                                <p className="text-muted-foreground mt-2">
                                    We use your information to deliver services, respond to requests, improve our automation products, send service updates, and provide customer support.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold">3. Data Sharing</h2>
                                <p className="text-muted-foreground mt-2">
                                    We do not sell your personal information. We may share limited data with trusted vendors and tools that help us operate our platform, only when necessary to provide our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold">4. Data Security</h2>
                                <p className="text-muted-foreground mt-2">
                                    We apply industry-standard safeguards to protect your information. While no method is 100% secure, we continuously improve our systems to reduce risk.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold">5. Your Rights</h2>
                                <p className="text-muted-foreground mt-2">
                                    You may request access, correction, or deletion of your personal data at any time. You may also opt out of non-essential communications.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold">6. Contact Us</h2>
                                <p className="text-muted-foreground mt-2">
                                    For privacy-related questions, contact us at info@ceyliz.com.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    )
}
