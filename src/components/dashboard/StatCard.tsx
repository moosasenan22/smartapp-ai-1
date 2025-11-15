import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, change, changeType, color }) => {
  const isIncrease = changeType === 'increase';
  
  // A map to safely get background color class
  const bgColors: { [key: string]: string } = {
    'text-accent-blue': 'bg-accent-blue/10',
    'text-accent-orange': 'bg-accent-orange/10',
    'text-accent-purple': 'bg-accent-purple/10',
    'text-accent-green': 'bg-accent-green/10',
  };

  return (
    <div className="bg-surface-primary p-6 rounded-lg border border-border-color shadow-soft transition-all hover:shadow-medium hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={cn('w-10 h-10 rounded-md flex items-center justify-center', bgColors[color])}>
          <Icon className={color} size={22} />
        </div>
        <div className={`flex items-center text-sm font-medium ${isIncrease ? 'text-accent-green' : 'text-accent-red'}`}>
          {isIncrease ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
          <span>{change}</span>
        </div>
      </div>
      <p className="text-3xl font-bold text-text-primary">{value}</p>
      <p className="text-sm text-text-secondary mt-1">{label}</p>
    </div>
  );
};

export default StatCard;
