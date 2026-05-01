"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "eQuity DeFi & HODL",
    category: "DeFi Protocol",
    type: "WEB3",
    color: "#4fc3f7",
    icon: "⟠",
    description:
      "High-performance Decentralized Exchange and DeFi protocol enabling secure peer-to-peer asset trading with advanced liquidity mechanisms.",
    tech: ["Solidity", "React", "Node.js", "Web3.js", "MetaMask", "MERN"],
    highlights: ["DEX architecture", "Liquidity pools", "Smart contracts"],
    link: "#",
  },
  {
    title: "Wincho & Kickwin",
    category: "Blockchain Gaming",
    type: "CRYPTO GAME",
    color: "#c9a84c",
    icon: "🎮",
    description:
      "Blockchain-based gaming platforms with real-time interactions, secure on-chain asset management, and provably fair game mechanics.",
    tech: ["Solidity", "React", "Node.js", "Web3", "MongoDB"],
    highlights: ["On-chain assets", "Real-time play", "Fair mechanics"],
    link: "#",
  },
  {
    title: "Rise Platform",
    category: "Wellness App",
    type: "FULL-STACK",
    color: "#B22234",
    icon: "🧘",
    description:
      "Mindful sounds & meditation platform with admin/user dashboards, improving load times by 20% and increasing user engagement by 30%.",
    tech: ["React", "Node.js", "Firebase", "AWS", "Nginx", "Jenkins"],
    highlights: ["+30% engagement", "99.9% uptime", "5000+ users"],
    link: "#",
  },
  {
    title: "Ausum Kids",
    category: "Healthcare Booking",
    type: "FULL-STACK",
    color: "#8fa8c8",
    icon: "🏥",
    description:
      "Therapy booking system connecting children with providers. RESTful API improved response time by 25% for seamless user/provider/admin interaction.",
    tech: ["React", "Express", "Firebase", "AWS EC2", "MongoDB"],
    highlights: ["+25% API speed", "Multi-role system", "Scalable"],
    link: "#",
  },
  {
    title: "Otaku Match",
    category: "AI Matchmaking",
    type: "AI PROJECT",
    color: "#a78bfa",
    icon: "🤖",
    description:
      "AI-powered matchmaking platform for gamers & anime enthusiasts. MongoDB schemas categorize 500+ titles for precise AI-driven compatibility scoring.",
    tech: ["Next.js", "Node.js", "MongoDB", "AI/ML", "LLM"],
    highlights: ["500+ titles", "AI scoring", "Niche community"],
    link: "#",
  },
  {
    title: "Arthaveda Landing Page",
    category: "SEO + Performance",
    type: "LIVE SITE",
    color: "#34d399",
    icon: "📈",
    description:
      "High-performance SPA for Arthaveda Learning & Development. Reduced load time by 30%, mobile-first design, structured metadata for organic traffic growth.",
    tech: ["Next.js", "React", "AWS", "Vercel", "SEO"],
    highlights: ["-30% load time", "Mobile-first", "Live in production"],
    link: "https://www.arthavedalearning.com",
  },
  {
    title: "Notesly",
    category: "Open Source",
    type: "OPEN SOURCE",
    color: "#fb923c",
    icon: "📚",
    description:
      "Open-source platform enabling 10,000+ students to share handwritten PDF notes. GitHub Releases for decentralized storage, +40% contribution growth.",
    tech: ["Next.js", "React", "TypeScript", "GitHub API"],
    highlights: ["10,000+ students", "+40% contribs", "SEO optimized"],
    link: "https://notesly.vercel.app/",
  },
  {
    title: "Parchi",
    category: "Business Management",
    type: "FULL-STACK",
    color: "#f472b6",
    icon: "💼",
    description:
      "Business management application with Firebase integration reducing data retrieval time by 40%, CI/CD automation ensuring 99.9% uptime.",
    tech: ["React", "Node.js", "Firestore", "Firebase Auth", "AWS"],
    highlights: ["-40% data retrieval", "Auth system", "99.9% uptime"],
    link: "#",
  },
];

const filters = [
  "ALL",
  "WEB3",
  "FULL-STACK",
  "AI PROJECT",
  "OPEN SOURCE",
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
      className="py-24 hex-bg"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
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
