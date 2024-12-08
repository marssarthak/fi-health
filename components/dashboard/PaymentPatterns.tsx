import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, TrendingUp, Wallet } from 'lucide-react';

const data = [
  { date: '2024-01', avgTime: 2.5, frequency: 15 },
  { date: '2024-02', avgTime: 2.1, frequency: 18 },
  { date: '2024-03', avgTime: 2.3, frequency: 20 }
];

const categories = [
  { name: 'DeFi Protocols', amount: '$45,678', percentage: 35 },
  { name: 'NFT Marketplaces', amount: '$34,567', percentage: 25 },
  { name: 'Token Swaps', amount: '$23,456', percentage: 20 },
  { name: 'Gaming', amount: '$12,345', percentage: 15 },
  { name: 'Others', amount: '$5,678', percentage: 5 }
];

export const PaymentPatterns = () => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Payment Patterns</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg text-white mb-4">Settlement Trends</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    backdropFilter: 'blur(10px)',
                    color: 'white'
                  }}
                />
                <Line type="monotone" dataKey="avgTime" stroke="#10B981" />
                <Line type="monotone" dataKey="frequency" stroke="#6366F1" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg text-white mb-4">Top Spending Categories</h4>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="glass-effect rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">{category.name}</span>
                  <span className="text-emerald-400">{category.amount}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-emerald-500 rounded-full h-2"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};