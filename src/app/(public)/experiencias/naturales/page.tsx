'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf, Trees } from 'lucide-react'

export default function NaturalesPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/experiencias" className="text-muted-foreground hover:text-primary mb-8 inline-block font-medium">← Volver a Experiencias</Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6"
        >
          Santuario de Vida y Naturaleza
        </motion.h1>

        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/images/imgi_3_piscina_natural.jpg"
            alt="Experiencias Naturales Cielito Lindo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground">
          <p className="text-xl text-muted-foreground mb-8">
            Sumérgete en la pureza del Alto Sinú. Nuestras experiencias naturales están diseñadas para conectarte con el ritmo orgánico de la tierra y revitalizar tu espíritu.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-emerald-500/5 p-8 rounded-2xl border border-emerald-500/10">
              <h3 className="text-2xl font-playfair font-bold mb-4 flex items-center gap-2 text-emerald-600">
                <Leaf className="text-emerald-500" /> Senderismo Guiado
              </h3>
              <p className="text-muted-foreground">
                Recorre senderos milenarios rodeados de bosque primario, descubriendo la flora y fauna local de la mano de guías expertos de la región.
              </p>
            </div>

            <div className="bg-blue-500/5 p-8 rounded-2xl border border-blue-500/10">
              <h3 className="text-2xl font-playfair font-bold mb-4 flex items-center gap-2 text-blue-600">
                <Trees className="text-blue-500" /> Baño de Bosque
              </h3>
              <p className="text-muted-foreground">
                Una práctica terapéutica de inmersión sensorial bajo la sombra de árboles centenarios para reducir el estrés y reconectar con la paz interior.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-playfair text-primary font-bold mb-4">Disfruta de la Naturaleza</h3>
            <p className="mb-6 text-foreground">Todas nuestras actividades naturales están incluidas o disponibles como servicios adicionales durante tu estancia.</p>
            <Link
              href="/reservar"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all inline-block"
            >
              Reserva tu Estancia
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
