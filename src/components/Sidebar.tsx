import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Bot,
  Plug,
  BarChart2,
  Settings,
  LifeBuoy,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Briefcase, label: 'My Projects', path: '/projects' },
  { icon: Bot, label: 'AI Assistant', path: '/assistant' },
  { icon: Plug, label: 'Integrations', path: '/integrations' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="w-64 flex-shrink-0 bg-surface-primary flex-col border-r border-border-color hidden md:flex">
      <div className="h-20 flex items-center justify-center border-b border-border-color">
        <div className="flex items-center gap-2">
            <Bot size={28} className="text-accent-purple" />
            <h1 className="text-xl font-bold text-text-primary">SmartApp AI</h1>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? 'bg-accent-purple/10 text-accent-purple'
                    : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-border-color space-y-4">
         <div className="flex items-center gap-3 p-2 rounded-md hover:bg-surface-secondary cursor-pointer">
            <LifeBuoy size={20} className="text-text-secondary" />
            <span className="text-sm text-text-secondary font-medium">Help & Support</span>
        </div>
        {user ? (
            <div className="flex items-center justify-between p-3 rounded-lg bg-surface-secondary">
                <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-accent-blue" />
                    <div>
                        <p className="font-semibold text-sm text-text-primary">{user.name}</p>
                        <p className="text-xs text-text-secondary">{user.plan}</p>
                    </div>
                </div>
                <LogOut onClick={logout} size={18} className="text-text-secondary cursor-pointer hover:text-accent-red" />
            </div>
        ) : (
            <div className="p-3 text-center text-sm text-text-secondary">
                You are logged out.
            </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
