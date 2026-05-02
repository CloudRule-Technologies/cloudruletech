import { useEffect } from "react";
import {
  FaUserTie,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const CareerPage = () => {
  useEffect(() => {
    document.title = "Careers | CloudRule";
    window.scrollTo(0, 0);
  }, []);

  const perks = [
    {
      icon: <FaRocket className="text-blue-400" />,
      title: "Fast Growth",
      desc: "Accelerate your career in a high-growth tech environment.",
    },
    {
      icon: <FaLightbulb className="text-yellow-400" />,
      title: "Innovation",
      desc: "Work on cutting-edge solutions that solve real-world problems.",
    },
    {
      icon: <FaUsers className="text-green-400" />,
      title: "Great Culture",
      desc: "Collaborate with a diverse team of passionate professionals.",
    },
    {
      icon: <FaShieldAlt className="text-purple-400" />,
      title: "Stability",
      desc: "Join a secure organization building for the future.",
    },
  ];

  return (
    <div className="relative z-10 min-h-screen pt-32 pb-20 px-6">
      {/* Hero Section - Patterned after Services Page for 'Proper' Design */}
      <div className="container mx-auto text-center mb-32 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/60">
            Join the Revolution
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
          Build Your Future <br />
          <span className="text-blue-400">With Us</span>
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-white/30 rounded-full" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/50" />
          <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-white/30 rounded-full" />
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          We’re not just building software; we’re building careers. Join a mission-driven team where your ideas shape the digital foundations of tomorrow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Perks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Openings Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Open Positions</h2>
          <p className="text-slate-500 uppercase tracking-widest text-xs">Always looking for talent</p>
        </div>

        {/* Job Card - Proper Professional Layout */}
        <div className="relative group overflow-hidden rounded-[40px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative p-1 md:p-[2px] bg-gradient-to-b from-white/20 to-transparent rounded-[40px]">
            <div className="bg-[#050505] rounded-[38px] p-8 md:p-16">
              
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left: Job Core Info */}
                <div className="lg:w-1/2 space-y-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
                      <FaUserTie /> Education & Training
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                      Teaching Professional
                    </h3>
                    <div className="flex flex-wrap gap-6 text-slate-400 font-medium">
                      <span className="flex items-center gap-2">📍 Madurai, India</span>
                      <span className="flex items-center gap-2">⏰ Full-time</span>
                      <span className="flex items-center gap-2">🎓 Any Degree</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    We are looking for enthusiastic individuals with any degree background who are passionate about mentoring students and bridging the gap between academia and industry.
                  </p>

                  <div className="pt-4">
                    <a 
                      href="mailto:careers@cloudrule.com"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-blue-50 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                      Apply for this Position <FaRocket className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Right: Requirements & Details */}
                <div className="lg:w-1/2 w-full grid gap-8">
                  <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
                    <h4 className="text-xl font-bold flex items-center gap-3 text-white">
                      <FaCheckCircle className="text-blue-500" /> Key Requirements
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "Bachelor's degree (Any Discipline)",
                        "Strong communication and interpersonal skills",
                        "Passion for teaching and student success",
                        "Willingness to learn and adapt to tech",
                      ].map((req, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
                    <h4 className="text-xl font-bold flex items-center gap-3 text-white">
                      <FaCheckCircle className="text-green-500" /> Perks & Benefits
                    </h4>
                    <ul className="grid grid-cols-2 gap-4">
                      {[
                        "Competitive Pay",
                        "Mentorship",
                        "Tech Exposure",
                        "Career Growth",
                      ].map((perk, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                          <div className="w-1 h-1 rounded-full bg-green-500/50" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerPage;
