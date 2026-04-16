export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-black text-white dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">AI Blog Generator</p>
            <p className="text-xs text-gray-400">
              Generate AI-powered blogs in multiple languages
            </p>
          </div>
          <div className="text-center text-xs text-gray-400">
            <p>
              Made by{" "}
              <a
                href="mailto:tyagichirag009@gmail.com"
                className="font-semibold text-white hover:text-blue-400 transition"
              >
                tyagichirag009@gmail.com
              </a>
            </p>
            <p className="mt-2 text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
