import { Suspense } from "react"
import Dashboard from "@/components/Dashboard"
import { DashboardSkeleton } from "@/components/DashboardSkeleton"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Design Inspiration Dashboard</h1>
          <p className="text-slate-600">AI-powered website design suggestions with automated tracking and deadlines</p>
        </div>

        <Suspense fallback={<DashboardSkeleton />}>
          <Dashboard />
        </Suspense>
      </div>
    </main>
  )
}
