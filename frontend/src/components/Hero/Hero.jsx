import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 mt-20 pt-40 pb-50 px-6 flex items-center justify-center overflow-hidden
                 bg-[linear-gradient(rgba(0,0,0,0.94),rgba(0,0,0,0.94))]"
    >
      {/* soft background glow */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] 
                      bg-white/10 rounded-full blur-[140px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* badge */}
        <span
          className="block text-blue-300 font-semibold tracking-widest uppercase text-sm mb-5
                     opacity-0 translate-y-3
                     animate-[fadeIn_0.8s_ease-out_forwards]"
        >
          Innovate • Scale • Secure
        </span>

        {/* heading */}
        <h1
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 text-white
                     opacity-0 translate-y-6
                     animate-[fadeInUp_0.9s_ease-out_forwards]
                     [animation-delay:150ms]"
        >
          Code Your Future <br />
          <span className="text-blue-300 relative inline-block">
            Rule Your Cloud
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-blue-300/60 rounded-full" />
          </span>
        </h1>

        {/* description */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed
                     opacity-0 translate-y-6
                     animate-[fadeInUp_0.9s_ease-out_forwards]
                     [animation-delay:320ms]"
        >
          CloudRule Technology isn’t just an IT provider. We are your digital
          foundation, delivering scalable cloud and web solutions for the next
          generation of businesses.
        </p>
      </div>

      {/* animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </section>
  );
};

export default Hero;
