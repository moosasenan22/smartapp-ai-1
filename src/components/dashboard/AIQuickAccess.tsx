import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIQuickAccess: React.FC = () => {
  const [input, setInput] = useState('');

  const handleQuickAsk = () => {
    alert(`Simulating AI request for: "${input}"\nIn a real app, this would trigger the AI service.`);
    setInput('');
  };

  return (
    <div className="bg-surface-primary p-6 rounded-lg border border-border-color h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Bot size={22} className="text-accent-purple" />
        <h3 className="text-lg font-semibold text-text-primary">AI Quick Access</h3>
      </div>
      <div className="flex-1 bg-surface-secondary rounded-md p-4 text-sm text-text-secondary space-y-3 overflow-y-auto">
        <p><b className="text-text-primary">AI Assistant:</b> How can I help you build today?</p>
        <p>Try asking: "Create a login form component" or "Suggest a color palette for a fitness app".</p>
        <Link to="/assistant" className="text-accent-blue hover:underline font-medium">Go to full chat →</Link>
      </div>
      <div className="mt-4 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && input.trim() && handleQuickAsk()}
          placeholder="Ask AI anything..."
          className="w-full bg-surface-secondary border border-border-color rounded-md pl-4 pr-10 py-2.5 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all"
        />
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleQuickAsk}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-text-secondary hover:text-accent-purple hover:bg-accent-purple/10 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!input}
        >
          <Send size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default AIQuickAccess;
