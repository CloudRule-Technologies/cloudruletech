// src/components/Services/ProcessGrid.jsx
import React from 'react';

const steps = [
  { 
    num: 1, 
    title: "Discovery", 
    desc: "Understanding your vision, goals & challenges through collaborative workshops and stakeholder interviews",
    icon: "🔍"
  },
  { 
    num: 2, 
    title: "Strategy & Planning", 
    desc: "Defining scope, tech stack & timeline with detailed roadmap and resource allocation",
    icon: "📋"
  },
  { 
    num: 3, 
    title: "UI/UX Design", 
    desc: "Creating wireframes, prototypes & design system with user-centric approach and brand alignment",
    icon: "🎨"
  },
  { 
    num: 4, 
    title: "Development", 
    desc: "Clean, modular & well-tested code following industry best practices and scalable architecture",
    icon: "💻"
  },
  { 
    num: 5, 
    title: "Quality Assurance", 
    desc: "Multi-level testing — functional, performance, security with automated and manual verification",
    icon: "✓"
  },
  { 
    num: 6, 
    title: "Deployment", 
    desc: "Smooth launch with CI/CD & monitoring setup ensuring zero-downtime and optimal performance",
    icon: "🚀"
  },
  { 
    num: 7, 
    title: "Training & Handover", 
    desc: "Knowledge transfer & comprehensive documentation with team enablement sessions",
    icon: "📚"
  },
  { 
    num: 8, 
    title: "Continuous Support", 
    desc: "Maintenance, optimization & future enhancements with dedicated support team and SLA guarantees",
    icon: "🔄"
  },
];

const ProcessGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)]/60 to-[var(--bg-primary)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}/>
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
              Our Process
            </span>
          </div>
          
          <h2 className="
            text-4xl md:text-6xl font-bold tracking-tight mb-6
            bg-gradient-to-br from-white via-[var(--text-primary)] to-[var(--text-secondary)]
            bg-clip-text text-transparent
            animate-fade-in-up
          ">
            How We Deliver Excellence
          </h2>
          
          <p className="
            text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto
            animate-fade-in-up
          " style={{animationDelay: '100ms'}}>
            A proven methodology refined through hundreds of successful projects
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="
                process-step group
                bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
                border border-[var(--border)]
                rounded-2xl
                p-8
                relative
                overflow-hidden
                transition-all duration-500 ease-out
                hover:border-[var(--accent)]/60
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,229,229,0.1)]
                hover:-translate-y-2
                hover:scale-[1.02]
                animate-fade-in-up
              "
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Connection line to next step (desktop only) */}
              {index < steps.length - 1 && (
                <div className="
                  hidden lg:block
                  absolute top-1/2 -right-8 w-8 h-[2px]
                  bg-gradient-to-r from-[var(--accent)]/40 to-transparent
                  group-hover:from-[var(--accent)]/80
                  transition-all duration-500
                  z-0
                ">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent)]/40 group-hover:bg-[var(--accent)]/80 transition-all duration-500"/>
                </div>
              )}

              {/* Animated gradient overlay */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent
                transition-opacity duration-700
                pointer-events-none
              "/>

              {/* Shimmer effect */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent via-white/5 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-all duration-1000
                pointer-events-none
              "/>

              <div className="relative z-10">
                {/* Step number with icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5
                    border border-[var(--accent)]/20
                    flex items-center justify-center
                    text-2xl font-bold text-white
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-6
                    group-hover:border-[var(--accent)]/60
                    group-hover:shadow-[0_0_20px_rgba(229,229,229,0.2)]
                  ">
                    <span className="bg-gradient-to-br from-white to-[var(--accent)] bg-clip-text text-transparent">
                      {step.num}
                    </span>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex-1 flex items-center gap-1">
                    {Array.from({length: 8}).map((_, i) => (
                      <div 
                        key={i}
                        className={`
                          h-1 flex-1 rounded-full transition-all duration-500
                          ${i < step.num 
                            ? 'bg-[var(--accent)]/60 group-hover:bg-[var(--accent)]' 
                            : 'bg-[var(--border)]'
                          }
                        `}
                        style={{
                          transitionDelay: `${i * 50}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="
                  text-xl md:text-2xl font-bold text-white mb-4
                  transition-all duration-300
                  group-hover:text-[var(--accent)]
                  tracking-tight
                ">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="
                  text-[var(--text-secondary)] text-sm md:text-base leading-relaxed
                  transition-all duration-300
                  group-hover:text-[var(--text-primary)]
                ">
                  {step.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="
                absolute bottom-0 left-0 right-0 h-[2px]
                bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent
                scale-x-0 group-hover:scale-x-100
                transition-transform duration-700
                origin-center
              "/>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="
          mt-16 md:mt-20 text-center
          animate-fade-in-up
        " style={{animationDelay: '800ms'}}>
          <p className="text-[var(--text-secondary)] text-lg mb-6">
            Ready to transform your vision into reality?
          </p>
          <button className="
            px-8 py-4 rounded-xl
            bg-gradient-to-r from-[var(--accent)] to-white
            text-black font-semibold text-lg
            transition-all duration-300
            hover:shadow-[0_0_40px_rgba(229,229,229,0.3)]
            hover:scale-105
            active:scale-95
          ">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessGrid;