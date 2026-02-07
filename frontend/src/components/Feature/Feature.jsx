import React from "react";

const Feature = () => {
  const features = [
    {
      id: "01",
      title: "Empowering technology",
      desc: "We build it right the first time using modern standards, ensuring your code remains clean and maintainable.",
    },
    {
      id: "02",
      title: "Dedicated Focus",
      desc: "You aren't just another ticket in a system. As an early partner, your project gets our 100% undivided attention.",
    },
    {
      id: "03",
      title: "Future-Proof Security",
      desc: "Zero-trust security models integrated into the foundation to protect your data from day one.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why CloudRule?
          </h2>
          {/* Fixed the underline color to match your tech theme */}
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Changed text-blue-600 to text-sky-400 for Sky Blue look */}
              <div className="text-sky-400 font-bold text-4xl opacity-40 mb-4">
                {item.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;