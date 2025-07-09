import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface DesignSuggestion {
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

export async function getDesignSuggestions(): Promise<DesignSuggestion[]> {
  const { data, error } = await supabase
    .from("design_suggestions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching design suggestions:", error)
    return []
  }

  return data || []
}

export async function createDesignSuggestion(suggestion: Omit<DesignSuggestion, "id" | "created_at">) {
  const { data, error } = await supabase.from("design_suggestions").insert([suggestion]).select()

  if (error) {
    throw new Error(`Failed to create design suggestion: ${error.message}`)
  }

  return data[0]
}

export async function updateDesignStatus(id: string, status: DesignSuggestion["status"]) {
  const { error } = await supabase.from("design_suggestions").update({ status }).eq("id", id)

  if (error) {
    throw new Error(`Failed to update design status: ${error.message}`)
  }
}

export async function getUpcomingDeadlines() {
  const sevenDaysFromNow = new Date()
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)

  const { data, error } = await supabase
    .from("design_suggestions")
    .select("*")
    .lte("deadline", sevenDaysFromNow.toISOString())
    .neq("status", "Completed")

  if (error) {
    console.error("Error fetching upcoming deadlines:", error)
    return []
  }

  return data || []
}
