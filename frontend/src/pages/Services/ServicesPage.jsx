import ServiceGrid from "../../components/Services/ServiceGrid";
import ProcessGrid from "../../components/Services/ProcessGrid";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(()=>{
    document.title = "Services | CloudRule"
  })
  return (
    <>
      <div
        data-testid="services-page"
        className="relative z-1  min-h-screen flex flex-col  "
      >
        {/* <Navbar /> */}

        <main className="flex-grow">
          {/* Hero Section */}
          <div className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden ">
            {/* Animated background elements - Inverted Black & White theme */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Gradient blobs */}
              <div
                className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "10s", animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/[0.01] rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "12s", animationDelay: "4s" }}
              />

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-black/60" />
            </div>

            <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/60">
                  Enterprise Solutions
                </span>
                <div
                  className="w-2 h-2 rounded-full bg-white/60 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Main heading */}
              <h1
                className="
              text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8
              animate-fade-in-up
            "
              >
                <span
                  className="
                inline-block
                bg-gradient-to-r from-white via-white to-white/40
                bg-clip-text text-transparent
              "
                >
                  Technology Solutions
                </span>
                <br />
                <span
                  className="
                inline-block mt-2
                bg-gradient-to-r from-white via-white/80 to-white/50
                bg-clip-text text-transparent
              "
                >
                  Built for Purpose
                </span>
              </h1>

              {/* Decorative line */}
              <div
                className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-white/30 rounded-full" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/50" />
                <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-white/30 rounded-full" />
              </div>

              {/* Subheading */}
              <p
                className="
              text-lg md:text-xl lg:text-2xl text-white/50 max-w-4xl mx-auto mb-12
              leading-relaxed
              animate-fade-in-up
            "
                style={{ animationDelay: "150ms" }}
              >
                We turn complex business challenges into elegant, scalable
                digital solutions
                <span className="text-white/70">
                  {" "}
                  that drive measurable results and competitive advantage.
                </span>
              </p>

              {/* Stats or social proof */}
              <div
                className="
              grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
              max-w-6xl mx-auto
              animate-fade-in-up
            "
                style={{ animationDelay: "300ms" }}
              >
                {[
                  { value: "3+", label: "Projects Delivered", icon: "🚀" },
                  { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                  { value: "20+", label: "Team Members", icon: "👥" },
                  { value: "24/7", label: "Support Available", icon: "🔧" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="
                    group
                    p-6 md:p-8 rounded-2xl
                    bg-white/[0.03]
                    border border-white/10
                    backdrop-blur-sm
                    transition-all duration-500
                    hover:border-white/20
                    hover:bg-white/[0.05]
                    hover:scale-105
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                    relative overflow-hidden
                  "
                  >
                    {/* Hover gradient overlay */}
                    <div
                      className="
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-white/[0.05] via-transparent to-transparent
                    transition-opacity duration-700
                    pointer-events-none
                  "
                    />

                    {/* Icon (optional) */}
                    <div className="text-2xl mb-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                      {stat.icon}
                    </div>

                    <div className="relative z-">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="
                    absolute bottom-0 left-0 right-0 h-[2px]
                    bg-gradient-to-r from-transparent via-black/30 to-transparent
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-700
                    origin-center
                  "
                    />
                  </div>
                ))}
              </div>

              {/* Scroll indicator */}
              <div
                className="
              mt-16 md:mt-20
              flex flex-col items-center gap-3
              animate-fade-in-up
            "
                style={{ animationDelay: "400ms" }}
              >
                <span className="text-xs md:text-sm text-white/60 tracking-widest uppercase">
                  Scroll to explore
                </span>
                <div
                  className="
                w-6 h-10 rounded-full border-2 border-white/60
                flex items-start justify-center
                p-2
              "
                >
                  <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          <ServiceGrid />
          <ProcessGrid />
        </main>

        {/* <Footer /> */}

        {/* CSS animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default ServicesPage;
