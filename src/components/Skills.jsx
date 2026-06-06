import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";


function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "backend", "frontend", "database", "devops"];
  const filtered =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionLabel label="THE_GEAR" />
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            Skill{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
              Inventory
            </span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg">
            Proficiency levels earned through real projects, not tutorial completions.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-4 py-1.5 rounded border tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-cyan-400 text-cyan-400 bg-cyan-400/10"
                    : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {filtered.map((skill, i) => (
              <StatBar key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs text-slate-500">
            <span>
              <span className="text-cyan-400">■</span> backend
            </span>
            <span>
              <span className="text-amber-400">■</span> frontend
            </span>
            <span>
              <span className="text-emerald-400">■</span> database
            </span>
            <span>
              <span className="text-purple-400">■</span> devops
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}