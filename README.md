<<<<<<< HEAD
# Runacoss Website

A full-stack web application built with Node.js/Express backend and React frontend for managing blogs, news, and file uploads.

## 🚀 Features

### Backend Features
- **User Authentication**: JWT-based authentication with email verification
- **Blog Management**: CRUD operations for blog posts with tags and publishing status
- **News Management**: Fetch and manage news articles
- **File Management**: Upload, store, and manage files with metadata
- **Email Services**: Automated email sending for verification and password reset
- **Security**: Input validation, rate limiting, XSS protection, and CORS configuration
- **Logging**: Comprehensive logging with Winston
- **Database**: MongoDB with Mongoose ODM

### Frontend Features
- **Modern UI**: Built with React, Tailwind CSS, and responsive design
- **Authentication**: Login, registration, password reset, and email verification
- **Dashboard**: Overview of blogs, news, and files with quick actions
- **Blog Management**: Create, edit, view, and manage blog posts
- **File Management**: Upload and manage files with drag-and-drop support
- **Profile Management**: User profile settings and preferences
- **Navigation**: Responsive navigation with mobile support
- **Form Validation**: Client-side form validation with custom hooks

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **nodemailer** - Email sending
- **multer** - File upload handling
- **joi** - Data validation
- **winston** - Logging
- **helmet** - Security headers
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety (configuration ready)

## 📁 Project Structure

```
runacoss-website/
├── backend/
│   ├── src/
│   │   ├── config/           # Configuration files
│   │   ├── controllers/      # Route controllers
│   │   ├── helpers/          # Utility functions
│   │   ├── middleware/       # Express middleware
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── validation/       # Joi validation schemas
│   │   ├── uploads/          # File uploads directory
│   │   ├── app.js           # Express app setup
│   │   └── server.js        # Server entry point
│   ├── logs/                # Application logs
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── api/             # API client functions
│   │   ├── components/      # React components
│   │   ├── context/         # React context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility libraries
│   │   ├── pages/           # Page components
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # App entry point
│   ├── public/              # Static assets
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd runacoss-website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file (copy from env.example)
   cp env.example .env
   
   # Update .env with your configuration
   # See backend/env.example for required variables
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   
   # Create .env file
   echo "VITE_API_BASE_URL=http://localhost:5000/api/v1" > .env
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - Update the `MONGODB_URI` in your backend `.env` file

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will start on `http://localhost:5000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on `http://localhost:3000`

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api/v1

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login
- `GET/POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/token` - Refresh access token

### User Endpoints
- `POST /api/v1/user` - Create user
- `PUT /api/v1/user/verify` - Verify user account
- `GET /api/v1/user/me` - Get current user

### Blog Endpoints
- `GET /api/v1/blogs` - Get all blogs
- `POST /api/v1/blogs` - Create new blog
- `GET /api/v1/blogs/:id` - Get blog by ID
- `PUT /api/v1/blogs/:id` - Update blog
- `DELETE /api/v1/blogs/:id` - Delete blog

### News Endpoints
- `GET /api/v1/news` - Get news articles

### File Endpoints
- `POST /api/v1/files/upload` - Upload file
- `GET /api/v1/files` - Get all files
- `GET /api/v1/files/:id` - Get file by ID
- `DELETE /api/v1/files/:id` - Delete file

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/runacoss-website

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Security Configuration
CORS_ORIGIN=http://localhost:3000
SESSION_SECRET=your-session-secret-key
```

#### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_APP_NAME=Runacoss Website
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Build and Deployment

### Backend Production Build
```bash
cd backend
npm run build
npm start
```

### Frontend Production Build
```bash
cd frontend
npm run build
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS configuration
- Rate limiting
- XSS protection
- Security headers with Helmet
- File upload validation

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ola Israel**

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Contact the maintainer

## 🔄 Version History

- **v1.0.0** - Initial release with basic CRUD operations
- **v1.1.0** - Added file management and email services
- **v1.2.0** - Enhanced UI/UX and added dashboard
- **v1.3.0** - Added comprehensive validation and security features 
=======
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
>>>>>>> ae253645dd68ccdfaacf9c6bb70d189a76f820e2
