import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cta = () => {
  const navigate = useNavigate();

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: ["0%", "-10%", "0%"],
      x: ["0%", "5%", "0%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" 
      />


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto glass rounded-[3rem] p-12 md:p-24
                   text-center relative z-10 overflow-hidden border border-white/10
                   backdrop-blur-xl bg-white/5 shadow-2xl"
      >
        
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight relative z-10"
        >
          Transform Your Ideas Into{" "}
          <br className="hidden md:block" />
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 inline-block"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            Digital Reality
          </motion.span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10"
        >
          Ready to bring your vision to life? Let's create something extraordinary together.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-xl
                       hover:bg-gray-100 transition-colors duration-300
                       flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          >
            Start Your Project
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiArrowRight className="text-2xl" />
            </motion.div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-10 py-5 bg-white/5 border border-white/20 text-white rounded-2xl font-bold text-xl
                       backdrop-blur-sm transition-all duration-300"
          >
            Contact us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cta;

