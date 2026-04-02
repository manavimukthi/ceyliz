'use client'

import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal, Check, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function CallToAction() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email) {
            setStatus('error')
            setMessage('Please enter a valid email address')
            return
        }

        setIsLoading(true)
        setStatus('idle')

        try {
            const response = await fetch('/api/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    timestamp: new Date().toISOString(),
                }),
            })

            if (response.ok) {
                setStatus('success')
                setMessage('Email sent successfully! Check your inbox.')
                setEmail('')
            } else {
                setStatus('error')
                setMessage('Failed to submit. Please try again.')
            }
        } catch (error) {
            console.error('Webhook error:', error)
            setStatus('error')
            setMessage('An error occurred. Please try again.')
        } finally {
            setIsLoading(false)
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section id="cta" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">Start Building Today</h2>
                    <p className="text-muted-foreground mt-4 text-base sm:text-lg">
                        Join thousands of teams already using our platform to build stunning products.
                    </p>

                    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md lg:mt-12">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-muted-foreground pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input
                                placeholder="Your mail address"
                                className="h-14 w-full min-w-0 bg-transparent pl-12 text-sm focus:outline-none"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button
                                    type="submit"
                                    aria-label="submit"
                                    className="rounded-[var(--radius)]"
                                    disabled={isLoading}
                                >
                                    <span className="hidden md:block">
                                        {isLoading ? 'Sending...' : 'Get Started'}
                                    </span>
                                    <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                                </Button>
                            </div>
                        </div>

                        {status === 'success' && (
                            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                                <Check className="size-4" />
                                <span>{message}</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
                                <AlertCircle className="size-4" />
                                <span>{message}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
