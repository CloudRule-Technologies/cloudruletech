const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cover bg-center text-white pt-24"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,.75), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Reliable Cloud & <br />
            Digital Technology Partner
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Cloudrule Technology helps businesses build secure, scalable and
            high-performance web and cloud solutions aligned with modern
            industry standards.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#services"
              className="bg-white text-black px-7 py-3 font-semibold rounded hover:bg-gray-200 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border border-white px-7 py-3 font-semibold rounded hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
