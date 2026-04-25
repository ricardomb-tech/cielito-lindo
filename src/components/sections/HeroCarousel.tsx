'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroCarousel() {
  const slides = [
    {
      image: '/images/montanas.jpg',
      title: 'DESCUBRE EL PARAÍSO',
      subtitle: 'Exclusividad, elegancia y naturaleza en el corazón de Tierralta'
    },
    {
      image: '/images/cover_home_desk.jpg',
      title: 'TURISMO Y CULTURA',
      subtitle: 'Un tributo vivo a la sabiduría ancestral de la comunidad indígena Emberá'
    },
    {
      image: '/images/cabanas.jpg',
      title: 'VIVE LA EXPERIENCIA',
      subtitle: 'Reserva ahora y vive momentos inolvidables rodeado de naturaleza salvaje.'
    }
  ]

  return (
    <section className="relative h-screen w-full">
      <h1 className="sr-only">Cabañas Finca Cielito Lindo - Ecoturismo y Hospedaje en Tierralta, Córdoba</h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10" />

            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-16">
              <motion.h2
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 tracking-wide drop-shadow-lg"
              >
                {slide.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-2xl text-white/90 mb-10 font-medium drop-shadow-md max-w-2xl"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/cabanas"
                  className="px-8 py-3.5 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors min-w-[200px]"
                >
                  Conoce más
                </Link>
                <Link
                  href="/reservar"
                  className="px-8 py-3.5 bg-primary border-2 border-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:border-primary/90 transition-colors shadow-xl shadow-primary/20 min-w-[200px]"
                >
                  Reservar ahora
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
