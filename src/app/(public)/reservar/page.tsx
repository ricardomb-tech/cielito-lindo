'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookingWizard } from '@/components/booking/BookingWizard'

export default function ReservarPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold text-foreground mb-4"
          >
            Tu Reserva en Cielito Lindo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Completa los siguientes pasos para asegurar tu estadía en nuestro paraíso.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <React.Suspense fallback={<div className="text-center py-20">Cargando sistema de reservas...</div>}>
            <BookingWizard />
          </React.Suspense>
        </motion.div>
      </div>
    </main>
  )
}
