# Design Inspiration Dashboard

A full-stack Next.js application that automatically generates AI-powered website design suggestions with deadline tracking and email notifications.

## Features

- 🤖 **AI-Powered Design Generation**: Uses OpenAI GPT-4 to generate unique website design concepts
- ⏰ **Deadline Tracking**: 30-day countdown timers for each design suggestion
- 📊 **Project Status Management**: Track progress with "Not Started", "In Progress", and "Completed" statuses
- 📧 **Email Notifications**: Automated reminders 7 days and 1 day before deadlines
- 🔄 **Automated Generation**: Weekly cron jobs to generate new design suggestions
- 📱 **Responsive Design**: Beautiful UI built with Tailwind CSS and shadcn/ui
- 🗄️ **Database Integration**: Supabase for data persistence

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: Supabase
- **AI**: OpenAI GPT-4
- **Email**: Resend API
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel with Cron Jobs

## Setup Instructions

### 1. Clone and Install

\`\`\`bash
git clone <your-repo>
cd design-dashboard-app
npm install
\`\`\`

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in your API keys:

\`\`\`bash
cp .env.example .env.local
\`\`\`

### 3. Supabase Setup

1. Create a new Supabase project
2. Run the SQL script in `scripts/create-database-schema.sql`
3. Add your Supabase URL and anon key to `.env.local`

### 4. OpenAI Setup

1. Get an API key from OpenAI
2. Add it to `.env.local`

### 5. Resend Setup (Optional)

1. Sign up for Resend
2. Add your API key to `.env.local`

### 6. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file configures automatic cron jobs:
- Weekly design generation (Mondays at 9 AM)
- Daily deadline reminder checks (Every day at 9 AM)

## Usage

1. **Generate Ideas**: Click "Generate New Ideas" to create AI-powered design suggestions
2. **Track Progress**: Update project status as you work on designs
3. **Monitor Deadlines**: Watch countdown timers and receive email reminders
4. **Automatic Updates**: New suggestions are generated weekly via cron jobs

## Customization

- Modify the AI prompt in `lib/openai.ts` to generate different types of design suggestions
- Adjust deadline periods in the API routes
- Customize email templates in `lib/email.ts`
- Update the cron schedule in `vercel.json`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
