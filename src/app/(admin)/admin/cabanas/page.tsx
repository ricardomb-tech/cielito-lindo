'use client'

import { AdminTopbar } from '@/components/admin/AdminTopbar'
import { motion } from 'framer-motion'
import { CABANAS } from '@/lib/mock-data'
import Image from 'next/image'
import { BedDouble, Users, Zap, Edit, Eye, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const estadoCabana = [
  { id: '1', estado: 'ocupada', huesped: 'Camila Torres', salida: '27 Abr' },
  { id: '2', estado: 'libre', huesped: null, salida: null }
]

export default function CabanasAdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminTopbar title="Gestión de Cabañas" />

      <div className="flex-1 p-6 md:p-8 space-y-6">

        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm">{CABANAS.length} alojamientos registrados</p>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Plus className="w-4 h-4" /> Agregar Cabaña
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CABANAS.map((cabana, i) => {
            const estado = estadoCabana.find(e => e.id === cabana.id)
            return (
              <motion.div
                key={cabana.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.18 }}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Header */}
                <div className="relative h-52">
                  <Image 
                    src={cabana.imagenes[0]} 
                    alt={cabana.nombre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold",
                      estado?.estado === 'ocupada' ? "bg-blue-500 text-white" : "bg-emerald-500 text-white"
                    )}>
                      {estado?.estado === 'ocupada' ? '🔴 Ocupada' : '🟢 Disponible'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-xl font-playfair">{cabana.nombre}</h3>
                    {estado?.huesped && (
                      <p className="text-white/80 text-sm">👤 {estado.huesped} · Sale: {estado.salida}</p>
                    )}
                  </div>
                </div>

                {/* Info Body */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cabana.descripcion}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm font-semibold">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" /> Máx {cabana.capacidad_max}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Zap className="w-4 h-4 text-amber-500" /> {cabana.amenidades[2]}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <BedDouble className="w-4 h-4 text-violet-500" /> {cabana.tipo}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Precio / Noche</p>
                      <p className="text-2xl font-black">${cabana.precio_base.toLocaleString('es-CO')}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-muted transition-colors text-sm font-semibold">
                        <Eye className="w-4 h-4" /> Ver
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                        <Edit className="w-4 h-4" /> Editar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}