import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Clients from "../../components/Clients/Clients";
import Cta from "../../components/Cta/Cta";
import LogoCloud from "../../components/LogoCloud/LogoCloud";
import Stats from "../../components/Stats/Stats";
import Internship from "../../components/Internship/intern";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "CloudRule | Innovative Cloud & Web Solutions";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="home-page" 
      className="bg-black"
    >
      <Hero />
      {/* <LogoCloud /> */}
      <Feature />
      <Clients />
      <Stats />
      <Internship />
      <Cta />
    </motion.div>
  );
};

export default Home;
