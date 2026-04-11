"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/resume-data";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; content: string }[]>([
    { role: "assistant", content: personalInfo.aiSummary }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm having trouble connecting to my neural network. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-neural-cyan text-white shadow-[0_0_30px_rgba(0,212,255,0.5)] group",
          isOpen && "hidden"
        )}
      >
        <div className="relative">
          <MessageSquare size={28} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-neural-card border border-neural-border text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Talk to My Resume
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50 w-[400px] h-[600px] flex flex-col glass rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-neural-cyan/20 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neural-cyan/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neural-cyan flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight">Career Agent</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-neural-cyan font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-neural-cyan animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                   <div className={cn(
                     "p-4 rounded-2xl text-sm leading-relaxed",
                     m.role === "user" 
                       ? "bg-neural-purple text-white rounded-tr-none" 
                       : "bg-white/5 border border-white/10 text-white/80 rounded-tl-none"
                   )}>
                     {m.content}
                   </div>
                   <span className="text-[10px] text-white/30 mt-2 font-mono uppercase tracking-tighter">
                     {m.role === "assistant" ? "System" : "Access"} — {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                   </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-neural-cyan">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-xs font-mono animate-pulse uppercase tracking-widest">Processing Query...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-6 border-t border-white/10 bg-black/20">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Shreya's experience..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:border-neural-cyan/50 focus:ring-1 focus:ring-neural-cyan/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-neural-cyan text-white hover:bg-neural-cyan/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-white/20 font-mono">
                <Sparkles size={10} />
                <span>Powered by neural context</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
