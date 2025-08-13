"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ChartMultiLine({ api }: { api: string }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(setData);
  }, [api]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.15)] border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Monthly MIS
        </h2>
        <button className="border border-red-600 dark:border-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 text-sm text-red-600 dark:text-red-400 rounded hover:opacity-90">
          View Report
        </button>
      </div>
      <hr className="border-2 border-gray-300 dark:border-gray-600 my-6" />

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "var(--axis-color)" }}
            stroke="var(--axis-color)"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--axis-color)" }}
            stroke="var(--axis-color)"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--tooltip-bg)",
              border: "1px solid var(--tooltip-border)",
              borderRadius: 8,
              color: "var(--tooltip-text)",
            }}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ color: "var(--axis-color)" }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#f97316"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#16a34a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
