"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  deadline: string
}

export function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(deadline).getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return null
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [deadline])

  if (!timeLeft) {
    return <div className="text-red-600 font-semibold text-sm">⚠️ Deadline passed</div>
  }

  const isUrgent = timeLeft.days <= 7

  return (
    <div className={`grid grid-cols-4 gap-2 text-center ${isUrgent ? "text-red-600" : "text-slate-600"}`}>
      <div className="bg-slate-100 rounded p-2">
        <div className="font-bold text-lg">{timeLeft.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="bg-slate-100 rounded p-2">
        <div className="font-bold text-lg">{timeLeft.hours}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div className="bg-slate-100 rounded p-2">
        <div className="font-bold text-lg">{timeLeft.minutes}</div>
        <div className="text-xs">Min</div>
      </div>
      <div className="bg-slate-100 rounded p-2">
        <div className="font-bold text-lg">{timeLeft.seconds}</div>
        <div className="text-xs">Sec</div>
      </div>
    </div>
  )
}
