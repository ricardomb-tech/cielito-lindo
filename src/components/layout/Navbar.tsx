'use client'

import * as React from "react"
import Link from 'next/link'
import { Logo } from './Logo'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Cabañas', href: '/cabanas' },
    { label: 'Gastronomía', href: '/gastronomia' },
    { label: 'Experiencias', href: '/experiencias' },
    { label: 'Contacto', href: '/contacto' },
  ]

  const isHeroPage = ['/', '/cabanas', '/gastronomia', '/experiencias'].includes(pathname)
  const isSolid = scrolled || !isHeroPage

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200 will-change-transform",
        isSolid ? "bg-black/50 backdrop-blur-md shadow-md border-b border-white/10" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Logo variant="white" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all duration-150 text-white relative group",
                pathname === link.href ? "opacity-100" : "opacity-80 hover:opacity-100"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-200",
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className={cn("flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity", "text-white")}>
            <Globe className="w-4 h-4" />
            <span>ES</span>
          </button>
          <Link
            href="/reservar"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            RESERVAR
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-background border-b shadow-lg lg:hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-playfair text-foreground py-2 border-b border-border/50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex justify-between items-center pt-4">
                <button className="flex items-center gap-2 text-foreground">
                  <Globe className="w-5 h-5" />
                  <span>Español</span>
                </button>
                <Link
                  href="/reservar"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-center font-medium"
                >
                  RESERVAR AHORA
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
