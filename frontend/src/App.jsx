// src/App.jsx
import Home from "./pages/Home/Home";
import ServicesPage from "./components/services/ServicesPage"; 
import CareerPage from "./components/Careers/CareerPage";

const App = () => {
  // For development testing - later remove or use real routing
  const currentPage = "careers"; // change to "home", "services", or "careers" when needed

  return (
    <>
      <div className="backgound select-none caret-transperent">
        {currentPage === "home" && <Home />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "careers" && <CareerPage />}
      </div>
      {/* Add more pages like this as you build them */}
      {/* {currentPage === "about" && <AboutPage />} */}
    </>
  );
};

export default App;