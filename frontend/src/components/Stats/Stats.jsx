import React, { useState } from "react";
import { motion } from "framer-motion";

/* ── Single stat with hover circle animation ── */
const StatItem = ({ stat, index }) => {
  const [hovered, setHovered] = useState(false);
  const circumference = 2 * Math.PI * 36; // r=36

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center justify-center cursor-default select-none"
    >
      {/* ── SVG ring container ── */}
      <div className="relative w-28 h-28 flex items-center justify-center">

        {/* Outer expanding pulse rings on hover */}
        {hovered && (
          <>
            <motion.div
              className="absolute rounded-full border border-white/20"
              initial={{ width: 80, height: 80, opacity: 0.6 }}
              animate={{ width: 120, height: 120, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute rounded-full border border-white/10"
              initial={{ width: 80, height: 80, opacity: 0.4 }}
              animate={{ width: 140, height: 140, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
            />
          </>
        )}

        {/* SVG arc that draws on hover */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 80 80"
        >
          {/* Track */}
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
          />
          {/* Animated arc */}
          <motion.circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset: hovered ? 0 : circumference,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Tip dot at top of arc */}
          <motion.circle
            cx="40" cy="4"
            r="2.5"
            fill="white"
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: hovered ? 0.5 : 0 }}
          />
        </svg>

        {/* Inner subtle static ring */}
        <div className="absolute inset-3 rounded-full border border-white/8" />

        {/* ── Stat number ── */}
        <motion.div
          className="relative z-10 text-center"
          animate={{
            scale: hovered ? 1.08 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
            {stat.value}
            <span className="text-gray-300">{stat.suffix}</span>
          </div>
        </motion.div>
      </div>

      {/* Label */}
      <motion.div
        className="mt-3 text-white/40 font-medium uppercase tracking-widest text-[10px] text-center"
        animate={{ color: hovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)" }}
        transition={{ duration: 0.3 }}
      >
        {stat.label}
      </motion.div>

      {/* Underline sweep on hover */}
      <div className="overflow-hidden h-px w-16 mt-1.5">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          animate={{ x: hovered ? "0%" : "-100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

/* ── Main Stats Section ── */
const Stats = () => {
  const stats = [
    { label: "Projects Delivered", value: "4+",   suffix: "" },
    { label: "Happy Clients",      value: "4+",   suffix: "" },
    { label: "Cloud Uptime",       value: "99.9", suffix: "%" },
    { label: "Support",            value: "24/7", suffix: "" },
  ];

  return (
    <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
