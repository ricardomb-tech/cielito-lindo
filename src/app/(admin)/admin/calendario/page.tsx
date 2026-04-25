'use client'

import { AdminTopbar } from '@/components/admin/AdminTopbar'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const DIAS = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb']

// Mock reservations mapped to day numbers
const reservasMock: Record<number, { huesped: string; cabana: string; tipo: 'ocupada'|'entrada'|'salida' }[]> = {
  25: [{ huesped: 'Camila Torres', cabana: 'Baetoto', tipo: 'entrada' }],
  26: [{ huesped: 'Camila Torres', cabana: 'Baetoto', tipo: 'ocupada' }],
  27: [{ huesped: 'Camila Torres', cabana: 'Baetoto', tipo: 'salida' }],
  28: [{ huesped: 'Andrés Restrepo', cabana: 'Grupales', tipo: 'entrada' }],
  29: [{ huesped: 'Andrés Restrepo', cabana: 'Grupales', tipo: 'ocupada' }],
  30: [{ huesped: 'Andrés Restrepo', cabana: 'Grupales', tipo: 'salida' }],
}

const tipoStyle: Record<string, string> = {
  entrada:  'bg-emerald-500 text-white',
  ocupada:  'bg-blue-500 text-white',
  salida:   'bg-amber-500 text-white',
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function CalendarioPage() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdminTopbar title="Calendario de Ocupación" />

      <div className="flex-1 p-6 md:p-8 space-y-6">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 items-center">
          {[
            { label: 'Entrada', cls: 'bg-emerald-500' },
            { label: 'Ocupada', cls: 'bg-blue-500' },
            { label: 'Salida',  cls: 'bg-amber-500' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className={cn("w-3 h-3 rounded-full", l.cls)} />
              {l.label}
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
          {/* Calendar Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <button onClick={prevMonth} className="p-2 hover:bg-muted rounded-xl transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="font-bold text-xl font-playfair">
              {MESES[month]} {year}
            </h2>
            <button onClick={nextMonth} className="p-2 hover:bg-muted rounded-xl transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Day Labels */}
          <div className="grid grid-cols-7 border-b border-border">
            {DIAS.map(d => (
              <div key={d} className="text-center py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {d}
              </div>
            ))}
          </div>

          {/* Day Cells */}
          <div className="grid grid-cols-7">
            {Array.from({ length: totalCells }).map((_, i) => {
              const dayNum = i - firstDay + 1
              const isValid = dayNum >= 1 && dayNum <= daysInMonth
              const isToday = isValid && dayNum === today.getDate() && month === today.getMonth() && year === today.getFullYear()
              const events = isValid ? (reservasMock[dayNum] || []) : []

              return (
                <div
                  key={i}
                  className={cn(
                    "min-h-[100px] border-b border-r border-border/50 p-2 transition-colors",
                    !isValid && "bg-muted/20",
                    isValid && "hover:bg-muted/30 cursor-pointer"
                  )}
                >
                  {isValid && (
                    <>
                      <div className={cn(
                        "w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold mb-2",
                        isToday ? "bg-primary text-primary-foreground" : "text-foreground"
                      )}>
                        {dayNum}
                      </div>
                      <div className="space-y-1">
                        {events.map((ev, ei) => (
                          <div 
                            key={ei} 
                            className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-md truncate", tipoStyle[ev.tipo])}
                            title={`${ev.huesped} – ${ev.cabana}`}
                          >
                            {ev.huesped.split(' ')[0]} · {ev.cabana}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming reservations list */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <h3 className="font-bold text-lg mb-4">Próximas entradas este mes</h3>
          <div className="space-y-3">
            {[
              { dia: '25 Abr', huesped: 'Camila Torres', cabana: 'Cabaña Baetoto', noches: 2 },
              { dia: '28 Abr', huesped: 'Andrés Restrepo', cabana: 'Cabañas Grupales', noches: 2 },
              { dia: '01 May', huesped: 'María García', cabana: 'Cabaña Baetoto', noches: 2 },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 hover:bg-muted/60 transition-colors">
                <div className="bg-primary text-primary-foreground rounded-xl px-3 py-2 text-center min-w-[52px]">
                  <p className="text-[10px] font-bold uppercase">Entra</p>
                  <p className="text-sm font-black">{r.dia.split(' ')[0]}</p>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{r.huesped}</p>
                  <p className="text-xs text-muted-foreground">{r.cabana} · {r.noches} noches</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}