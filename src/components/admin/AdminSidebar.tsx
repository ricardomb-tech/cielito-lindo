'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  CalendarDays, 
  BedDouble,
  ClipboardList,
  DollarSign,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Bell
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/layout/Logo'
import React, { useState } from 'react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Reservas', href: '/admin/reservas', icon: ClipboardList },
  { label: 'Calendario', href: '/admin/calendario', icon: CalendarDays },
  { label: 'Cabañas', href: '/admin/cabanas', icon: BedDouble },
  { label: 'Precios', href: '/admin/precios', icon: DollarSign },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={cn(
      "h-screen bg-[#0d1a12] text-white flex flex-col transition-all duration-300 sticky top-0 shrink-0",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-white/10">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Logo variant="white" className="scale-75 origin-left" />
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-white/10 rounded-lg ml-auto transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {!collapsed && (
          <p className="text-[10px] uppercase tracking-widest text-white/30 px-3 mb-4 font-bold">
            Gestión
          </p>
        )}
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group font-medium text-sm",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/30" 
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-white" : "text-white/50 group-hover:text-white")} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/10 space-y-1">
        <Link
          href="/admin/configuracion"
          className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/50 hover:bg-white/10 hover:text-white transition-all text-sm"
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Configuración</span>}
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/50 hover:bg-red-500/20 hover:text-red-400 transition-all text-sm">
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Cerrar Sesión</span>}
        </button>
      </div>
    </aside>
  )
}
