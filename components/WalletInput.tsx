"use client";
import React, { useState } from "react";
import { Plus, X, Wallet } from "lucide-react";
import { getRequestsForAddress } from "@/helper";

export const WalletInput = () => {
  const [wallets, setWallets] = useState<string[]>([""]);

  const addWallet = () => {
    setWallets([...wallets, ""]);
  };

  const removeWallet = (index: number) => {
    const newWallets = wallets.filter((_, i) => i !== index);
    setWallets(newWallets.length ? newWallets : [""]);
  };

  const updateWallet = (index: number, value: string) => {
    const newWallets = [...wallets];
    newWallets[index] = value;
    setWallets(newWallets);
  };

  return (
    <div className="space-y-3 glass-effect p-6 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="h-5 w-5 text-emerald-400" />
        <span className="text-gray-300">Enter wallet addresses to analyze</span>
      </div>
      {wallets.map((wallet, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={wallet}
            onChange={(e) => updateWallet(index, e.target.value)}
            placeholder="0x..."
            className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {wallets.length > 1 && (
            <button
              onClick={() => removeWallet(index)}
              className="p-3 text-gray-400 hover:text-red-400"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      ))}

      <div className="flex gap-4 pt-2">
        <button
          onClick={addWallet}
          className="flex items-center gap-2 px-4 py-2 text-emerald-400 hover:text-emerald-300 glass-effect rounded-lg"
        >
          <Plus className="h-5 w-5" />
          Add Wallet
        </button>

        <button
          onClick={() =>
            getRequestsForAddress("0x1526d2B6d07C6661D71Be58d92A4F088d36C8FfD")
          }
          className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors glow"
        >
          Analyze Portfolio
        </button>
      </div>
    </div>
  );
};
