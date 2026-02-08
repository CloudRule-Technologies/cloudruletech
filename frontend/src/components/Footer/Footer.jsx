import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="select-none caret-transparent px-6 relative z-1 w-full border-t border-white/15 bg-black">
      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-neutral-400">
          {/* LOGO */}
          <div className="space-y-4">
            <div className="flex items-center  gap-3">
              <img
                src="./CR_logo2.png"
                alt="Cloudrule Logo"
                draggable="false"
                className="w-12 h-12 border border-white/15  rounded-full"
              />
              <div>
                <h1 className="font-medium font-serif">C L O U D R U L E</h1>
                <p className="ml-1 font-bold text-[10px]">
                  T E C H N O L O G I E S
                </p>
              </div>
            </div>
            <p className="text-sm">Empowering businesses with technology.</p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-white cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="hover:text-white cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/career")}
                  className="hover:text-white cursor-pointer"
                >
                  career
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/aboutus")}
                  className="hover:text-white cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="hover:text-white cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-bold mb-4 font-serif">Contact</h3>
            <p>cloudruletechnologies@gmail.com</p>
            <p>+91 86959 54966</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <p className="text-center text-sm py-6 text-neutral-500">
          © {new Date().getFullYear()} CloudRule Technology. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
