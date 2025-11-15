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
    <div className="bg-gray-800 text-white w-64 rtl">
      <div className="p-4">
        <h1 className="text-xl font-bold">🚀 SmartApp AI</h1>
      </div>
      
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="ml-3 text-lg">{item.icon}</span>
                <span className="flex-1">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 px-4">
        <div className="bg-blue-900/50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-200 mb-2">🆕 الميزات الجديدة</h3>
          <p className="text-sm text-blue-300">
            منشئ التطبيقات وملعب الذكاء الاصطناعي متاحان الآن!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
