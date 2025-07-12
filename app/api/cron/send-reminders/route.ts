import { NextResponse } from "next/server"
import { getUpcomingDeadlines } from "@/lib/supabase"
import { sendDeadlineReminder } from "@/lib/email"

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    console.log("Running deadline reminder check...")

    const upcomingDeadlines = await getUpcomingDeadlines()
    let remindersSent = 0

    for (const suggestion of upcomingDeadlines) {
      const deadline = new Date(suggestion.deadline)
      const now = new Date()
      const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

      // Send reminders for 7 days and 1 day before deadline
      if (daysUntilDeadline === 7 || daysUntilDeadline === 1) {
        try {
          // In a real app, you'd get the user's email from a users table
          // For demo purposes, using a placeholder email
          await sendDeadlineReminder(
            "user@example.com", // Replace with actual user email
            suggestion.title,
            daysUntilDeadline,
          )
          remindersSent++
        } catch (emailError) {
          console.error(`Failed to send reminder for ${suggestion.title}:`, emailError)
        }
      }
    }

    console.log(`Sent ${remindersSent} deadline reminders`)

    return NextResponse.json({
      success: true,
      remindersSent,
      message: "Deadline reminders processed successfully",
    })
  } catch (error) {
    console.error("Error in reminder cron job:", error)
    return NextResponse.json({ error: "Failed to process deadline reminders" }, { status: 500 })
  }
}
