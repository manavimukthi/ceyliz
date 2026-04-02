import Link from 'next/link'
import { ArrowRightIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8 sm:px-6">
      <PlusIcon
        className="absolute left-[-11.5px] top-[-12.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] top-[-12.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] right-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />

      <div className="pointer-events-none absolute -inset-y-6 left-0 w-px border-l" />
      <div className="pointer-events-none absolute -inset-y-6 right-0 w-px border-r" />

      <div className="absolute -z-10 left-1/2 top-0 h-full border-l border-dashed" />

      <div className="space-y-1">
        <h2 className="text-center text-2xl font-bold">
          Let your plans shape the future.
        </h2>
        <p className="text-muted-foreground text-center">
          Start your free trial today. No credit card required.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button asChild>
          <Link href="/contact">
            Get Started <ArrowRightIcon className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
