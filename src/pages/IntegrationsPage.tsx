import React from 'react';
import { Construction } from 'lucide-react';

const IntegrationsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-text-secondary p-4">
      <Construction size={64} className="mb-4 text-accent-orange" />
      <h1 className="text-2xl font-bold text-text-primary mb-2">Integrations Hub</h1>
      <p>This section is under construction.</p>
      <p className="mt-1 text-sm">Soon you'll be able to connect to services like Stripe, GitHub, Slack, and more!</p>
    </div>
  );
};

export default IntegrationsPage;
