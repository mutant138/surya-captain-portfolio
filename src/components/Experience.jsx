"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer (Web3 & AI)",
    company: "WeAlwin Technologies",
    period: "May 2025 – Present",
    location: "Madurai, TN",
    type: "CURRENT",
    color: "#4fc3f7",
    icon: "🔗",
    bullets: [
      "DeFi & DEX Development: Built and deployed decentralized exchanges and DeFi protocols for secure peer-to-peer asset trading (eQuity DeFi, HODL)",
      "Blockchain Integration: Connected smart contracts to full-stack apps with real-time on-chain event listeners, and built a multi-RPC failover system that avoided rate limits and cut client costs by 30%",
      "Crypto Gaming: Developed features for blockchain-based games, including real-time interactions and secure on-chain asset management (Wincho, Kickwin)",
      "AI Automation & Scraping: Created an AI content pipeline for Bitcoin World (RSS ingestion, editorial and SEO agents, auto-publishing) and an HKJC data scraper powering a real-time horse-racing betting platform with automated rewards (Racing 8888)",
      "Full-Stack Development: Built scalable, responsive web applications end to end using the MERN stack (MongoDB, Express, React, Node.js)",
    ],
  },
  {
    role: "Software Developer",
    company: "Sunyatee International Foundation",
    period: "May 2024 – May 2025",
    location: "Hyderabad",
    type: "1 YEAR",
    color: "#B22234",
    icon: "⚡",
    bullets: [
      "Full-Stack Development: Built and maintained full-stack apps with Node.js, Express.js, and React.js for Parchi (business management) and Rise Platform (mindful sounds), improving web performance by 30% and user satisfaction by 20%",
      "Firebase Integration: Integrated Firebase (Firestore, Storage, Authentication) into Parchi and Rise Platform, cutting data retrieval time by 40% and strengthening user data security",
      "REST API Development: Designed RESTful APIs for Rise Platform and Ausum Kids, improving response time by 25% and working with front-end teams to enhance UX for 5,000+ users",
      "Platform Leadership: Led development of Rise (meditation and Sunya talks) and Ausum Kids (therapy booking), improving load times by 20% and user engagement by 30% across users, providers, and admins",
      "DevOps & Deployment: Deployed applications on AWS with Nginx and Jenkins, automating CI/CD pipelines and maintaining 99.9% uptime for Parchi, Rise, and Ausum Kids",
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
      "Career Transition & Full-Stack Development: Moved from sales into tech and built full-stack applications with the MERN stack (MongoDB, Express.js, React.js, Node.js), improving system efficiency and scalability in a fast-paced environment",
      "API Optimization: Improved API performance by 30% using Node.js and Express.js, streamlining data flow between front end and back end",
      "Firebase Integration: Implemented secure authentication and real-time database updates with Firebase (Firestore, Storage, Authentication), improving data security and reducing latency",
    ],
  },
  {
    role: "Wordpress Admin (Sales specialist)",
    company: "Corizo",
    period: "Aug 2022 – Jul 2023",
    location: "Bangalore",
    type: "1 YEAR",
    color: "#8fa8c8",
    icon: "🌐",
    bullets: [
      "Managed and maintained the Corizo WordPress website serving 1,000+ online learners, handling content updates and keeping the site running smoothly",
      "Mentored 100+ students through online programs, providing technical support and career guidance, and improving course completion rates by 90%",
      "Converted 200+ leads into enrolled students through consultative selling and structured follow-ups, generating ₹1.3L in enrollment revenue",
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

        {/* Dossier Download Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
          className="glass-panel rounded-xl p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            borderLeft: "4px solid #4fc3f7",
            background:
              "linear-gradient(135deg, rgba(0,51,102,0.35), rgba(5,16,31,0.85))",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(79,195,247,0.15)",
                border: "1px solid rgba(79,195,247,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                flexShrink: 0,
              }}
            >
              📄
            </div>
            <div>
              <div
                className="font-mono-tech text-xs mb-0.5"
                style={{ color: "#4fc3f7", letterSpacing: "0.15em" }}
              >
                VERIFIED CAREER RECORD
              </div>
              <div
                className="font-rajdhani font-bold text-base"
                style={{ color: "#F5F5F5" }}
              >
                Looking for the complete resume and detailed project breakdowns?
              </div>
              <div
                className="font-mono-tech text-xs mt-0.5"
                style={{ color: "#8fa8c8" }}
              >
                Udhayasurya_Resume.pdf · Web3, AI, Full-Stack MERN & Next.js
              </div>
            </div>
          </div>

          <motion.a
            href="/Udhayasurya_Resume.pdf"
            download="Udhayasurya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-orbitron font-bold text-xs px-6 py-3.5 rounded flex items-center gap-2 shrink-0"
            style={{
              background: "linear-gradient(135deg, #003366, #004a99)",
              color: "#4fc3f7",
              border: "1px solid rgba(79,195,247,0.4)",
              letterSpacing: "0.12em",
              boxShadow: "0 4px 15px rgba(0,51,102,0.4)",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "#4fc3f7",
              boxShadow: "0 6px 25px rgba(79,195,247,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
