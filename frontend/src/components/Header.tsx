export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-700 bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-700 shadow-md dark:border-emerald-800 dark:from-emerald-900 dark:via-emerald-800 dark:to-green-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Blog Generator</h1>
            <p className="text-xs text-emerald-100">Powered by AI</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <span className="text-sm font-medium text-emerald-50">
            Create amazing content in seconds
          </span>
        </div>
      </div>
    </header>
  );
}
