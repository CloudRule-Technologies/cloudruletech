import React from "react";
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineRocketLaunch } from "react-icons/hi2";
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    {
      id: "01",
      icon: <HiOutlineRocketLaunch className="w-8 h-8 text-blue-400" />,
      title: "Empowering technology",
      desc: "We build it right the first time using modern standards, ensuring your code remains clean and maintainable.",
    },
    {
      id: "02",
      icon: <HiOutlineLightBulb className="w-8 h-8 text-indigo-400" />,
      title: "Dedicated Focus",
      desc: "You aren't just another ticket in a system. Your project gets our complete undivided attention.",
    },
    {
      id: "03",
      icon: <HiOutlineShieldCheck className="w-8 h-8 text-purple-400" />,
      title: "Future-Proof Security",
      desc: "Zero-trust security models integrated into the foundation to protect your data from day one.",
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="mb-6">
            Why Choose <span className="text-gradient">CloudRule</span>?
          </h2>
          <p className="text-slate-400 text-lg">
            We combine technical excellence with a client-first approach to deliver 
            software that doesn't just work, but scales and thrives.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, borderColor: "rgba(59,130,246,0.5)" }}
              className="glass p-10 rounded-3xl group transition-all duration-500"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                Feature {item.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;

