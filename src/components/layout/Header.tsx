import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              SmartApp AI
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              + مشروع جديد
            </button>
            
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">👤</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
