'use client'

import { AdminTopbar } from '@/components/admin/AdminTopbar'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  Users, 
  Calendar, 
  TrendingUp,
  Check,
  Clock,
  X,
  ArrowUpRight,
  BedDouble,
  Leaf
} from 'lucide-react'
import { cn } from '@/lib/utils'

const kpis = [
  { title: 'Ingresos del Mes', value: '$12.450.000', icon: DollarSign, trend: '+12%', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Reservas Activas', value: '34', icon: Calendar, trend: '+2 nuevas', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Huéspedes este Mes', value: '148', icon: Users, trend: '+18%', color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { title: 'Ocupación General', value: '82%', icon: TrendingUp, trend: '+5pts', color: 'text-amber-500', bg: 'bg-amber-500/10' }
]

const reservas = [
  { id: 'R001', huesped: 'Camila Torres', cabana: 'Cabaña Baetoto', entrada: '25 Abr', salida: '27 Abr', total: 560000, estado: 'ocupada' },
  { id: 'R002', huesped: 'Andrés Restrepo', cabana: 'Cabañas Grupales', entrada: '28 Abr', salida: '30 Abr', total: 360000, estado: 'pendiente' },
  { id: 'R003', huesped: 'María García', cabana: 'Cabaña Baetoto', entrada: '01 May', salida: '03 May', total: 560000, estado: 'confirmada' },
  { id: 'R004', huesped: 'Luis Hernández', cabana: 'Cabañas Grupales', entrada: '05 May', salida: '07 May', total: 720000, estado: 'confirmada' },
  { id: 'R005', huesped: 'Sofía Martínez', cabana: 'Cabaña Baetoto', entrada: '10 May', salida: '12 May', total: 560000, estado: 'cancelada' },
]

const estadoDot: Record<string, { label: string; class: string }> = {
  ocupada:    { label: 'Ocupada',    class: 'bg-blue-500 text-blue-700 bg-blue-100' },
  pendiente:  { label: 'Pendiente',  class: 'bg-amber-500 text-amber-700 bg-amber-100' },
  confirmada: { label: 'Confirmada', class: 'bg-emerald-500 text-emerald-700 bg-emerald-100' },
  cancelada:  { label: 'Cancelada',  class: 'bg-red-500 text-red-700 bg-red-100' },
}

const cabanas = [
  { nombre: 'Cabaña Baetoto', tipo: 'Romántica', estado: 'ocupada', salida: 'Mañana', ingresos: '$2.800.000' },
  { nombre: 'Cabaña Grupal 1', tipo: 'Familiar', estado: 'ocupada', salida: '30 Abr', ingresos: '$1.800.000' },
  { nombre: 'Cabaña Grupal 2', tipo: 'Familiar', estado: 'libre', salida: '—', ingresos: '$0' },
  { nombre: 'Cabaña Grupal 3', tipo: 'Familiar', estado: 'mantenimiento', salida: '—', ingresos: '$0' },
]

const card = "bg-card border border-border rounded-3xl shadow-sm"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminTopbar title="Dashboard" />
      
      <div className="flex-1 p-6 md:p-8 space-y-8">
        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className={cn(card, "p-6")}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={cn("p-3 rounded-2xl", kpi.bg)}>
                  <kpi.icon className={cn("w-6 h-6", kpi.color)} />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> {kpi.trend}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">{kpi.title}</p>
              <p className="text-3xl font-black mt-1">{kpi.value}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Central Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Reservas Recientes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={cn(card, "xl:col-span-2 overflow-hidden")}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-bold text-lg">Reservas Recientes</h2>
              <button className="text-xs text-primary font-bold hover:underline">Ver todas →</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-muted-foreground uppercase tracking-wider border-b border-border">
                    <th className="text-left px-6 py-3 font-semibold">Huésped</th>
                    <th className="text-left px-6 py-3 font-semibold">Cabaña</th>
                    <th className="text-left px-6 py-3 font-semibold">Fechas</th>
                    <th className="text-left px-6 py-3 font-semibold">Total</th>
                    <th className="text-left px-6 py-3 font-semibold">Estado</th>
                    <th className="text-left px-6 py-3 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map((r) => {
                    const est = estadoDot[r.estado]
                    return (
                      <tr key={r.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                              {r.huesped.charAt(0)}
                            </div>
                            <span className="font-semibold">{r.huesped}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{r.cabana}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{r.entrada} → {r.salida}</td>
                        <td className="px-6 py-4 font-bold">${r.total.toLocaleString('es-CO')}</td>
                        <td className="px-6 py-4">
                          <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold capitalize", est.class)}>
                            {est.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-primary text-xs font-semibold hover:underline">Ver</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Estado de Cabañas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={cn(card, "overflow-hidden")}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-primary" /> Cabañas Hoy
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {cabanas.map((c, i) => (
                <div key={i} className={cn(
                  "p-4 rounded-2xl border-l-4",
                  c.estado === 'ocupada' ? "border-l-blue-500 bg-blue-50 dark:bg-blue-900/10" :
                  c.estado === 'libre' ? "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/10" :
                  "border-l-amber-500 bg-amber-50 dark:bg-amber-900/10"
                )}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm">{c.nombre}</p>
                      <p className="text-xs text-muted-foreground">{c.tipo}</p>
                    </div>
                    <div className="text-right">
                      <span className={cn(
                        "text-xs font-bold px-2 py-0.5 rounded-full capitalize",
                        c.estado === 'ocupada' ? "bg-blue-100 text-blue-700" :
                        c.estado === 'libre' ? "bg-emerald-100 text-emerald-700" :
                        "bg-amber-100 text-amber-700"
                      )}>
                        {c.estado}
                      </span>
                      {c.salida !== '—' && (
                        <p className="text-[10px] text-muted-foreground mt-1">Sale: {c.salida}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={cn(card, "p-6 flex flex-wrap gap-6 items-center")}
        >
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">Impacto Ecológico:</span>
          </div>
          {[
            { label: 'kWh Solar Generados', value: '1,240' },
            { label: 'Árboles Plantados', value: '68' },
            { label: 'Visitas Comunitarias', value: '32' },
            { label: 'CO₂ Compensado', value: '480 kg' },
          ].map((stat, i) => (
            <div key={i} className="text-center border-l border-border pl-6">
              <p className="text-2xl font-black text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}