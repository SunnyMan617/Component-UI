"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Copy, Check, Sparkles, Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { components } from "@/data/components";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(
    components.length > 0 ? components[0].id : null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedComponent = components.find(
    (c) => c.id === selectedComponentId
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 flex">
      {/* Sidebar */}
      <Sidebar
        components={components}
        selectedId={selectedComponentId}
        onSelect={setSelectedComponentId}
        darkMode={darkMode}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 w-full">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Open sidebar"
              >
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Component Showcase
                </h1>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </header>

        {/* Component Details */}
        {selectedComponent ? (
          <main className="container mx-auto px-6 py-8">
            <div className="max-w-5xl mx-auto">
              {/* Component Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {selectedComponent.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {selectedComponent.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedComponent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Preview
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center min-h-[300px]">
                    {selectedComponent.preview}
                  </div>
                </div>
              </div>

              {/* Code Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Code
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(selectedComponent.code, selectedComponent.id)
                    }
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                  >
                    {copiedId === selectedComponent.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 dark:bg-gray-950 rounded-xl shadow-lg p-6 border border-gray-800 dark:border-gray-700 overflow-x-auto">
                  <pre className="text-sm text-gray-100 font-mono">
                    <code>{selectedComponent.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <main className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Select a component from the sidebar
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose a component from the left sidebar to view its details and code.
            </p>
          </main>
        )}

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-8">
          <p className="mb-2">
            Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm">
            Open source • MIT License • Contributions welcome
          </p>
        </footer>
      </div>
    </div>
  );
}

