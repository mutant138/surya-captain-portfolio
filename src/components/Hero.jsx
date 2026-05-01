"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Shield from "./Shield";

const typewriterTexts = [
  "Full-Stack Developer",
  "Web3 Engineer",
  "DeFi Builder",
  "AI/LLM Architect",
  "MERN Stack Expert",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterTexts[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setIdx((i) => (i + 1) % typewriterTexts.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 60 : 90,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx]);

  return (
    <span style={{ color: "#4fc3f7" }}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
        style={{ color: "#B22234" }}
      >
        |
      </motion.span>
    </span>
  );
}

// Particle stars background
function StarField() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setMounted(true);
    setStars(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
      })),
    );
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {stars.map((s) => (
        <motion.div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: "#e8f4fd",
            borderRadius: "50%",
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  const stats = [
    { label: "Years Exp", value: "3+" },
    { label: "Projects", value: "15+" },
    { label: "Stack", value: "MERN+Web3" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-start justify-center py-20 overflow-hidden hex-bg"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, #0a1a2e 0%, #05101f 60%, #020810 100%)",
      }}
    >
      <StarField />

      {/* Big background shield rings */}
      <motion.div
        style={{
          position: "absolute",
          right: "-10%",
          top: "45%",
          transform: "translateY(-50%)",
          opacity: 0.1,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            width: 700,
            height: 700,
            borderRadius: "50%",
            border: "60px solid #003366",
            boxShadow:
              "inset 0 0 0 50px #B22234, inset 0 0 0 100px #8fa8c8, inset 0 0 0 150px #B22234",
          }}
        />
      </motion.div>

      {/* Scanline effect */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(79,195,247,0.3), transparent)",
          pointerEvents: "none",
        }}
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full"
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-24 lg:gap-40">
          {/* Left: Text */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full"
              style={{
                background: "rgba(178,34,52,0.15)",
                border: "1px solid rgba(178,34,52,0.4)",
              }}
            >
              <motion.div
                style={{
                  width: 8,
                  height: 8,
                  background: "#B22234",
                  borderRadius: "50%",
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span
                className="font-mono-tech text-xs"
                style={{ color: "#ef5350", letterSpacing: "0.25em" }}
              >
                AVAILABLE FOR MISSION
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="font-bebas text-xl mb-4 glow-blue"
                style={{ color: "#4fc3f7", letterSpacing: "0.5em" }}
              >
                AGENT PROFILE
              </div>
              <h1
                className="font-bebas leading-none mb-6"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  letterSpacing: "0.2em",
                }}
              >
                <span className="text-gradient-flag">UDHAYASURYA</span>
              </h1>
              <h2
                className="font-bebas leading-none mb-6"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#8fa8c8",
                  letterSpacing: "0.08em",
                }}
              >
                <Typewriter />
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-rajdhani text-lg leading-relaxed mb-10"
              style={{ color: "#8fa8c8", maxWidth: 550 }}
            >
              Building decentralized applications, scalable MERN systems, and
              AI-powered platforms. From DeFi protocols to LLM integrations — I
              ship production-ready code that performs at 99.9% uptime.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mb-12"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="glass-panel rounded-lg p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="font-orbitron font-bold text-lg glow-blue"
                    style={{ color: "#4fc3f7" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="font-mono-tech text-xs mt-1"
                    style={{ color: "#8fa8c8" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-8 lg:gap-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-orbitron font-bold px-7 py-3.5 rounded text-sm"
                style={{
                  background: "linear-gradient(135deg, #003366, #004a99)",
                  color: "#4fc3f7",
                  border: "1px solid rgba(79,195,247,0.4)",
                  letterSpacing: "0.12em",
                  boxShadow:
                    "0 4px 20px rgba(0,51,102,0.5), inset 0 1px 0 rgba(79,195,247,0.2)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 8px 30px rgba(0,51,102,0.8), 0 0 20px rgba(79,195,247,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                VIEW MISSIONS
              </motion.a>

              <motion.a
                href="https://github.com/mutant138"
                target="_blank"
                rel="noreferrer"
                className="font-orbitron font-bold px-7 py-3.5 rounded text-sm"
                style={{
                  background: "linear-gradient(135deg, #B22234, #8b1a1a)",
                  color: "#F5F5F5",
                  border: "1px solid rgba(178,34,52,0.4)",
                  letterSpacing: "0.12em",
                  boxShadow: "0 4px 20px rgba(178,34,52,0.4)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(178,34,52,0.7)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                GITHUB
              </motion.a>

              <motion.a
                href="https://space-themed-portolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-orbitron font-bold px-7 py-3.5 rounded text-sm"
                style={{
                  background: "transparent",
                  color: "#8fa8c8",
                  border: "1px solid rgba(143,168,200,0.3)",
                  letterSpacing: "0.12em",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(79,195,247,0.5)",
                  color: "#4fc3f7",
                }}
                whileTap={{ scale: 0.97 }}
              >
                OLD SITE ↗
              </motion.a>
            </motion.div>

            {/* Contact chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {[
                { label: "udhayasurya138@gmail.com", icon: "✉" },
                { label: "+91 8608770947", icon: "📡" },
                { label: "Madurai, TN", icon: "📍" },
              ].map((c) => (
                <span
                  key={c.label}
                  className="font-mono-tech text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(0,15,40,0.6)",
                    border: "1px solid rgba(143,168,200,0.15)",
                    color: "#8fa8c8",
                  }}
                >
                  {c.icon} {c.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
            }}
            className="relative shrink-0"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield size={320} />
            </motion.div>

            {/* Floating tech chips around shield */}
            {[
              { label: "Solidity", angle: 0, r: 180 },
              { label: "Next.js", angle: 60, r: 190 },
              { label: "MongoDB", angle: 120, r: 175 },
              { label: "AWS", angle: 180, r: 185 },
              { label: "React", angle: 240, r: 175 },
              { label: "Node.js", angle: 300, r: 185 },
            ].map((chip, i) => {
              const rad = (chip.angle * Math.PI) / 180;
              const x = Math.cos(rad) * chip.r;
              const y = Math.sin(rad) * chip.r;
              return (
                <motion.div
                  key={chip.label}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.15 }}
                >
                  <div
                    className="font-mono-tech text-xs px-2.5 py-1 rounded whitespace-nowrap"
                    style={{
                      background: "rgba(0,15,40,0.85)",
                      border: "1px solid rgba(79,195,247,0.25)",
                      color: "#4fc3f7",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {chip.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-mono-tech text-xs"
            style={{ color: "#8fa8c8", letterSpacing: "0.2em" }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(#4fc3f7, transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
