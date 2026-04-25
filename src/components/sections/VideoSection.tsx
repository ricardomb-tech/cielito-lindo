'use client'

import { motion } from 'framer-motion'

export function VideoSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-primary uppercase leading-tight mb-8">
              ¡RESERVA AHORA Y VIVE<br/>UNA EXPERIENCIA<br/>INOLVIDABLE!
            </h2>
            <div className="space-y-6 text-lg text-foreground/90 font-medium">
              <p>
                Ideal para parejas, familias o amigos, Cielito Lindo es el destino
                perfecto para quienes buscan un escape romántico, un retiro
                especial o un momento de paz en un ambiente único.
              </p>
              <p>
                Relájate en un entorno íntimo y elegante, disfruta de vistas
                impresionantes, paseos al aire libre y la magia de la vida
                campestre. Aquí, cada momento es una oportunidad para
                redescubrir la tranquilidad y reconectar con lo esencial.
              </p>
            </div>
          </motion.div>
          
          {/* Video Embedded */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/8pdsFuIvMao?autoplay=0&rel=0&showinfo=0" 
                title="Cabañas Finca Cielito Lindo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
