import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
    {
        name: 'Kasun Madhuwantha',
        role: 'Social Media Content Creator',
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
        content:
            'Great experience working on a Facebook automation project. Very professional, clear communication, and strong knowledge of automation and content workflows. Everything was delivered on time with practical solutions. Highly recommended, and I’d happily work together again',
    },
    {
        name: 'Théo Balick',
        role: 'Frontend Dev',
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
        content:
            'Tailark has transformed the way I develop web applications. The flexibility to customize every aspect is amazing.',
    },
    {
        name: 'Glodie Lukose',
        role: 'Frontend Dev',
        avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
        content:
            'The extensive collection of UI components has significantly accelerated my workflow. Tailark is a game-changer.',
    },
]

export default function TestimonialSection() {
    return (
        <section id="testimonials">
            <div className="bg-muted py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="mb-12">
                        <h2 className="text-foreground text-3xl font-semibold sm:text-4xl">
                            What Our Clients Say
                        </h2>
                        <p className="text-muted-foreground my-4 text-balance text-base sm:text-lg">
                            Discover why our clients love working with us. Read their
                            testimonials about our dedication to excellence, innovative
                            solutions, and exceptional customer service.
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <div className="bg-background ring-foreground/10 rounded-2xl border border-transparent px-5 py-6 ring-1 sm:px-8 sm:py-7">
                            <p className="text-foreground text-base leading-relaxed sm:text-xl">{testimonials[0].content}</p>
                            <div className="mt-6 flex items-center gap-3">
                                <Avatar className="ring-foreground/10 size-10 border border-transparent shadow ring-1">
                                    <AvatarImage
                                        src={testimonials[0].avatar}
                                        alt={testimonials[0].name}
                                    />
                                    <AvatarFallback>
                                        {testimonials[0].name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-foreground text-sm font-medium sm:text-base">
                                    {testimonials[0].name}
                                </div>
                                <span
                                    aria-hidden
                                    className="bg-foreground/25 size-1 rounded-full"
                                ></span>
                                <span className="text-muted-foreground text-sm sm:text-base">
                                    {testimonials[0].role}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
