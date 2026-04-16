# 📝 AI Blog Generator

A powerful AI-powered blog generation system built by **Chirag Tyagi**. This project combines a Python backend with LLM integration and a modern Next.js frontend to create high-quality blog posts automatically.

## 🎯 Project Overview

AI Blog Generator is an end-to-end application that leverages artificial intelligence to:
- Generate complete blog posts from topics
- Support multiple languages (Hindi, English, French)
- Provide a clean, intuitive user interface
- Deliver fast, real-time content generation

## 📁 Project Structure

```
blog_generator/
├── backend/                 # Python FastAPI Backend
│   ├── src/
│   │   ├── graphs/         # Workflow graphs for blog generation
│   │   ├── llms/           # LLM integration (Groq)
│   │   ├── nodes/          # Processing nodes for content
│   │   └── states/         # State management
│   ├── app.py              # FastAPI application entry point
│   └── requirements.txt     # Python dependencies
│
├── frontend/                # Next.js Frontend
│   ├── src/
│   │   ├── app/           # Next.js pages and layouts
│   │   ├── components/    # Reusable React components
│   │   └── styles/        # Tailwind CSS
│   ├── package.json
│   └── README.md          # Frontend documentation
│
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Python 3.8+** and pip (for backend)
- **Node.js 18+** and npm (for frontend)
- **Groq API Key** (for LLM integration)

### Setup Instructions

#### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with your Groq API key
echo GROQ_API_KEY=your_api_key_here > .env

# Start the FastAPI server
python app.py
```

The backend will run on: `http://127.0.0.1:8000`

#### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env.local (optional, if using custom API URL)
echo NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000 > .env.local

# Start development server
npm run dev
```

The frontend will run on: `http://localhost:3000`

## 🏗️ Architecture

### Backend (Python)

**Technology Stack:**
- **Framework**: FastAPI
- **LLM**: Groq API with LangChain
- **Workflow Engine**: LangGraph
- **Language**: Python 3.8+

**Key Components:**
- `GraphBuilder` - Orchestrates the blog generation workflow
- `GroqLLM` - Interface for Groq API calls
- `BlogNode` - Content generation node
- `BlogState` - State management for generation process

### Frontend (Next.js)

**Technology Stack:**
- **Framework**: Next.js 16.2.4
- **Language**: TypeScript
- **UI**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9

**Key Features:**
- Responsive design for all devices
- Real-time blog generation status
- Multi-language support
- Clean, modern UI with Tailwind CSS

## 🔌 API Endpoints

### Generate Blog Post

**Endpoint**: `POST /api/generate`

**Request Body**:
```json
{
  "topic": "Machine Learning",
  "language": "en",
  "tone": "professional"
}
```

**Response**:
```json
{
  "title": "...",
  "content": "...",
  "language": "en"
}
```

Refer to backend documentation for complete API specifications.

## 📖 Documentation

- **Frontend Details**: See [frontend/README.md](frontend/README.md)
- **Backend Details**: See backend code and docstrings in `backend/src/`

## 🛠️ Available Scripts

### Backend
```bash
# Run development server
python app.py

# Run with uvicorn
uvicorn app:app --reload
```

### Frontend
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 📝 Environment Variables

### Backend (.env)
```
GROQ_API_KEY=your_groq_api_key_here
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## 🎨 Features

✨ **AI-Powered Content Generation**
- Leverages state-of-the-art LLMs for quality content
- Context-aware blog post generation
- Multiple writing styles and tones

🌐 **Multi-Language Support**
- English, Hindi, French
- Automatic translations
- Language-specific content optimization

⚡ **Performance**
- Fast API response times
- Optimized database queries
- Efficient frontend rendering

📱 **Responsive Design**
- Mobile-friendly interface
- Works on all device sizes
- Touch-optimized controls

## 🐛 Troubleshooting

### Backend Issues

**Port Already in Use**
```bash
# Use a different port
uvicorn app:app --port 8001 --reload
```

**Groq API Error**
- Ensure your API key is valid
- Check API rate limits
- Verify internet connection

### Frontend Issues

**API Connection Error**
- Ensure backend is running on the correct port
- Check `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
- Verify CORS settings in backend

**Port Already in Use**
```bash
npm run dev -- -p 3001
```

## 📄 License

This project is created by **Chirag Tyagi**. All rights reserved.

## 👤 Author

**Chirag Tyagi**
- GitHub: [@Chiragtyagi18](https://github.com/Chiragtyagi18)
- Project: AI Blog Generator

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Last Updated**: April 2026
**Version**: 1.0.0
