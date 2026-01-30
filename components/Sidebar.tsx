"use client";

import { Component } from "@/types/component";
import { Sparkles, X } from "lucide-react";

interface SidebarProps {
  components: Component[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  darkMode: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  components,
  selectedId,
  onSelect,
  darkMode,
  isOpen = true,
  onClose,
}: SidebarProps) {
  const handleSelect = (id: string) => {
    onSelect(id);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      <aside
        className={`w-64 h-screen fixed left-0 top-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
      {/* Sidebar Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Components
            </h2>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="md:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          )}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {components.length} components
        </p>
      </div>

      {/* Component List */}
      <nav className="p-2">
        <ul className="space-y-1">
          {components.map((component) => {
            const isSelected = selectedId === component.id;
            return (
              <li key={component.id}>
                <button
                  onClick={() => handleSelect(component.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    isSelected
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="font-semibold text-sm">{component.name}</div>
                  <div
                    className={`text-xs mt-1 ${
                      isSelected
                        ? "text-white/90"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {component.description}
                  </div>
                  {component.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {component.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
    </>
  );
}

