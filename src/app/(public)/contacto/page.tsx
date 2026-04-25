'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4"
          >
            Contáctanos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Estamos aquí para ayudarte a planear tu experiencia perfecta
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm"
          >
            <h3 className="text-2xl font-playfair font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Nombre Completo</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Juan Pérez" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="juan@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Asunto</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Reserva para 4 personas" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Mensaje</label>
                <textarea className="w-full bg-background border border-border rounded-lg p-4 h-32 focus:ring-2 focus:ring-primary focus:outline-none resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-lg hover:bg-primary/90 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-8">Información Directa</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 opacity-80" />
                    <div>
                      <h4 className="font-bold text-lg">Dirección</h4>
                      <p className="text-primary-foreground/80">Vereda la Oscurana, Frasquillo<br/>Corregimiento de Tierralta, Córdoba</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 opacity-80" />
                    <div>
                      <h4 className="font-bold text-lg">WhatsApp & Teléfonos</h4>
                      <p className="text-primary-foreground/80">+57 314 828 6854</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 opacity-80" />
                    <div>
                      <h4 className="font-bold text-lg">Correo Electrónico</h4>
                      <p className="text-primary-foreground/80">cielitolindooscuranasas@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 mt-1 opacity-80" />
                    <div>
                      <h4 className="font-bold text-lg">Horario de Atención</h4>
                      <p className="text-primary-foreground/80">Lunes a Domingo<br/>8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.577457788934!2d-76.0664971!3d8.0827282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5066c0d6688f01%3A0x64dbb02bcf112a20!2sTierralta%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco" 
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Mapa"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}