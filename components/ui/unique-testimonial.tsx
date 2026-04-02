"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "We focus on practical AI automation that gives businesses clear, measurable growth.",
    author: "INDUJA MANAVIMUKTHI",
    role: "CO FONDER",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    quote: "Great design makes every automation easier to use, understand, and trust.",
    author: "OMALDI VENUPAMA",
    role: "DESINER",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <div className="flex flex-col items-center gap-8 py-10 sm:gap-10 sm:py-16">
      <div className="relative px-4 sm:px-8">
        <span className="pointer-events-none absolute -left-1 -top-4 select-none font-serif text-5xl text-foreground/[0.06] sm:-left-2 sm:-top-6 sm:text-7xl">
          "
        </span>

        <p
          className={cn(
            "mx-auto max-w-lg text-center text-xl font-light leading-relaxed text-foreground transition-all duration-400 ease-out sm:text-2xl md:text-3xl",
            isAnimating ? "scale-[0.98] opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
          )}
        >
          {displayedQuote}
        </p>

        <span className="pointer-events-none absolute -bottom-6 -right-1 select-none font-serif text-5xl text-foreground/[0.06] sm:-right-2 sm:-bottom-8 sm:text-7xl">
          "
        </span>
      </div>

      <div className="mt-1 flex flex-col items-center gap-5 sm:mt-2 sm:gap-6">
        <p
          className={cn(
            "text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-all duration-500 ease-out sm:text-xs sm:tracking-[0.2em]",
            isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
          )}
        >
          {displayedRole}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index
            const isHovered = hoveredIndex === index && !isActive
            const showName = isActive || isHovered

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative flex cursor-pointer items-center gap-0 rounded-full",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "bg-foreground shadow-lg" : "bg-transparent hover:bg-muted/80",
                  showName ? "px-2 py-2 pr-3 sm:pl-2 sm:pr-4" : "p-0.5",
                )}
              >
                <div className="relative shrink-0">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className={cn(
                      "h-8 w-8 rounded-full object-cover",
                      "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isActive ? "ring-2 ring-background/30" : "ring-0",
                      !isActive && "hover:scale-105",
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName ? "ml-2 grid-cols-[1fr] opacity-100" : "ml-0 grid-cols-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <span
                      className={cn(
                        "block whitespace-nowrap text-xs font-medium transition-colors duration-300 sm:text-sm",
                        isActive ? "text-background" : "text-foreground",
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
