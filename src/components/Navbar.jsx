"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  "Mission",
  "Arsenal",
  "Ops History",
  "Intel",
  "Projects",
  "Contact",
];
const linkIds = [
  "hero",
  "skills",
  "experience",
  "about",
  "projects",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 80));
    return unsub;
  }, [scrollY]);

  const scrollTo = (id, i) => {
    setActive(i);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        style={{
          background: scrolled
            ? "rgba(5, 16, 31, 0.95)"
            : "rgba(5, 16, 31, 0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(79,195,247,0.15)",
          transition: "background 0.3s",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: 2,
            background:
              "linear-gradient(90deg, #B22234, #003366, #4fc3f7, #003366, #B22234)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => scrollTo("hero", 0)}
          >
            {/* Mini shield */}
            <div style={{ position: "relative", width: 36, height: 36 }}>
              <svg width="36" height="36" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="17"
                  fill="#003366"
                  stroke="rgba(79,195,247,0.6)"
                  strokeWidth="1"
                />
                <circle cx="18" cy="18" r="13" fill="#8fa8c8" />
                <circle cx="18" cy="18" r="9" fill="#B22234" />
                <circle cx="18" cy="18" r="5" fill="#F5F5F5" />
                <path
                  d="M18 10.5 L19.5 15 L24 15 L20.5 17.5 L22 22 L18 19.5 L14 22 L15.5 17.5 L12 15 L16.5 15 Z"
                  fill="#003366"
                />
              </svg>
            </div>
            <div>
              <div
                className="font-orbitron text-sm font-bold"
                style={{ color: "#4fc3f7" }}
              >
                UDHAYASURYA
              </div>
              <div
                className="font-mono-tech text-xs"
                style={{ color: "#8fa8c8", letterSpacing: "0.15em" }}
              >
                FULL-STACK · WEB3 · AI
              </div>
            </div>
          </motion.div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-14">
            {links.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => scrollTo(linkIds[i], i)}
                className="relative font-rajdhani font-semibold text-sm px-5 py-2 rounded"
                style={{
                  color: active === i ? "#4fc3f7" : "#8fa8c8",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  background:
                    active === i ? "rgba(79,195,247,0.08)" : "transparent",
                  border:
                    active === i
                      ? "1px solid rgba(79,195,247,0.2)"
                      : "1px solid transparent",
                }}
                whileHover={{ color: "#4fc3f7", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {active === i && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 16,
                      height: 2,
                      background: "#4fc3f7",
                      borderRadius: 2,
                      boxShadow: "0 0 8px #4fc3f7",
                    }}
                  />
                )}
                {link}
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="mailto:udhayasurya138@gmail.com"
            className="font-orbitron text-xs font-bold px-5 py-2.5 rounded"
            style={{
              background: "linear-gradient(135deg, #B22234, #8b1a1a)",
              color: "#F5F5F5",
              border: "1px solid rgba(239,83,80,0.4)",
              letterSpacing: "0.1em",
              boxShadow: "0 4px 15px rgba(178,34,52,0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 25px rgba(178,34,52,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            DEPLOY
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
