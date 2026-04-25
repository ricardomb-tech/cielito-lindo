'use client'

import { AdminTopbar } from '@/components/admin/AdminTopbar'
import { motion } from 'framer-motion'
import { Save, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const cabanas = [
  { id: '1', nombre: 'Cabaña Baetoto (Romántica)', precioBase: 280000, precioFinde: 340000, descuento: 0 },
  { id: '2', nombre: 'Cabañas Grupales', precioBase: 180000, precioFinde: 220000, descuento: 10 },
]

const temporadas = [
  { label: 'Semana Santa', fechas: '13-20 Abr 2025', multiplicador: 1.4, meses: 'Activa' },
  { label: 'Temporada Alta', fechas: 'Jun-Jul 2025', multiplicador: 1.3, meses: 'Próxima' },
  { label: 'Fin de Año', fechas: '28 Dic-1 Ene', multiplicador: 1.5, meses: 'Próxima' },
]

export default function PreciosPage() {
  const [precios, setPrecios] = useState(cabanas)

  const handleChange = (id: string, campo: string, valor: number) => {
    setPrecios(prev => prev.map(c => c.id === id ? {...c, [campo]: valor} : c))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdminTopbar title="Gestión de Precios" />

      <div className="flex-1 p-6 md:p-8 space-y-8">
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl p-4 flex items-start gap-3 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-400">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          <p className="text-sm font-medium">Los cambios de precios se aplican a nuevas reservas. Las reservas existentes mantienen el precio acordado.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {precios.map((cabana, i) => (
            <motion.div
              key={cabana.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.18 }}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h3 className="font-bold text-xl font-playfair">{cabana.nombre}</h3>
                <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all ml-auto">
                  <Save className="w-4 h-4" /> Guardar Cambios
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Precio Base (Lunes-Jueves)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                    <input
                      type="number"
                      value={cabana.precioBase}
                      onChange={(e) => handleChange(cabana.id, 'precioBase', parseInt(e.target.value))}
                      className="w-full h-14 bg-muted border border-border rounded-2xl pl-8 pr-4 text-xl font-bold focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">COP / noche</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Precio Fin de Semana</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">$</span>
                    <input
                      type="number"
                      value={cabana.precioFinde}
                      onChange={(e) => handleChange(cabana.id, 'precioFinde', parseInt(e.target.value))}
                      className="w-full h-14 bg-muted border border-border rounded-2xl pl-8 pr-4 text-xl font-bold focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Viernes, Sábado y Domingos</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Descuento Activo</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={cabana.descuento}
                      onChange={(e) => handleChange(cabana.id, 'descuento', parseInt(e.target.value))}
                      className="w-full h-14 bg-muted border border-border rounded-2xl pl-4 pr-8 text-xl font-bold focus:ring-2 focus:ring-primary outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">0 = sin descuento</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Temporadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-3xl overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h2 className="font-bold text-lg">📅 Temporadas Especiales</h2>
            <p className="text-sm text-muted-foreground mt-1">El precio base se multiplica automáticamente durante estas fechas</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 text-xs text-muted-foreground uppercase tracking-wider border-b border-border">
                  <th className="text-left px-6 py-4">Temporada</th>
                  <th className="text-left px-6 py-4">Fechas</th>
                  <th className="text-left px-6 py-4">Multiplicador</th>
                  <th className="text-left px-6 py-4">Estado</th>
                </tr>
              </thead>
              <tbody>
                {temporadas.map((t, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-bold">{t.label}</td>
                    <td className="px-6 py-4 text-muted-foreground">{t.fechas}</td>
                    <td className="px-6 py-4 font-bold text-primary">x{t.multiplicador}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-xs font-bold",
                        t.meses === 'Activa' ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"
                      )}>
                        {t.meses}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}