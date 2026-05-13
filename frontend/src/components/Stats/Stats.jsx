import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Projects Delivered", value: "4+", suffix: "" },
    { label: "Happy Clients", value: "4+", suffix: "" },
    { label: "Cloud Uptime", value: "99.9", suffix: "%" },
    { label: "Support", value: "24/7", suffix: "" },
  ];

  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.value}
                <span className="text-blue-500">{stat.suffix}</span>
              </div>
              <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
