# 🚀 AI Blog Generator - Frontend

A modern, fast Next.js frontend for the AI Blog Generator application. Built with TypeScript, React, and Tailwind CSS for seamless blog content generation.

**Created by**: Chirag Tyagi

## 📋 Features

- ✨ **AI-Powered Generation** - Generate complete blog posts with a single click
- 🌐 **Multi-Language Support** - English, Hindi, French translations
- 🎨 **Beautiful UI** - Clean, responsive design with Tailwind CSS
- ⚡ **Lightning Fast** - Optimized Next.js performance
- 🔄 **Real-Time Integration** - Live updates from backend API
- 📱 **Mobile Responsive** - Fully responsive on all devices
- 🌙 **Modern Design** - Professional and user-friendly interface

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.2.4 | React framework |
| **React** | 19.2.4 | UI library |
| **TypeScript** | Latest | Type safety |
| **Tailwind CSS** | 4 | Styling |
| **ESLint** | 9 | Code linting |

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- Backend API running at `http://127.0.0.1:8000`

### Installation Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure API URL** (Optional):
   
   Create a `.env.local` file if using a custom API URL:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
   ```
   
   Default is `http://127.0.0.1:8000`

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   ```
   http://localhost:3000
   ```

## 📦 Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   └── favicon.ico       # App icon
│   ├── components/
│   │   ├── Header.tsx        # Header component
│   │   ├── Footer.tsx        # Footer component
│   │   └── ...               # Other components
│   └── ...
├── public/                    # Static assets (images, icons)
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript config
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS config
├── postcss.config.mjs        # PostCSS config
└── eslint.config.mjs         # ESLint configuration
```

## 🔧 Configuration

### API Integration

The frontend communicates with the backend FastAPI server. Ensure the backend is running before starting the frontend.

**Default Backend URL**: `http://127.0.0.1:8000`

To change the API URL, set the environment variable:
```env
NEXT_PUBLIC_API_BASE_URL=http://your-custom-url:8000
```

### TypeScript Configuration

TypeScript is configured for strict type checking. All components are fully typed.

### Tailwind CSS

Tailwind CSS is configured for utility-first styling. Custom colors and configurations can be modified in `tailwind.config.ts`.

## 🎨 Components

The frontend includes reusable React components:

- **Header** - Navigation and branding
- **Footer** - Footer section
- Custom components for blog generation and display

## 🔌 API Integration

The frontend connects to the backend to:

- **Generate Blog Posts**: Submit topic and preferences, receive generated content
- **Support Multiple Languages**: Request translations in different languages
- **Handle Real-Time Updates**: Receive live status updates during generation

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on push

### Environment Variables for Production

Set these in your deployment platform:
```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Backend Connection Error

- Verify backend is running on `http://127.0.0.1:8000`
- Check `.env.local` for correct `NEXT_PUBLIC_API_BASE_URL`
- Check browser console for API errors

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📖 Related Documentation

- **Main Project**: See [../README.md](../README.md) for full project overview
- **Backend**: See `backend/` directory for backend documentation

## 📝 License

This project is created by **Chirag Tyagi**. All rights reserved.

## 👤 Author

**Chirag Tyagi**
- GitHub: [@Chiragtyagi18](https://github.com/Chiragtyagi18)

---

**Version**: 1.0.0  
**Last Updated**: April 2026
