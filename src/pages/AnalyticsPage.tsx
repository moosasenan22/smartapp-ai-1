import React from 'react';
import { Construction } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-text-secondary p-4">
      <Construction size={64} className="mb-4 text-accent-green" />
      <h1 className="text-2xl font-bold text-text-primary mb-2">Advanced Analytics</h1>
      <p>This section is under construction.</p>
      <p className="mt-1 text-sm">Get ready for deep insights, trend predictions, and performance metrics for your applications.</p>
    </div>
  );
};

export default AnalyticsPage;
