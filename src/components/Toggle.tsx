"use client";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Toggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="relative inline-block w-12 h-6 cursor-pointer">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div
        className="w-full h-full rounded-full transition-colors 
        bg-gray-300 dark:bg-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-blue-500"
      ></div>
      <div
        className="absolute left-0 top-0 w-6 h-6 rounded-full transition-transform transform 
        bg-white dark:bg-gray-200 peer-checked:translate-x-6 flex items-center justify-center shadow"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </div>
    </label>
  );
}
