import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FiSmartphone, 
  FiGlobe, 
  FiCalendar, 
  FiArrowUpRight,
  FiLayers,
  FiAward 
} from "react-icons/fi";
import { FaJava, FaPython } from "react-icons/fa";

const internshipData = [
  {
    id: "web",
    title: "Web Developer",
    icon: <FiGlobe className="w-7 h-7" />,
    description: "Develop responsive, high-performance web applications using React, Tailwind CSS, and modern web frameworks.",
    durations: ["15 Days", "1 Month", "3 Months"]
  },
  {
    id: "app",
    title: "App Developer",
    icon: <FiSmartphone className="w-7 h-7" />,
    description: "Build native and cross-platform mobile applications for iOS & Android with React Native and Flutter.",
    durations: ["15 Days", "1 Month", "3 Months"]
  },
  {
    id: "fullstack",
    title: "Fullstack Developer",
    icon: <FiLayers className="w-7 h-7" />,
    description: "Master both frontend user interfaces and backend database engines to build complete, end-to-end web systems.",
    durations: ["15 Days", "1 Month", "3 Months"]
  },
  {
    id: "java",
    title: "Java Developer",
    icon: <FaJava className="w-7 h-7" />,
    description: "Learn backend engineering, object-oriented systems, database design, and Enterprise Spring Boot architectures.",
    durations: ["15 Days", "1 Month", "3 Months"]
  },
  {
    id: "python",
    title: "Python Developer",
    icon: <FaPython className="w-7 h-7" />,
    description: "Master scripting, system automation, Flask/Django APIs, database operations, and data analytics tools.",
    durations: ["15 Days", "1 Month", "3 Months"]
  }
];

const Internship = () => {
  const navigate = useNavigate();

  const handleContact = (roleTitle) => {
    navigate("/contact", {
      state: {
        message: `Hello CloudRule, I would like to get more details about the ${roleTitle} Internship. Please share the details regarding the 15-day, 1-month, and 3-month tracks.`
      }
    });
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-black border-t border-white/5">
      {/* Premium ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-widest font-sans">
              Internship Opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Launch Your Career with <span className="text-gradient">CloudRule</span>
          </motion.h2>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {internshipData.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-zinc-950/60 backdrop-blur-md p-8 transition-all duration-300 shadow-xl hover:shadow-white/[0.02] hover:bg-zinc-900/50"
            >
              <div>
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/0 group-hover:border-white/20 transition-all duration-300 pointer-events-none" />
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-300">
                    {role.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-zinc-300 group-hover:text-white text-sm leading-relaxed mb-6 transition-colors duration-300 min-h-[48px]">
                  {role.description}
                </p>

                {/* Durations */}
                <div className="mb-6">
                  <div className="text-[11px] font-semibold text-zinc-400 group-hover:text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-1.5 transition-colors duration-300">
                    <FiCalendar className="w-3.5 h-3.5 text-white/70" />
                    Available Durations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.durations.map((duration) => (
                      <span
                        key={duration}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white/10 border border-white/15 text-white transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/20"
                      >
                        {duration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Badge */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 mb-8 text-xs text-zinc-200 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/15">
                  <FiAward className="w-4 h-4 text-white/90" />
                  <span>Certificate Provided on Completion</span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleContact(role.title)}
                  className="w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 transition-colors duration-300 shadow-lg shadow-white/5"
                >
                  <span>Contact for Details</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internship;
