import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'لوحة التحكم', href: '/dashboard', icon: '📊' },
  { name: 'منشئ التطبيقات', href: '/builder', icon: '🏗️' },
  { name: 'المساعد الذكي', href: '/ai-assistant', icon: '🤖' },
  { name: 'ملعب الذكاء الاصطناعي', href: '/ai-playground', icon: '🧠' },
  { name: 'التحليلات', href: '/analytics', icon: '📈' },
  { name: 'مشاريعي', href: '/my-projects', icon: '📁' },
  { name: 'التكاملات', href: '/integrations', icon: '🔌' },
  { name: 'الإعدادات', href: '/settings', icon: '⚙️' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white w-64 rtl flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold flex items-center">
          <span className="ml-2">🚀</span>
          SmartApp AI
        </h1>
        <p className="text-gray-400 text-sm mt-1">منصة التطوير الذكية</p>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-1 px-3">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="ml-3 text-lg">{item.icon}</span>
                <span className="flex-1 text-sm font-medium">{item.name}</span>
                {location.pathname === item.href && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* New Features Banner */}
      <div className="p-4 border-t border-gray-700">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-3">
          <h3 className="font-semibold text-blue-200 text-sm mb-1 flex items-center">
            <span className="ml-1">🆕</span>
            الميزات الجديدة
          </h3>
          <p className="text-xs text-blue-300 leading-relaxed">
            منشئ التطبيقات وملعب الذكاء الاصطناعي متاحان الآن! جرب بناء تطبيقاتك بصرياً.
          </p>
        </div>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">👤</span>
          </div>
          <div className="mr-3 flex-1">
            <p className="text-sm font-medium">مستخدم</p>
            <p className="text-xs text-gray-400">مسؤول النظام</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
