import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Paperclip, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { aiOrchestrator } from '../lib/ai-orchestrator';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  code?: string;
}

const initialMessages: Message[] = [
    {
        id: faker.string.uuid(),
        text: "Hello! I'm your AI Assistant, connected to a live AI model. How can I assist you today?",
        sender: 'ai'
    }
];

const AIAssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: faker.string.uuid(),
      text: input,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const messageHistory = messages.map(m => ({ role: m.sender, content: m.text }));
    const aiResponseText = await aiOrchestrator.getChatCompletion(userMessage.text, messageHistory);

    const aiResponseMessage: Message = {
        id: faker.string.uuid(),
        text: aiResponseText,
        sender: 'ai'
    };
    
    setIsLoading(false);
    setMessages(prev => [...prev, aiResponseMessage]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] bg-surface-primary border border-border-color rounded-lg">
      <div className="p-4 border-b border-border-color">
        <h1 className="text-xl font-bold text-text-primary">AI Assistant</h1>
        <p className="text-sm text-text-secondary">Your partner in building amazing applications.</p>
      </div>
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-9 h-9 flex-shrink-0 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <Bot size={20} className="text-accent-purple" />
                </div>
              )}
              <div className={`max-w-2xl p-4 rounded-lg ${msg.sender === 'user' ? 'bg-accent-blue/20 text-text-primary' : 'bg-surface-secondary text-text-primary'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
              {msg.sender === 'user' && (
                <div className="w-9 h-9 flex-shrink-0 rounded-full bg-surface-secondary flex items-center justify-center">
                  <User size={20} className="text-text-secondary" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
             <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4"
            >
                <div className="w-9 h-9 flex-shrink-0 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <Bot size={20} className="text-accent-purple" />
                </div>
                <div className="max-w-2xl p-4 rounded-lg bg-surface-secondary flex items-center gap-2">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="w-2 h-2 bg-text-secondary rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="w-2 h-2 bg-text-secondary rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-2 h-2 bg-text-secondary rounded-full" />
                </div>
            </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-border-color">
        <div className="relative">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="Ask the AI anything..."
            className="w-full bg-surface-secondary border border-border-color rounded-lg pl-12 pr-20 py-3 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all resize-none"
            rows={1}
          />
          <button className="absolute left-4 top-3.5 text-text-secondary hover:text-accent-blue">
            <Paperclip size={18} />
          </button>
          <button 
            onClick={handleSend}
            disabled={!input || isLoading}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-md bg-primary-gradient text-white text-sm font-semibold shadow-soft hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
