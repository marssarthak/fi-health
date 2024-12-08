import React from 'react';
import { Menu, X, Wallet2, ExternalLink } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 blur-sm bg-emerald-500/30 rounded-full"></div>
              <Wallet2 className="h-8 w-8 text-emerald-400 relative" />
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text">
              ChainScope
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-emerald-400 flex items-center gap-1">
              Features
            </a>
            <a href="#analytics" className="text-gray-300 hover:text-emerald-400 flex items-center gap-1">
              Analytics
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-emerald-400">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-emerald-400 hover:text-emerald-300 glass-effect rounded-lg">
              Connect Wallet
            </button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 glow">
              Launch App
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-300">Features</a>
            <a href="#analytics" className="block px-3 py-2 text-gray-300">Analytics</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-300">Pricing</a>
            <button className="block w-full px-3 py-2 text-left text-emerald-400 glass-effect rounded-lg">
              Connect Wallet
            </button>
            <button className="block w-full px-3 py-2 text-left text-white bg-emerald-600 rounded-lg glow">
              Launch App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};