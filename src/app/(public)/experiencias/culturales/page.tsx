'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users } from 'lucide-react'

export default function CulturalesPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/experiencias" className="text-muted-foreground hover:text-primary mb-8 inline-block font-medium">← Volver a Experiencias</Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6"
        >
          Cultura Indígena Emberá Katío
        </motion.h1>

        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden mb-12">
          <Image
            src="/images/imgi_3_pinturas_etnicas_embera.jpg"
            alt="Cultura Emberá Cielito Lindo"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground">
          <p className="text-xl text-muted-foreground mb-8">
            En Cielito Lindo valoramos, respetamos y procuramos enaltecer la ancestralidad que habita nuestras tierras. El Alto Sinú es hogar sagrado de los Emberá.
          </p>

          <div className="bg-tierra/10 p-8 rounded-2xl mb-12 border border-tierra/20">
            <h3 className="text-2xl font-playfair font-bold mb-4 flex items-center gap-2 text-tierra">
              <Users className="text-tierra" /> Intercambio Cultural Emberá
            </h3>
            <p>Duración: 4 horas</p>
            <p>Aporte Comunitario: $120.000 COP por persona</p>
            <p className="mt-4 text-muted-foreground">
              Esta experiencia es guiada por miembros de la comunidad. Aprenderás sobre su cosmovisión,
              plantas medicinales, tejidos tradicionales y pintura facial protectora. El pago por esta
              actividad se destina de forma 100% íntegra al cabildo indígena para sus fondos educativos y de salud.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-playfair text-primary font-bold mb-4">Añade esta experiencia a tu reserva</h3>
            <p className="mb-6">Las experiencias culturales requieren un mínimo de 48 horas de anticipación.</p>
            <Link
              href="/reservar"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all inline-block"
            >
              Consultar Disponibilidad
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}