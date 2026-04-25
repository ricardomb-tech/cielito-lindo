'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

export function TestimonialsSection() {
  const testimonials = [
    {
      nombre: 'María G.',
      pais: 'Colombia',
      fecha: 'Hace 2 semanas',
      texto: 'Un lugar mágico. La cabaña Baetoto es perfecta para desconectarse. La atención de los dueños te hace sentir en casa y la comida es espectacular. ¡Volveremos!'
    },
    {
      nombre: 'James T.',
      pais: 'Estados Unidos',
      fecha: 'Hace 1 mes',
      texto: 'Incredible experience in the middle of nature. The Emberá cultural tour completely changed my perspective. Facilities are very clean and eco-friendly.'
    },
    {
      nombre: 'Carlos R.',
      pais: 'Colombia',
      fecha: 'Hace 2 meses',
      texto: 'Fuimos toda la familia y ocupamos dos cabañas grupales. Los niños amaron la piscina natural y las caminatas ecológicas súper recomendadas.'
    },
    {
      nombre: 'Laura P.',
      pais: 'España',
      fecha: 'Hace 3 meses',
      texto: 'El mejor sancocho que he probado en Colombia. La finca tiene una energía preciosa, te despiertas con el sonido de los pájaros y monos.'
    }
  ]

  return (
    <section className="py-24 bg-card px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4"
          >
            Lo que dicen nuestros huéspedes
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full mb-6"
          />
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9 / 5</span>
          </div>
          <p className="text-muted-foreground text-sm mt-2">Basado en reseñas de Google y Booking</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((testimonio, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-background border border-border p-8 rounded-2xl shadow-sm h-full flex flex-col relative">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6 text-sm flex-grow">
                    "{testimonio.texto}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-playfair text-xl">
                      {testimonio.nombre.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{testimonio.nombre}</h4>
                      <p className="text-xs text-muted-foreground">{testimonio.pais} • {testimonio.fecha}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
