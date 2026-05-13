import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        
        {/* Tech Patterns - Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="rgba(59,130,246,0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>

        {/* Data Flow Animations */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, y: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ 
                x: "110%", 
                opacity: [0, 0.5, 0.5, 0],
                transition: { 
                  duration: Math.random() * 8 + 7, 
                  repeat: Infinity, 
                  delay: Math.random() * 10,
                  ease: "linear"
                }
              }}
              className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            />
          ))}
          
          {/* Binary Flow */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`bin-${i}`}
              initial={{ y: -50, x: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ 
                y: "110%", 
                opacity: [0, 0.3, 0.3, 0],
                transition: { 
                  duration: Math.random() * 10 + 10, 
                  repeat: Infinity, 
                  delay: Math.random() * 5,
                  ease: "linear"
                }
              }}
              className="absolute text-[8px] font-mono text-blue-500/30 whitespace-nowrap"
              style={{ writingMode: 'vertical-rl' }}
            >
              {Array(20).fill(0).map(() => Math.round(Math.random())).join('')}
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="glow-1 animate-pulse-slow opacity-30" />
        <div className="glow-2 animate-pulse-slow opacity-20" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="text-left max-w-2xl relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-blue-400 text-sm font-bold mb-8 tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            LEADING THE DIGITAL REVOLUTION
          </div>

          <h1 className="mb-8 leading-[1.05] tracking-tight text-white">
            Code Your <span className="text-gradient">Future</span> <br />
            Rule Your <span className="text-blue-500">Cloud</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 md:text-slate-400 mb-10 max-w-lg leading-relaxed">
            Architecting the digital future with state-of-the-art cloud ecosystems 
            and high-performance web solutions. We transform complex challenges into 
            scalable, future-ready results.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="px-10 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
            >
              Start Building
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-10 py-4 glass text-white rounded-2xl font-bold text-lg transition-all border border-white/20"
            >
              View Services
            </motion.button>
          </div>
        </motion.div>


        {/* Right Content - Visual (Stacked on Desktop, Background on Mobile) */}
        <motion.div 
          variants={itemVariants}
          className="absolute lg:relative inset-0 lg:inset-auto flex justify-center items-center lg:items-center lg:mt-0 opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto overflow-hidden lg:overflow-visible"
        >
          <div className="relative w-full max-w-4xl lg:max-w-lg scale-150 lg:scale-105 translate-y-20 lg:translate-y-0">
            <div className="relative z-10 rounded-full lg:rounded-[2.5rem] overflow-hidden border-none lg:border lg:border-white/10 lg:shadow-[0_0_50px_rgba(59,130,246,0.15)] animate-float">
              {/* Floating Logo in Banner */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4"
              >
                <div className="p-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <img 
                    src="/CR_logo2.png" 
                    alt="Logo Overlay" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </motion.div>

              <img 
                src="/hero_tech_abstract_1777796821135.png" 
                alt="Cloud Technology" 
                className="w-full h-auto object-cover opacity-100"
              />
              {/* Image Overlay Gradients - Heavier on Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:opacity-30" />
            </div>
            
            {/* Floating Performance Card - Hidden on Mobile to reduce clutter */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block absolute bottom-10 -left-10 z-20 glass-dark p-6 rounded-3xl shadow-2xl border border-white/10"
            >
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
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 lg:w-40 lg:h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};



export default Hero;


