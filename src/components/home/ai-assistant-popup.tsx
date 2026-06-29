'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, Send } from 'lucide-react';

export function AIAssistantPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Auto-open after 10 seconds if not opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHasOpened(true);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      
      {/* Floating Toggle Button */}
      <button 
        onClick={toggleOpen}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
        style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75" />
        <Bot className="w-6 h-6 text-foreground relative z-10" />
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-0 left-0 w-[320px] sm:w-[360px] h-[480px] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-16 px-4 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative">
                  <Bot className="w-4 h-4 text-foreground" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#050816] rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">AI Sales Assistant</h3>
                  <p className="text-[10px] text-green-400 font-medium">Online</p>
                </div>
              </div>
              <button onClick={toggleOpen} className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="bg-card/50 border border-border rounded-2xl rounded-tl-sm p-3 text-sm text-foreground/80 w-[85%]">
                  Hi there! 👋 I'm Microtechnique's AI assistant. 
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="bg-card/50 border border-border rounded-2xl rounded-tl-sm p-3 text-sm text-foreground/80 w-[85%]">
                  Are you looking for a specific software solution (like ERP, CRM) or custom development?
                </div>
              </div>

              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2 pl-9">
                {['Looking for ERP', 'Need a Mobile App', 'Just browsing'].map(reply => (
                  <button key={reply} className="px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-foreground text-xs font-medium transition-colors">
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Ask me anything..." 
                  className="w-full bg-card border border-border rounded-full pl-4 pr-10 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button className="absolute right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-foreground hover:bg-primary/90 transition-colors">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
              <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
                <Sparkles className="w-3 h-3" /> Powered by Microtechnique AI
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
