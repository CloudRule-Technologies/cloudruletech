import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TawkTo from "./components/TawkTo/TawkTo";
import AboutUs from "./pages/AboutUs_page/AboutUs";
import CareerPage from "./pages/Careers/CareerPage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ServicesPage from "./pages/Services/ServicesPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/career" element={<CareerPage/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      {/* <TawkTo /> */}
    </div>
  );
};

export default App;

