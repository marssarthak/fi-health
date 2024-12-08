"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", inflow: 4000, outflow: 2400 },
  { name: "Week 2", inflow: 3000, outflow: 1398 },
  { name: "Week 3", inflow: 2000, outflow: 9800 },
  { name: "Week 4", inflow: 2780, outflow: 3908 },
  { name: "Week 5", inflow: 1890, outflow: 4800 },
  { name: "Week 6", inflow: 2390, outflow: 3800 },
];

export const CashFlowAnalysis = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Cash Flow Analysis</h3>
        <div className="flex gap-2">
          {["weekly", "monthly", "yearly"].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg text-sm ${
                timeframe === tf
                  ? "bg-emerald-600 text-white"
                  : "text-gray-400 glass-effect"
              }`}
            >
              {tf.charAt(0).toUpperCase() + tf.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                backdropFilter: "blur(10px)",
                color: "white",
              }}
            />
            <Bar dataKey="inflow" fill="#10B981" />
            <Bar dataKey="outflow" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
