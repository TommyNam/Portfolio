import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { GlitchText, CursorBlink } from "./SharedUI";


function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "SOFTWARE ENGINEER";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-500/4 blur-3xl pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400/40 rounded-br-lg" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-mono text-sm text-cyan-400 tracking-[0.25em] border border-cyan-400/30 px-4 py-1.5 rounded bg-cyan-400/5">
            PLAYER_ONE.exe — INITIALIZING
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-6xl md:text-8xl font-black text-white tracking-tight mb-4 leading-none"
        >
          <GlitchText text="TOMMY-NAM NGUYEN" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-mono text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 mb-6 tracking-widest h-10"
        >
          {typed}
          {typed.length < fullText.length && <CursorBlink />}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-sans text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Building scalable full-stack systems, one commit at a time. MERN &
          Django specialist. Problem solver. Always leveling up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono text-sm font-bold py-3 px-8 rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 tracking-widest"
          >
            VIEW QUEST LOG →
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono text-sm font-bold py-3 px-8 rounded border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all duration-300 tracking-widest"
          >
            SEND RAVEN
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["MERN Stack", "Django / Python", "Cloud Native", "Open Source"].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full hover:text-slate-300 hover:border-slate-500 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;