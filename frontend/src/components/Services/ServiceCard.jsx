// src/components/Services/ServiceCard.jsx
import React, { useState } from 'react';

const ServiceCard = ({ title, caption, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="
        service-card group
        relative h-full
        transition-all duration-500 ease-out
        hover:-translate-y-3
        hover:scale-[1.02]
      "
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: `${index * 100}ms`,
        opacity: 0
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card */}
      <div className="
        relative h-full min-h-[280px] md:min-h-[300px]
        bg-black
        border border-white/10
        rounded-3xl
        p-6 md:p-8
        overflow-hidden
        transition-all duration-500
        hover:border-white/30
        hover:bg-[#0a0a0a]
        hover:shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_80px_rgba(255,255,255,0.1)]
      ">
        {/* White gradient overlay on hover */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-white/[0.05] via-transparent to-transparent
          transition-opacity duration-700
          pointer-events-none
        "/>

        {/* Animated mesh gradient background */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-1000
          pointer-events-none
        ">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] via-transparent to-transparent animate-pulse" style={{animationDuration: '3s'}}/>
        </div>

        {/* Shimmer effect */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-all duration-1000
          pointer-events-none
        "/>

        {/* Top decorative elements */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between">
            {/* Icon container */}
            <div className="
              relative
              w-14 h-14 md:w-16 md:h-16 rounded-2xl
              bg-white/5
              border border-white/10
              flex items-center justify-center
              transition-all duration-500
              group-hover:scale-110 group-hover:rotate-12
              group-hover:border-white/30
              group-hover:bg-white/10
              group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
            ">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-700"/>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700" style={{transitionDelay: '100ms'}}/>
              
              {/* Center dot with pulse */}
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-white group-hover:animate-pulse"/>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/50 animate-ping"/>
              </div>
            </div>
            
            {/* Arrow indicator */}
            <div className="
              opacity-0 group-hover:opacity-100
              translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0
              transition-all duration-500
              p-2 rounded-xl
              bg-white/5
              border border-white/10
            ">
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                />
              </svg>
            </div>
          </div>

          {/* Index number (now more visible on hover) */}
          <div className="
            absolute -top-2 -left-2 md:-top-3 md:-left-3
            text-7xl md:text-8xl lg:text-9xl font-black
            text-white/[0.10] group-hover:text-white/[0.20]
            transition-all duration-700
            select-none pointer-events-none
            leading-none
          ">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-3 md:space-y-4">
          {/* Title */}
          <h3 className="
            text-xl md:text-2xl lg:text-3xl font-bold text-white
            transition-all duration-300
            group-hover:text-white
            tracking-tight
            leading-tight
          ">
            {title}
          </h3>
          
          {/* Decorative line */}
          <div className="flex items-center gap-2">
            <div className="
              h-[2px] w-10 rounded-full
              bg-gradient-to-r from-white/40 to-transparent
              group-hover:w-16 group-hover:from-white/70
              transition-all duration-500
            "/>
            <div className="
              h-[2px] w-[2px] rounded-full bg-white/40
              group-hover:w-2 group-hover:h-2
              group-hover:bg-white/70
              transition-all duration-500
            "/>
          </div>

          {/* Description */}
          <p className="
            text-white/50 text-sm md:text-base leading-relaxed
            transition-all duration-300
            group-hover:text-white/70
            line-clamp-3
          ">
            {caption}
          </p>

          {/* Read more link */}
          <div className="
            pt-2
            opacity-0 group-hover:opacity-100
            translate-y-2 group-hover:translate-y-0
            transition-all duration-500
          ">
            <button className="
              inline-flex items-center gap-2
              text-xs md:text-sm font-semibold
              text-white/60 
              hover:text-white
              transition-colors duration-300
            ">
              <span>Learn more</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="
          absolute bottom-0 left-0 right-0 h-[2px]
          bg-gradient-to-r from-transparent via-white/50 to-transparent
          scale-x-0 group-hover:scale-x-100
          transition-transform duration-700
          origin-center
        "/>

        {/* Corner glow effects */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.03] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"/>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/[0.03] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{transitionDelay: '100ms'}}/>

        {/* Particle effect (optional decorative elements) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{
                top: `${20 + i * 25}%`,
                right: `${10 + i * 15}%`,
                animation: `float ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Scan line effect (optional extra detail) */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          pointer-events-none
          overflow-hidden
        ">
          <div 
            className="absolute w-full h-[1px] bg-white/10 animate-scan"
            style={{
              animation: 'scan 3s linear infinite'
            }}
          />
        </div>
      </div>

      {/* Outer glow on hover */}
      <div className="
        absolute inset-0 -z-10
        bg-white/[0.02]
        rounded-3xl
        blur-2xl
        scale-95 group-hover:scale-100
        opacity-0 group-hover:opacity-100
        transition-all duration-700
      "/>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes scan {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;