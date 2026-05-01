"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Arsenal",
    icon: "⚡",
    color: "#4fc3f7",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend Systems",
    icon: "🛡",
    color: "#B22234",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express.js", level: 91 },
      { name: "MongoDB", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "RESTful APIs", level: 92 },
    ],
  },
  {
    title: "Web3 & Blockchain",
    icon: "🔗",
    color: "#c9a84c",
    skills: [
      { name: "Solidity", level: 85 },
      { name: "DeFi Protocols", level: 82 },
      { name: "Smart Contracts", level: 84 },
      { name: "MetaMask / Web3", level: 88 },
      { name: "DEX / DApps", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁",
    color: "#8fa8c8",
    skills: [
      { name: "AWS EC2", level: 82 },
      { name: "Docker / K8s", level: 75 },
      { name: "Jenkins CI/CD", level: 80 },
      { name: "Nginx", level: 83 },
      { name: "Linux OS", level: 85 },
    ],
  },
];

const techBadges = [
  "JavaScript",
  "TypeScript",
  "Solidity",
  "C",
  "C++",
  "Redux",
  "Bootstrap",
  "Material UI",
  "FlutterFlow",
  "MySQL",
  "Firestore",
  "Mongoose",
  "Google Cloud",
  "Git",
  "GitHub",
  "JWT",
  "WordPress",
  "GPT Models",
  "LLMs",
  "RAG",
  "Pinecone",
  "Hugging Face",
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
      className="relative py-32 hex-bg"
      style={{
        background: "linear-gradient(180deg, #05101f, #07142a, #05101f)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 mb-20">
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
