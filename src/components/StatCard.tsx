"use client";
import { useEffect, useState } from "react";

export default function StatCard({
  label,
  api,
}: {
  label: string;
  api: string;
}) {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setValue(data.value));
  }, [api]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center border border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {value ?? "..."}
      </p>
    </div>
  );
}
