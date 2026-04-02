import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section id="features" className="scroll-mt-24 py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-3xl font-medium sm:text-4xl lg:text-5xl">The Smarter Way to Run Your Business</h2>
                    <p className="text-base leading-relaxed">Ceyliz builds custom automation systems that save time, reduce costs, and help your business grow - without adding extra staff.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl divide-x divide-y border *:p-6 sm:grid-cols-2 sm:*:p-8 lg:max-w-4xl lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Fast to Deploy</h3>
                        </div>
                        <p className="text-sm">Get your automation live in days, not months. We handle the setup from start to finish.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">AI Chatbots</h3>
                        </div>
                        <p className="text-sm">Serve your customers 24/7 with intelligent assistants that answer, qualify, and convert.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />
                            <h3 className="text-sm font-medium">Secure and Reliable</h3>
                        </div>
                        <p className="text-sm">Your business data is handled with enterprise-grade security and full reliability.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">Fully Custom</h3>
                        </div>
                        <p className="text-sm">Every automation is built specifically for your business needs - no one-size-fits-all.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">You Stay in Control</h3>
                        </div>
                        <p className="text-sm">Monitor and manage your automations through simple dashboards built for non-tech users.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Built for AI</h3>
                        </div>
                        <p className="text-sm">Future-proof your business with automations powered by the latest AI models.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
