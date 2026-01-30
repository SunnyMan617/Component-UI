"use client";

import { Copy, Check } from "lucide-react";
import { Component } from "@/types/component";

interface ComponentCardProps {
  component: Component;
  darkMode: boolean;
  copiedId: string | null;
  onCopy: (code: string, id: string) => void;
}

export default function ComponentCard({
  component,
  darkMode,
  copiedId,
  onCopy,
}: ComponentCardProps) {
  const isCopied = copiedId === component.id;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Preview Section */}
      <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-[200px] flex items-center justify-center">
        <div className="w-full">{component.preview}</div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
              {component.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {component.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={() => onCopy(component.code, component.id)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
        >
          {isCopied ? (
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
    </div>
  );
}

