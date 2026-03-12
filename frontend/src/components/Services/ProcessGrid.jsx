import { useNavigate } from "react-router-dom";
import { defaultContent } from "../../content/defaultContent";

const ProcessGrid = ({ steps = defaultContent.services.processSteps }) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-black/5 border border-black/10">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-black/60">
              Our Process
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-black">
            How We Deliver
            <br />
            Excellence
          </h2>

          <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed">
            A proven methodology refined through successful projects,
            <span className="text-black/70"> designed to turn your vision into reality</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={`${step.num}-${step.title}`}
              className="group relative"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: `${index * 80}ms`,
                opacity: 0,
              }}
            >
              <div className="relative h-full bg-black border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/40">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-5">
                  <span className="text-2xl font-black text-white">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-3xl mx-auto p-12 md:p-16 rounded-3xl bg-black border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your vision?
            </h3>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something extraordinary together
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="cursor-pointer px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ProcessGrid;
