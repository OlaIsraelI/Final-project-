"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "./CountdownTimer"
import { updateDesignStatus } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Clock, Palette, ExternalLink } from "lucide-react"

interface DesignSuggestion {
  id: string
  title: string
  description: string
  inspiration_source: string
  color_palette: string[]
  typography: string
  layout_style: string
  target_audience: string
  created_at: string
  deadline: string
  status: "Not Started" | "In Progress" | "Completed"
}

interface DesignCardProps {
  suggestion: DesignSuggestion
}

export function DesignCard({ suggestion }: DesignCardProps) {
  const [status, setStatus] = useState(suggestion.status)
  const [isUpdating, setIsUpdating] = useState(false)
  const { toast } = useToast()

  const handleStatusUpdate = async (newStatus: typeof status) => {
    setIsUpdating(true)
    try {
      await updateDesignStatus(suggestion.id, newStatus)
      setStatus(newStatus)
      toast({
        title: "Status updated",
        description: `Design status changed to ${newStatus}`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Not Started":
        return "bg-slate-100 text-slate-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const isOverdue = new Date(suggestion.deadline) < new Date()

  return (
    <Card
      className={`transition-all duration-200 hover:shadow-lg ${isOverdue && status !== "Completed" ? "border-red-200 bg-red-50" : ""}`}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold text-slate-900 line-clamp-2">{suggestion.title}</CardTitle>
          <Badge className={getStatusColor(status)}>{status}</Badge>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>Created {new Date(suggestion.created_at).toLocaleDateString()}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-slate-600 text-sm line-clamp-3">{suggestion.description}</p>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">Inspired by {suggestion.inspiration_source}</span>
          </div>

          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-slate-400" />
            <div className="flex gap-1">
              {suggestion.color_palette.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-slate-200"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="text-sm text-slate-600">
            <strong>Typography:</strong> {suggestion.typography}
          </div>

          <div className="text-sm text-slate-600">
            <strong>Layout:</strong> {suggestion.layout_style}
          </div>

          <div className="text-sm text-slate-600">
            <strong>Target:</strong> {suggestion.target_audience}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">Time Remaining:</span>
          </div>
          <CountdownTimer deadline={suggestion.deadline} />
        </div>

        <div className="flex gap-2">
          {status === "Not Started" && (
            <Button
              size="sm"
              onClick={() => handleStatusUpdate("In Progress")}
              disabled={isUpdating}
              className="flex-1"
            >
              Start Project
            </Button>
          )}
          {status === "In Progress" && (
            <Button size="sm" onClick={() => handleStatusUpdate("Completed")} disabled={isUpdating} className="flex-1">
              Mark Complete
            </Button>
          )}
          {status === "Completed" && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleStatusUpdate("In Progress")}
              disabled={isUpdating}
              className="flex-1"
            >
              Reopen
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
