import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { format } from "date-fns";

const transactions = [
  {
    id: 1,
    type: "inflow",
    amount: "0.5 ETH",
    usdAmount: "$1,234.56",
    from: "0x1234...5678",
    to: "0x8765...4321",
    timestamp: new Date(2024, 2, 20, 14, 30),
    status: "completed",
  },
  {
    id: 2,
    type: "outflow",
    amount: "1000 USDC",
    usdAmount: "$1,000.00",
    from: "0x8765...4321",
    to: "0x2468...1357",
    timestamp: new Date(2024, 2, 20, 13, 15),
    status: "completed",
  },
  {
    id: 3,
    type: "inflow",
    amount: "2.5 ETH",
    usdAmount: "$6,172.80",
    from: "0x9876...5432",
    to: "0x8765...4321",
    timestamp: new Date(2024, 2, 20, 12, 45),
    status: "completed",
  },
  {
    id: 4,
    type: "outflow",
    amount: "500 USDT",
    usdAmount: "$500.00",
    from: "0x8765...4321",
    to: "0x3579...2468",
    timestamp: new Date(2024, 2, 20, 11, 30),
    status: "completed",
  },
];

export const RecentTransactions = () => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
        <button className="text-sm text-emerald-400 hover:text-emerald-300">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="glass-effect rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {tx.type === "inflow" ? (
                  <ArrowUpRight className="h-5 w-5 text-emerald-400" />
                ) : (
                  <ArrowDownRight className="h-5 w-5 text-red-400" />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{tx.amount}</span>
                    <span className="text-gray-400 text-sm">
                      ({tx.usdAmount})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <span>{format(tx.timestamp, "MMM d, h:mm a")}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">
                  {tx.type === "inflow" ? "From:" : "To:"}{" "}
                  {tx.type === "inflow" ? tx.from : tx.to}
                </div>
                <div className="text-emerald-400 text-sm">{tx.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
