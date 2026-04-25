'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Users } from 'lucide-react'

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src="/images/montanas.jpg" 
          alt="Experiencias Cielito Lindo"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6"
          >
            EXPERIENCIAS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="text-lg md:text-xl text-white/90"
          >
            Conecta con tu ser interior a través de vivencias que transforman.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 1, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative h-[500px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-colors" />
            <Image 
              src="/images/cover_home_desk.jpg" 
              alt="Naturales"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute z-20 bottom-0 left-0 p-10">
              <div className="bg-primary/20 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">Experiencias Naturales</h2>
              <p className="text-white/80 mb-8 max-w-sm">
                Avistamiento de aves endémicas, senderismo por el bosque tropical, piscinas naturales y desconexión total.
              </p>
              <Link 
                href="/experiencias/naturales"
                className="bg-white text-primary px-8 py-3 rounded-full font-bold inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Conoce más <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 1, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative h-[500px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-colors" />
            <Image 
              src="/images/imgi_3_pinturas_etnicas_embera.jpg" 
              alt="Culturales"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute z-20 bottom-0 left-0 p-10">
              <div className="bg-tierra/40 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">Experiencias Culturales</h2>
              <p className="text-white/80 mb-8 max-w-sm">
                Un acercamiento respetuoso a las raíces indígenas de la comunidad Emberá Katío del Alto Sinú.
              </p>
              <Link 
                href="/experiencias/culturales"
                className="bg-white text-tierra px-8 py-3 rounded-full font-bold inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Conoce más <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
