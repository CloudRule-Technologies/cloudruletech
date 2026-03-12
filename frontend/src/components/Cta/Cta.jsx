import React, { useEffect } from "react";
import { defaultContent } from "../../content/defaultContent";

const Cta = ({ content = defaultContent.home.cta }) => {
  useEffect(() => {
    document.title = "Get Started with CloudRule Technology | Build • Learn • Launch";
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-black/80 rounded-3xl p-10 md:p-16 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/10 opacity-0 translate-y-6 animate-[fadeInUp_0.9s_ease-out_forwards]">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{content.title}</h2>

        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">{content.description}</p>

        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105">
          {content.buttonText}
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
};

export default Cta;
