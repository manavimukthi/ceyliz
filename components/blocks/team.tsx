'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { ChevronRight } from 'lucide-react'

const XIcon = () => (
    <svg viewBox="0 0 24 24" className="size-4 fill-muted-foreground" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)
import Link from 'next/link'

const members = [
    { src: 'https://avatars.githubusercontent.com/u/47919550?v=4', name: 'Meschac Irung', role: 'Frontend Engineer' },
    { src: 'https://avatars.githubusercontent.com/u/31113941?v=4', name: 'Bernard Ngandu', role: 'Backend Developer' },
    { src: 'https://avatars.githubusercontent.com/u/68236786?v=4', name: 'Theo Balick', role: 'UI/UX Designer' },
    { src: 'https://avatars.githubusercontent.com/u/99137927?v=4', name: 'Glodie Lukose', role: 'Project Manager' },
    { src: 'https://avatars.githubusercontent.com/u/12345678?v=4', name: 'Sarah Johnson', role: 'DevOps Engineer' },
    { src: 'https://avatars.githubusercontent.com/u/23456789?v=4', name: 'Michael Chen', role: 'QA Specialist' },
    { src: 'https://avatars.githubusercontent.com/u/34567890?v=4', name: 'Aisha Patel', role: 'Data Scientist' },
    { src: 'https://avatars.githubusercontent.com/u/45678901?v=4', name: 'Carlos Rodriguez', role: 'Product Manager' },
    { src: 'https://avatars.githubusercontent.com/u/56789012?v=4', name: 'Emma Wilson', role: 'Content Strategist' },
]

export default function TeamSection() {
    return (
        <section id="team" className="scroll-mt-24 bg-muted/50">
            <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
                {/* Header */}
                <div className="mb-10 md:mb-12">
                    <h2 className="text-foreground text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
                        Meet Our Team
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-3xl text-pretty text-base leading-relaxed sm:text-lg">
                        Our talented professionals bring diverse expertise and passion to every project. Together,
                        we collaborate to deliver exceptional results and innovative solutions for our clients.
                    </p>

                    <Button asChild variant="outline" className="mt-6 h-9 rounded-full pr-2">
                        <Link href="#">
                            We&apos;re hiring
                            <ChevronRight className="ml-1 size-4 opacity-60" />
                        </Link>
                    </Button>
                </div>

                {/* Members */}
                <div
                    role="list"
                    aria-label="Team members"
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6"
                >
                    {members.map((member, index) => (
                        <HoverCard key={index} openDelay={150}>
                            <HoverCardTrigger
                                className={[
                                    'grid cursor-pointer grid-cols-[auto_1fr] items-center gap-3',
                                    'rounded-lg border bg-background p-3 shadow-sm ring-1 ring-foreground/5',
                                    'transition-colors hover:bg-accent/40 focus:outline-none',
                                    'data-[state=open]:ring-2 data-[state=open]:ring-foreground/20',
                                ].join(' ')}
                            >
                                <Avatar className="rounded-lg size-10 border border-transparent shadow ring-1 ring-foreground/10">
                                    <AvatarImage src={member.src} alt={member.name} />
                                    <AvatarFallback className="rounded-lg text-sm">
                                        {member.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-foreground block truncate text-[15px] font-semibold">
                                    {member.name}
                                </span>
                            </HoverCardTrigger>

                            <HoverCardContent
                                align="start"
                                sideOffset={8}
                                className="w-80 rounded-lg p-4 border bg-background shadow-lg ring-1 ring-foreground/5"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="rounded-lg size-12 border border-transparent shadow ring-1 ring-foreground/10">
                                                <AvatarImage src={member.src} alt={member.name} />
                                                <AvatarFallback className="rounded-lg">
                                                    {member.name.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0">
                                                <div className="text-foreground truncate text-sm font-semibold sm:text-base">
                                                    {member.name}
                                                </div>
                                                <div className="text-muted-foreground truncate text-xs sm:text-sm">
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            asChild
                                            aria-label={`${member.name} on X (Twitter)`}
                                            className="shrink-0"
                                        >
                                            <Link href="#">
                                                <XIcon />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
