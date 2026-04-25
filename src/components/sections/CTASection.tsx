'use client'

import { MapPin, Phone, Mail, Award, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-background">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: Map */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.577457788934!2d-76.0664971!3d8.0827282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5066c0d6688f01%3A0x64dbb02bcf112a20!2sTierralta%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Mapa de Finca Cielito Lindo"
          />
        </div>

        {/* Right: Info & CTA */}
        <div className="w-full lg:w-1/2 bg-primary text-primary-foreground p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Tu refugio te espera
          </h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 shrink-0 mt-1 opacity-80" />
              <div>
                <h4 className="font-bold text-lg">Visítanos</h4>
                <p className="text-primary-foreground/80">Vereda la Oscurana, Frasquillo<br/>Corregimiento de Tierralta, Córdoba</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 shrink-0 opacity-80" />
              <div>
                <h4 className="font-bold text-lg">Llámanos o escríbenos</h4>
                <p className="text-primary-foreground/80">+57 314 828 6854</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 shrink-0 opacity-80" />
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-primary-foreground/80">cielitolindooscuranasas@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Award className="w-6 h-6 shrink-0 opacity-80" />
              <div>
                <h4 className="font-bold text-lg">RNT: 197277</h4>
                <p className="text-primary-foreground/80">Colombia Destinos de Paz</p>
              </div>
            </div>
          </div>

          <Link 
            href="/reservar"
            className="bg-white text-primary px-8 py-4 rounded-full text-center font-bold text-lg shadow-xl hover:scale-105 transition-transform max-w-sm mb-12"
          >
            RESERVAR AHORA
          </Link>

          <div className="flex items-center gap-6 mt-auto border-t border-white/20 pt-8">
            <span className="font-medium">Síguenos:</span>
            <a href="#" className="hover:text-white/70 transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-white/70 transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-white/70 transition-colors"><Youtube className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
