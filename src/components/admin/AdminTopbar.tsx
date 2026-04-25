'use client'

import { Bell, Search } from 'lucide-react'

export function AdminTopbar({ title }: { title: string }) {
  return (
    <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
      <h1 className="text-xl font-bold font-playfair text-foreground">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar reserva, huésped..."
            className="h-9 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none w-64"
          />
        </div>
        <button className="relative p-2 hover:bg-muted rounded-xl transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
        <div className="flex items-center gap-3 bg-muted px-3 py-1.5 rounded-xl">
          <div className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">A</div>
          <span className="text-sm font-semibold hidden md:block">Admin</span>
        </div>
      </div>
    </div>
  )
}
