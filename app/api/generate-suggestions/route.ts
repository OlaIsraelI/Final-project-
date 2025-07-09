import { NextResponse } from "next/server"
import { generateDesignSuggestions } from "@/lib/openai"
import { createDesignSuggestion } from "@/lib/supabase"

export async function POST() {
  try {
    // Generate 3 new design suggestions
    const suggestions = await generateDesignSuggestions(3)

    const createdSuggestions = []

    for (const suggestion of suggestions) {
      // Set deadline to 30 days from now
      const deadline = new Date()
      deadline.setDate(deadline.getDate() + 30)

      const newSuggestion = await createDesignSuggestion({
        ...suggestion,
        deadline: deadline.toISOString(),
        status: "Not Started" as const,
      })

      createdSuggestions.push(newSuggestion)
    }

    return NextResponse.json({
      success: true,
      count: createdSuggestions.length,
      suggestions: createdSuggestions,
    })
  } catch (error) {
    console.error("Error generating suggestions:", error)
    return NextResponse.json({ error: "Failed to generate suggestions" }, { status: 500 })
  }
}
