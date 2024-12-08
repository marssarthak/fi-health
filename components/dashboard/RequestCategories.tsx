import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Invoices', value: 45 },
  { name: 'Subscriptions', value: 30 },
  { name: 'Loans', value: 25 }
];

const COLORS = ['#10B981', '#6EE7B7', '#34D399'];

export const RequestCategories = () => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Request Categories</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                backdropFilter: 'blur(10px)',
                color: 'white'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};