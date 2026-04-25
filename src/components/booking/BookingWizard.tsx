'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  CalendarIcon, 
  Users, 
  CreditCard, 
  Hotel, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react'
import Image from 'next/image'
import { CABANAS } from '@/lib/mock-data'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export function BookingWizard() {
  const searchParams = useSearchParams()
  const initialCabanaId = searchParams.get('cabana')

  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    cabanaId: initialCabanaId || '1',
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  // Mock days calculation
  const nights = 2
  const selectedCabana = CABANAS.find(c => c.id === bookingData.cabanaId) || CABANAS[0]
  const subtotal = selectedCabana.precio_base * nights
  const serviceFee = subtotal * 0.05 // 5% transparant fee
  const total = subtotal + serviceFee

  const steps = [
    { id: 1, title: 'Cabaña', icon: <Hotel className="w-4 h-4" /> },
    { id: 2, title: 'Tus Datos', icon: <Users className="w-4 h-4" /> },
    { id: 3, title: 'Confirmar', icon: <CreditCard className="w-4 h-4" /> }
  ]

  const handleNext = () => setStep(s => Math.min(3, s + 1))
  const handleBack = () => setStep(s => Math.max(1, s - 1))

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      
      {/* Main Content Area */}
      <div className="w-full lg:w-2/3">
        <div className="bg-card/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          
          {/* Header Progress */}
          <div className="px-8 pt-8 pb-4 border-b border-border/50">
            <div className="flex justify-between items-center relative">
              {steps.map((s, i) => (
                <div key={s.id} className="flex flex-col items-center z-10">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    step >= s.id ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground border border-border"
                  )}>
                    {step > s.id ? <Check className="w-5 h-5" /> : s.icon}
                  </div>
                  <span className={cn(
                    "text-[10px] uppercase tracking-widest mt-2 font-bold",
                    step >= s.id ? "text-primary" : "text-muted-foreground"
                  )}>
                    {s.title}
                  </span>
                </div>
              ))}
              <div className="absolute top-5 left-0 w-full h-[2px] bg-muted -z-0" />
              <div 
                className="absolute top-5 left-0 h-[2px] bg-primary transition-all duration-700 -z-0" 
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Fecha de Entrada</label>
                      <input 
                        type="date" 
                        className="w-full h-14 bg-background border border-border rounded-2xl px-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                        value={bookingData.checkIn}
                        onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Fecha de Salida</label>
                      <input 
                        type="date" 
                        className="w-full h-14 bg-background border border-border rounded-2xl px-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                        value={bookingData.checkOut}
                        onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-playfair flex items-center gap-2">
                      <Hotel className="text-primary w-5 h-5" /> Selecciona tu alojamiento
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {CABANAS.map((cabana) => (
                        <div 
                          key={cabana.id}
                          className={cn(
                            "relative flex flex-col md:flex-row gap-6 p-4 rounded-3xl border-2 transition-all cursor-pointer group",
                            bookingData.cabanaId === cabana.id 
                              ? "border-primary bg-primary/5 ring-4 ring-primary/5" 
                              : "border-border hover:border-primary/50"
                          )}
                          onClick={() => setBookingData({...bookingData, cabanaId: cabana.id})}
                        >
                          <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                            <Image 
                              src={cabana.imagenes[0]} 
                              alt={cabana.nombre}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-lg font-bold">{cabana.nombre}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{cabana.tipo === 'romantica' ? 'Cama Doble • Vista a la Selva' : 'Camas Múltiples • Familiar'}</p>
                            <div className="flex items-center gap-4 text-xs font-semibold text-primary">
                              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Máx {cabana.capacidad_max} pers.</span>
                              <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {cabana.amenidades[0]}</span>
                            </div>
                          </div>
                          <div className="md:text-right flex flex-col justify-center">
                            <p className="text-2xl font-bold">${cabana.precio_base.toLocaleString('es-CO')}</p>
                            <p className="text-xs text-muted-foreground font-medium">POR NOCHE</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-playfair font-bold">Información de Contacto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Nombre Completo</label>
                      <input 
                        type="text" 
                        placeholder="Ej: Camilo Torres"
                        className="w-full h-14 bg-background border border-border rounded-2xl px-4 focus:ring-2 focus:ring-primary outline-none"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Correo Electrónico</label>
                      <input 
                        type="email" 
                        placeholder="correo@ejemplo.com"
                        className="w-full h-14 bg-background border border-border rounded-2xl px-4 focus:ring-2 focus:ring-primary outline-none"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        placeholder="+57 300 000 0000"
                        className="w-full h-14 bg-background border border-border rounded-2xl px-4 focus:ring-2 focus:ring-primary outline-none"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Número de Huéspedes</label>
                      <select 
                        className="w-full h-14 bg-background border border-border rounded-2xl px-4 focus:ring-2 focus:ring-primary outline-none"
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                      >
                        {[1, 2, 3, 4, 5].map(n => (
                          <option key={n} value={n}>{n} Huésped{n > 1 ? 'es' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Peticiones Especiales (Opcional)</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-background border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Decoración romántica, dieta especial, etc."
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-playfair font-bold">Verifica tu Reserva</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">Estas a un paso de confirmar tu estadía en Finca Cielito Lindo.</p>
                  </div>

                  <div className="bg-muted/50 rounded-3xl p-8 space-y-6">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="font-medium text-muted-foreground">Titular</span>
                      <span className="font-bold">{bookingData.name || 'No ingresado'}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-4">
                      <span className="font-medium text-muted-foreground">Cabaña</span>
                      <span className="font-bold text-primary">{selectedCabana.nombre}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">Comprobación de Seguridad</span>
                      <span className="flex items-center gap-1 text-green-600 text-sm font-bold">
                        <Check className="w-4 h-4" /> Pago 100% Seguro
                      </span>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                    <div className="flex gap-4">
                      <Info className="text-primary w-6 h-6 shrink-0" />
                      <p className="text-sm text-primary font-medium">
                        Al confirmar serás redirigido a nuestra pasarela de pagos oficial. El Registro Nacional de Turismo (197277) garantiza la transparencia de esta transacción.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between gap-4">
              <button 
                onClick={handleBack}
                className={cn(
                  "flex items-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all",
                  step === 1 ? "opacity-0 pointer-events-none" : "hover:bg-muted"
                )}
              >
                <ArrowLeft className="w-5 h-5" /> Anterior
              </button>
              
              <button 
                onClick={step === 3 ? () => alert('Redirigiendo a Pasarela de Pago...') : handleNext}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
              >
                {step === 3 ? 'Confirmar y Pagar' : 'Continuar'} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Summary (Transparency/Professionalism) */}
      <div className="w-full lg:w-1/3 sticky top-24">
        <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-border bg-muted/30">
            <h3 className="font-bold uppercase tracking-widest text-xs text-muted-foreground">Resumen de Precios</h3>
          </div>
          <div className="p-8 space-y-6">
            <div className="flex justify-between">
              <p className="text-muted-foreground font-medium">{nights} Noches x ${selectedCabana.precio_base.toLocaleString('es-CO')}</p>
              <p className="font-bold">${subtotal.toLocaleString('es-CO')}</p>
            </div>
            <div className="flex justify-between items-center group">
              <p className="text-muted-foreground font-medium flex items-center gap-1">
                Cargo por Servicio <Info className="w-3 h-3 cursor-help text-primary" />
              </p>
              <p className="font-bold text-green-600">+ ${serviceFee.toLocaleString('es-CO')}</p>
            </div>
            
            <div className="h-px bg-border my-6" />
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">Total a Pagar</p>
                <p className="text-[10px] text-muted-foreground mb-1">IMPUESTOS INCLUIDOS</p>
              </div>
              <p className="text-4xl font-black text-foreground">${total.toLocaleString('es-CO')}</p>
            </div>

            <div className="bg-muted p-4 rounded-2xl space-y-3 mt-8">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                <p className="text-xs font-semibold">Términos de cancelación flexibles</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 mt-1" />
                <p className="text-xs font-semibold">No hay cargos ocultos</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-primary mt-1" />
                <p className="text-xs font-semibold">Datos encriptados bajo protocolo SSL</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex flex-col items-center">
            <CreditCard className="w-6 h-6 mb-1 opacity-50" />
            <span className="text-[10px] font-bold uppercase">Wompi</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 mb-1 opacity-50" />
            <span className="text-[10px] font-bold uppercase">SSL Secured</span>
          </div>
        </div>
      </div>

    </div>
  )
}
