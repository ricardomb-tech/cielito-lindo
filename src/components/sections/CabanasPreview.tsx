'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { CABANAS } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'

export function CabanasPreview() {
  return (
    <section className="py-24 bg-background px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4"
          >
            Nuestras Cabañas
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {CABANAS.map((cabana, i) => (
            <motion.div 
              key={cabana.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <Image 
                  src={cabana.imagenes[0]} 
                  alt={cabana.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold px-3 py-1 text-xs">
                    {cabana.tipo === 'romantica' ? 'Romántica' : 'Familiar/Grupal'}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cabana.nombre}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {cabana.descripcion}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {cabana.amenidades.slice(0, 3).map(am => (
                    <span key={am} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium">
                      {am}
                    </span>
                  ))}
                  {cabana.amenidades.length > 3 && (
                    <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium">
                      +{cabana.amenidades.length - 3} más
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-border/50 pt-6">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Desde</p>
                    <p className="text-xl font-bold text-foreground">
                      ${cabana.precio_base.toLocaleString('es-CO')}
                      <span className="text-sm font-normal text-muted-foreground">/noche</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link 
                      href={`/cabanas/${cabana.slug}`}
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver más
                    </Link>
                    <Link 
                      href={`/reservar?cabana=${cabana.id}`}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Reservar
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/cabanas"
            className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Ver todas las cabañas <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
