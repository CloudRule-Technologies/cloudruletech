import { FaGoogle, FaAws, FaMicrosoft, FaDigitalOcean } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";

const LogoCloud = () => {
  const logos = [
    { name: "Google Cloud", icon: <FaGoogle className="w-8 h-8" /> },
    { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
    { name: "Azure", icon: <FaMicrosoft className="w-8 h-8" /> },
    { name: "DigitalOcean", icon: <FaDigitalOcean className="w-8 h-8" /> },
    { name: "Vercel", icon: <IoLogoVercel className="w-8 h-8" /> },
    { name: "Netlify", icon: <BiLogoNetlify className="w-8 h-8" /> },
  ];



  return (
    <section className="py-12 bg-[#030711] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-10">
          Trusted by innovators worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors cursor-default">
              {logo.icon}
              <span className="font-bold text-lg hidden md:block">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
