"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Shield from "./Shield";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("udhayasurya138@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      icon: "✉",
      label: "Email",
      value: "udhayasurya138@gmail.com",
      action: copyEmail,
      actionLabel: copied ? "COPIED!" : "COPY",
      color: "#4fc3f7",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 8608770947",
      action: () => window.open("tel:+918608770947"),
      actionLabel: "CALL",
      color: "#c9a84c",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Madurai, Tamil Nadu, India",
      action: undefined,
      actionLabel: null,
      color: "#B22234",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/udhayasuryau",
      action: () =>
        window.open("https://www.linkedin.com/in/udhayasuryau", "_blank"),
      actionLabel: "VISIT",
      color: "#8fa8c8",
    },
  ];

  return (
    <section
      id="contact"
      style={{ background: "linear-gradient(180deg, #070f20, #03090f)" }}
      className="py-24 hex-bg relative overflow-hidden"
    >
      {/* Background shield */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <Shield size={600} animate={false} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div
            className="font-mono-tech text-xs mb-3"
            style={{ color: "#B22234", letterSpacing: "0.3em" }}
          >
            ◆ INITIATE CONTACT ◆
          </div>
          <h2
            className="font-bebas text-6xl mb-4"
            style={{ color: "#F5F5F5", letterSpacing: "0.05em" }}
          >
            <span className="glow-blue" style={{ color: "#4fc3f7" }}>
              SEND
            </span>{" "}
            <span className="glow-red" style={{ color: "#B22234" }}>
              SIGNAL
            </span>
          </h2>
          <div className="divider-shield w-48 mx-auto mb-6" />
          <p className="font-rajdhani text-lg" style={{ color: "#8fa8c8" }}>
            Ready to build something extraordinary? Let's connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="glass-panel rounded-xl p-5 flex items-center gap-4 shield-card"
              style={{ borderLeft: `3px solid ${item.color}` }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                  boxShadow: `0 0 15px ${item.color}20`,
                }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="font-mono-tech text-xs mb-0.5"
                  style={{ color: "#8fa8c8" }}
                >
                  {item.label}
                </div>
                <div
                  className="font-rajdhani font-semibold text-sm truncate"
                  style={{ color: "#c8d8e8" }}
                >
                  {item.value}
                </div>
              </div>
              {item.action && item.actionLabel && (
                <motion.button
                  onClick={item.action}
                  className="font-orbitron font-bold text-xs px-3 py-1.5 rounded shrink-0"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}40`,
                    color: item.color,
                    letterSpacing: "0.1em",
                  }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: `0 4px 12px ${item.color}30`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.actionLabel}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="mailto:udhayasurya138@gmail.com"
            className="inline-flex items-center gap-3 font-orbitron font-bold text-base px-10 py-5 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #003366, #B22234)",
              color: "#F5F5F5",
              border: "1px solid rgba(79,195,247,0.3)",
              letterSpacing: "0.12em",
              boxShadow:
                "0 8px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,195,247,0.1)",
            }}
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 12px 50px rgba(0,51,102,0.6), 0 0 30px rgba(79,195,247,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span>⚡</span>
            INITIATE MISSION
            <span>⚡</span>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(79,195,247,0.08)" }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div style={{ width: 24, height: 24 }}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="#003366"
                  stroke="rgba(79,195,247,0.5)"
                  strokeWidth="1"
                />
                <circle cx="12" cy="12" r="8" fill="#8fa8c8" />
                <circle cx="12" cy="12" r="5" fill="#B22234" />
                <circle cx="12" cy="12" r="2.5" fill="#F5F5F5" />
                <path
                  d="M12 7 L13 10.5 L16.5 10.5 L14 12.5 L15 16 L12 14 L9 16 L10 12.5 L7.5 10.5 L11 10.5 Z"
                  fill="#003366"
                />
              </svg>
            </div>
            <span
              className="font-orbitron text-sm font-bold"
              style={{ color: "#4fc3f7" }}
            >
              UDHAYASURYA U
            </span>
          </div>
          <p className="font-mono-tech text-xs" style={{ color: "#8fa8c8" }}>
            © 2025 · Built with Next.js · Framer Motion · Tailwind CSS
          </p>
          <p
            className="font-mono-tech text-xs mt-1"
            style={{ color: "#4a5568" }}
          >
            "I can do this all day." — Steve Rogers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
