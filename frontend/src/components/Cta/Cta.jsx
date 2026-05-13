import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Cta = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto glass rounded-[3rem] p-12 md:p-24
                   text-center relative z-10 overflow-hidden"
      >
        {/* Animated background glow inside CTA */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />

        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
          Ready to <span className="text-gradient">Scale</span> Your{" "}
          <br className="hidden md:block" />
          Digital Presence?
        </h2>

        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of forward-thinking businesses that trust CloudRule to
          build their digital foundation. Let's create something extraordinary
          together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-xl
                       hover:bg-blue-50 transition-all duration-300
                       hover:scale-105 flex items-center gap-3 group shadow-2xl shadow-white/10"
          >
            Start Your Project
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-5 glass text-white rounded-2xl font-bold text-xl
                       hover:bg-white/10 transition-all duration-300"
          >
            Contact us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;

