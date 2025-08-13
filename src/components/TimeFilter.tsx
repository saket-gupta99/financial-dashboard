"use client";
import { useState } from "react";

export default function TimeFilter() {
  const options = [3, 7, 10, 30];
  const [active, setActive] = useState(3);

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => setActive(o)}
          className={`px-4 py-2 border rounded transition-colors duration-200 
            ${
              active === o
                ? "bg-red-100 dark:bg-red-900 border-red-600 dark:border-red-400 font-semibold text-red-600 dark:text-red-400"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300"
            }`}
        >
          {o} Days
        </button>
      ))}
    </div>
  );
}
