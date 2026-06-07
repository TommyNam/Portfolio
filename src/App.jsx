import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



export default function App() {
  return (
    <div className="min-h-screen bg-[#080b0f] text-white selection:bg-cyan-400/20 selection:text-cyan-200">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} // TOMMY-NAM NGUYEN — Built with React & Framer Motion
          </span>
          <span className="font-mono text-xs text-slate-700">
            UPTIME: Since 6/7/2026 // STATUS: ONLINE
          </span>
        </div>
      </footer>
    </div>
  );
}
