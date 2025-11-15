import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <header className="h-20 flex-shrink-0 bg-surface-primary border-b border-border-color flex items-center justify-between px-4 sm:px-8">
      <div className="relative w-full max-w-xs sm:max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-surface-secondary border border-transparent focus:border-accent-blue rounded-md pl-12 pr-4 py-2.5 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all"
        />
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link to="/projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-md bg-primary-gradient text-white text-sm font-semibold shadow-soft hover:brightness-110 transition-all"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">New Project</span>
            </motion.button>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-2.5 rounded-full hover:bg-surface-secondary text-text-secondary hover:text-text-primary transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-red rounded-full border-2 border-surface-primary"></span>
            </button>
            {user && (
                <div className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-surface-secondary">
                    <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full" />
                    <ChevronDown size={18} className="text-text-secondary hidden sm:block" />
                </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
