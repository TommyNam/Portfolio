import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

// ─── UTIL COMPONENTS ─────────────────────────────────────────────────────────

function GlitchText({ text, className = "" }) {
  const [glitching, setGlitching] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className={`transition-all duration-75 ${
          glitching ? "opacity-0" : "opacity-100"
        }`}
      >
        {text}
      </span>
      {glitching && (
        <span
          className="absolute inset-0 text-cyan-400"
          style={{ clipPath: "inset(30% 0 50% 0)", transform: "translateX(-3px)" }}
        >
          {text}
        </span>
      )}
    </span>
  );
}

function CursorBlink() {
  return (
    <motion.span
      className="inline-block w-3 h-8 bg-cyan-400 ml-1 align-middle"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    />
  );
}

function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
        // {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
    </div>
  );
}

function ScrollReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── STAT BAR COMPONENT ───────────────────────────────────────────────────────

function StatBar({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categoryColor = {
    backend: "from-cyan-500 to-cyan-400",
    frontend: "from-amber-400 to-yellow-300",
    database: "from-emerald-500 to-teal-400",
    devops: "from-purple-500 to-violet-400",
  };

  const categoryBg = {
    backend: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    frontend: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    database: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    devops: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  };

  return (
    <div
      ref={ref}
      className="group relative bg-slate-900/60 border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/40 transition-all duration-300 hover:bg-slate-800/60"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-400/30 rounded-tr-lg" />

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{skill.icon}</span>
          <span className="font-sans text-sm font-medium text-slate-100">
            {skill.name}
          </span>
        </div>
        <span
          className={`font-mono text-xs px-2 py-0.5 rounded border ${categoryBg[skill.category]}`}
        >
          {skill.category}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${categoryColor[skill.category]} shadow-lg`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="font-mono text-xs text-slate-400 w-16 text-right">
          Lvl{" "}
          <motion.span
            className={`${
              skill.category === "backend"
                ? "text-cyan-400"
                : skill.category === "frontend"
                ? "text-amber-400"
                : skill.category === "database"
                ? "text-emerald-400"
                : "text-purple-400"
            } font-bold`}
          >
            {isInView ? skill.level : 0}
          </motion.span>
        </span>
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const statusColor = {
    DEPLOYED: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    BETA: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    IN_DEV: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1">
        {/* Top scan line on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-slate-500">
                  [{String(project.id).padStart(2, "0")}] {project.year}
                </span>
              </div>
              <h3 className="font-sans text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-cyan-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>
            <span
              className={`font-mono text-xs px-2 py-1 rounded border whitespace-nowrap ml-3 ${statusColor[project.status]}`}
            >
              ◆ {project.status}
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              className="flex-1 text-center font-mono text-xs font-bold py-2 px-4 rounded border border-cyan-500/60 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200 tracking-wider"
            >
              ▶ LIVE DEMO
            </a>
            <a
              href={project.codeUrl}
              className="flex-1 text-center font-mono text-xs font-bold py-2 px-4 rounded border border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white transition-all duration-200 tracking-wider"
            >
              {"</>"}  VIEW CODE
            </a>
          </div>
        </div>

        {/* Bottom corner accent */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-600/50 rounded-bl-xl" />
      </div>
    </ScrollReveal>
  );
}