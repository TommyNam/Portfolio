import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { ScrollReveal, SectionLabel, ProjectCard } from "./SharedUI";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@domain.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <SectionLabel label="SEND_RAVEN" />
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white mt-4 mb-4">
            Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
              New Quest
            </span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
            Available for freelance projects, full-time roles, and interesting technical
            conversations. Response time: &lt; 24hrs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-sm text-emerald-400 tracking-widest">
                CURRENTLY AVAILABLE
              </span>
            </div>

            <div className="font-mono text-2xl text-slate-200 mb-6 break-all">{email}</div>

            <button
              onClick={handleCopy}
              className="font-mono text-sm font-bold py-3 px-10 rounded border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 tracking-widest"
            >
              {copied ? "✓ COPIED TO CLIPBOARD" : "COPY EMAIL"}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center gap-6">
            {[
              { label: "GITHUB", href: "https://github.com" },
              { label: "LINKEDIN", href: "https://linkedin.com" },
              { label: "TWITTER", href: "https://twitter.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors duration-200 tracking-widest border border-slate-700 hover:border-cyan-400/40 px-4 py-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;