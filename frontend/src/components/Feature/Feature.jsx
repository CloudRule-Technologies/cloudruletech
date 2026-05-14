import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ══════════════════════════════════════════
   TYPEWRITER HOOK
══════════════════════════════════════════ */
const useTypewriter = (lines, speed = 40, pauseBetween = 800) => {
  const [displayed, setDisplayed] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) {
      // restart loop
      const reset = setTimeout(() => {
        setDisplayed([]);
        setLineIdx(0);
        setCharIdx(0);
      }, 2000);
      return () => clearTimeout(reset);
    }

    if (charIdx < lines[lineIdx].length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          if (!updated[lineIdx]) updated[lineIdx] = "";
          updated[lineIdx] += lines[lineIdx][charIdx];
          return updated;
        });
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, pauseBetween);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, lines, speed, pauseBetween]);

  return displayed;
};

/* ══════════════════════════════════════════
   VISUAL 1 — Website Development
   Full website being rendered live:
   Navbar → Hero → Cards → Footer
══════════════════════════════════════════ */
const BrowserVisual = () => {
  const [activePage, setActivePage] = useState(0);
  const pages = ["Home", "Services", "About"];

  useEffect(() => {
    const t = setInterval(() => setActivePage((p) => (p + 1) % pages.length), 3000);
    return () => clearInterval(t);
  }, []);

  const heroWords = ["Build.", "Scale.", "Thrive."];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx((w) => (w + 1) % heroWords.length), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#141414] border-b border-white/10 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/12" />
        {/* URL bar */}
        <div className="ml-2 flex-1 h-5 rounded-full bg-white/8 border border-white/10 flex items-center px-2.5 gap-1.5">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/50"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-[8px] text-white/50 font-mono tracking-wide">cloudrule.tech/{pages[activePage].toLowerCase()}</span>
        </div>
        {/* Loading bar */}
        <div className="w-14 h-1 rounded-full bg-white/8 overflow-hidden">
          <motion.div className="h-full bg-white/50 rounded-full"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        </div>
      </div>

      {/* Webpage content */}
      <div className="flex-1 bg-[#080808] flex flex-col overflow-hidden">

        {/* ── Navbar ── */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-white/8 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-white/30 border border-white/20" />
            <div className="h-1.5 w-10 rounded-full bg-white/35" />
          </div>
          <div className="ml-auto flex gap-3 items-center">
            {pages.map((pg, i) => (
              <motion.div key={i} className="h-1.5 rounded-full"
                animate={{ width: activePage === i ? 20 : 14, background: activePage === i ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.4 }} />
            ))}
            <motion.div className="h-4 w-10 rounded-full bg-white/25 border border-white/30"
              animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </div>

        {/* ── Hero Section ── */}
        <div className="px-4 py-3 border-b border-white/5 flex-shrink-0">
          <div className="flex flex-col gap-1.5">
            {/* Animated headline */}
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-12 rounded-full bg-white/55" />
              <motion.div className="h-2.5 rounded-full bg-white/80"
                animate={{ width: [32, 48, 36] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="h-1.5 w-28 rounded-full bg-white/20" />
            <div className="h-1 w-20 rounded-full bg-white/12" />
            {/* Animated CTA button */}
            <motion.div className="mt-1 h-5 w-14 rounded-lg border"
              animate={{
                backgroundColor: ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.08)"],
                borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.2)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* ── Service Cards ── */}
        <div className="px-4 py-2.5 flex gap-2 flex-shrink-0">
          {[
            { w: "h-10", label: "🌐 Web" },
            { w: "h-10", label: "📱 App" },
            { w: "h-10", label: "⚙️ API" },
          ].map((card, i) => (
            <motion.div key={i} className="flex-1 rounded-xl border border-white/10 bg-white/4 flex flex-col justify-between p-2"
              animate={{ borderColor: ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.22)", "rgba(255,255,255,0.07)"], y: [0, -2, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35 }}>
              <div className="text-[7px] text-white/40">{card.label}</div>
              <div className="h-1 w-full rounded-full bg-white/15 mt-1" />
              <div className="h-1 w-3/4 rounded-full bg-white/10 mt-0.5" />
            </motion.div>
          ))}
        </div>

        {/* ── Stats Row ── */}
        <div className="px-4 py-1.5 flex gap-2 items-center border-t border-white/5">
          {[["50+", "Projects"], ["98%", "Uptime"], ["24/7", "Support"]].map(([val, lbl], i) => (
            <motion.div key={i} className="flex items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}>
              <div className="text-[9px] font-bold text-white/70">{val}</div>
              <div className="text-[7px] text-white/30">{lbl}</div>
            </motion.div>
          ))}
          {/* Scroll indicator */}
          <motion.div className="ml-auto flex flex-col gap-0.5 items-center"
            animate={{ y: [0, 2, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}>
            <div className="w-px h-4 bg-gradient-to-b from-white/40 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-white/40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   VISUAL 2 — Mobile App Development
   Two detailed phone frames floating
══════════════════════════════════════════ */
const MobileVisual = () => (
  <div className="w-full h-full flex items-center justify-center gap-4">
    {[
      { w: 90, h: "96%", yAnim: [-8, 6, -8], delay: 0, title: "Dashboard", val: "₹1,24,890" },
      { w: 78, h: "80%", yAnim: [8, -5, 8], delay: 0.8, title: "Analytics", val: "↑ 23.4%" },
    ].map((phone, pi) => (
      <motion.div
        key={pi}
        style={{ width: phone.w, height: phone.h }}
        animate={{ y: phone.yAnim }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: phone.delay }}
        className="flex flex-col rounded-[22px] border border-white/20 overflow-hidden bg-[#0c0c0c]
                   shadow-[0_4px_30px_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.05)]"
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-4 pt-2.5 pb-1">
          <span className="text-[7.5px] font-bold text-white/60">9:41</span>
          <div className="flex gap-0.5 items-end">
            {[3, 5, 7, 9].map((h, i) => (
              <div key={i} className="w-1 rounded-sm bg-white/40" style={{ height: h }} />
            ))}
          </div>
        </div>
        {/* Notch */}
        <div className="flex justify-center pb-1">
          <div className="w-10 h-1 rounded-full bg-white/15" />
        </div>
        {/* App title */}
        <div className="px-4 pb-2 flex items-center justify-between">
          <span className="text-[9px] font-bold text-white/80">{phone.title}</span>
          <div className="w-5 h-5 rounded-full bg-white/10 border border-white/15" />
        </div>
        <div className="mx-4 h-px bg-white/8" />

        {/* Content */}
        <div className="flex-1 px-3 py-2.5 flex flex-col gap-2 overflow-hidden">
          {/* Stat card */}
          <motion.div
            className="rounded-2xl p-2 bg-white/6 border border-white/12"
            animate={{ borderColor: ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.25)", "rgba(255,255,255,0.08)"] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: pi * 0.5 }}
          >
            <div className="text-[7px] text-white/35 mb-0.5">Total Revenue</div>
            <motion.div
              className="text-[10px] font-bold text-white truncate"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {phone.val}
            </motion.div>
          </motion.div>

          {/* Mini bar chart */}
          <div className="flex items-end gap-0.5 h-10 bg-white/[0.02] rounded-xl px-2 pb-1.5 pt-1">
            {[40, 65, 45, 80, 55, 70].map((h, i) => (
              <motion.div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-white/40 to-white/10"
                animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.65}%`] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}
          </div>

          {/* List items */}
          {[...Array(pi === 0 ? 2 : 1)].map((_, i) => (
            <motion.div key={i} className="flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5], x: [0, 1.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}>
              <div className="w-6 h-6 rounded-xl bg-white/10 border border-white/12 flex-shrink-0" />
              <div className="flex flex-col gap-1 flex-1">
                <div className="h-1.5 bg-white/25 rounded-full w-full" />
                <div className="h-1 bg-white/12 rounded-full w-3/5" />
              </div>
              <div className="text-[7px] font-mono text-white/40">+12%</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around py-2.5 border-t border-white/8 mx-0">
          {[...Array(4)].map((_, i) => (
            <motion.div key={i} className="w-5 h-5 rounded-xl"
              style={{
                background: i === (pi === 0 ? 0 : 2) ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.05)",
                border: i === (pi === 0 ? 0 : 2) ? "1px solid rgba(255,255,255,0.35)" : "1px solid transparent",
              }}
              animate={i === (pi === 0 ? 0 : 2) ? { scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

/* ══════════════════════════════════════════
   VISUAL 3 — Software Solutions
   LIVE TYPING animation of real code
══════════════════════════════════════════ */
const codeSnippet = [
  "const app = express();",
  "",
  "app.get('/api/users', async",
  "  (req, res) => {",
  "  const users = await",
  "    User.find({active:true});",
  "  res.json({ users });",
  "});",
  "",
  "app.listen(8080, () =>",
  '  console.log("✓ Running :8080")',
  ");",
];

const getLineColor = (line) => {
  if (line.startsWith("const") || line.startsWith("app")) return "rgba(255,255,255,0.85)";
  if (line.includes("//")) return "rgba(255,255,255,0.3)";
  if (line.includes("'") || line.includes('"')) return "rgba(255,255,255,0.6)";
  if (line.startsWith("  ") || line.startsWith("    ")) return "rgba(255,255,255,0.55)";
  if (line === "") return "transparent";
  return "rgba(255,255,255,0.45)";
};

const SoftwareVisual = () => {
  const typedLines = useTypewriter(codeSnippet, 35, 300);
  const bars = [55, 72, 45, 88, 63, 78, 52, 94];

  return (
    <div className="w-full h-full flex gap-2">
      {/* Code editor — left side */}
      <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-white/12 bg-[#080808]">
        {/* Editor header */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111111] border-b border-white/8">
          <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="text-[8px] text-white/30 font-mono ml-2">server.js</span>
          <motion.div
            className="ml-auto w-1.5 h-1.5 rounded-full bg-white/50"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        {/* Code area */}
        <div className="flex-1 p-3 overflow-hidden flex flex-col">
          {codeSnippet.map((line, i) => (
            <div key={i} className="flex items-start gap-2 min-h-[14px]">
              <span className="text-[7px] text-white/15 font-mono w-3 text-right flex-shrink-0 mt-0.5">
                {line !== "" ? i + 1 : ""}
              </span>
              <span
                className="text-[8px] font-mono leading-snug whitespace-pre"
                style={{ color: getLineColor(line) }}
              >
                {typedLines[i] || ""}
                {/* blinking cursor on active line */}
                {typedLines.length === i && (
                  <motion.span
                    className="inline-block w-1.5 h-3 bg-white/80 align-middle ml-0.5"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — stats */}
      <div className="w-[38%] flex flex-col gap-2">
        {/* Stat chips */}
        {[["99.9%", "Uptime"], ["2.3ms", "Latency"], ["∞", "Scale"]].map(([val, lbl], i) => (
          <motion.div key={i}
            className="flex-1 rounded-xl border border-white/10 bg-white/4 text-center flex flex-col items-center justify-center"
            animate={{ borderColor: ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.22)", "rgba(255,255,255,0.07)"] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}>
            <div className="text-sm font-bold text-white/90">{val}</div>
            <div className="text-[7px] text-white/30 mt-0.5">{lbl}</div>
          </motion.div>
        ))}
        {/* Bar chart */}
        <div className="flex-[2] bg-white/[0.02] border border-white/8 rounded-xl flex items-end gap-0.5 px-2 pb-1.5 pt-1 overflow-hidden">
          {bars.map((h, i) => (
            <motion.div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-white/40 to-white/10"
              animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.65}%`] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   SERVICES
══════════════════════════════════════════ */
const services = [
  {
    id: "01", label: "Website Development",
    desc: "Blazing-fast, pixel-perfect websites built with modern frameworks. Responsive, SEO-ready, and crafted to convert visitors into customers.",
    visual: <BrowserVisual />, tag: "Web",
  },
  {
    id: "02", label: "Mobile App Development",
    desc: "Native & cross-platform mobile apps for iOS and Android. Smooth UX, high performance, and built to scale with your business.",
    visual: <MobileVisual />, tag: "Mobile",
  },
  {
    id: "03", label: "Software Solutions",
    desc: "Custom backend systems, APIs, dashboards and enterprise software — engineered with reliability, security, and scalability at the core.",
    visual: <SoftwareVisual />, tag: "Software",
  },
];

/* ══════════════════════════════════════════
   INTERACTIVE 3D TILT CARD
══════════════════════════════════════════ */
const ServiceCard = ({ svc, index }) => {
  const cardRef = React.useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const entryVariants = [
    { x: -100, y: 0,  opacity: 0 },
    { x: 0,    y: 100, opacity: 0 },
    { x: 100,  y: 0,  opacity: 0 },
  ];

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (cy - 0.5) * -12, y: (cx - 0.5) * 12 });
    setShimmerPos({ x: cx * 100, y: cy * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      initial={entryVariants[index]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.18,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10
                   bg-[#0a0a0a] h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── Animated glowing top bar ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px z-20"
          animate={hovered ? {
            background: [
              "linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)",
              "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)",
              "linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)",
            ]
          } : {
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)"
          }}
          transition={{ duration: 1.5, repeat: hovered ? Infinity : 0 }}
        />

        {/* ── Shimmer light follow cursor ── */}
        {hovered && (
          <div
            className="absolute inset-0 z-10 pointer-events-none rounded-3xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* ── Animated border glow on hover ── */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none z-0"
          animate={hovered ? {
            boxShadow: [
              "0 0 0 1px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.04)",
              "0 0 0 1px rgba(255,255,255,0.35), 0 0 50px rgba(255,255,255,0.1)",
              "0 0 0 1px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.04)",
            ]
          } : {
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 0 0px rgba(255,255,255,0)"
          }}
          transition={{ duration: 2, repeat: hovered ? Infinity : 0 }}
        />

        {/* ── Outer bottom shadow lift ── */}
        <motion.div
          className="absolute -inset-1 rounded-3xl pointer-events-none -z-10"
          animate={hovered ? {
            boxShadow: "0 30px 80px rgba(255,255,255,0.08), 0 10px 40px rgba(255,255,255,0.04)"
          } : {
            boxShadow: "0 0px 0px rgba(255,255,255,0)"
          }}
          transition={{ duration: 0.4 }}
        />

        {/* ── Visual area ── */}
        <div className="relative h-60 p-4 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0d0d0d 0%, #080808 100%)" }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          {/* Scan line effect on hover */}
          {hovered && (
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20"
              initial={{ top: "0%" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          )}
          {svc.visual}
        </div>

        {/* ── Text content ── */}
        <div className="relative z-10 p-7 flex flex-col gap-3 flex-1">
          {/* ── Arc Draw + Glitch Number Badge ── */}
          <div className="flex items-center gap-3 mb-1">
            <div className="relative w-12 h-12 flex-shrink-0">

              {/* SVG Arc that draws itself on scroll-in */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
                {/* Track circle */}
                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                {/* Animated arc */}
                <motion.circle
                  cx="24" cy="24" r="20"
                  fill="none"
                  stroke={hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Arc tip dot */}
                <motion.circle
                  cx="24" cy="4" r="2"
                  fill={hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)"}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 1.5, duration: 0.3 }}
                />
              </svg>

              {/* Number with glitch on hover */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Base number */}
                <span className="relative text-[13px] font-black font-mono text-white z-10">
                  {svc.id}

                  {/* Glitch layer 1 — red channel offset */}
                  {hovered && (
                    <motion.span
                      className="absolute inset-0 text-[13px] font-black font-mono text-white/60"
                      animate={{ x: [-2, 2, -1, 1, 0], opacity: [0.6, 0.8, 0.4, 0.7, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.2 }}
                      style={{ clipPath: "inset(30% 0 40% 0)", mixBlendMode: "screen" }}
                    >
                      {svc.id}
                    </motion.span>
                  )}
                  {/* Glitch layer 2 — blue channel offset */}
                  {hovered && (
                    <motion.span
                      className="absolute inset-0 text-[13px] font-black font-mono text-white/40"
                      animate={{ x: [1, -2, 2, -1, 0], opacity: [0.5, 0.7, 0.3, 0.6, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.2, delay: 0.05 }}
                      style={{ clipPath: "inset(60% 0 10% 0)", mixBlendMode: "screen" }}
                    >
                      {svc.id}
                    </motion.span>
                  )}
                </span>
              </div>
            </div>

            <motion.div
              className="flex-1 h-px"
              animate={hovered ? {
                background: "linear-gradient(to right, rgba(255,255,255,0.35), transparent)"
              } : {
                background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)"
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <motion.h3
            className="text-xl font-bold leading-snug"
            animate={hovered ? { color: "rgba(255,255,255,1)" } : { color: "rgba(255,255,255,0.9)" }}
          >
            {svc.label}
          </motion.h3>
          <p className="text-gray-400 text-sm leading-relaxed flex-1">{svc.desc}</p>

          {/* Animated bottom line indicator */}
          <div className="overflow-hidden h-px mt-2">
            <motion.div
              className="h-full bg-gradient-to-r from-white/50 via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={hovered ? { x: "0%" } : { x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ══════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════ */
const Feature = () => (
  <section id="features" className="relative pt-4 pb-24 lg:py-32 bg-black overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.025] rounded-full blur-[160px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-12 lg:mb-20"
      >
        <h2 className="mb-6">Welcome to <span className="text-gradient">CloudRule</span></h2>
        <p className="text-gray-400 text-lg">
          We build responsive websites, powerful mobile apps, and scalable software solutions for startups and businesses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((svc, index) => (
          <ServiceCard key={svc.id} svc={svc} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Feature;
