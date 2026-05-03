import React from "react";

const Stats = () => {
  const stats = [
    { label: "Projects Delivered", value: "3+", suffix: "" },
    { label: "Happy Clients", value: "3+", suffix: "" },
    { label: "Cloud Uptime", value: "99.9", suffix: "%" },
    { label: "Support", value: "24/7", suffix: "" },
  ];

  return (
    <section className="py-20 bg-[#030711] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.value}
                <span className="text-blue-500">{stat.suffix}</span>
              </div>
              <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
