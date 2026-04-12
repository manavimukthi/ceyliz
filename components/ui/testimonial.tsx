import { cn } from '@/lib/utils'
import { useState } from 'react'

const testimonials = [
    {
        id: 1,
        quote: 'Radiant made undercutting all of our competitors an absolute breeze.',
        author: 'Induja Manavimukthi',
        role: 'Co Founder',
        avatar: '/induja-manavimukthi.svg',
    },
    {
        id: 2,
        quote: 'Radiant made undercutting all of our competitors an absolute breeze.',
        author: 'Omaldi Venupama',
        role: 'Designer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop',
    },
    {
        id: 3,
        quote: 'Radiant made undercutting all of our competitors an absolute breeze.',
        author: 'Arvix',
        role: 'AI Employee',
        avatar: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=600&auto=format&fit=crop',
    },
]

export default function Example() {
    const [activeIndex] = useState(0)

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full rounded-2xl bg-black text-white">
                        <div className="relative -mt-px overflow-hidden rounded-2xl">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.author}
                                className={cn(
                                    'h-[220px] w-full rounded-2xl object-cover object-top transition-all duration-300',
                                    index === activeIndex && 'scale-105'
                                )}
                            />
                            <div className="pointer-events-none absolute bottom-0 z-10 h-44 w-full bg-gradient-to-t from-black to-transparent"></div>
                        </div>
                        <div className="px-4 pb-4 pt-3">
                            <p className="border-b border-gray-600 pb-4 text-sm font-medium sm:text-base">“{testimonial.quote}”</p>
                            <p className="mt-3 text-sm sm:text-base">— {testimonial.author}</p>
                            <p className="bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] bg-clip-text text-sm font-medium text-transparent">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
