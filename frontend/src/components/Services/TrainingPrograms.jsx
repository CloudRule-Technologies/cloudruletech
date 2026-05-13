import React from "react";

const programs = [
  {
    title: "For School Students",
    subtitle: "1-Week Robotics Training Program",
    desc: "Specially designed to introduce young learners to the exciting world of technology. Through hands-on activities, students explore basic robotics, simple coding concepts, and logical problem-solving techniques.",
    focus: "Nurturing creativity, teamwork, and innovation at an early age—helping students build confidence and curiosity towards future technologies.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: "from-blue-600/20 to-cyan-600/20",
    accent: "bg-blue-500",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "For College Students",
    subtitle: "ONE-WEEK CERTIFICATE COURSE",
    desc: "Crafted to give college students a strong foundation in trending and in-demand technologies. These programs include practical sessions, real-time examples, and mini projects that enhance both technical and problem-solving skills.",
    focus: "Gaining valuable exposure, industry-relevant knowledge, and a certificate that adds weight to academic profiles and career opportunities.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    color: "from-purple-600/20 to-pink-600/20",
    accent: "bg-purple-500",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "For Job Seekers",
    subtitle: "6-Month Full Stack Development Program",
    desc: "An intensive, career-focused training designed to transform learners into industry-ready professionals. The program covers front-end and back-end technologies, database management, and real-world project development.",
    focus: "Equipping candidates with continuous mentorship, hands-on practice, and interview preparation support to secure jobs in the IT industry.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-orange-600/20 to-red-600/20",
    accent: "bg-orange-500",
    border: "group-hover:border-orange-500/50",
  }
];

const TrainingPrograms = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/60">
              Training & Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Empowering the <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
            Our specialized training programs are designed to bridge the gap between 
            academic learning and industry requirements, fostering innovation at every level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`
                group relative
                bg-black border border-white/10 rounded-[2.5rem]
                p-8 md:p-10
                transition-all duration-700 ease-out
                hover:-translate-y-4 hover:bg-[#050505]
                ${program.border}
                hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]
              `}
              style={{
                animation: "fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
                animationDelay: `${index * 150}ms`,
                opacity: 0,
              }}
            >
              {/* Card Background Gradient */}
              <div className={`
                absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100
                bg-gradient-to-br ${program.color}
                transition-opacity duration-700 pointer-events-none
              `} />

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-12">
                  <div className="
                    w-16 h-16 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-6
                    group-hover:bg-white/10 group-hover:border-white/20
                  ">
                    {program.icon}
                  </div>
                  <div className={`
                    px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest
                    bg-white/10 border border-white/20 text-white
                    group-hover:bg-blue-500 group-hover:border-blue-400
                    transition-all duration-500
                  `}>
                    Program
                  </div>
                </div>

                {/* Text Content */}
                <div className="mb-8">
                  <h4 className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">
                    {program.title}
                  </h4>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight group-hover:tracking-tight transition-all duration-500">
                    {program.subtitle}
                  </h3>
                  <div className="h-px w-12 bg-white/20 mb-6 group-hover:w-24 transition-all duration-700" />
                  <p className="text-slate-200 leading-relaxed mb-6 group-hover:text-white transition-colors duration-500 font-medium">
                    {program.desc}
                  </p>
                </div>

                {/* Focus Area */}
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className={`w-1.5 h-1.5 rounded-full ${program.accent} animate-pulse`} />
                  <p className="text-xs font-semibold text-white/70">
                    {program.focus}
                  </p>
                </div>

                {/* Learn More link */}
                {/* <div className="mt-8 flex items-center gap-2 text-white/40 group-hover:text-white transition-all duration-500 cursor-pointer">
                  <span className="text-sm font-bold uppercase tracking-widest">Explore Details</span>
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> */}
              </div>
              
              {/* Interactive Corner Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrainingPrograms;
