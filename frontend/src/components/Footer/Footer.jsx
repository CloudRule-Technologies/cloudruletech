import Logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-gray-400 pt-14">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* LOGO + NAME */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Cloudrule Logo"
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-white text-xl font-bold">Cloudrule</h3>
            </div>

            <p className="text-sm">Empowering businesses with technology.</p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p>cloudruletechnologies@gmail.com</p>
            <p>+1 234 567 890</p>
          </div>
        </div>
      </div>
      {/*   ALL RIGHTS RESERVED */}
      <div className="border-t border-gray-700">
        <p className="text-center text-sm py-6">
          © {new Date().getFullYear()} Cloudrule Technology. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
