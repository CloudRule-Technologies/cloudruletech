import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Cta from "../../components/Cta/Cta";

const Home = () => {
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
