import React from "react";

const Cta = () => {
  return (
    <section className="py-20 px-6 bg-white">
      {/* Changed bg-slate-900 to bg-black for pure black theme */}
      <div className="max-w-5xl mx-auto bg-black rounded-3xl p-10 md:p-16 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to set the rules?
        </h2>
        
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          Experience the power of infrastructure. Join the CloudRule network today.
        </p>

        {/* Button with high contrast */}
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg">
          Build-Learn-Launch
        </button>
      </div>
    </section>
  );
};

export default Cta;