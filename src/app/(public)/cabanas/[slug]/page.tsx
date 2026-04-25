import { CABANAS } from '@/lib/mock-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
  return CABANAS.map((c) => ({
    slug: c.slug,
  }))
}

export default async function CabanaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cabana = CABANAS.find(c => c.slug === slug)

  if (!cabana) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">{cabana.nombre}</h1>
        <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-8">
          <Image src={cabana.imagenes[0]} alt={cabana.nombre} fill className="object-cover" />
        </div>
        <div className="bg-card p-8 rounded-3xl border border-border">
          <p className="text-xl text-muted-foreground mb-8">{cabana.descripcion}</p>
          <h3 className="font-bold text-lg mb-4">Amenidades</h3>
          <ul className="list-disc pl-5 mb-8 text-muted-foreground">
            {cabana.amenidades.map(am => (
              <li key={am}>{am}</li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-border pt-6">
            <span className="text-2xl font-bold text-foreground">${cabana.precio_base.toLocaleString('es-CO')} / noche</span>
            <Link 
              href={`/reservar?cabana=${cabana.id}`}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1"
            >
              Reservar ahora
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
