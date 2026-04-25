'use client'

import { motion } from 'framer-motion'
import { EXPERIENCIAS } from '@/lib/mock-data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function ExperienciasGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a2e22]/90 z-10" />
      <Image 
        src="/images/cover_home_desk.jpg" 
        alt="Selva tropical"
        fill
        className="object-cover"
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            Experiencias que te Transforman
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Sumérgete en la magia del bosque húmedo tropical, la cultura ancestral y la paz que solo la naturaleza salvaje puede ofrecer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCIAS.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e22] via-[#1a2e22]/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
              <Image 
                src={exp.imagen} 
                alt={exp.nombre}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {exp.nombre}
                </h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 line-clamp-3">
                  {exp.descripcion}
                </p>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <span className="text-white font-semibold text-sm">
                    {exp.precio ? `$${exp.precio.toLocaleString('es-CO')}` : 'Incluido'}
                  </span>
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/experiencias"
            className="inline-flex items-center text-white/90 font-semibold hover:text-white transition-colors"
          >
            Ver todas las experiencias <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
