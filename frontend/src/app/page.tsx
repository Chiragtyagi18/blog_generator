"use client";

import { FormEvent, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type TranslationLanguage = "hindi" | "french";
type FormLanguage = "english" | TranslationLanguage;

type Blog = {
  title: string;
  content: string;
};

type BlogResponse = {
  data?: {
    blog?: Blog;
    current_language?: TranslationLanguage;
  };
  detail?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "http://127.0.0.1:8000";

const languageLabels: Record<FormLanguage, string> = {
  english: "English",
  hindi: "Hindi",
  french: "French",
};

async function requestBlog(
  topic: string,
  language: FormLanguage
): Promise<Blog> {
  const payload: { topic: string; language?: TranslationLanguage } = {
    topic: topic.trim(),
  };

  if (language !== "english") {
    payload.language = language;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const body = (await response.json().catch(() => null)) as BlogResponse | null;

    if (!response.ok) {
      throw new Error(body?.detail ?? "Failed to generate blog");
    }

    if (!body?.data?.blog?.title || !body.data.blog.content) {
      throw new Error("Received an invalid response from the API");
    }

    return body.data.blog;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Network error. Please check your connection.");
  }
}

export default function Home() {
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState<FormLanguage>("english");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTopic = topic.trim();

    if (!trimmedTopic) {
      setError("Please enter a blog topic.");
      return;
    }

    setError("");
    setBlog(null);
    setIsCopied(false);
    setIsLoading(true);

    try {
      const generatedBlog = await requestBlog(trimmedTopic, language);
      setBlog(generatedBlog);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  async function copyMarkdown() {
    if (!blog) {
      return;
    }

    const markdown = `# ${blog.title}\n\n${blog.content}`;
    await navigator.clipboard.writeText(markdown);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10">
          <section className="mb-8 space-y-2">
            <h2 className="text-4xl font-black text-emerald-700 dark:text-emerald-400 md:text-5xl leading-tight">
              Create Stunning Blogs
            </h2>
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              Transform your ideas into professional content with AI in seconds
            </p>
          </section>

          <section className="mb-8 rounded-2xl border-2 border-emerald-600 bg-white/80 p-6 shadow-lg backdrop-blur-sm dark:border-emerald-700/50 dark:bg-gray-900/80 md:p-8">
            <form className="grid gap-5 md:grid-cols-[1fr_200px_auto]" onSubmit={onSubmit}>
              <label className="flex flex-col gap-3 text-sm font-semibold">
                <span className="text-gray-900 dark:text-white">Topic</span>
                <input
                  type="text"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  placeholder="e.g. Future of agentic AI in education"
                  className="rounded-xl border-2 border-emerald-600 bg-white px-4 py-3 text-sm transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 dark:border-emerald-700 dark:bg-gray-950 dark:focus:ring-emerald-900"
                  disabled={isLoading}
                  required
                />
              </label>

              <label className="flex flex-col gap-3 text-sm font-semibold">
                <span className="text-gray-900 dark:text-white">Language</span>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value as FormLanguage)}
                  className="rounded-xl border-2 border-emerald-600 bg-white px-4 py-3 text-sm transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 dark:border-emerald-700 dark:bg-gray-950 dark:focus:ring-emerald-900"
                  disabled={isLoading}
                >
                  {Object.entries(languageLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="h-fit self-end rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 disabled:cursor-not-allowed disabled:opacity-50 dark:from-emerald-500 dark:to-emerald-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⚡</span> Generating...
                  </span>
                ) : (
                  "Generate Blog"
                )}
              </button>
            </form>
          </section>

          {error ? (
            <section className="mb-8 rounded-xl border-l-4 border-red-500 bg-red-50 px-5 py-4 text-sm text-red-700 shadow-md dark:border-red-600 dark:bg-red-950/30 dark:text-red-300">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </section>
          ) : null}

          <section className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
            {!blog && !isLoading ? (
              <div className="flex min-h-80 flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 text-5xl">✨</div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Ready to create amazing content?
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Enter a topic above and let AI work its magic
                </p>
              </div>
            ) : null}

            {isLoading ? (
              <div className="flex min-h-80 flex-col items-center justify-center p-8">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-emerald-600 dark:border-gray-700 dark:border-t-emerald-400"></div>
                <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
                  Generating your blog in {languageLabels[language]}...
                </p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  This may take a moment
                </p>
              </div>
            ) : null}

            {blog ? (
              <div className="p-6 md:p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-6 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                    {blog.title}
                  </h2>
                  <button
                    type="button"
                    onClick={copyMarkdown}
                    className="rounded-lg border-2 border-emerald-600 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/60"
                  >
                    {isCopied ? "✓ Copied!" : "📋 Copy Markdown"}
                  </button>
                </div>
                <article className="prose prose-sm max-w-none whitespace-pre-wrap break-words leading-relaxed text-gray-700 dark:prose-invert dark:text-gray-300 md:prose-base">
                  {blog.content}
                </article>
              </div>
            ) : null}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
