import logo from "../../assets/Logo.jpeg";
import missionImg from "../../assets/Mission.png";
import visionImg from "../../assets/Vision.png";
import praveen from "../../assets/Praveen-Profile.jpeg";
import sailendra from "../../assets/Sailendra -Profile.jpeg";
import sujitha from "../../assets/Sujitha-Profile.jpeg";
import prakalya from "../../assets/Prakalya-Profile.jpeg";
import viji from "../../assets/Viji-Profile.png";
import isac from "../../assets/Isac-Profile.jpeg";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | CloudRule";
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "IT Solutions & Software Development",
      desc: "We design and develop robust, scalable, and secure software solutions tailored to business needs. From custom applications to enterprise systems, we help organizations transform digitally.",
    },
    {
      title: "Web & Digital Platform Development",
      desc: "We build responsive websites and high-performance digital platforms using modern technologies, ensuring seamless user experience and long-term scalability.",
    },
    {
      title: "Industry-Focused Training Programs",
      desc: "We provide hands-on training for school and college students, covering in-demand technologies and practical skills aligned with industry standards.",
    },
    {
      title: "Internships & Real-World Projects",
      desc: "Our internship programs offer real-time project exposure, enabling students to apply theoretical knowledge to practical challenges and gain industry readiness.",
    },
  ];

  const headTeam = [
    { role: "Chief Executive Officer", name: "Sathya Priya Murugan" },
    { role: "Director", name: "Karthikeyan Thavamurugan" },
  ];

  const techTeam = [
    {
      role: "Software Team Lead",
      name: "Sailendra Prasath N",
      image: sailendra,
    },
    {
      role: "Fullstack Developer",
      name: "Isac Newton",
      image: isac,
      imgStyle: { objectPosition: "50% 15%" },
    },
    { role: "Fullstack Developer", name: "Praveen Sethuvel", image: praveen },
    { role: "Fullstack Developer", name: "Sujitha", image: sujitha },
    {
      role: "Business Development Manager",
      name: "Viji Kannan",
      image: viji,
    },
    { role: "Digital Marketing", name: "Prakalya", image: prakalya },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      data-testid="about-page"
      className="relative z-10 min-h-screen pt-32 pb-20 px-6 bg-black"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          About Us
        </h1>
        <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {/* Company Overview */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={logo}
                alt="Cloudrule Technology"
                className="relative rounded-2xl border border-white/10 shadow-2xl transition duration-500 w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Cloudrule Technology
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Cloudrule Technology Private Limited is a technology-driven company
              delivering innovative IT solutions and scalable digital platforms.
              We empower businesses and talent through cutting-edge technology
              and industry-aligned education.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-6 hover:bg-white/[0.05] transition-all group">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition duration-500">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-3xl font-display font-bold">Our Mission</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To provide reliable and scalable IT solutions, empower students with
              industry-relevant skills through hands-on learning, and bridge the gap
              between academia and industry while building long-term strategic
              partnerships.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-6 hover:bg-white/[0.05] transition-all group">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition duration-500">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-3xl font-display font-bold">Our Vision</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To become a trusted technology partner by driving digital
              transformation for businesses and educational institutions while
              nurturing future-ready talent through practical learning and
              innovation.
            </p>
          </motion.div>
        </div>

        {/* What We Do Grid */}
        <div className="space-y-12">
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">What We Do</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Specialized services crafted for excellence and innovation.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-4 text-white/90">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="space-y-12">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Leadership</h2>
            <p className="text-white/80">The visionaries behind CloudRule.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {headTeam.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                  <img src={logo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  <p className="text-white/80 uppercase tracking-widest text-[10px] font-bold mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div className="space-y-12 pb-20">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical Team</h2>
            <p className="text-white/80">Experts driving our technological innovation.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techTeam.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    style={member.imgStyle || {}}
                  />
                </div>
                <div className="p-8 text-center space-y-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-500">{member.name}</h4>
                  <p className="text-white/90 text-sm tracking-wide">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
