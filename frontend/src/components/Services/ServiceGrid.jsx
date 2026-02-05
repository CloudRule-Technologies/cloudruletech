// src/components/Services/ServiceGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard.jsx';

const services = [
  {
    title: "Custom Mobile Apps",
    caption: "Native & cross-platform applications built specifically for your business goals with cutting-edge technology."
  },
  {
    title: "Custom Software",
    caption: "Enterprise-grade tailored software that solves real operational challenges and scales with your growth."
  },
  {
    title: "Web Development",
    caption: "High-performance, responsive websites with modern architecture, SEO optimization & blazing-fast load times."
  },
  {
    title: "Graphic Design",
    caption: "Clean, timeless brand identity and marketing collateral design that resonates with your audience."
  },
  {
    title: "UI/UX Design",
    caption: "User-centered interfaces that drive engagement, conversion and create memorable digital experiences."
  },
  {
    title: "Digital Marketing",
    caption: "Data-driven growth strategies across search, social & content that deliver measurable ROI."
  },
  {
    title: "IT Consultancy",
    caption: "Strategic technology advisory & digital transformation planning aligned with business objectives."
  },
  {
    title: "Technical Support",
    caption: "Proactive 24×7 support with fast SLA-based resolution and dedicated account management."
  },
  {
    title: "Web Automation",
    caption: "RPA & workflow automation that eliminates repetitive tasks and maximizes operational efficiency."
  },
  {
    title: "IoT Development",
    caption: "Secure, scalable connected solutions for smart devices & systems with real-time data integration."
  },
];

const ServiceGrid = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse-slow"/>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}/>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="
              text-sm font-semibold tracking-[0.2em] uppercase
              text-[var(--accent)] opacity-80
              px-4 py-2 rounded-full
              border border-[var(--accent)]/20
              bg-[var(--accent)]/5
              animate-fade-in
            ">
              What We Do
            </span>
          </div>
          
          <h2 className="
            text-4xl md:text-6xl font-bold tracking-tight mb-6
            bg-gradient-to-br from-white via-[var(--text-primary)] to-[var(--text-secondary)]
            bg-clip-text text-transparent
            animate-fade-in-up
          ">
            Our Core Services
          </h2>
          
          <p className="
            text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto
            animate-fade-in-up
          " style={{animationDelay: '100ms'}}>
            Comprehensive technology solutions designed to transform your business and drive sustainable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
          gap-6 md:gap-8
        ">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{animationDelay: `${index * 80}ms`}}
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