"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Arsenal",
    icon: "⚡",
    color: "#4fc3f7",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "TypeScript / JavaScript", level: 92 },
      { name: "Redux Toolkit", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Material UI / Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend Systems",
    icon: "🛡",
    color: "#B22234",
    skills: [
      { name: "Node.js & Express.js", level: 94 },
      { name: "FastAPI & Fastify", level: 86 },
      { name: "RESTful APIs & JWT", level: 92 },
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "MySQL & Database Design", level: 85 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    color: "#a78bfa",
    skills: [
      { name: "RAG & Vector DBs (Pinecone)", level: 88 },
      { name: "LangChain & LangGraph", level: 87 },
      { name: "AI Automation (OpenClaw)", level: 86 },
      { name: "OpenRouter & Ollama", level: 89 },
      { name: "Autonomous Agents & Scraping", level: 90 },
    ],
  },
  {
    title: "Web3 & Blockchain",
    icon: "🔗",
    color: "#c9a84c",
    skills: [
      { name: "Solidity & Smart Contracts", level: 88 },
      { name: "Uniswap v4 & DeFi Protocols", level: 85 },
      { name: "Multi-RPC Failover System", level: 90 },
      { name: "DEX & Crypto Gaming", level: 88 },
      { name: "MetaMask & Wallet Integration", level: 92 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁",
    color: "#8fa8c8",
    skills: [
      { name: "AWS EC2 & GCP", level: 85 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Jenkins CI/CD Automation", level: 84 },
      { name: "Nginx Web Server", level: 86 },
      { name: "Git, GitHub & Linux/Unix", level: 92 },
    ],
  },
  {
    title: "Mobile & Low-Code",
    icon: "📱",
    color: "#34d399",
    skills: [
      { name: "FlutterFlow Development", level: 85 },
      { name: "Firebase Firestore & Auth", level: 92 },
      { name: "Firebase Realtime Database", level: 88 },
      { name: "WordPress Administration", level: 90 },
      { name: "Cloud Storage & Security Rules", level: 88 },
    ],
  },
];

const techBadges = [
  "JavaScript (ES6+)",
  "TypeScript",
  "Python",
  "Solidity",
  "C++",
  "HTML5",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Fastify",
  "RESTful APIs",
  "JWT Authentication",
  "RAG",
  "LangChain",
  "LangGraph",
  "Vector DBs (Pinecone)",
  "OpenRouter",
  "Ollama",
  "AI Automation (OpenClaw)",
  "Uniswap v4",
  "DeFi & DEX",
  "DApps",
  "Smart Contracts",
  "MetaMask",
  "Multi-RPC Failover",
  "MongoDB",
  "MySQL",
  "Firestore",
  "Firebase Realtime DB",
  "Mongoose",
  "AWS EC2",
  "Google Cloud Platform",
  "Docker",
  "Jenkins CI/CD",
  "Nginx",
  "Git",
  "GitHub",
  "Linux/Unix Systems",
  "FlutterFlow",
  "WordPress",
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-rajdhani font-medium text-sm text-[#c8d8e8]">
          {name}
        </span>
        <span className="font-mono-tech text-xs" style={{ color }}>
          {level}%
        </span>
      </div>

      <div className="h-1.5 bg-white/5 rounded overflow-hidden border border-white/5">
        <motion.div
          className="h-full rounded"
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 10px ${color}50`,
            originX: 0,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative z-10 py-32 hex-bg"
      style={{
        background: "#071a30",
      }}
    >
      <div className="relative z-20 max-w-6xl mx-auto px-6" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <div className="font-mono-tech text-xs mb-4 tracking-[0.3em] text-[#B22234]">
            ◆ CAPABILITY INDEX ◆
          </div>

          <h2 className="font-bebas text-6xl md:text-7xl mb-6 glow-blue text-[#4fc3f7]">
            WEAPON ARSENAL
          </h2>

          <div className="divider-shield w-56 mx-auto" />
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15 }}
              className="glass-panel rounded-2xl p-7 hover:scale-[1.02] transition-all"
            >
              {/* CARD HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3
                  className="font-orbitron text-sm font-bold tracking-wide"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* LINE */}
              <div
                className="h-[2px] mb-6 rounded"
                style={{
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                }}
              />

              {/* SKILLS */}
              <div>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={ci * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="text-center mb-8">
            <span className="font-mono-tech text-xs tracking-[0.25em] text-[#8fa8c8]">
              ADDITIONAL TECH STACK
            </span>
          </div>

          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.02 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "rgba(79,195,247,0.5)",
                  color: "#4fc3f7",
                }}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-[#020c1f]/80 text-[#8fa8c8]"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
