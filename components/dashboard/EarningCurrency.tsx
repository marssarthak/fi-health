import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Wallet } from "lucide-react";

const data = [
  { date: "2024-01", ETH: 2.5, USDC: 5000, USDT: 3000 },
  { date: "2024-02", ETH: 3.2, USDC: 7500, USDT: 4500 },
  { date: "2024-03", ETH: 2.8, USDC: 6000, USDT: 3800 },
  { date: "2024-04", ETH: 4.1, USDC: 8200, USDT: 5200 },
  { date: "2024-05", ETH: 3.7, USDC: 7800, USDT: 4800 },
];

const currencies = [
  { id: "ETH", color: "#627EEA" },
  { id: "USDC", color: "#2775CA" },
  { id: "USDT", color: "#26A17B" },
];

export const EarningsCurrency = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState(
    currencies.map((c) => c.id),
  );

  const toggleCurrency = (currency: string) => {
    setSelectedCurrencies((prev) =>
      prev.includes(currency)
        ? prev.filter((c) => c !== currency)
        : [...prev, currency],
    );
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Earnings by Currency</h3>
        <div className="flex gap-2">
          {currencies.map((currency) => (
            <button
              key={currency.id}
              onClick={() => toggleCurrency(currency.id)}
              className={`px-3 py-1 rounded-lg text-sm flex items-center gap-1 ${
                selectedCurrencies.includes(currency.id)
                  ? "bg-opacity-20 text-white"
                  : "text-gray-400 glass-effect"
              }`}
              style={{
                backgroundColor: selectedCurrencies.includes(currency.id)
                  ? currency.color
                  : undefined,
              }}
            >
              <Wallet className="h-4 w-4" />
              {currency.id}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                backdropFilter: "blur(10px)",
                color: "white",
              }}
            />
            {currencies.map(
              (currency) =>
                selectedCurrencies.includes(currency.id) && (
                  <Line
                    key={currency.id}
                    type="monotone"
                    dataKey={currency.id}
                    stroke={currency.color}
                    strokeWidth={2}
                    dot={{ r: 4, fill: currency.color }}
                    activeDot={{ r: 6 }}
                  />
                ),
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
