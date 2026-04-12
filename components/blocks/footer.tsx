import Link from 'next/link'
import { Share2, MessageCircle, Globe } from 'lucide-react'

export default function FooterSection() {
    return (
        <footer className="border-t bg-white pt-16 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm space-y-3">
                        <Link href="/" aria-label="go home" className="inline-flex items-center overflow-hidden">
                            <img src="/logo-light-mode.svg" alt="Ceyliz logo" className="h-10 w-[130px] object-cover object-left dark:hidden" />
                            <img src="/logo-dark-mode.svg" alt="Ceyliz logo" className="hidden h-10 w-[130px] object-cover object-left dark:block" />
                        </Link>
                        <p className="text-muted-foreground text-sm">AI Automation for Small Businesses</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                        <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                        <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                            <Share2 className="size-5" />
                        </Link>
                        <Link href="#" aria-label="Twitter / X" className="text-muted-foreground hover:text-primary transition-colors">
                            <MessageCircle className="size-5" />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                            <Globe className="size-5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-10 border-t py-6 text-center text-sm text-muted-foreground">
                    Copyright © 2026 Ceyliz. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
