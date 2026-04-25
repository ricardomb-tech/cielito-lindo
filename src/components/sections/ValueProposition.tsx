'use client'

import { Leaf, Home, Utensils, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function ValueProposition() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Naturaleza Virgen",
      description: "Despierta con el canto de las aves en medio de la selva húmeda tropical."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "6 Cabañas Únicas",
      description: "Diseño bioclimático con energía solar, baños ecológicos y máximo confort."
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Gastronomía Típica",
      description: "Sabores auténticos de Córdoba preparados con ingredientes orgánicos locales."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Cultura Emberá",
      description: "Conecta con la sabiduría ancestral a través de nuestras experiencias guiadas."
    }
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6"
          >
            ¿Por qué elegir Cielito Lindo?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 border border-border/50 text-center flex flex-col items-center group"
            >
              <div className="bg-primary/5 p-5 rounded-full mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-playfair text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
