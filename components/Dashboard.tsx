import { getDesignSuggestions } from "@/lib/supabase"
import { DesignCard } from "./DesignCard"
import { GenerateButton } from "./GenerateButton"
import { StatsCards } from "./StatsCards"

export default async function Dashboard() {
  const suggestions = await getDesignSuggestions()

  const stats = {
    total: suggestions.length,
    notStarted: suggestions.filter((s) => s.status === "Not Started").length,
    inProgress: suggestions.filter((s) => s.status === "In Progress").length,
    completed: suggestions.filter((s) => s.status === "Completed").length,
  }

  return (
    <div className="space-y-8">
      <StatsCards stats={stats} />

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-slate-900">Design Suggestions</h2>
        <GenerateButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((suggestion) => (
          <DesignCard key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>

      {suggestions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No design suggestions yet</h3>
          <p className="text-slate-500 mb-4">Generate your first AI-powered design suggestions to get started.</p>
        </div>
      )}
    </div>
  )
}
