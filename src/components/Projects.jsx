"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Otaku Match",
    category: "Founder & Lead · AI Matchmaking",
    type: "AI PROJECT",
    color: "#a78bfa",
    icon: "🤖",
    description:
      "AI-powered matchmaking platform for gamers and anime enthusiasts. Architected stack with Next.js, Node.js, and MongoDB schemas categorizing 500+ titles across FPS, RPG, and MOBA genres for AI-driven compatibility scoring.",
    tech: ["Next.js", "Node.js", "MongoDB", "AI/ML", "SSR"],
    highlights: ["Founder & Lead", "500+ Titles Categorized", "FPS/RPG/MOBA"],
    link: "https://otaku-frontend-2026.vercel.app/",
  },
  {
    title: "Arthaveda Learning",
    category: "SEO & High-Perf SPA",
    type: "LIVE SITE",
    color: "#34d399",
    icon: "📈",
    description:
      "High-performance SPA landing page for Arthaveda. Reduced load time by 30%, mobile-first design, structured SEO metadata, and automated AWS/Vercel CI/CD pipelines with 99.9% uptime.",
    tech: ["Next.js", "React.js", "AWS", "Vercel", "SEO", "CI/CD"],
    highlights: ["-30% load time", "Structured SEO", "99.9% uptime"],
    link: "https://www.arthavedalearning.com",
  },
  {
    title: "Bitcoin World AI Pipeline",
    category: "AI Content Automation",
    type: "AI PROJECT",
    color: "#f59e0b",
    icon: "⚡",
    description:
      "Autonomous AI content automation pipeline featuring RSS ingestion, multi-agent editorial and SEO curation workflows, and automated publishing system for crypto news media.",
    tech: ["Python", "FastAPI", "AI Agents", "RSS Ingestion", "SEO Automation"],
    highlights: ["Multi-Agent Pipeline", "Auto-Publishing", "Crypto Media"],
    link: "https://bitcoinworld.co.in/",
  },
  {
    title: "Racing 8888 (HKJC Scraper)",
    category: "Real-Time Betting & Data",
    type: "WEB3",
    color: "#ef4444",
    icon: "🏇",
    description:
      "High-throughput HKJC data scraper powering a real-time horse-racing betting platform with automated on-chain reward distribution and real-time live odds.",
    tech: ["Node.js", "Smart Contracts", "Web Scraping", "WebSockets", "MongoDB"],
    highlights: ["Real-time Odds", "Automated Rewards", "High-Throughput"],
    link: "#",
  },
  {
    title: "eQuity DeFi & HODL",
    category: "DeFi Protocols & DEX",
    type: "WEB3",
    color: "#4fc3f7",
    icon: "⟠",
    description:
      "High-performance DEX and DeFi protocols enabling secure peer-to-peer asset trading. Built real-time event listeners and a multi-RPC failover system cutting client costs by 30%.",
    tech: ["Solidity", "Multi-RPC Failover", "React", "Node.js", "Web3.js", "MetaMask"],
    highlights: ["-30% RPC costs", "DEX architecture", "Multi-RPC"],
    link: "#",
  },
  {
    title: "Wincho & Kickwin",
    category: "Blockchain Gaming",
    type: "CRYPTO GAME",
    color: "#c9a84c",
    icon: "🎮",
    description:
      "Blockchain-based gaming platforms with real-time multiplayer interactions, secure on-chain asset management, and provably fair game mechanics.",
    tech: ["Solidity", "React", "Node.js", "Web3", "MongoDB"],
    highlights: ["On-chain assets", "Real-time play", "Fair mechanics"],
    link: "#",
  },
  {
    title: "Rise Platform",
    category: "Mindful Sounds & Meditation",
    type: "FULL-STACK",
    color: "#B22234",
    icon: "🧘",
    description:
      "Mindful sounds & Sunya Talks meditation platform with user/provider/admin dashboards, improving load times by 20%, API response by 25%, and user engagement by 30%.",
    tech: ["React", "Node.js", "Firebase", "AWS", "Nginx", "Jenkins"],
    highlights: ["+30% engagement", "+20% user satisfaction", "5,000+ users"],
    link: "#",
  },
  {
    title: "Ausum Kids",
    category: "Therapy & Health Booking",
    type: "FULL-STACK",
    color: "#8fa8c8",
    icon: "🏥",
    description:
      "Therapy booking system connecting children with providers across multi-role dashboards. RESTful APIs improved response time by 25% for 5,000+ users.",
    tech: ["React", "Express", "Firebase", "AWS EC2", "MongoDB"],
    highlights: ["+25% API speed", "Multi-role system", "5,000+ users"],
    link: "#",
  },
  {
    title: "Parchi",
    category: "Business Management",
    type: "FULL-STACK",
    color: "#f472b6",
    icon: "💼",
    description:
      "Business management application with Firebase integration reducing data retrieval time by 40% and AWS CI/CD pipelines ensuring 99.9% uptime.",
    tech: ["React", "Node.js", "Firestore", "Firebase Auth", "AWS"],
    highlights: ["-40% data retrieval", "Auth system", "99.9% uptime"],
    link: "#",
  },
  {
    title: "StudySenpai",
    category: "Live Coding Clans (EdTech)",
    type: "LIVE SITE",
    color: "#38bdf8",
    icon: "⛩️",
    description:
      "Clan-based live coding cohorts platform for Full-Stack, Web3, and Gen AI engineering. Features hands-on live cohorts, zero upfront fees, and blockchain-verified credentials.",
    tech: ["React.js", "Web3", "Solidity", "Node.js", "Gen AI & RAG", "Tailwind CSS"],
    highlights: ["Live Cohorts", "Blockchain Credentials", "Live in Production"],
    link: "https://senpai-study.vercel.app/",
  },
];

const filters = [
  "ALL",
  "WEB3",
  "FULL-STACK",
  "AI PROJECT",
  "LIVE SITE",
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("ALL");

  const filtered =
    filter === "ALL" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      style={{ background: "linear-gradient(180deg, #040d1a, #05101f)" }}
      className="relative z-10 py-32 hex-bg"
    >
      <div className="relative z-20 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div
            className="font-mono-tech text-xs mb-3"
            style={{ color: "#c9a84c", letterSpacing: "0.3em" }}
          >
            ◆ MISSION ARCHIVE ◆
          </div>
          <h2
            className="font-bebas text-6xl mb-4 glow-gold"
            style={{ color: "#c9a84c", letterSpacing: "0.05em" }}
          >
            COMPLETED MISSIONS
          </h2>
          <div className="divider-shield w-48 mx-auto mb-8" />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className="font-mono-tech text-xs px-4 py-2 rounded"
                style={{
                  background:
                    filter === f ? "rgba(201,168,76,0.2)" : "rgba(0,15,40,0.6)",
                  border: `1px solid ${filter === f ? "rgba(201,168,76,0.5)" : "rgba(79,195,247,0.1)"}`,
                  color: filter === f ? "#c9a84c" : "#8fa8c8",
                  letterSpacing: "0.1em",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((proj, i) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-panel rounded-xl p-5 shield-card group"
              style={{ borderColor: `${proj.color}20` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: `${proj.color}18`,
                    border: `1px solid ${proj.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {proj.icon}
                </div>
                <span
                  className="font-mono-tech text-xs px-2 py-1 rounded"
                  style={{
                    background: `${proj.color}15`,
                    border: `1px solid ${proj.color}30`,
                    color: proj.color,
                    letterSpacing: "0.08em",
                  }}
                >
                  {proj.type}
                </span>
              </div>

              <h3
                className="font-bebas text-lg mb-1"
                style={{ color: proj.color, letterSpacing: "0.05em" }}
              >
                {proj.title}
              </h3>
              <div
                className="font-mono-tech text-xs mb-3"
                style={{ color: "#8fa8c8" }}
              >
                {proj.category}
              </div>

              <p
                className="font-rajdhani text-sm mb-4 leading-relaxed"
                style={{ color: "#8fa8c8" }}
              >
                {proj.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.highlights.map((h) => (
                  <span
                    key={h}
                    className="font-mono-tech text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `${proj.color}10`,
                      color: proj.color,
                      border: `1px solid ${proj.color}25`,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-tech text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "#8fa8c8",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {proj.link !== "#" && (
                <motion.a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-orbitron text-xs font-bold flex items-center gap-1.5"
                  style={{ color: proj.color }}
                  whileHover={{ x: 4 }}
                >
                  VISIT LIVE ↗
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
