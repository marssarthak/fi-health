import React from "react";
import { BarChart3, Brain, Wallet, Boxes } from "lucide-react";
import { WalletInput } from "./WalletInput";

export const Hero = ({
  setAddresses
}: {setAddresses: (ad: string[]) => void}) => {
  return (
    <div className="pt-32 pb-20 blockchain-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <span className="inline-block px-4 py-1 rounded-full text-emerald-400 bg-emerald-500/10 text-sm mb-4">
              Web3 Analytics Platform
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              FI-HEALTH
              <span className="block text-emerald-400 bg-clip-text bg-gradient-to-r from-emerald-400/10 to-green-400/10">
                Powered by Request Network
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your Web3 business decisions with comprehensive wallet
              analysis and AI-driven insights across multiple chains.
            </p>

            <div className="max-w-xl mx-auto mb-16 relative">
              <WalletInput setAddresses={setAddresses} />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                Supported chains: Ethereum, Polygon, BSC, Arbitrum, Optimism
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-24">
              <div className="glass-effect p-6 rounded-xl relative group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-green-600/5 rounded-xl -z-10"></div>
                <Boxes className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Multi-Chain
                </h3>
                <p className="text-gray-400">
                  Track assets across major blockchains
                </p>
              </div>
              <div className="glass-effect p-6 rounded-xl relative group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-green-600/5 rounded-xl -z-10"></div>
                <BarChart3 className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  DeFi Analytics
                </h3>
                <p className="text-gray-400">
                  Deep insights into DeFi positions
                </p>
              </div>
              <div className="glass-effect p-6 rounded-xl relative group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-green-600/5 rounded-xl -z-10"></div>
                <Brain className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  AI Insights
                </h3>
                <p className="text-gray-400">Smart pattern detection</p>
              </div>
              <div className="glass-effect p-6 rounded-xl relative group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-green-600/5 rounded-xl -z-10"></div>
                <Wallet className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Portfolio
                </h3>
                <p className="text-gray-400">Complete asset overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
