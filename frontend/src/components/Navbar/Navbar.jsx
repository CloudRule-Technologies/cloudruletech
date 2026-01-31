import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed  top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
          CloudRule
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </ul>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col gap-6 px-6 py-6 font-medium">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
