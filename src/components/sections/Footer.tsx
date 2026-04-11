"use client";

import { personalInfo } from "@/data/resume-data";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-neural-bg">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neural-cyan transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neural-purple transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-white/40 hover:text-neural-pink transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-white/40 text-sm mb-4">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/20">
          Built with <Heart size={10} className="text-neural-pink fill-neural-pink" /> 
          by <a href="https://www.intelliforge.tech/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neural-cyan transition-colors underline decoration-neural-cyan/20">IntelliForge AI</a>
        </p>
      </div>
    </footer>
  );
}
