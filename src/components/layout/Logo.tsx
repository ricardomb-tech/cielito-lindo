'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'white' | 'color'
}

export function Logo({ className, variant = 'white' }: LogoProps) {
  return (
    <div className={cn("relative flex items-center gap-3", className)}>
      <div className="relative h-12 w-12 md:h-16 md:w-16">
        <Image 
          src="/images/logo.png" 
          alt="Cielito Lindo Logo"
          fill
          className={cn(
            "object-contain transition-all duration-300",
            variant === 'white' ? "brightness-0 invert" : ""
          )}
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className={cn(
          "font-playfair font-bold text-lg md:text-xl leading-tight tracking-wide transition-colors duration-300",
          variant === 'white' ? "text-white" : "text-primary"
        )}>
          Cielito Lindo
        </span>
        <span className={cn(
          "text-[8px] md:text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 font-medium",
          variant === 'white' ? "text-white/80" : "text-primary/60"
        )}>
          Finca Agroturística
        </span>
      </div>
    </div>
  )
}
