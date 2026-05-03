import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#030711]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="glow-1 animate-pulse-slow opacity-30" />
        <div className="glow-2 animate-pulse-slow opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-left max-w-2xl relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Leading The Digital Revolution
          </div>

          <h1 className="mb-8 leading-[1.05] tracking-tight animate-fade-in-up [animation-delay:200ms] text-white">
            Code Your <span className="text-gradient">Future</span> <br />
            Rule Your <span className="text-blue-500">Cloud</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 md:text-slate-400 mb-10 max-w-lg leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            We deliver high-performance, scalable cloud architectures and 
            bespoke web solutions tailored for tomorrow's industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up [animation-delay:600ms]">
            <button 
              onClick={() => navigate("/contact")}
              className="px-10 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
            >
              Start Building
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate("/services")}
              className="px-10 py-4 glass text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-white/20"
            >
              View Services
            </button>
          </div>
        </div>


        {/* Right Content - Visual (Stacked on Desktop, Background on Mobile) */}
        <div className="absolute lg:relative inset-0 lg:inset-auto flex justify-center items-center lg:items-center animate-fade-in-right [animation-delay:800ms] lg:mt-0 opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto overflow-hidden lg:overflow-visible">
          <div className="relative w-full max-w-4xl lg:max-w-lg scale-150 lg:scale-105 translate-y-20 lg:translate-y-0">
            <div className="relative z-10 rounded-full lg:rounded-[2.5rem] overflow-hidden border-none lg:border lg:border-white/10 lg:shadow-[0_0_50px_rgba(59,130,246,0.15)] animate-float">
              <img 
                src="/hero_tech_abstract_1777796821135.png" 
                alt="Cloud Technology" 
                className="w-full h-auto object-cover opacity-100"
              />
              {/* Image Overlay Gradients - Heavier on Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-[#030711]/40 to-transparent lg:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030711] via-transparent to-transparent lg:opacity-30" />
            </div>
            
            {/* Floating Performance Card - Hidden on Mobile to reduce clutter */}
            <div className="hidden lg:block absolute bottom-10 -left-10 z-20 glass-dark p-6 rounded-3xl shadow-2xl animate-float [animation-delay:1.5s] border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-0.5">Status</p>
                  <p className="text-lg font-bold text-white whitespace-nowrap">99.9% Efficiency</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 lg:w-40 lg:h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          </div>
        </div>
      </div>

    </section>
  );
};



export default Hero;


