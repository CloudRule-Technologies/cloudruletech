import React from "react";

const Cta = () => {
  return (
    <section className="py-20 px-6 bg-white">
      {/* Changed bg-black-600 to bg-slate-900 and updated shadow */}
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-slate-200">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to set the rules?
        </h2>
        
        {/* Changed text-blue-100 to text-slate-400 for a cleaner look */}
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Experience the power of governed infrastructure. Join the CloudRule network today.
        </p>

        {/* Changed text-blue-600 to text-slate-900 for the button text */}
        <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all transform hover:scale-105 shadow-lg">
          Build-Learn-Launch
        </button>
      </div>
    </section>
  );
};

export default Cta;