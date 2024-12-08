import React from 'react';
import { Activity, PieChart, Zap, Shield, Globe, LineChart } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Track wallet activities and transactions as they happen across multiple chains"
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Portfolio Analysis",
      description: "Comprehensive breakdown of assets, tokens, and DeFi positions"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Predictions",
      description: "Machine learning powered insights for better decision making"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Assessment",
      description: "Advanced security scoring and fraud detection systems"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cross-chain Support",
      description: "Support for all major blockchains and Layer 2 solutions"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Custom Reports",
      description: "Generate detailed reports and analytics for your business needs"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Web3 Business Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to analyze, track, and optimize your Web3 operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-indigo-600">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};