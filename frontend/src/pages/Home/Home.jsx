import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Cta from "../../components/Cta/Cta";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | CloudRule";
  });
  return (
    <>
      <div data-testid="home-page">
        <Hero />
        <Feature />
        <Cta />
      </div>
    </>
  );
};

export default Home;
