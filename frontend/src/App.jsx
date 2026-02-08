import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TawkTo from "./components/TawkTo/TawkTo";
import AboutUs from "./pages/AboutUs_page/AboutUs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ServicesPage from "./pages/Services/ServicesPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="background select-none caret-transparent">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
      <TawkTo />
    </>
  );
};

export default App;
