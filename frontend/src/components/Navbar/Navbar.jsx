import { useState } from "react";
import { FaBars, FaBriefcase, FaTimes } from "react-icons/fa";

import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="select-none  caret-transparent fixed z-50 top-0 w-full backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <img
            src="./CR_logo2.png"
            alt="logo"
            draggable="false"
            className="w-12 h-12 border border-white/15 pointer-events-none rounded-full"
          />
          <div>
            <h1 className="font-medium font-serif">C L O U D R U L E</h1>
            <p className="ml-1.5 font-bold text-[12px]">
              T E C H N O L O G I E S
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8  font-serif text-neutral-300 text-md">
          <button
            onClick={() => navigate("/")}
            className="hover:text-white cursor-pointer transition flex items-center gap-2"
          >
            <FaHome /> Home
          </button>
          <button
            onClick={() => navigate("/services")}
            className="hover:text-white cursor-pointer transition flex items-center gap-2"
          >
            <FaServicestack /> Services
          </button>
          <button
            onClick={() => navigate("/career")}
            className="hover:text-white cursor-pointer transition flex items-center gap-2"
          >
            <FaBriefcase /> Career
          </button>
          <button
            onClick={() => navigate("/aboutus")}
            className="hover:text-white cursor-pointer transition flex items-center gap-2"
          >
            <FaInfoCircle /> About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-white cursor-pointer transition flex items-center gap-2"
          >
            <FaEnvelope /> Contact
          </button>
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen((open) => !open)}
          className="md:hidden text-2xl text-white"
          data-testid="mobile-menu-toggle"
          aria-label="toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden   backdrop-blur border-t border-white/10"
          data-testid="mobile-menu"
        >
          <ul className="flex font-serif flex-col gap-6 px-6 py-6 text-neutral-300 text-md">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
              className="flex  items-center gap-3"
            >
              <FaHome /> Home
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/services");
              }}
              className="flex items-center gap-3"
            >
              <FaServicestack /> Services
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/career");
              }}
              className="flex items-center gap-3"
            >
              <FaBriefcase /> Career
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/aboutus");
              }}
              className="flex items-center gap-3"
            >
              <FaInfoCircle /> About
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact");
              }}
              className="flex items-center gap-3"
            >
              <FaEnvelope /> Contact
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
