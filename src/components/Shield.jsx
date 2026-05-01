"use client";
import { motion } from "framer-motion";

export default function Shield({ size = 280 }) {
  const cx = size / 2;
  const cy = size / 2;

  const r1 = size * 0.46;
  const r2 = size * 0.36;
  const r3 = size * 0.26;
  const r4 = size * 0.14;

  // Star generator
  const star = (cx, cy, r, points = 5) => {
    const outer = r;
    const inner = r * 0.4;
    let d = "";

    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const radius = i % 2 === 0 ? outer : inner;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      d += `${i === 0 ? "M" : "L"}${x},${y}`;
    }

    return d + "Z";
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      {/* 🔵 OUTER GLOW */}
      <motion.div
        style={{
          position: "absolute",
          inset: -40,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,195,247,0.15), transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* 🔵 OUTER ROTATING RING */}
      <motion.div
        style={{
          position: "absolute",
          inset: -20,
          borderRadius: "50%",
          border: "2px dashed rgba(79,195,247,0.4)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* 🔴 COUNTER RING */}
      <motion.div
        style={{
          position: "absolute",
          inset: -30,
          borderRadius: "50%",
          border: "2px dashed rgba(178,34,52,0.3)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* 🛡️ MAIN SHIELD */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "relative", zIndex: 2 }}
      >
        <defs>
          <radialGradient id="blueGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#1a3a6e" />
            <stop offset="100%" stopColor="#00204a" />
          </radialGradient>

          <radialGradient id="silverGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#c8d8e8" />
            <stop offset="100%" stopColor="#8fa8c8" />
          </radialGradient>

          <radialGradient id="redGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#d63b3b" />
            <stop offset="100%" stopColor="#8b1a1a" />
          </radialGradient>

          <radialGradient id="coreGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#e8f4fd" />
            <stop offset="100%" stopColor="#9ab8d0" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 🔵 Outer blue ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r1}
          fill="url(#blueGrad)"
          filter="url(#glow)"
        />

        {/* ⚪ Silver ring */}
        <circle cx={cx} cy={cy} r={r2} fill="url(#silverGrad)" />

        {/* 🔴 Red ring */}
        <circle cx={cx} cy={cy} r={r3} fill="url(#redGrad)" />

        {/* ⚪ Core */}
        <circle cx={cx} cy={cy} r={r4} fill="url(#coreGrad)" />

        {/* ⭐ Star */}
        <motion.path
          d={star(cx, cy, r4 * 0.9)}
          fill="#003366"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* ✨ Highlight */}
        {/* <ellipse
          cx={cx * 0.75}
          cy={cy * 0.65}
          rx={r1 * 0.3}
          ry={r1 * 0.15}
          fill="rgba(255,255,255,0.08)"
        /> */}
      </svg>
    </div>
  );
}
