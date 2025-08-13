"use client";

import { IoTriangle } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Card({ type, api }: { type: string; api: string }) {
  const [data, setData] = useState<{ value: string; change: number } | null>(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(setData);
  }, [api]);

  const [value, denomination] = data?.value.split(" ") ?? [];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow-[0_0_15px_rgba(0,0,0,0.25)] rounded-md grid grid-cols-[1fr_0.5fr] items-center">
      <div className="flex flex-col items-center space-y-2 justify-self-end">
        <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">Current</span>
        <span className="text-3xl text-gray-800 dark:text-gray-100 font-bold">
          {type} {value}{" "}
          <span className="text-gray-500 dark:text-gray-400">{denomination}</span>
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          <IoTriangle className="text-green-700 inline-block" /> +{data?.change}% MoM
        </span>
      </div>

      <div className="flex flex-col justify-between items-end h-full min-h-[120px] justify-self-end">
        <div className="text-red-600 dark:text-red-400 border border-red-600 dark:border-red-500 bg-red-100 dark:bg-red-900 rounded px-2 py-1 cursor-pointer hover:opacity-90">
          View Report
        </div>
        <div className="text-green-600 dark:text-green-400 cursor-pointer hover:opacity-90">
          View Trend{" "}
          <IoTriangle
            size={10}
            className="text-green-700 dark:text-green-400 rotate-180 inline-block"
          />
        </div>
      </div>
    </div>
  );
}
