"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/resume-data";
import { BrainCircuit } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="p-3 rounded-2xl bg-neural-cyan/10 text-neural-cyan">
            <BrainCircuit size={32} />
          </div>
          <h2 className="text-4xl font-bold text-center">Neural Skillset</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neural-cyan to-neural-purple rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass backdrop-blur-xl border-white/5 hover:border-neural-cyan/30 transition-all duration-500 group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${category.color}20`, color: category.color }}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {category.name}
                <span 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: category.color }}
                />
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
