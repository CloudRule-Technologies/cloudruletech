import { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { 
  HiOutlineHome, 
  HiOutlineCommandLine, 
  HiOutlineBriefcase, 
  HiOutlineInformationCircle, 
  HiOutlineEnvelope 
} from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <HiOutlineHome className="w-5 h-5" /> },
    { name: "Services", path: "/services", icon: <HiOutlineCommandLine className="w-5 h-5" /> },
    { name: "Career", path: "/career", icon: <HiOutlineBriefcase className="w-5 h-5" /> },
    { name: "About", path: "/aboutus", icon: <HiOutlineInformationCircle className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <HiOutlineEnvelope className="w-5 h-5" /> },
  ];

  return (
    <nav 
      className={`fixed z-50 top-0 w-full transition-all duration-500 ${
        scrolled ? "py-4 bg-[#030711]/80 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="relative">
            <img
              src="/CR_logo2.png"
              alt="logo"
              className="w-10 h-10 rounded-full border border-white/20 group-hover:border-blue-500/50 transition-colors"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter leading-none">
              CLOUDRULE
            </h1>
            <p className="text-[10px] font-bold tracking-[0.2em] text-blue-500/80 uppercase">
              Technologies
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => navigate(link.path)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  location.pathname === link.path 
                    ? "bg-white/10 text-white" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
          <li className="ml-4">
            <button 
              onClick={() => navigate("/contact")}
              className="px-6 py-2.5 bg-white text-black rounded-xl text-sm font-bold hover:bg-blue-50 transition-all shadow-lg shadow-white/5"
            >
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white glass rounded-lg"
          aria-label="toggle menu"
        >
          {open ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#030711] border-b border-white/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] py-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate(link.path);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                  location.pathname === link.path 
                    ? "bg-white/10 text-white" 
                    : "text-slate-400"
                }`}
              >
                {link.icon}
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

