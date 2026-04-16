# 🚀 AI Blog Generator Frontend

A modern, fast Next.js frontend for the AI Blog Generator application. Built with TypeScript, React, and Tailwind CSS.

## 📋 Features

- ✨ Generate AI-powered blog posts
- 🌐 Multi-language support (Hindi, French)
- 🎨 Clean, responsive UI with Tailwind CSS
- ⚡ Fast performance with Next.js 16
- 🔄 Real-time API integration
- 📱 Mobile-friendly design

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.4 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19.2.4
- **Linting**: ESLint 9

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Backend API running at `http://127.0.0.1:8000` (see backend README)

### Installation

1. **Start the FastAPI backend** (from the `/backend` directory):
   ```bash
   python app.py
   ```
   The backend will run on `http://127.0.0.1:8000`

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 🔧 Configuration

### API Base URL

The frontend connects to the backend at `http://127.0.0.1:8000` by default.

To use a different API URL, create a `.env.local` file in the `frontend` directory:

```bash
NEXT_PUBLIC_API_BASE_URL=http://your-api-url:8000
```

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/        # Next.js app directory
│   ├── components/ # Reusable components
│   └── ...
├── public/         # Static assets
├── package.json
└── tsconfig.json
```

## 🔗 Integration

The frontend communicates with the FastAPI backend to:
- Generate blog posts from topics
- Support multiple languages for translations
- Handle real-time content generation

Refer to the main project README for complete API documentation.

## 📝 License

See the main project README for license information.
