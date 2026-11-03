import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa6";

import royalSeaFoodsBanner from "../../assets/Royal Sea Foods App Banner.png";
import vendhanIasBanner from "../../assets/Vendhan IAS Academy Banner.png";

const clientData = [
  {
    id: "royalseafoods",
    name: "RoyalSeafoods App",
    subtitle: "Fresh Seafood Delivery & E-Commerce Mobile App",
    category: "Mobile Application",
    platform: "Google Play Store",
    link: "https://play.google.com/store/apps/details?id=com.royalseafoods.customer",
    image: royalSeaFoodsBanner,
    badgeText: "Live on Play Store",
    badgeIcon: <FaGooglePlay className="w-3.5 h-3.5 text-emerald-400" />,
    ctaText: "View on Google Play",
    ctaIcon: <FaGooglePlay className="w-4 h-4" />,
    description:
      "A complete seafood ordering and home-delivery mobile application crafted for seamless browsing, fresh catch purchasing, instant checkout, and real-time order tracking.",
    tags: ["Android App", "E-Commerce", "Customer App", "Live Store"],
    accentGlow: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "vendhanias",
    name: "Vendhan IAS Academy",
    subtitle: "Civil Services & Competitive Exam Portal",
    category: "Web Platform",
    platform: "Official Portal",
    link: "https://www.vendhanias.com",
    image: vendhanIasBanner,
    badgeText: "Official Website",
    badgeIcon: <FiGlobe className="w-3.5 h-3.5 text-blue-400" />,
    ctaText: "Visit vendhanias.com",
    ctaIcon: <FiGlobe className="w-4 h-4" />,
    description:
      "A modern, responsive institutional web portal designed for Tamil Nadu's premier civil services academy, facilitating course admissions, exam updates, and student resources.",
    tags: ["Web Platform", "EdTech", "IAS / IPS Academy", "Active Portal"],
    accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

const ClientCard = ({ client, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <a
        href={client.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${client.name} in a new tab`}
        className="group relative flex flex-col h-full rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c0c] hover:border-white/25 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_45px_rgba(255,255,255,0.06)] cursor-pointer select-none"
      >
        {/* Subtle hover gradient glow */}
        <div
          className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${client.accentGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
        />

        {/* Top edge glowing accent line on hover */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/60 transition-all duration-500 z-20" />

        {/* ── Banner Image Section ── */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-white/10">
          <img
            src={client.image}
            alt={`${client.name} Banner`}
            loading="lazy"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/30 to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Floating badge (Top Left) */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/70 backdrop-blur-md border border-white/15 text-white shadow-sm">
              {client.badgeIcon}
              <span>{client.badgeText}</span>
            </span>
          </div>

          {/* Floating arrow icon pill (Top Right) */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
              <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>

          {/* Subtle category chip at bottom of image */}
          <div className="absolute bottom-3 left-4 z-10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
              {client.category}
            </span>
          </div>
        </div>

        {/* ── Card Content ── */}
        <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
          <div className="flex flex-col gap-2.5">
            {/* Title & Platform */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors tracking-tight">
                  {client.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 font-medium mt-0.5">
                  {client.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
              {client.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {client.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 border border-white/10 text-white/70 group-hover:border-white/15 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA Row */}
          <div className="pt-3 border-t border-white/10">
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                {client.ctaIcon}
                <span>{client.ctaText}</span>
              </span>
              <span className="flex items-center gap-1 text-xs text-white/60 group-hover:text-white transition-colors">
                <span>Visit Project</span>
                <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Clients = () => {
  return (
    <section
      id="clients"
      className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-blue-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/80 tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Our Valued Clients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by <span className="text-gradient">Innovative Brands</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Discover real-world applications and web platforms engineered by CloudRule, powering seamless digital operations for our clients.
          </p>
        </motion.div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 max-w-5xl mx-auto">
          {clientData.map((client, index) => (
            <ClientCard key={client.id} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;