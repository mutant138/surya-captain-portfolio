"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer (Web3)",
    company: "WeAlwin Technologies Pvt. Ltd",
    period: "May 2025 – Present",
    location: "Madurai, TN",
    type: "CURRENT",
    color: "#4fc3f7",
    icon: "🔗",
    bullets: [
      "Engineered high-performance DEX & DeFi protocols (eQuity DeFi, HODL) with secure peer-to-peer trading",
      "Integrated complex blockchain functionalities bridging web interfaces with decentralized backends",
      "Built blockchain-based gaming platforms with real-time on-chain asset management (Wincho, Kickwin)",
      "Full-stack MERN architecture from concept to deployment for scalable web applications",
    ],
  },
  {
    role: "Software Developer",
    company: "Sunyatee International Foundation",
    period: "May 2024 – May 2025",
    location: "Hyderabad, Telangana",
    type: "1 YEAR",
    color: "#B22234",
    icon: "⚡",
    bullets: [
      "Architected Rise Platform (meditation app) & Parchi (business mgmt), boosting web perf by 30%",
      "Firebase integration cut data retrieval time by 40% across Parchi, Rise, and Ausum Kids",
      "Designed RESTful APIs improving response time by 25% for 5,000+ users",
      "AWS + Jenkins CI/CD pipelines achieving 99.9% uptime across all deployments",
    ],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "Sharpener",
    period: "Aug 2023 – Apr 2024",
    location: "Bangalore",
    type: "8 MONTHS",
    color: "#c9a84c",
    icon: "🛡",
    bullets: [
      "Transitioned career from sales to tech, mastering MERN stack in production environment",
      "Enhanced API performance by 30% using Node.js and Express.js",
      "Automated CI/CD with AWS & Jenkins, cutting deployment time by 50%",
      "Implemented secure Firebase authentication with real-time database updates",
    ],
  },
  {
    role: "Web Developer (WordPress)",
    company: "Corizo",
    period: "Nov 2022 – Oct 2023",
    location: "Bengaluru, Karnataka",
    type: "1 YEAR",
    color: "#8fa8c8",
    icon: "🌐",
    bullets: [
      "Developed and maintained WordPress-based web applications for clients",
      "Built responsive layouts and custom themes with modern web standards",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      style={{ background: "linear-gradient(180deg, #05101f, #040d1a)" }}
      className="relative z-10 py-32"
    >
      <div className="relative z-20 max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <div
            className="font-mono-tech text-xs mb-4"
            style={{ color: "#ef5350", letterSpacing: "0.4em" }}
          >
            ◆ FIELD RECORD ◆
          </div>
          <h2
            className="font-bebas text-6xl md:text-7xl mb-6 glow-red"
            style={{ color: "#B22234", letterSpacing: "0.1em" }}
          >
            OPS HISTORY
          </h2>
          <div className="divider-shield w-56 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (hidden on small screens) */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(180deg, #4fc3f7, #B22234, #c9a84c, #8fa8c8)",
              transform: "translateX(-50%)",
              opacity: 0.3,
            }}
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Card Container */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    className="glass-panel rounded-2xl p-6 md:p-8 shield-card"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      borderLeft: `4px solid ${exp.color}`,
                      background: "rgba(5, 16, 31, 0.7)",
                    }}
                  >
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 font-mono-tech text-xs"
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        letterSpacing: "0.15em",
                      }}
                    >
                      {exp.type === "CURRENT" && (
                        <motion.span
                          style={{
                            width: 6,
                            height: 6,
                            background: exp.color,
                            borderRadius: "50%",
                          }}
                          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                      {exp.type}
                    </div>

                    <h3
                      className="font-bebas text-2xl md:text-3xl mb-1"
                      style={{ color: exp.color, letterSpacing: "0.05em" }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      className="font-orbitron font-bold text-sm mb-2"
                      style={{ color: "#4fc3f7" }}
                    >
                      {exp.company}
                    </div>
                    <div
                      className="font-mono-tech text-xs mb-6 opacity-70"
                      style={{ color: "#8fa8c8" }}
                    >
                      {exp.period} · {exp.location}
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="font-rajdhani text-base leading-relaxed flex gap-3"
                          style={{ color: "#c8d8e8" }}
                        >
                          <span
                            className="mt-1.5 shrink-0"
                            style={{ color: exp.color }}
                          >
                            {"▸ "}
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <motion.div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: "50%",
                      background: "#05101f",
                      border: `2px solid ${exp.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      boxShadow: `0 0 20px ${exp.color}40`,
                    }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 glass-panel rounded-xl p-6"
          style={{ borderColor: "rgba(201,168,76,0.2)" }}
        >
          <div className="flex items-center gap-4">
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(201,168,76,0.15)",
                border: "2px solid rgba(201,168,76,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                flexShrink: 0,
              }}
            >
              🎓
            </div>
            <div>
              <div
                className="font-mono-tech text-xs mb-1"
                style={{ color: "#c9a84c", letterSpacing: "0.15em" }}
              >
                EDUCATION
              </div>
              <div className="font-bebas text-xl" style={{ color: "#c9a84c" }}>
                B.Tech Biotechnology — Lovely Professional University
              </div>
              <div
                className="font-rajdhani text-sm"
                style={{ color: "#8fa8c8" }}
              >
                Minor in Gene Coding · Punjab · 2022 · Career pivot to Software
                Engineering
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
