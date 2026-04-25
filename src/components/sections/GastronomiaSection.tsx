'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function GastronomiaSection() {
  const platillos = [
    { nombre: 'Desayuno Típico', img: '/images/imgi_5_desayuno_tipico-1.jpg' },
    { nombre: 'Gallina Criolla Guisada', img: '/images/imgi_6_gallina_guisada-1.jpg' },
    { nombre: 'Cachama Frita', img: '/images/imgi_2_gastro-1.jpg' },
    { nombre: 'Sancocho Trifásico', img: '/images/imgi_3_gastro-2.jpg' }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {platillos.map((plato, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg border border-border/50 ring-1 ring-white/10">
                  <div className="aspect-square relative">
                    <Image 
                      src={plato.img} 
                      alt={plato.nombre}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-playfair font-bold text-lg md:text-xl drop-shadow-md">{plato.nombre}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Experiencias Gastronómicas
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              La cocina de Cielito Lindo es un viaje por los sabores tradicionales de Córdoba. 
              Preparamos cada plato con ingredientes frescos, muchos de ellos cultivados en nuestra propia finca o por familias de la región.
            </p>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Deleita tu paladar con nuestra especialidad: gallina guisada en leña, carnero en zumo de coco, arroz con coco, 
              yuca y plátano orgánico, además de mojarras y cachamas fritas acompañadas de refrescante jugo de caña.
            </p>

            <Link 
              href="/gastronomia"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ver menú completo <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
