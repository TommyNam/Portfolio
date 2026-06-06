import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";


function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionLabel label="THE_LORE" />
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white mt-4 mb-16">
            Character{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Background
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p className="text-slate-300">
                  I'm a <span className="text-cyan-400 font-semibold">Full-Stack Engineer</span> who
                  builds with intention — architecting systems that are as clean under the hood as they
                  are polished on the surface.
                </p>
                <p>
                  My stack centers on Django for robust backend APIs and the MERN ecosystem for
                  reactive, user-first interfaces. I care deeply about developer experience,
                  performance, and the small details that make software feel{" "}
                  <em className="text-slate-300">right</em>.
                </p>
                <p>
                  When I'm not writing code, I'm on a climbing wall, carving down a mountain, or deep
                  in a game that demands patience and strategic thinking. Each one is, in its own way,
                  just engineering with a different interface.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 font-mono text-sm">
              <div className="text-slate-500 mb-4 text-xs tracking-widest">
                // CHARACTER_SHEET.json
              </div>
              {[
                ["CLASS", "Full-Stack Engineer"],
                ["STACK", "MERN + Django"],
                ["LEVEL", "Mid → Senior"],
                ["GUILD", "Open Source Contributor"],
                ["TIMEZONE", "GMT+0 / Remote"],
                ["STATUS", "AVAILABLE FOR HIRE"],
              ].map(([key, val]) => (
                <div key={key} className="flex gap-2 mb-2">
                  <span className="text-slate-600 w-24 shrink-0">"{key}":</span>
                  <span className={key === "STATUS" ? "text-emerald-400" : "text-amber-300"}>
                    "{val}"
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Discipline cards */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-sans text-xl font-bold text-slate-300 mb-6">
            <span className="font-mono text-cyan-400 text-sm mr-3">// ATTRIBUTE_BONUS</span>
            Outside the IDE
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {DISCIPLINES.map((d, i) => (
            <ScrollReveal key={d.activity} delay={0.15 + i * 0.1}>
              <div className="group bg-slate-900/60 border border-slate-700/40 rounded-xl p-5 hover:border-amber-400/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-3xl block mb-2">{d.icon}</span>
                    <h4 className="font-sans text-base font-bold text-white">{d.activity}</h4>
                    <p className="font-mono text-xs text-amber-400 mt-0.5">{d.stat}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded">
                    +{d.trait}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{d.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}