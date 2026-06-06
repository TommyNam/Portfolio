import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data";
import { ScrollReveal, SectionLabel, ProjectCard } from "./SharedUI";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionLabel label="QUEST_LOG" />
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            Completed{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Quests
            </span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg">
            Systems shipped. Problems solved. Replace the placeholder data with your own projects.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 tracking-widest"
            >
              VIEW ALL REPOSITORIES ON GITHUB →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Projects;