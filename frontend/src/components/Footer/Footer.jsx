import { useNavigate } from "react-router-dom";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/aboutus" },
        { name: "Careers", path: "/career" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services" },
        { name: "Cloud Solutions", path: "/services" },
        { name: "IT Consulting", path: "/services" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaGithub />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ];

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <img
                src="/CR_logo2.png"
                alt="Cloudrule Logo"
                className="w-16 h-16 rounded-full border-2 border-white/10"
              />
              <div>
                <h1 className="text-xl font-bold tracking-tighter leading-none text-white">
                  CLOUDRULE
                </h1>
                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase">
                  Technologies
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Architecting the digital future with state-of-the-art cloud ecosystems 
              and high-performance web solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, color: "#fff", borderColor: "rgba(59,130,246,0.5)" }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 transition-all border border-transparent"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-white font-bold mb-6 text-lg">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold mb-6 text-lg">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <HiOutlineEnvelope className="w-5 h-5 text-blue-500" />
                cloudruletechnologies@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <HiOutlinePhone className="w-5 h-5 text-blue-500" />
                +91 97913 94644
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <HiOutlineMapPin className="w-5 h-5 text-blue-500" />
                India
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CloudRule Technology. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-slate-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </button>
            <button className="text-slate-500 hover:text-white text-xs transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

