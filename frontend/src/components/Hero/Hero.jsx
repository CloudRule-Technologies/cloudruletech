import React from "react";
// Import the background image from your assets folder
import HeroBg from "../../assets/hero-bg.jpg"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-48 pb-32 px-6 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.94)), url(${HeroBg})`,
      }}
    >
      {/* Note: The linear-gradient above acts as an 'overlay' 
          so your text remains readable on top of the dark image. 
      */}
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4">
          Innovate - Scale - Rule
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
         Code Your Future<br />
          <span className="text-blue-300 ">
         Rule Your Cloud
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          CloudRule Technology isn’t just an IT provider.
          we are your digital foundation, and Web solutions for the next generation of businesses.
          We bridge the gap between complex infrastructure and seamless digital growth.
        </p>


       
      </div>
    </section>
  );
};

export default Hero;