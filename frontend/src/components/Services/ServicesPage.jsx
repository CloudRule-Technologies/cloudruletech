// src/components/Services/ServicesPage.jsx

import React from 'react';

// Go up one level (out of Services/), then into the sibling folders
import Navbar      from '../Navbar/Navbar';
import Footer      from '../Footer/Footer';

// These are in the same folder → ./ is correct
import ServiceGrid from './ServiceGrid';
import ProcessGrid from './ProcessGrid';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse-slow"/>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}/>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}/>
            </div>
          </div>

          <div className="container mx-auto px-5 md:px-8 text-center relative z-10">
            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in">
              <span className="
                text-xs md:text-sm font-semibold tracking-[0.2em] uppercase
                text-[var(--accent)] opacity-80
                px-4 py-2 rounded-full
                border border-[var(--accent)]/20
                bg-[var(--accent)]/5
                backdrop-blur-sm
              ">
                Enterprise Solutions
              </span>
            </div>

            {/* Main heading */}
            <h1 className="
              text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6
              animate-fade-in-up
            ">
              <span className="
                bg-gradient-to-br from-white via-[var(--text-primary)] to-[var(--text-secondary)]
                bg-clip-text text-transparent
              ">
                Technology Solutions
              </span>
              <br />
              <span className="
                bg-gradient-to-r from-[var(--accent)] to-white
                bg-clip-text text-transparent
              ">
                Built for Purpose
              </span>
            </h1>

            {/* Subheading */}
            <p className="
              text-lg md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-10
              leading-relaxed
              animate-fade-in-up
            " style={{animationDelay: '100ms'}}>
              We turn complex business challenges into elegant, scalable digital solutions
              that drive measurable results and competitive advantage.
            </p>

            {/* CTA Buttons */}
            <div className="
              flex flex-col sm:flex-row gap-4 justify-center items-center
              animate-fade-in-up
            " style={{animationDelay: '200ms'}}>
              <button className="
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-[var(--accent)] to-white
                text-black font-semibold text-lg
                transition-all duration-300
                hover:shadow-[0_0_40px_rgba(229,229,229,0.3)]
                hover:scale-105
                active:scale-95
                min-w-[200px]
              ">
                Get Started
              </button>
              
              <button className="
                px-8 py-4 rounded-xl
                border border-[var(--accent)]/40
                text-[var(--text-primary)] font-semibold text-lg
                transition-all duration-300
                hover:border-[var(--accent)]
                hover:bg-[var(--accent)]/10
                hover:scale-105
                active:scale-95
                min-w-[200px]
                backdrop-blur-sm
              ">
                View Portfolio
              </button>
            </div>

            {/* Stats or social proof */}
            <div className="
              mt-16 md:mt-20
              grid grid-cols-2 md:grid-cols-4 gap-8
              max-w-5xl mx-auto
              animate-fade-in-up
            " style={{animationDelay: '300ms'}}>
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Team Members' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="
                    p-6 rounded-xl
                    bg-gradient-to-br from-[#1a1a1a]/80 to-[#0a0a0a]/80
                    border border-[var(--border)]
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:border-[var(--accent)]/40
                    hover:scale-105
                  "
                  style={{animationDelay: `${300 + index * 100}ms`}}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ServiceGrid />
        <ProcessGrid />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;