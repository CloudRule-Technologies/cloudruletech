// src/App.jsx
import Home from "./pages/Home/Home";
import ServicesPage from "./components/services/ServicesPage"; 

const App = () => {
  // For development testing - later remove or use real routing
  const currentPage = "services"; // change to "home" when needed

  return (
    <>
    <div className="backgound select-none caret-transperent">
      {currentPage === "home" && <Home />}
      {currentPage === "services" && <ServicesPage />}
      </div>
      {/* Add more pages like this as you build them */}
      {/* {currentPage === "about" && <AboutPage />} */}
    </>
  );
};

export default App;