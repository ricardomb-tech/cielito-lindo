import Link from 'next/link'
import { Logo } from './Logo'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/">
              <Logo variant="white" />
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-4 max-w-sm">
              Exclusividad, elegancia y naturaleza en el corazón de Tierralta. Un tributo vivo a la sabiduría ancestral Emberá.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Explorar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/cabanas" className="hover:text-white transition-colors">Nuestras Cabañas</Link></li>
              <li><Link href="/gastronomia" className="hover:text-white transition-colors">Gastronomía Típica</Link></li>
              <li><Link href="/experiencias" className="hover:text-white transition-colors">Experiencias Naturales</Link></li>
              <li><Link href="/cultura" className="hover:text-white transition-colors">Cultura Emberá</Link></li>
              <li><Link href="/reservar" className="hover:text-white transition-colors font-semibold">Reservar Ahora</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Vereda la Oscurana, Frasquillo<br/>Tierralta, Córdoba, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+57 314 828 6854</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <span>cielitolindooscuranasas@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Certification */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-lg">Certificaciones</h4>
            <div className="space-y-3">
              <div className="bg-primary-foreground/10 p-4 rounded-lg border border-primary-foreground/20 inline-block">
                <p className="text-sm font-semibold">Registro Nacional de Turismo</p>
                <p className="text-2xl font-playfair font-bold text-secondary mt-1">197277</p>
              </div>
              <p className="text-sm text-primary-foreground/80 font-medium">Colombia Destinos de Paz</p>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Cabañas Finca Cielito Lindo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="/cancelaciones" className="hover:text-white transition-colors">Política de Cancelación</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
