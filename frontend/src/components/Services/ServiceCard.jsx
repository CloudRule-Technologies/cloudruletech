// src/components/Services/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, caption, index }) => {
  return (
    <div 
      className="
        service-card group
        bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
        border border-[var(--border)] 
        rounded-2xl 
        p-8
        h-full
        relative
        overflow-hidden
        transition-all duration-500 ease-out
        hover:border-[var(--accent)]/60
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,229,229,0.1)]
        hover:-translate-y-2
        hover:scale-[1.02]
      "
      style={{
        animationDelay: `${index * 80}ms`
      }}
    >
      {/* Animated gradient overlay */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent
        transition-opacity duration-700
        pointer-events-none
      "/>
      
      {/* Shimmer effect on hover */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-transparent via-white/5 to-transparent
        -translate-x-full group-hover:translate-x-full
        transition-all duration-1000
        pointer-events-none
      "/>

      {/* Corner accent */}
      <div className="
        absolute top-0 right-0 w-20 h-20
        bg-gradient-to-bl from-[var(--accent)]/10 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        rounded-bl-full
      "/>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="
            w-12 h-12 rounded-xl
            bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5
            border border-[var(--accent)]/20
            flex items-center justify-center
            transition-all duration-500
            group-hover:scale-110 group-hover:rotate-6
            group-hover:border-[var(--accent)]/40
          ">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] group-hover:animate-pulse"/>
          </div>
          
          {/* Arrow indicator */}
          <div className="
            opacity-0 group-hover:opacity-100
            translate-x-2 group-hover:translate-x-0
            transition-all duration-500
          ">
            <svg 
              className="w-5 h-5 text-[var(--accent)]/60" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 17L17 7M17 7H7M17 7V17" 
              />
            </svg>
          </div>
        </div>

        <h3 className="
          text-2xl font-bold text-white mb-4
          transition-all duration-300
          group-hover:text-[var(--accent)]
          tracking-tight
        ">
          {title}
        </h3>
        
        <p className="
          text-[var(--text-secondary)] text-base leading-relaxed
          transition-all duration-300
          group-hover:text-[var(--text-primary)]
        ">
          {caption}
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
  );
};

export default ServiceCard;