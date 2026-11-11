"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingResume() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Show after scrolling past 150px
    const unsub = scrollY.on("change", (latest) => {
      setVisible(latest > 150);
    });
    return unsub;
  }, [scrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        y: visible ? 0 : 20,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href="/Udhayasurya_Resume.pdf"
        download="Udhayasurya_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Udhayasurya Resume"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(5, 16, 31, 0.95), rgba(0, 51, 102, 0.9))",
          backdropFilter: "blur(12px)",
          border: "1.5px solid rgba(79, 195, 247, 0.45)",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(79, 195, 247, 0.25)",
        }}
        whileHover={{
          scale: 1.08,
          borderColor: "#4fc3f7",
          boxShadow:
            "0 12px 35px rgba(0, 51, 102, 0.8), 0 0 30px rgba(79, 195, 247, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow pulse behind shield */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,195,247,0.25) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mini shield with download indicator */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg width="22" height="22" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="17"
              fill="#003366"
              stroke="rgba(79,195,247,0.8)"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="18" r="13" fill="#8fa8c8" />
            <circle cx="18" cy="18" r="9" fill="#B22234" />
            <circle cx="18" cy="18" r="5" fill="#F5F5F5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#003366"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col pr-1">
          <span
            className="font-orbitron text-xs font-bold leading-none tracking-wider text-left"
            style={{ color: "#4fc3f7" }}
          >
            RESUME
          </span>
          <span
            className="font-mono-tech text-[10px] tracking-widest text-left"
            style={{ color: "#8fa8c8" }}
          >
            DOWNLOAD PDF
          </span>
        </div>

        {/* Animated download arrow */}
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4fc3f7"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 2.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
}

