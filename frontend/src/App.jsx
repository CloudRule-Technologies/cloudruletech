import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TawkTo from "./components/TawkTo/TawkTo";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import Dashboard from "./components/Admin/dashboard/Dashboard";
import AboutUs from "./pages/AboutUs_page/AboutUs";
import CareerPage from "./pages/Careers/CareerPage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ServicesPage from "./pages/Services/ServicesPage";
import UserLogin from "./pages/User/Login";
import UserRegister from "./pages/User/Register";
import { useEffect } from "react";
import { api } from "./services/api";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    api.trackPageView({ path: location.pathname }).catch(() => {});
  }, [location.pathname]);

  useEffect(() => {
    const pageKey = location.pathname === "/" ? "home" : location.pathname.slice(1);
    api
      .getSeo(pageKey)
      .then((result) => {
        const seo = result?.seo;
        if (!seo) return;
        if (seo.title) {
          document.title = seo.title;
        }
        if (seo.description) {
          let el = document.querySelector('meta[name="description"]');
          if (!el) {
            el = document.createElement("meta");
            el.setAttribute("name", "description");
            document.head.appendChild(el);
          }
          el.setAttribute("content", seo.description);
        }
        if (seo.keywords) {
          let el = document.querySelector('meta[name="keywords"]');
          if (!el) {
            el = document.createElement("meta");
            el.setAttribute("name", "keywords");
            document.head.appendChild(el);
          }
          el.setAttribute("content", seo.keywords);
        }
      })
      .catch(() => {});
  }, [location.pathname]);

  return (
    <>
      {!isAdminRoute ? <Navbar /> : null}
      <div className={`${!isAdminRoute ? "background" : ""} select-none caret-transparent`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/user/login" element={<Navigate to="/login" replace />} />
          <Route path="/user/register" element={<Navigate to="/register" replace />} />
          <Route path="/admin/login" element={<Navigate to="/login" replace />} />
          <Route path="/admin/register" element={<Navigate to="/login" replace />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {!isAdminRoute ? <Footer /> : null}
      {!isAdminRoute ? <TawkTo /> : null}
    </>
  );
};

export default App;
