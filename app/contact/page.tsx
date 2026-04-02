import { HeroHeader } from '@/components/blocks/hero-section-1'
import { Contact2 } from '@/components/ui/contact-2'
import FooterSection from '@/components/blocks/footer'

export default function ContactPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24">
                <Contact2
                    title="Contact Us"
                    description="Have a question or ready to automate your business? We'd love to hear from you. Let us know how Ceyliz can help."
                    phone="(your phone number)"
                    email="hello@ceyliz.com"
                    web={{ label: "ceyliz.com", url: "https://ceyliz.com" }}
                />
            </main>
            <FooterSection />
        </>
    )
}
