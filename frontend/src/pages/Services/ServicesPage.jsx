import ServiceGrid from "../../components/Services/ServiceGrid";
import ProcessGrid from "../../components/Services/ProcessGrid";
import TrainingPrograms from "../../components/Services/TrainingPrograms";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  useEffect(()=>{
    document.title = "Services | CloudRule"
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      data-testid="services-page"
      className="relative z-1 min-h-screen flex flex-col bg-black"
    >
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden ">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="glow-1 opacity-20" />
            <div className="glow-2 opacity-10" />
            <div className="absolute inset-0 bg-grid opacity-[0.03]" />
          </div>

          <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center relative z-10">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/60">
                Enterprise Solutions
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8"
            >
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                Technology Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                Built for Purpose
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              We turn complex business challenges into elegant, scalable
              digital solutions
              <span className="text-white">
                {" "}
                that drive measurable results and competitive advantage.
              </span>
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
            >
              {[
                { value: "4+", label: "Projects Delivered", icon: "🚀" },
                { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                { value: "20+", label: "Team Members", icon: "👥" },
                { value: "24/7", label: "Support Available", icon: "🔧" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] relative overflow-hidden"
                >
                  <div className="text-2xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest group-hover:text-white">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <ServiceGrid />
        <TrainingPrograms />
        <ProcessGrid />
      </main>
    </motion.div>
  );
};

export default ServicesPage;
