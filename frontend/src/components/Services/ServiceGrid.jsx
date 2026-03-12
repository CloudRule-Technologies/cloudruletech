import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import { defaultContent } from "../../content/defaultContent.js";

const ServiceGrid = ({ services = defaultContent.services.coreServices }) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-14 w-[28rem] h-[28rem] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-16 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full text-xs tracking-[0.25em] font-semibold uppercase text-white/80 border border-white/20 bg-white/5">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Technology-driven solutions crafted to accelerate growth and elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 90}ms`, animationFillMode: "forwards" }}
            >
              <ServiceCard title={service.title} caption={service.caption} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
