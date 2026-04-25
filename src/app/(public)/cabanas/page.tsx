'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { CABANAS } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'

export default function CabanasPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] w-full bg-[#1a2e22] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image 
          src="/images/cabanas.jpg" 
          alt="Cabañas"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 drop-shadow-md"
          >
            NUESTRAS CABAÑAS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="text-lg md:text-xl text-white/90 drop-shadow-md"
          >
            Confortables cabañas hechas en madera con malla mosquitera, baños secos ecológicos, energía solar y ventiladores
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {CABANAS.map((cabana, i) => (
              <motion.div 
                key={cabana.id}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
                    src={cabana.imagenes[0]} 
                    alt={cabana.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold px-3 py-1">
                      {cabana.tipo === 'romantica' ? 'Romántica' : 'Familiar/Grupal'}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-playfair font-bold text-foreground mb-3">{cabana.nombre}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {cabana.descripcion}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Amenidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {cabana.amenidades.map(am => (
                        <span key={am} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/50 pt-6">
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Desde</p>
                      <p className="text-2xl font-bold text-foreground">
                        ${cabana.precio_base.toLocaleString('es-CO')}
                        <span className="text-sm font-normal text-muted-foreground"> / noche</span>
                      </p>
                    </div>
                    <Link 
                      href={`/reservar?cabana=${cabana.id}`}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                      Reservar esta cabaña
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
