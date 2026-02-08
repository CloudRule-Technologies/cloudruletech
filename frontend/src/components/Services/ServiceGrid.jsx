// src/components/Services/ServiceGrid.jsx
import React from "react";
import ServiceCard from "./ServiceCard.jsx";

const services = [
  {
    title: "Custom Mobile Apps",
    caption:
      "Native & cross-platform applications built specifically for your business goals with cutting-edge technology.",
  },
  {
    title: "Custom Software",
    caption:
      "Enterprise-grade tailored software that solves real operational challenges and scales with your growth.",
  },
  {
    title: "Web Development",
    caption:
      "High-performance, responsive websites with modern architecture, SEO optimization & blazing-fast load times.",
  },
  {
    title: "Graphic Design",
    caption:
      "Clean, timeless brand identity and marketing collateral design that resonates with your audience.",
  },
  {
    title: "UI/UX Design",
    caption:
      "User-centered interfaces that drive engagement and create memorable digital experiences.",
  },
  {
    title: "Digital Marketing",
    caption:
      "Data-driven growth strategies across search, social & content that deliver measurable ROI.",
  },
  {
    title: "IT Consultancy",
    caption:
      "Strategic technology advisory & digital transformation planning aligned with business objectives.",
  },
  {
    title: "Technical Support",
    caption:
      "Proactive 24×7 support with fast SLA-based resolution and dedicated account management.",
  },
  {
    title: "Web Automation",
    caption:
      "RPA & workflow automation that eliminates repetitive tasks and maximizes efficiency.",
  },
  {
    title: "IoT Development",
    caption:
      "Secure, scalable connected solutions for smart devices & real-time data integration.",
  },
];

const ServiceGrid = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-14 w-[28rem] h-[28rem] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-16 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full text-xs tracking-[0.25em] font-semibold uppercase text-white/80 border border-white/20 bg-white/5">
            What We Do
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Our Core Services
          </h2>

          <p className="text-lg md:text-xl text-white/70">
            Technology-driven solutions crafted to accelerate growth and elevate
            your digital presence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 90}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ServiceCard
                title={service.title}
                caption={service.caption}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
