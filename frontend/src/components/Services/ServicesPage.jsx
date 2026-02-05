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
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden bg-white">
          {/* Animated background elements - Inverted Black & White theme */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient blobs */}
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}/>
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/[0.01] rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}/>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}/>
            </div>

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-white/60"/>
          </div>

          <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-black/60 animate-pulse"/>
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-black/60">
                Enterprise Solutions
              </span>
              <div className="w-2 h-2 rounded-full bg-black/60 animate-pulse" style={{animationDelay: '0.5s'}}/>
            </div>

            {/* Main heading */}
            <h1 className="
              text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8
              animate-fade-in-up
            ">
              <span className="
                inline-block
                bg-gradient-to-r from-black via-black to-black/40
                bg-clip-text text-transparent
              ">
                Technology Solutions
              </span>
              <br />
              <span className="
                inline-block mt-2
                bg-gradient-to-r from-black via-black/80 to-black/50
                bg-clip-text text-transparent
              ">
                Built for Purpose
              </span>
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-black/30 rounded-full"/>
              <div className="h-2.5 w-2.5 rounded-full bg-black/50"/>
              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-black/30 rounded-full"/>
            </div>

            {/* Subheading */}
            <p className="
              text-lg md:text-xl lg:text-2xl text-black/50 max-w-4xl mx-auto mb-12
              leading-relaxed
              animate-fade-in-up
            " style={{animationDelay: '150ms'}}>
              We turn complex business challenges into elegant, scalable digital solutions
              <span className="text-black/70"> that drive measurable results and competitive advantage.</span>
            </p>

            {/* CTA Buttons */}
            <div className="
              flex flex-col sm:flex-row gap-4 justify-center items-center mb-20
              animate-fade-in-up
            " style={{animationDelay: '200ms'}}>
              <button className="
                group/btn relative px-10 py-5 rounded-2xl
                bg-black
                text-white font-bold text-lg
                transition-all duration-300
                hover:shadow-[0_0_60px_rgba(0,0,0,0.3)]
                hover:scale-105
                active:scale-95
                min-w-[220px]
                overflow-hidden
              ">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Started
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Button shimmer */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                  -translate-x-full group-hover/btn:translate-x-full
                  transition-transform duration-1000
                "/>
              </button>
              
              <button className="
                px-10 py-5 rounded-2xl
                border-2 border-black/20
                text-black font-bold text-lg
                transition-all duration-300
                hover:border-black/40
                hover:bg-black/5
                hover:scale-105
                active:scale-95
                min-w-[220px]
                backdrop-blur-sm
              ">
                View Portfolio
              </button>
            </div>

            {/* Stats or social proof */}
            <div className="
              grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
              max-w-6xl mx-auto
              animate-fade-in-up
            " style={{animationDelay: '300ms'}}>
              {[
                { value: '500+', label: 'Projects Delivered', icon: '🚀' },
                { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '50+', label: 'Team Members', icon: '👥' },
                { value: '24/7', label: 'Support Available', icon: '🔧' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="
                    group
                    p-6 md:p-8 rounded-2xl
                    bg-black/[0.03]
                    border border-black/10
                    backdrop-blur-sm
                    transition-all duration-500
                    hover:border-black/20
                    hover:bg-black/[0.05]
                    hover:scale-105
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                    relative overflow-hidden
                  "
                >
                  {/* Hover gradient overlay */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-black/[0.05] via-transparent to-transparent
                    transition-opacity duration-700
                    pointer-events-none
                  "/>

                  {/* Icon (optional) */}
                  <div className="text-2xl mb-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    {stat.icon}
                  </div>

                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-black/50 group-hover:text-black/70 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="
                    absolute bottom-0 left-0 right-0 h-[2px]
                    bg-gradient-to-r from-transparent via-black/30 to-transparent
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-700
                    origin-center
                  "/>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="
              mt-16 md:mt-20
              flex flex-col items-center gap-3
              animate-fade-in-up
            " style={{animationDelay: '400ms'}}>
              <span className="text-xs md:text-sm text-black/40 tracking-widest uppercase">
                Scroll to explore
              </span>
              <div className="
                w-6 h-10 rounded-full border-2 border-black/20
                flex items-start justify-center
                p-2
              ">
                <div className="w-1 h-2 bg-black/40 rounded-full animate-bounce"/>
              </div>
            </div>
          </div>
        </div>

        <ServiceGrid />
        <ProcessGrid />
      </main>

      <Footer />

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;