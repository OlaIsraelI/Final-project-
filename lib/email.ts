import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendDeadlineReminder(email: string, designTitle: string, daysUntilDeadline: number) {
  const subject =
    daysUntilDeadline === 1
      ? `⚠️ Final Reminder: "${designTitle}" deadline is tomorrow!`
      : `🔔 Reminder: "${designTitle}" deadline in ${daysUntilDeadline} days`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1f2937;">Design Project Deadline Reminder</h2>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">${designTitle}</h3>
        <p style="color: #6b7280;">
          ${
            daysUntilDeadline === 1
              ? "Your design project deadline is tomorrow! Don't forget to complete your project."
              : `You have ${daysUntilDeadline} days remaining to complete this design project.`
          }
        </p>
      </div>

      <p style="color: #6b7280;">
        Visit your <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="color: #3b82f6;">Design Dashboard</a> to update the project status.
      </p>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
      
      <p style="color: #9ca3af; font-size: 14px;">
        This is an automated reminder from your Design Inspiration Dashboard.
      </p>
    </div>
  `

  try {
    await resend.emails.send({
      from: "Design Dashboard <noreply@yourdomain.com>",
      to: email,
      subject,
      html,
    })
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email reminder")
  }
}
