"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/data/resume-data";
import { Layers, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-neural-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="p-3 rounded-2xl bg-neural-cyan/10 text-neural-cyan">
            <Layers size={32} />
          </div>
          <h2 className="text-4xl font-bold text-center">Featured Deployments</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neural-cyan to-neural-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative flex flex-col h-full bg-neural-card/40 rounded-[2rem] border border-white/5 overflow-hidden hover:border-neural-cyan/30 transition-all duration-500"
            >
              {/* Card Image/Header Placeholder */}
              <div 
                className="h-48 w-full relative overflow-hidden bg-neural-surface flex items-center justify-center"
              >
                <div 
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: `radial-gradient(circle at center, ${project.domainColor}, transparent)` }}
                />
                <Layers size={48} className="text-white/10 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.github && (
                    <a href={project.github} className="p-2 rounded-lg bg-black/40 text-white/50 hover:text-white transition-colors">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url} className="p-2 rounded-lg bg-black/40 text-white/50 hover:text-white transition-colors">
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div 
                  className="text-[10px] font-bold uppercase tracking-widest mb-4 inline-block opacity-80"
                  style={{ color: project.domainColor }}
                >
                  {project.domain}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-neural-cyan transition-colors">{project.title}</h3>
                <p className="text-white/50 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/5 text-white/40 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-neural-cyan">
                    <span className="w-1 h-1 rounded-full bg-neural-cyan animate-pulse" />
                    Impact: {project.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
