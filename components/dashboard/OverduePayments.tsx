import React from 'react';
import { AlertCircle } from 'lucide-react';

const overdueItems = [
  {
    id: 1,
    title: 'Subscription Payment',
    amount: '$299.99',
    dueDate: '2024-03-15',
    daysOverdue: 5
  },
  {
    id: 2,
    title: 'Invoice #1234',
    amount: '$1,499.99',
    dueDate: '2024-03-10',
    daysOverdue: 10
  },
  {
    id: 3,
    title: 'Loan Payment',
    amount: '$599.99',
    dueDate: '2024-03-01',
    daysOverdue: 19
  }
];

export const OverduePayments = () => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Overdue Payments</h3>
        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
          3 Overdue
        </span>
      </div>
      
      <div className="space-y-4">
        {overdueItems.map((item) => (
          <div key={item.id} className="glass-effect rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-gray-400 text-sm">Due: {item.dueDate}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">{item.amount}</p>
                <p className="text-red-400 text-sm">{item.daysOverdue} days overdue</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};