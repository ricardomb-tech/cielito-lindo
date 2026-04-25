'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GastronomiaPage() {
  const menu = [
    {
      categoria: 'Desayunos Tradicionales',
      items: [
        { nombre: 'Desayuno Monteriano', desc: 'Huevo revuelto con tomate y cebolla, yuca, queso costeño y suero.', precio: 18000 },
        { nombre: 'Desayuno Cielito Lindo', desc: 'Arepa de huevo, chicharrón, bollo limpio y jugo de naranja.', precio: 22000 }
      ]
    },
    {
      categoria: 'Platos Fuertes',
      items: [
        { nombre: 'Sancocho Trifásico', desc: 'Sopa tradicional servida en leña con res, cerdo y gallina.', precio: 35000 },
        { nombre: 'Gallina Criolla Guisada', desc: 'Cocción lenta tradicional, acompañada de arroz con coco y patacón.', precio: 45000 },
        { nombre: 'Carnero en Zumo de Coco', desc: 'Especialidad de la región, servido con yuca cocida.', precio: 48000 },
        { nombre: 'Cachama Frita', desc: 'Pescado fresco frito, con arroz blanco, ensalada campesina y limón.', precio: 32000 }
      ]
    },
    {
      categoria: 'Bebidas Tradicionales',
      items: [
        { nombre: 'Jugo de Caña Orgánica', desc: 'Caña cultivada en nuestra finca, extraída en el momento.', precio: 8000 },
        { nombre: 'Limonada de Coco', desc: 'Refrescante combinación ideal para el clima caribeño.', precio: 12000 },
        { nombre: 'Chicha de Maíz', desc: 'Bebida fermentada tradicional indígena.', precio: 10000 }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image 
          src="/images/cover_home_desk.jpg" 
          alt="Gastronomía Cielito Lindo"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6"
          >
            NUESTRA GASTRONOMÍA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="text-lg md:text-xl text-white/90"
          >
            Sabores autóctonos que narran la historia de Córdoba.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Cielito Lindo cocinamos con el corazón. Nuestros ingredientes son cultivados de manera orgánica en nuestra finca o adquiridos directamente a familias campesinas locales para garantizar frescura y apoyar el ecosistema económico sabanero.
          </p>
        </div>

        <div className="space-y-16">
          {menu.map((seccion, i) => (
            <motion.div 
              key={seccion.categoria}
              initial={{ opacity: 1, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="bg-card p-8 md:p-12 rounded-3xl shadow-sm border border-border"
            >
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8 border-b border-border pb-4">
                {seccion.categoria}
              </h2>
              <div className="space-y-8">
                {seccion.items.map((item, j) => (
                  <div key={j} className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <h4 className="text-xl font-bold text-foreground">{item.nombre}</h4>
                      <p className="text-muted-foreground mt-2">{item.desc}</p>
                    </div>
                    <div className="font-bold text-xl text-foreground whitespace-nowrap">
                      ${item.precio.toLocaleString('es-CO')}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
