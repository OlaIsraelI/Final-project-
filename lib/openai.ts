import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function generateDesignSuggestions(count = 3) {
  const prompt = `Generate ${count} unique and innovative website design concepts. For each concept, provide:

1. A catchy title
2. A detailed description (2-3 sentences)
3. Inspiration source (e.g., "Dribbble trending", "Behance featured", "Awwwards winner")
4. Color palette (5 hex colors)
5. Typography style
6. Layout style
7. Target audience

Focus on current design trends like:
- Minimalism with bold accents
- Dark mode designs
- Glassmorphism
- Neumorphism
- Brutalist design
- Retro/vintage aesthetics
- 3D elements and illustrations
- Micro-interactions
- Sustainable/eco-friendly themes

Return the response as a JSON array with this structure:
[
  {
    "title": "string",
    "description": "string",
    "inspiration_source": "string",
    "color_palette": ["#hex1", "#hex2", "#hex3", "#hex4", "#hex5"],
    "typography": "string",
    "layout_style": "string",
    "target_audience": "string"
  }
]`

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.8,
    })

    // Extract JSON from the response
    const jsonMatch = text.match(/\[[\s\S]*\]/)
    if (!jsonMatch) {
      throw new Error("No valid JSON found in response")
    }

    const suggestions = JSON.parse(jsonMatch[0])
    return suggestions
  } catch (error) {
    console.error("Error generating design suggestions:", error)
    throw new Error("Failed to generate design suggestions")
  }
}
