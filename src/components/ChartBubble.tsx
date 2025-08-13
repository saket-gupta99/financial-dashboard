"use client";
import { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function ChartBubble({ api }: { api: string }) {
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
          Clients
        </h2>
        <button className="border border-red-600 dark:border-red-400 bg-red-100 dark:bg-red-900 px-2 py-1 text-red-600 dark:text-red-400 text-sm rounded hover:opacity-90">
          <FaCloudDownloadAlt className="inline-block mr-1" /> Download Report
        </button>
      </div>
      <hr className="border-2 border-gray-300 dark:border-gray-600 my-6" />

      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" strokeOpacity={0.5} />
          <XAxis
            dataKey="value"
            tick={{ fontSize: 12, fill: "var(--axis-color)" }}
            stroke="var(--axis-color)"
          />
          <YAxis
            dataKey="size"
            tick={{ fontSize: 12, fill: "var(--axis-color)" }}
            stroke="var(--axis-color)"
          />
          <ZAxis dataKey="size" range={[100, 400]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--tooltip-bg)",
              border: "1px solid var(--tooltip-border)",
              borderRadius: 8,
              color: "var(--tooltip-text)",
            }}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Scatter data={data} fill="#2563eb" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
