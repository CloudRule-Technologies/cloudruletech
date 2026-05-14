import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
      className="relative pt-28 pb-0 lg:min-h-screen lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        
        {/* Tech Patterns - Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="rgba(255,255,255,0.2)" />
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
              className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
              className="absolute text-[8px] font-mono text-white/20 whitespace-nowrap"
              style={{ writingMode: 'vertical-rl' }}
            >
              {Array(20).fill(0).map(() => Math.round(Math.random())).join('')}
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="glow-1 animate-pulse-slow opacity-30" />
        <div className="glow-2 animate-pulse-slow opacity-20" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-4 md:px-6 flex justify-center items-center w-full lg:min-h-[60vh]"
      >
        
        {/* Centered Video Hero */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full flex justify-center items-center z-20"
        >
          <div className="relative w-full max-w-6xl">
            <div className="relative z-10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] w-full aspect-video">
              <video 
                src="/cloudrule_giff.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90"
              />
              {/* Image Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-50 md:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-20 md:opacity-50" />
              
              
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};



export default Hero;


