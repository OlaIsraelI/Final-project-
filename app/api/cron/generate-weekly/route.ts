import { NextResponse } from "next/server"
import { generateDesignSuggestions } from "@/lib/openai"
import { createDesignSuggestion } from "@/lib/supabase"

export async function GET(request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    console.log("Running weekly design suggestion generation...")

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

    console.log(`Generated ${createdSuggestions.length} new design suggestions`)

    return NextResponse.json({
      success: true,
      count: createdSuggestions.length,
      message: "Weekly design suggestions generated successfully",
    })
  } catch (error) {
    console.error("Error in weekly generation:", error)
    return NextResponse.json({ error: "Failed to generate weekly suggestions" }, { status: 500 })
  }
}
