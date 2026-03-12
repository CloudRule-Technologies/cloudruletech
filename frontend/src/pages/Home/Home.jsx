import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Cta from "../../components/Cta/Cta";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useEffect, useState } from "react";
import { defaultContent } from "../../content/defaultContent";
import { api } from "../../services/api";

const Home = () => {
  const [homeContent, setHomeContent] = useState(defaultContent.home);

  useEffect(() => {
    document.title = "Home | CloudRule";
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await api.getPublicSection("home");
        if (result?.data) {
          setHomeContent(result.data);
        }
      } catch {
        // Keep static fallback to avoid UI regressions when backend is offline.
      }
    };
    load();
  }, []);

  return (
    <>
      <div data-testid="home-page">
        <Hero content={homeContent.hero} />
        <Feature features={homeContent.features} />
        <Testimonials />
        <Cta content={homeContent.cta} />
      </div>
    </>
  );
};

export default Home;
