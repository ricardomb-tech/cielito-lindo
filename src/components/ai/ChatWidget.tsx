'use client'

import * as React from "react"
import { Leaf, X, MessageCircle, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  const [messages, setMessages] = React.useState([
    { role: 'assistant', content: '¡Hola! Soy el asistente virtual de Finca Cielito Lindo 🌿. ¿En qué te puedo ayudar hoy?' }
  ])
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSend = (e?: React.FormEvent, overrideMsg?: string) => {
    e?.preventDefault()
    const msgText = overrideMsg || inputValue
    if (!msgText.trim()) return

    const newMsg = { role: 'user', content: msgText }
    setMessages(prev => [...prev, newMsg])
    if (!overrideMsg) setInputValue("")
    setIsLoading(true)

    const userMsg = msgText.trim().toLowerCase()

    // Mock response after 1.2s
    setTimeout(() => {
      let botContent = ''
      if (userMsg.includes('cuesta') || userMsg.includes('precio') || userMsg.includes('valor')) {
         botContent = 'Nuestras cabañas tienen precios desde $250.000 COP la noche por pareja. Varía dependiendo de la temporada y el tipo de cabaña (familiares y parejas). ¿Te gustaría consultar opciones en nuestra pestaña de Reservas?'
      } else if (userMsg.includes('disponibilidad') || userMsg.includes('fin de semana')) {
        botContent = 'Para tu suerte, este fin de semana todavía tenemos 1 cabaña grupal y 2 para parejas disponibles 🛖. Recuerda que suelen agotarse rápido. Ve a la pestaña de Reservar para concretar tus fechas.'
      } else if (userMsg.includes('incluye')) {
        botContent = '🌿 Tu tarifa de estadía incluye:\n• Desayuno típico campesino\n• Acceso a la piscina natural y zona de hamacas\n• Uso de nuestras rutas de senderismo\n• WiFi, aire acondicionado y TV local en habitaciones\n• Seguro hotelero'
      } else if (userMsg.includes('gracias')) {
        botContent = '¡Con mucho gusto! Aquí estaré si necesitas algo más. Esperamos verte muy pronto en nuestro Cielito Lindo 💚.'
      } else {
        botContent = '¡Me parece genial! 😊 Como asistente beta sigo aprendiendo sobre Cielito Lindo. Para ayudarte de manera más humanizada o gestionar peticiones especiales, escríbenos a nuestro WhatsApp oficial: +57 314 828 6854.'
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: botContent 
      }])
      setIsLoading(false)
    }, 1200)
  }

  const suggestions = [
    "¿Cuánto cuesta una noche?",
    "¿Hay disponibilidad este fin de semana?",
    "¿Qué incluye la estadía?"
  ]

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:bg-primary/90 hover:scale-105 transition-all z-50 ring-4 ring-primary/20"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-primary text-[8px] font-bold items-center justify-center">1</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-[380px] h-[520px] bg-background border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Leaf className="w-5 h-5 flex-shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair font-bold leading-tight">Asistente Cielito Lindo</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[10px] text-white/80 uppercase tracking-wide">En línea ahora</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div 
                    className={cn(
                      "p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap",
                      msg.role === 'user' 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-white border border-border text-foreground rounded-tl-none"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex flex-col max-w-[85%] mr-auto items-start">
                  <div className="p-3 rounded-2xl bg-white border border-border text-foreground rounded-tl-none flex items-center gap-2 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions & Input */}
            <div className="p-4 bg-background border-t border-border">
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestions.map((sug, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(undefined, sug)}
                      className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground px-3 py-1.5 rounded-full border border-border/50 transition-colors whitespace-nowrap text-left"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}
              
              <form onSubmit={handleSend} className="relative flex items-end gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 max-h-32 min-h-[44px] w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  rows={1}
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="h-[44px] w-[44px] shrink-0 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-1" />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
