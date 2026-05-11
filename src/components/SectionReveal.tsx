'use client'

import { ReactNode, useEffect, useRef, useState } from "react"

type SectionRevealProps = {
  children: ReactNode
  from?: "left" | "right"
  delayMs?: number
  className?: string
}

export default function SectionReveal({ children, from = "right", delayMs = 0, className = "" }: SectionRevealProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  const hiddenOffset = from === "left" ? "-translate-x-6" : "translate-x-6"

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${className} ${
        visible ? "translate-x-0 opacity-100" : `${hiddenOffset} opacity-0`
      }`}
    >
      {children}
    </div>
  )
}
