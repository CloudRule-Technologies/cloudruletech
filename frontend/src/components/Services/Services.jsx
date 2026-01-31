import { FaCode, FaCloud, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Custom websites built with modern technologies.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure for growing businesses.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Native & hybrid mobile apps for all platforms.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Our Expertise</h2>
        <p className="text-gray-500 mt-2">Delivering excellence</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 text-center rounded-xl shadow hover:-translate-y-2 transition"
          >
            <div className="text-4xl mb-4 text-black">{s.icon}</div>
            <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
