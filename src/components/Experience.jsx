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
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div
            className="font-mono-tech text-xs mb-3"
            style={{ color: "#B22234", letterSpacing: "0.3em" }}
          >
            ◆ FIELD RECORD ◆
          </div>
          <h2
            className="font-bebas text-6xl mb-4 glow-red"
            style={{ color: "#B22234", letterSpacing: "0.05em" }}
          >
            OPS HISTORY
          </h2>
          <div className="divider-shield w-48 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(180deg, #4fc3f7, #B22234, #c9a84c, #8fa8c8)",
              transform: "translateX(-50%)",
            }}
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`relative flex items-start mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Card */}
                <div
                  className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <motion.div
                    className="glass-panel rounded-xl p-5 shield-card"
                    whileHover={{ scale: 1.02 }}
                    style={{ borderColor: `${exp.color}30` }}
                  >
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3 font-mono-tech text-xs`}
                      style={{
                        background: `${exp.color}18`,
                        border: `1px solid ${exp.color}40`,
                        color: exp.color,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {exp.type === "CURRENT" && (
                        <motion.span
                          style={{
                            width: 6,
                            height: 6,
                            background: exp.color,
                            borderRadius: "50%",
                            display: "inline-block",
                          }}
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                      {exp.type}
                    </div>

                    <h3
                      className="font-bebas text-xl mb-1"
                      style={{ color: exp.color, letterSpacing: "0.05em" }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      className="font-orbitron font-bold text-xs mb-1"
                      style={{ color: "#c8d8e8" }}
                    >
                      {exp.company}
                    </div>
                    <div
                      className="font-mono-tech text-xs mb-3"
                      style={{ color: "#8fa8c8" }}
                    >
                      {exp.period} · {exp.location}
                    </div>

                    <ul
                      className={`space-y-1.5 ${isLeft ? "text-right" : "text-left"}`}
                    >
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="font-rajdhani text-sm"
                          style={{ color: "#8fa8c8" }}
                        >
                          <span style={{ color: exp.color }}>{"▸ "}</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Center node */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                >
                  <motion.div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${exp.color}30, #05101f)`,
                      border: `2px solid ${exp.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      boxShadow: `0 0 20px ${exp.color}50`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${exp.color}30`,
                        `0 0 25px ${exp.color}70`,
                        `0 0 10px ${exp.color}30`,
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
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
