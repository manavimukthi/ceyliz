import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Starter Build',
        price: '$call / project',
        subtitle: 'Done-for-you automation built in 30 days',
        note: 'Money back guarantee',
        ctaLabel: 'Book a Call >',
        ctaVariant: 'outline' as const,
        features: [
            '30 days done-for-you',
            '1 custom automation workflow',
            'AI chatbot setup',
            'Weekly progress calls',
            'Bespoke for your business',
            'Quick wins in week 1',
        ],
    },
    {
        name: 'Growth Retainer',
        badge: 'MOST POPULAR',
        price: '$call / mo',
        subtitle: 'Ongoing monthly management with the latest AI updates',
        note: 'Hands off for you. Hands on for us',
        ctaLabel: 'Book a Call >',
        ctaVariant: 'default' as const,
        features: [
            'Everything in Starter',
            'Unlimited workflow updates',
            'Full AI end-to-end journey',
            'Weekly progress calls',
            'Grows with your business',
            'Massive ROI long term',
        ],
    },
    {
        name: 'Support',
        price: '$40 / month',
        subtitle: 'Get AI experts on hand daily for your business',
        note: 'Billed monthly',
        ctaLabel: 'Get Started',
        features: [
            'Access to AI experts daily',
            'Help for one brand/company',
            'Fast response times',
            'On hand to help',
            'Help with integrations',
            'Pick our brains',
        ],
        ctaVariant: 'outline' as const,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-24 py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">Pricing That Scales With Your Business</h2>
                    <p className="text-muted-foreground">Simple, transparent pricing for small businesses. No hidden fees. Cancel anytime.</p>
                </div>

                <div className="mt-8 grid gap-6 [--color-card:var(--color-muted)] *:border-none *:shadow-none md:mt-20 md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    {plans.map((plan) => (
                        <Card key={plan.name} className="bg-muted relative flex flex-col">
                            {plan.badge ? (
                                <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-br from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                                    {plan.badge}
                                </span>
                            ) : null}

                            <CardHeader>
                                <CardTitle className="font-medium">{plan.name}</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">{plan.price}</span>
                                <CardDescription className="text-sm">{plan.subtitle}</CardDescription>
                                {'note' in plan ? <CardDescription className="text-sm">{plan.note}</CardDescription> : null}
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {plan.features.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button asChild variant={plan.ctaVariant} className="w-full">
                                    <Link href="/contact">{'ctaLabel' in plan ? plan.ctaLabel : 'Get Started'}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
