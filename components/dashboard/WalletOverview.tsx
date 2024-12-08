import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export const WalletOverview = () => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Wallet Overview</h2>
        <span className="text-emerald-400">Last updated: Just now</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-effect rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-300">Total Inflow</span>
            </div>
            <span className="text-emerald-400">+2.3%</span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">$123,456</p>
        </div>
        
        <div className="glass-effect rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowDownRight className="h-5 w-5 text-red-400" />
              <span className="text-gray-300">Total Outflow</span>
            </div>
            <span className="text-red-400">-1.5%</span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">$98,765</p>
        </div>
        
        <div className="glass-effect rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-300">Avg Settlement</span>
            </div>
            <span className="text-emerald-400">-0.5 days</span>
          </div>
          <p className="text-2xl font-bold text-white mt-2">2.3 days</p>
        </div>
      </div>
    </div>
  );
};