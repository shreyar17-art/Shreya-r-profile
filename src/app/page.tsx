"use client";

import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import AIChat from "@/components/sections/AIChat";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen neural-gradient">
      {/* Background radial glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <AIChat />
    </main>
  );
}
