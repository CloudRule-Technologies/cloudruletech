import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import { FaGooglePlay, FaLeaf } from "react-icons/fa6";

import royalSeaFoodsBanner from "../../assets/Royal Sea Foods App Banner.png";
import vendhanIasBanner from "../../assets/Vendhan IAS Academy Banner.png";
import grandmasCareBanner from "../../assets/Grandma’s Care Herbal Glow Banner.png";

const clientData = [
  {
    id: "royalseafoods",
    name: "RoyalSeafoods App",
    subtitle: "Fresh Seafood Delivery & E-Commerce Mobile App",
    category: "Mobile Application",
    link: "https://play.google.com/store/apps/details?id=com.royalseafoods.customer",
    image: royalSeaFoodsBanner,
    categoryIcon: <FaGooglePlay className="w-3.5 h-3.5 text-blue-400" />,
    ctaText: "View on Google Play",
    ctaIcon: <FaGooglePlay className="w-4 h-4 text-blue-400" />,
    description:
      "A complete seafood ordering and home-delivery mobile application crafted for seamless product discovery, instant cart checkout, and real-time order tracking.",
    tags: ["Android App", "E-Commerce", "Customer App", "Live Store"],
    glowColor: "rgba(59, 130, 246, 0.18)",
    borderGlow: "rgba(59, 130, 246, 0.4)",
    badgeColor: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
  {
    id: "vendhanias",
    name: "Vendhan IAS Academy",
    subtitle: "Civil Services & Competitive Exam Portal",
    category: "Web Platform",
    link: "https://www.vendhanias.com",
    image: vendhanIasBanner,
    categoryIcon: <FiGlobe className="w-3.5 h-3.5 text-amber-400" />,
    ctaText: "Visit vendhanias.com",
    ctaIcon: <FiGlobe className="w-4 h-4 text-amber-400" />,
    description:
      "A modern, responsive institutional web portal designed for Tamil Nadu's premier civil services academy, facilitating course admissions, batch updates, and student resources.",
    tags: ["Web Platform", "EdTech", "IAS Academy", "Active Portal"],
    glowColor: "rgba(245, 158, 11, 0.18)",
    borderGlow: "rgba(245, 158, 11, 0.4)",
    badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    id: "grandmascare",
    name: "Grandma's Care",
    subtitle: "Organic & Herbal Products E-Commerce Platform",
    category: "E-Commerce Website",
    link: "https://www.grandmacare.in",
    image: grandmasCareBanner,
    categoryIcon: <FaLeaf className="w-3.5 h-3.5 text-emerald-400" />,
    ctaText: "Visit grandmacare.in",
    ctaIcon: <FaLeaf className="w-4 h-4 text-emerald-400" />,
    description:
      "A dedicated organic herbal e-commerce platform selling traditional skincare, haircare, and wellness formulations with online ordering, secure payment, and doorstep delivery.",
    tags: ["E-Commerce", "Herbal Products", "Organic Care", "Live Store"],
    glowColor: "rgba(16, 185, 129, 0.18)",
    borderGlow: "rgba(16, 185, 129, 0.4)",
    badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
];

/* ── Interactive 3D Card ── */
const ClientCard = ({ client, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    // Subtle tilt for smooth luxury feel
    setTilt({
      x: (cy - 0.5) * -8,
      y: (cx - 0.5) * 8,
    });
    setShimmerPos({ x: cx * 100, y: cy * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const isLastOdd = index === 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
      className={`h-full ${
        isLastOdd
          ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 w-full"
          : "w-full"
      }`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <a
          href={client.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${client.name} in a new tab`}
          className="group relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-white/25 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.8)] cursor-pointer select-none"
        >
          {/* Top animated glowing accent bar on hover */}
          <div
            className="absolute top-0 inset-x-0 h-px z-30 transition-all duration-500"
            style={{
              background: hovered
                ? `linear-gradient(90deg, transparent, ${client.borderGlow}, transparent)`
                : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            }}
          />

          {/* Dynamic cursor-following light shimmer */}
          {hovered && (
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-3xl transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, ${client.glowColor} 0%, transparent 60%)`,
              }}
            />
          )}

          {/* ── PRISTINE BANNER IMAGE (NO BADGES OVER THE IMAGE) ── */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-white/10 flex-shrink-0">
            <img
              src={client.image}
              alt={`${client.name} Banner`}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Ultra-subtle bottom blend gradient only */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* ── CARD BODY ── */}
          <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
            <div className="flex flex-col gap-3">
              {/* Category & Status Bar (Cleanly placed below the image) */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${client.badgeColor}`}
                >
                  {client.categoryIcon}
                  <span>{client.category}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs text-white/50 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400/90 font-semibold tracking-wide">Live</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors tracking-tight flex items-center justify-between">
                  <span>{client.name}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                    <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </h3>
                <p className="text-xs sm:text-sm text-white/45 font-medium mt-1">
                  {client.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {client.description}
              </p>

              {/* Key Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {client.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.04] border border-white/10 text-white/60 group-hover:border-white/20 group-hover:text-white/80 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA Row */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-white/[0.08] group-hover:border-white/25 transition-all duration-300">
                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  {client.ctaIcon}
                  <span>{client.ctaText}</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/60 group-hover:text-white transition-colors">
                  <span>Open</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

/* ── Section Component ── */
const Clients = () => {
  return (
    <section
      id="clients"
      className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow badge */}
         

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Successful <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Discover real-world applications and web platforms engineered by CloudRule, powering seamless digital operations for our clients.
          </p>
        </motion.div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {clientData.map((client, index) => (
            <ClientCard key={client.id} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;