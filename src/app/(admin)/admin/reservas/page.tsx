'use client'

import { AdminTopbar } from '@/components/admin/AdminTopbar'
import { motion } from 'framer-motion'
import { Check, Clock, X, Search, Filter, Eye, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const todasReservas = [
  { id: 'R001', huesped: 'Camila Torres', email: 'camila@email.com', phone: '+57 314 120 3456', cabana: 'Cabaña Baetoto', entrada: '25 Abr 2025', salida: '27 Abr 2025', noches: 2, total: 560000, estado: 'ocupada', huespedes: 2 },
  { id: 'R002', huesped: 'Andrés Restrepo', email: 'andres@email.com', phone: '+57 310 543 1234', cabana: 'Cabañas Grupales', entrada: '28 Abr 2025', salida: '30 Abr 2025', noches: 2, total: 360000, estado: 'pendiente', huespedes: 4 },
  { id: 'R003', huesped: 'María García', email: 'maria@email.com', phone: '+57 315 678 9012', cabana: 'Cabaña Baetoto', entrada: '01 May 2025', salida: '03 May 2025', noches: 2, total: 560000, estado: 'confirmada', huespedes: 2 },
  { id: 'R004', huesped: 'Luis Hernández', email: 'luis@email.com', phone: '+57 316 222 3344', cabana: 'Cabañas Grupales', entrada: '05 May 2025', salida: '07 May 2025', noches: 2, total: 720000, estado: 'confirmada', huespedes: 5 },
  { id: 'R005', huesped: 'Sofía Martínez', email: 'sofia@email.com', phone: '+57 317 988 7766', cabana: 'Cabaña Baetoto', entrada: '10 May 2025', salida: '12 May 2025', noches: 2, total: 560000, estado: 'cancelada', huespedes: 2 },
  { id: 'R006', huesped: 'Pedro Álvarez', email: 'pedro@email.com', phone: '+57 319 456 6543', cabana: 'Cabañas Grupales', entrada: '15 May 2025', salida: '18 May 2025', noches: 3, total: 540000, estado: 'confirmada', huespedes: 3 },
]

const estados: Record<string, { label: string; bg: string; text: string; icon: React.ReactNode }> = {
  ocupada:    { label: 'Ocupada',    bg: 'bg-blue-100',    text: 'text-blue-700',    icon: <Check className="w-3 h-3" /> },
  pendiente:  { label: 'Pendiente',  bg: 'bg-amber-100',   text: 'text-amber-700',   icon: <Clock className="w-3 h-3" /> },
  confirmada: { label: 'Confirmada', bg: 'bg-emerald-100', text: 'text-emerald-700', icon: <Check className="w-3 h-3" /> },
  cancelada:  { label: 'Cancelada',  bg: 'bg-red-100',     text: 'text-red-700',     icon: <X className="w-3 h-3" /> },
}

export default function ReservasPage() {
  const [filtro, setFiltro] = useState('todas')
  const [busqueda, setBusqueda] = useState('')

  const filtradas = todasReservas.filter(r => {
    const matchBusqueda = r.huesped.toLowerCase().includes(busqueda.toLowerCase()) || r.id.toLowerCase().includes(busqueda.toLowerCase())
    const matchFiltro = filtro === 'todas' || r.estado === filtro
    return matchBusqueda && matchFiltro
  })

  const totalIngresos = filtradas.filter(r => r.estado !== 'cancelada').reduce((sum, r) => sum + r.total, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <AdminTopbar title="Gestión de Reservas" />

      <div className="flex-1 p-6 md:p-8 space-y-6">
        {/* Filters */}
        <div className={cn("bg-card border border-border rounded-3xl p-6 flex flex-wrap items-center gap-4")}>
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre o ID..."
              className="w-full h-10 pl-9 pr-4 bg-muted border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {['todas', 'ocupada', 'confirmada', 'pendiente', 'cancelada'].map(f => (
              <button 
                key={f}
                onClick={() => setFiltro(f)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all",
                  filtro === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="ml-auto text-right min-w-fit">
            <p className="text-xs text-muted-foreground">Ingresos filtrados</p>
            <p className="text-xl font-black text-primary">${totalIngresos.toLocaleString('es-CO')}</p>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-3xl shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground uppercase tracking-wider bg-muted/50 border-b border-border">
                  <th className="text-left px-6 py-4 font-semibold">ID</th>
                  <th className="text-left px-6 py-4 font-semibold">Huésped</th>
                  <th className="text-left px-6 py-4 font-semibold">Cabaña</th>
                  <th className="text-left px-6 py-4 font-semibold">Check-in / Check-out</th>
                  <th className="text-left px-6 py-4 font-semibold">Huéspedes</th>
                  <th className="text-left px-6 py-4 font-semibold">Total</th>
                  <th className="text-left px-6 py-4 font-semibold">Estado</th>
                  <th className="text-left px-6 py-4 font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtradas.map((r, i) => {
                  const est = estados[r.estado]
                  return (
                    <motion.tr
                      key={r.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.02, duration: 0.15 }}
                      className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{r.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                            {r.huesped.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold">{r.huesped}</p>
                            <p className="text-xs text-muted-foreground">{r.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">{r.cabana}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="font-medium">{r.entrada}</p>
                        <p className="text-xs text-muted-foreground">{r.salida} · {r.noches} noches</p>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold">{r.huespedes}</td>
                      <td className="px-6 py-4 font-bold">${r.total.toLocaleString('es-CO')}</td>
                      <td className="px-6 py-4">
                        <span className={cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold", est.bg, est.text)}>
                          {est.icon} {est.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Ver detalle">
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <a 
                            href={`https://wa.me/${r.phone.replace(/\D/g,'')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 hover:bg-green-100 rounded-lg transition-colors" 
                            title="Contactar por WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4 text-green-600" />
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>

            {filtradas.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <Filter className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>No hay reservas que coincidan con el filtro</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}