import { useEffect } from "react";
import { motion } from "framer-motion";

const CareerPage = () => {
  useEffect(() => {
    document.title = "Careers | CloudRule";
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const perks = [
    {
      icon: "🚀",
      title: "Fast Growth",
      desc: "Accelerate your career in a high-growth tech environment.",
    },
    {
      icon: "💡",
      title: "Innovation",
      desc: "Work on cutting-edge solutions for real-world problems.",
    },
    {
      icon: "🤝",
      title: "Great Culture",
      desc: "Collaborate with a diverse team of passionate professionals.",
    },
    {
      icon: "🛡️",
      title: "Stability",
      desc: "Join a secure organization building for the future.",
    },
  ];

  const requirements = [
    "Bachelor's degree in any discipline",
    "Strong communication and interpersonal skills",
    "Genuine passion for teaching and student success",
    "Willingness to learn and adapt to new tech",
  ];

  const benefits = [
    "Competitive Pay",
    "Mentorship",
    "Tech Exposure",
    "Career Growth",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-screen bg-black text-white px-6 pt-32 pb-24"
    >
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Hero */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Build your future <span className="text-blue-400">with us.</span>
          </h1>

          <div className="h-px w-full bg-white/10" />

          <p className="text-base text-white max-w-xl leading-relaxed">
            We're not just building software — we're building careers. Join a
            mission-driven team where your ideas shape the digital foundations
            of tomorrow.
          </p>
        </motion.div>

        {/* Perks */}
        <motion.div
          variants={itemVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {perks.map((perk, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{perk.icon}</div>
              <h3 className="font-bold text-sm text-white mb-1">
                {perk.title}
              </h3>
              <p className="text-xs text-white leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Section Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
            Open Positions
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* Job Card */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Card Header */}
          <div className="bg-white/[0.03] border-b border-white/10 px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Education & Training
              </div>
              <h2
                className="text-3xl font-black tracking-tight text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Teaching Professional
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-white/40 font-medium">
                <span>📍 Madurai, India</span>
                <span>⏰ Full-time</span>
                <span>🎓 Any Degree</span>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:cloudruletechnologies@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
            >
              Apply Now →
            </motion.a>
          </div>

          {/* Card Body */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Requirements */}
            <div className="px-8 py-6 space-y-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                ✅ Key Requirements
              </h4>
              <p className="text-sm text-white leading-relaxed">
                We're looking for enthusiastic individuals passionate about
                mentoring students and bridging academia with industry.
              </p>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="px-8 py-6 space-y-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                ⭐ Perks & Benefits
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <span className="w-4 h-4 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xs">
                      ✓
                    </span>
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-xs font-semibold text-blue-400 mb-1">
                  Ready to apply?
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Send your resume to{" "}
                  <a
                    href="mailto:careers@cloudrule.com"
                    className="text-blue-400 font-medium"
                  >
                    cloudruletechnologies@gmail.com
                  </a>{" "}
                  with the subject "Teaching Professional".
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareerPage;
