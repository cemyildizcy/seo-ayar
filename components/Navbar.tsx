
import React from 'react';
import { ViewMode } from '../types.ts';

interface NavbarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Best Shoes <span className="text-blue-600">AI</span>
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => onViewChange(ViewMode.GENERATOR)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                currentView === ViewMode.GENERATOR
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              İçerik Oluşturucu
            </button>
            <button
              onClick={() => onViewChange(ViewMode.DOCUMENTATION)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                currentView === ViewMode.DOCUMENTATION
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Proje Dokümanı
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
