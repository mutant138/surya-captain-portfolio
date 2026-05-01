"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Shield from "./Shield";

const certifications = [
  {
    title: "Blockchain Basics — Uniswap v4",
    issuer: "Cyfrin Updraft",
    year: "2025",
    color: "#4fc3f7",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    color: "#c9a84c",
  },
  {
    title: "JavaScript for Beginners",
    issuer: "Online",
    year: "2022",
    color: "#B22234",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    year: "2023",
    color: "#8fa8c8",
  },
  {
    title: "Version Control with Git",
    issuer: "Coursera",
    year: "2022",
    color: "#34d399",
  },
];

const traits = [
  { label: "Adaptability", value: "Biotech → Full-Stack → Web3", icon: "🔄" },
  { label: "Award", value: "Best Employee of the Month", icon: "🏆" },
  { label: "Volunteer", value: "Daan Utsav — 5000+ openings", icon: "🤝" },
  { label: "Languages", value: "English · Hindi · Tamil", icon: "🌐" },
  { label: "Mission", value: "Build products that create impact", icon: "🎯" },
  {
    label: "Status",
    value: "Open to senior roles & Web3 startups",
    icon: "📡",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      style={{ background: "linear-gradient(180deg, #05101f, #070f20)" }}
      className="relative z-10 py-32"
    >
      <div className="relative z-20 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div
            className="font-mono-tech text-xs mb-3"
            style={{ color: "#4fc3f7", letterSpacing: "0.3em" }}
          >
            ◆ AGENT DOSSIER ◆
          </div>
          <h2
            className="font-bebas text-6xl mb-4 glow-blue"
            style={{ color: "#4fc3f7", letterSpacing: "0.05em" }}
          >
            INTEL REPORT
          </h2>
          <div className="divider-shield w-48 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio + shield */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-8 mb-8">
              <Shield size={140} animate={false} />
              <div>
                <div
                  className="font-bebas text-4xl glow-blue"
                  style={{ color: "#4fc3f7", letterSpacing: "0.05em" }}
                >
                  UDHAYASURYA U
                </div>
                <div
                  className="font-orbitron text-sm font-bold mb-2"
                  style={{ color: "#c9a84c" }}
                >
                  FULL-STACK · WEB3 · AI DEVELOPER
                </div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono-tech text-xs"
                  style={{
                    background: "rgba(52,211,153,0.12)",
                    border: "1px solid rgba(52,211,153,0.3)",
                    color: "#34d399",
                  }}
                >
                  <motion.span
                    style={{
                      width: 6,
                      height: 6,
                      background: "#34d399",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  AVAILABLE FOR HIRE
                </div>
              </div>
            </div>

            <div
              className="glass-panel rounded-xl p-6 mb-6"
              style={{ borderLeft: "3px solid #4fc3f7" }}
            >
              <p
                className="font-rajdhani text-base leading-relaxed"
                style={{ color: "#b0c8e0" }}
              >
                A Biotechnology graduate who made an unconventional leap into
                software engineering — driven by a belief that technology is the
                most powerful force for creating change. Over 3 years, I've
                grown from WordPress development to building DeFi protocols and
                AI-powered platforms that serve thousands of users.
              </p>
              <p
                className="font-rajdhani text-base leading-relaxed mt-3"
                style={{ color: "#8fa8c8" }}
              >
                I specialize in the intersection of traditional web development
                and cutting-edge blockchain technology — shipping
                production-ready code with 99.9% uptime guarantees. Always
                curious. Always building.
              </p>
            </div>

            {/* Trait chips */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass-panel rounded-lg p-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg mt-0.5">{t.icon}</span>
                    <div>
                      <div
                        className="font-mono-tech text-xs mb-0.5"
                        style={{ color: "#8fa8c8" }}
                      >
                        {t.label}
                      </div>
                      <div
                        className="font-rajdhani font-semibold text-sm"
                        style={{ color: "#c8d8e8" }}
                      >
                        {t.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="font-mono-tech text-xs mb-6"
              style={{ color: "#c9a84c", letterSpacing: "0.2em" }}
            >
              ◆ CERTIFICATIONS & CREDENTIALS
            </div>

            <div className="space-y-4 mb-10">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-panel rounded-xl p-4 flex items-center gap-4 shield-card"
                  style={{ borderLeft: `3px solid ${cert.color}` }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    🏅
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-rajdhani font-bold text-sm"
                      style={{ color: "#c8d8e8" }}
                    >
                      {cert.title}
                    </div>
                    <div
                      className="font-mono-tech text-xs"
                      style={{ color: "#8fa8c8" }}
                    >
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                  <div
                    className="font-mono-tech text-xs px-2 py-1 rounded"
                    style={{
                      background: `${cert.color}15`,
                      color: cert.color,
                      border: `1px solid ${cert.color}30`,
                      flexShrink: 0,
                    }}
                  >
                    {cert.year}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Links */}
            <div className="glass-panel rounded-xl p-5">
              <div
                className="font-mono-tech text-xs mb-4"
                style={{ color: "#8fa8c8", letterSpacing: "0.15em" }}
              >
                CONNECT / FIND ME
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/udhayasuryau",
                    color: "#4fc3f7",
                  },
                  {
                    label: "GitHub",
                    url: "https://github.com/mutant138",
                    color: "#c9a84c",
                  },
                  {
                    label: "Portfolio",
                    url: "https://space-themed-portolio.vercel.app/",
                    color: "#B22234",
                  },
                  {
                    label: "Arthaveda",
                    url: "https://www.arthavedalearning.com",
                    color: "#34d399",
                  },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-orbitron font-bold text-xs px-4 py-2.5 rounded"
                    style={{
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}40`,
                      color: link.color,
                      letterSpacing: "0.1em",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 4px 15px ${link.color}30`,
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {link.label} ↗
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
