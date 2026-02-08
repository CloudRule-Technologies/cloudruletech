import { useNavigate } from 'react-router-dom';

const steps = [
  { 
    num: 1, 
    title: "Discovery", 
    desc: "Understanding your vision, goals & challenges through collaborative workshops and stakeholder interviews",
    icon: "🔍",
  },
  { 
    num: 2, 
    title: "Strategy & Planning", 
    desc: "Defining scope, tech stack & timeline with detailed roadmap and resource allocation",
    icon: "📋",
  },
  { 
    num: 3, 
    title: "UI/UX Design", 
    desc: "Creating wireframes, prototypes & design system with user-centric approach and brand alignment",
    icon: "🎨",
  },
  { 
    num: 4, 
    title: "Development", 
    desc: "Clean, modular & well-tested code following industry best practices and scalable architecture",
    icon: "💻",
  },
  { 
    num: 5, 
    title: "Quality Assurance", 
    desc: "Multi-level testing — functional, performance, security with automated and manual verification",
    icon: "✓",
  },
  { 
    num: 6, 
    title: "Deployment", 
    desc: "Smooth launch with CI/CD & monitoring setup ensuring zero-downtime and optimal performance",
    icon: "🚀",
  },
  { 
    num: 7, 
    title: "Training & Handover", 
    desc: "Knowledge transfer & comprehensive documentation with team enablement sessions",
    icon: "📚",
  },
  { 
    num: 8, 
    title: "Continuous Support", 
    desc: "Maintenance, optimization & future enhancements with dedicated support team and SLA guarantees",
    icon: "🔄",
  },
];

const ProcessGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-transparent blur-3xl animate-pulse" style={{animationDuration: '8s'}}/>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/5 via-orange-500/3 to-transparent blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}/>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"/>
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-black/60">
              Our Process
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{animationDelay: '0.5s'}}/>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">
            <span className="inline-block text-black animate-fade-in-up">
              How We Deliver
            </span>
            <br/>
            <span className="inline-block text-black animate-fade-in-up" style={{animationDelay: '100ms'}}>
              Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            A proven methodology refined through hundreds of successful projects,
            <span className="text-black/70"> designed to turn your vision into reality</span>
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="group relative"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 80}ms`,
                opacity: 0
              }}
            >
              {/* Card */}
              <div className="
                relative h-full
                bg-black
                border border-white/10
                rounded-3xl
                p-6 md:p-8
                overflow-hidden
                transition-all duration-700 ease-out
                hover:border-white/40
                hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)]
                hover:-translate-y-4
                hover:scale-[1.03]
              ">
                {/* Scan line effect */}
                <div className="
                  absolute inset-x-0 h-px top-0
                  bg-gradient-to-r from-transparent via-white/60 to-transparent
                  translate-y-0 group-hover:translate-y-[300px]
                  transition-transform duration-[1500ms] ease-linear
                  pointer-events-none
                  opacity-0 group-hover:opacity-100
                "/>
                
                {/* Diagonal light sweep */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-transparent via-white/5 to-transparent
                  -translate-x-full -translate-y-full 
                  group-hover:translate-x-full group-hover:translate-y-full
                  transition-all duration-[1200ms] ease-out
                  pointer-events-none
                "/>
                
                {/* Animated particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-white/60 rounded-full animate-particle-1 shadow-[0_0_8px_rgba(255,255,255,0.6)]"/>
                  <div className="absolute top-[40%] right-[30%] w-1 h-1 bg-white/60 rounded-full animate-particle-2 shadow-[0_0_8px_rgba(255,255,255,0.6)]"/>
                  <div className="absolute bottom-[35%] left-[40%] w-1 h-1 bg-white/60 rounded-full animate-particle-3 shadow-[0_0_8px_rgba(255,255,255,0.6)]"/>
                  <div className="absolute top-[60%] right-[25%] w-1 h-1 bg-white/60 rounded-full animate-particle-4 shadow-[0_0_8px_rgba(255,255,255,0.6)]"/>
                </div>

                {/* Step number badge */}
                <div className="relative mb-6">
                  <div className="
                    inline-flex items-center justify-center
                    w-16 h-16 rounded-2xl
                    bg-gradient-to-br from-white/10 to-white/5
                    border border-white/20
                    transition-all duration-700
                    group-hover:scale-125 
                    group-hover:rotate-[360deg]
                    group-hover:border-white/40
                    group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10
                    group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
                  ">
                    <span className="text-3xl font-black bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      {step.num}
                    </span>
                  </div>

                  {/* Orbiting particles around badge */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-white/70 rounded-full animate-orbit-1 shadow-[0_0_6px_rgba(255,255,255,0.8)]"/>
                    <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-white/70 rounded-full animate-orbit-2 shadow-[0_0_6px_rgba(255,255,255,0.8)]"/>
                    <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white/70 rounded-full animate-orbit-3 shadow-[0_0_6px_rgba(255,255,255,0.8)]"/>
                  </div>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-1.5 mb-6">
                  {Array.from({length: 8}).map((_, i) => (
                    <div 
                      key={i}
                      className={`
                        h-1.5 flex-1 rounded-full transition-all duration-700
                        ${i < step.num 
                          ? 'bg-white/40 group-hover:bg-white/70 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]' 
                          : 'bg-white/10 group-hover:bg-white/20'
                        }
                        group-hover:h-2
                      `}
                      style={{
                        transitionDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="
                  text-2xl md:text-3xl font-bold text-white mb-4
                  transition-all duration-300
                  tracking-tight
                  leading-tight
                  group-hover:text-white/90
                  group-hover:tracking-wide
                  group-hover:translate-x-1
                ">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="
                  text-white/50 text-sm md:text-base leading-relaxed
                  transition-all duration-300
                  group-hover:text-white/70
                  group-hover:translate-x-1
                ">
                  {step.desc}
                </p>

                {/* Bottom gradient line */}
                <div className="
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r from-transparent via-white/60 to-transparent
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-700
                  origin-center
                  rounded-full
                  group-hover:h-1.5
                  group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
                "/>

                {/* Corner effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"/>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"/>
              </div>

              {/* Connection arrow (desktop only) */}
              {index % 4 !== 3 && index < steps.length - 1 && (
                <div className="
                  hidden lg:block
                  absolute top-1/2 -right-3 z-20
                  text-black/20 group-hover:text-black/40
                  transition-all duration-500
                  text-2xl
                  -translate-y-1/2
                ">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="
          text-center
          animate-fade-in-up
        " style={{animationDelay: '800ms'}}>
          <div className="
            max-w-3xl mx-auto
            p-12 md:p-16
            rounded-3xl
            bg-black
            border border-white/10
            relative overflow-hidden
            group
            transition-all duration-700
            hover:border-white/40
            hover:shadow-[0_30px_90px_rgba(255,255,255,0.15)]
            hover:scale-[1.02]
          ">
            {/* Animated scan line */}
            <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-y-0 group-hover:translate-y-[400px] transition-transform duration-[2000ms] ease-linear pointer-events-none opacity-0 group-hover:opacity-100"/>
            
            {/* Diagonal light sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-all duration-[1500ms] ease-out pointer-events-none opacity-0 group-hover:opacity-100"/>
            
            {/* Floating particles */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-white/60 rounded-full animate-particle-1 shadow-[0_0_15px_rgba(255,255,255,0.8)]"/>
              <div className="absolute top-[25%] right-[20%] w-2 h-2 bg-white/60 rounded-full animate-particle-2 shadow-[0_0_15px_rgba(255,255,255,0.8)]"/>
              <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-white/60 rounded-full animate-particle-3 shadow-[0_0_15px_rgba(255,255,255,0.8)]"/>
              <div className="absolute top-[50%] right-[15%] w-2 h-2 bg-white/60 rounded-full animate-particle-4 shadow-[0_0_15px_rgba(255,255,255,0.8)]"/>
            </div>
            
            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"/>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"/>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:scale-105 transition-all duration-500 group-hover:tracking-wide">
                Ready to transform your vision?
              </h3>
              <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto group-hover:text-white/70 transition-all duration-500 group-hover:translate-y-[-2px]">
                Let's discuss your project and create something extraordinary together
              </p>
              
              <button className="
                group/btn relative px-10 py-5 rounded-2xl
                bg-white text-black
                font-bold text-lg
                transition-all duration-500
                hover:shadow-[0_0_60px_rgba(255,255,255,0.6),0_0_100px_rgba(255,255,255,0.3)]
                hover:scale-110
                active:scale-95
                overflow-hidden
              ">
                <span  onClick={()=> navigate('/contact')} className="cursor-pointer relative z-10 flex items-center gap-3">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Button shimmer effect */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-black/20 to-transparent
                  -translate-x-full group-hover/btn:translate-x-full
                  transition-transform duration-1000
                "/>
                
                {/* Pulsing ring */}
                <div className="absolute inset-[-3px] border border-white/40 rounded-2xl opacity-0 group-hover/btn:opacity-100 animate-pulse transition-opacity duration-300 pointer-events-none"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add required keyframes to your CSS */}
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
        
        @keyframes particle-1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          25% {
            transform: translate(30px, -30px);
            opacity: 1;
          }
          50% {
            transform: translate(-20px, 40px);
            opacity: 0.6;
          }
          75% {
            transform: translate(40px, 20px);
            opacity: 0.8;
          }
        }
        
        @keyframes particle-2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          33% {
            transform: translate(-40px, 30px);
            opacity: 1;
          }
          66% {
            transform: translate(20px, -35px);
            opacity: 0.7;
          }
        }
        
        @keyframes particle-3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          40% {
            transform: translate(35px, 25px);
            opacity: 0.9;
          }
          80% {
            transform: translate(-30px, -20px);
            opacity: 0.6;
          }
        }
        
        @keyframes particle-4 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% {
            transform: translate(-25px, -40px);
            opacity: 1;
          }
        }
        
        @keyframes orbit-1 {
          0% {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(40px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-2 {
          0% {
            transform: rotate(120deg) translateX(40px) rotate(-120deg);
          }
          100% {
            transform: rotate(480deg) translateX(40px) rotate(-480deg);
          }
        }
        
        @keyframes orbit-3 {
          0% {
            transform: rotate(240deg) translateX(40px) rotate(-240deg);
          }
          100% {
            transform: rotate(600deg) translateX(40px) rotate(-600deg);
          }
        }
        
        .animate-particle-1 {
          animation: particle-1 4s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle-2 5s ease-in-out infinite;
        }
        
        .animate-particle-3 {
          animation: particle-3 4.5s ease-in-out infinite;
        }
        
        .animate-particle-4 {
          animation: particle-4 5.5s ease-in-out infinite;
        }
        
        .animate-orbit-1 {
          animation: orbit-1 3s linear infinite;
        }
        
        .animate-orbit-2 {
          animation: orbit-2 3s linear infinite;
        }
        
        .animate-orbit-3 {
          animation: orbit-3 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessGrid; 