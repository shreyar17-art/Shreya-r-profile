"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume-data";
import { Briefcase, ChevronRight, Activity } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="p-3 rounded-2xl bg-neural-purple/10 text-neural-purple">
            <Briefcase size={32} />
          </div>
          <h2 className="text-4xl font-bold text-center">Career Evolution</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neural-purple to-neural-pink rounded-full" />
        </div>

        <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:pl-20 py-8 space-y-16">
          {experience.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.title}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-10 md:pl-0"
            >
              {/* Timeline Node */}
              <div 
                className="absolute left-[-11px] top-0 w-5 h-5 rounded-full border-4 border-neural-bg shadow-[0_0_15px_rgba(124,58,237,0.5)] z-10"
                style={{ backgroundColor: item.domainColor }}
              />

              <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                {/* Accuracy/Loss Telemetry Visualization */}
                <div className="absolute top-0 right-0 p-6 flex items-center gap-4 text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex flex-col items-end">
                      <span className="text-white/40 uppercase tracking-tighter">Precision</span>
                      <span className="text-neural-cyan font-bold">{item.accuracy}%</span>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <div className="flex flex-col items-end">
                      <span className="text-white/40 uppercase tracking-tighter">Loss</span>
                      <span className="text-neural-pink font-bold">{item.loss}</span>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <span 
                      className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] mb-2 inline-block border bg-opacity-10"
                      style={{ color: item.domainColor, borderColor: `${item.domainColor}40`, backgroundColor: `${item.domainColor}10` }}
                    >
                      {item.phase} — {item.domain}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neural-cyan transition-colors">{item.title}</h3>
                    <div className="text-white/40 font-medium">{item.company} | {item.companyType}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-white/50 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                      {item.period}
                    </div>
                  </div>
                </div>

                <p className="text-white/60 mb-8 max-w-2xl leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 text-white/50 group/item transition-colors hover:text-white/80">
                      <ChevronRight size={18} className="mt-0.5 text-neural-purple flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-mono rounded bg-neural-bg/50 text-white/40 border border-white/5 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
