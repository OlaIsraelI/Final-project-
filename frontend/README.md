# Frontend - React Application

A modern React application built with Vite, Tailwind CSS, and connected to a Node.js/Express backend.

## Features

- **Authentication**: Sign up, sign in, account verification, password reset
- **Blog Management**: Create, read, update, delete blogs
- **News**: Fetch and display news articles with filtering
- **File Management**: Upload, download, and manage files
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Router** - Client-side routing
- **PropTypes** - Runtime type checking

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd runacoss-website/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:3001/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## Project Structure

```
src/
├── api/                    # API helpers
│   ├── index.js           # Axios instance
│   ├── auth.js            # Authentication API
│   ├── user.js            # User management API
│   ├── blog.js            # Blog API
│   ├── news.js            # News API
│   └── file.js            # File management API
├── components/
│   └── common/            # Reusable components
│       ├── ErrorOutput.js
│       ├── SuccessOutput.js
│       ├── Spinner.js
│       ├── FormGroup.js
│       ├── FormInput.js
│       ├── ErrorBoundary.js
│       └── ProtectedRoute.js
├── pages/                 # Page components
│   ├── SignIn.js
│   ├── SignUp.js
│   ├── VerifyUser.js
│   ├── ResetPassword.js
│   ├── Blog.js
│   ├── BlogDetails.js
│   ├── News.js
│   ├── FileUpload.js
│   └── FileManager.js
├── context/               # React Context
│   └── AuthContext.js
└── App.js                 # Main app component
```

## API Integration

The frontend connects to the backend API at `http://localhost:3001/api`. All API calls are centralized in the `src/api/` directory.

### Authentication Flow

1. User signs up → Account verification email sent
2. User verifies account → Redirected to sign in
3. User signs in → JWT tokens stored in localStorage
4. Protected routes check for valid tokens

### Protected Routes

Routes that require authentication are wrapped with the `ProtectedRoute` component, which checks for valid tokens and redirects to login if needed.

## Styling

The application uses Tailwind CSS for styling. All components follow a consistent design system with:

- Responsive design
- Dark/light mode support (if implemented)
- Accessible color contrasts
- Mobile-first approach

## Testing

Tests are written using Jest and React Testing Library. Run tests with:

```bash
npm test
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

### Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository for automatic deployments
- **AWS S3**: Upload the `dist` folder to an S3 bucket
- **Custom Server**: Serve the `dist` folder with any static file server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
