import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Cta from "../../components/Cta/Cta";
import LogoCloud from "../../components/LogoCloud/LogoCloud";
import Stats from "../../components/Stats/Stats";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "CloudRule | Innovative Cloud & Web Solutions";
  }, []);

  return (
    <div data-testid="home-page" className="bg-[#030711]">
      <Hero />
      {/* <LogoCloud /> */}
      <Feature />
      <Stats />
      <Cta />
    </div>
  );
};

export default Home;

