'use client'

import * as React from "react"
import { CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function BookingQuickSearch() {
  const router = useRouter()
  const [date, setDate] = React.useState<{ from?: Date, to?: Date }>({
    from: undefined,
    to: undefined,
  })
  const [guests, setGuests] = React.useState(2)

  const handleSearch = () => {
    // Generate URL with params
    const params = new URLSearchParams()
    if (date.from) params.set("checkin", date.from.toISOString())
    if (date.to) params.set("checkout", date.to.toISOString())
    params.set("adults", guests.toString())
    
    router.push(`/reservar?${params.toString()}`)
  }

  return (
    <div className="relative -mt-16 z-30 max-w-5xl mx-auto px-4">
      <div className="bg-card shadow-2xl rounded-2xl p-4 md:p-6 border border-border/40 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          
          {/* Check-in / Check-out */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-foreground/80 pl-1">Fechas de Estadía</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal h-14 bg-background",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-5 w-5 opacity-50" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y", { locale: es })} -{" "}
                        {format(date.to, "LLL dd, y", { locale: es })}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y", { locale: es })
                    )
                  ) : (
                    <span>Seleccionar fechas</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={{ from: date.from, to: date.to }}
                  onSelect={(range) => setDate({ from: range?.from, to: range?.to })}
                  numberOfMonths={2}
                  disabled={(d) => d < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground/80 pl-1">Huéspedes</label>
            <div className="flex items-center justify-between border rounded-lg h-14 px-4 bg-background">
              <Users className="w-5 h-5 text-muted-foreground" />
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted font-bold text-lg transition-colors"
                >
                  -
                </button>
                <span className="w-4 text-center font-semibold">{guests}</span>
                <button 
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted font-bold text-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action */}
          <Button 
            onClick={handleSearch}
            className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base shadow-lg shadow-primary/20 w-full"
          >
            Ver disponibilidad
          </Button>
          
        </div>
      </div>
    </div>
  )
}
