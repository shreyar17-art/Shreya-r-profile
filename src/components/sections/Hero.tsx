"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/resume-data";
import { Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-cyan/10 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neural-purple/10 rounded-full blur-[128px] -z-10 animate-pulse delay-1000" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neural-cyan/30 bg-neural-cyan/5 text-neural-cyan text-sm font-mono mb-6">
          <Terminal size={14} />
          <span>system.init() — OK</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-neural-cyan to-neural-purple bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>

        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:bg-neural-cyan/10 hover:border-neural-cyan/50 text-white/70 hover:text-neural-cyan transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:bg-neural-purple/10 hover:border-neural-purple/50 text-white/70 hover:text-neural-purple transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl glass hover:bg-neural-pink/10 hover:border-neural-pink/50 text-white/70 hover:text-neural-pink transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="p-6 rounded-2xl glass glow-cyan group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-neural-cyan mb-1 group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40 font-semibold font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
