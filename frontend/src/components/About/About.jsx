import { FaCheckCircle } from "react-icons/fa";
import Logo from "../../assets/logo.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-black">CloudRule</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            CloudRule Technology is a forward-thinking IT solutions company
            focused on delivering secure, scalable, and innovative digital
            solutions that empower businesses to grow.
          </p>

          <ul className="space-y-4 font-medium text-gray-700">
            {[
              "Certified Industry Experts",
              "24/7 Technical Support",
              "Innovation-Driven Solutions",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={Logo}
            alt="CloudRule"
            className="w-72 md:w-80 lg:w-96 rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
