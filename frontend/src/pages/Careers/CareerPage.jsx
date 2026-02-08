import { useState, useEffect } from "react";
import {
  FaUserTie,
  FaCheckCircle,
  FaGift,
  FaGraduationCap,
} from "react-icons/fa";

const CareerPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <div className="relative z-1 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-blob"></div>
            <div
              className="absolute top-1/3 -right-1/4 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-blob"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-blob"
              style={{ animationDelay: "4s" }}
            ></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div
            className={`relative z-10 text-center max-w-5xl mx-auto space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-sm font-semibold text-black/80 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black/60"></span>
              </span>
              Join Our Team
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight animate-fade-in-up">
              Build Your Career
              <br />
              <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent animate-gradient">
                With Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up">
              Shape the future of education and technology by joining our
              passionate team of innovators.
            </p>
          </div>
        </div>

        {/* Job Posting Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-black/5 text-sm font-bold text-black/60 mb-4 hover:bg-black/10 transition-colors duration-300">
              Current Openings
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black">
              Available Positions
            </h2>
          </div>

          <div className="relative group animate-fade-in-up">
            <div className="relative bg-white rounded-3xl shadow-xl shadow-black/5 border-2 border-black/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:border-black/30 hover:-translate-y-2">
              <div className="relative p-8 md:p-12 space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="space-y-4 animate-slide-in-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-br from-gray-800 to-black text-white font-bold text-lg shadow-lg shadow-black/25 hover:shadow-black/40 hover:scale-105 transition-all duration-300">
                      <FaUserTie className="text-2xl animate-bounce-slow" />
                      <span>Teaching Professional</span>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-black/80">
                      Any Degree Graduate Welcome
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-black/60 animate-slide-in-right">
                    <span className="px-4 py-2 rounded-xl bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 hover:scale-105 transition-all duration-300 cursor-default">
                      <FaCheckCircle className="inline mr-1" /> Open for
                      Applications
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-default">
                      📍 On-site
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-default">
                      ⏰ Full-time
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-default">
                      <FaGraduationCap className="inline mr-1" /> Any Degree
                    </span>
                  </div>
                </div>

                {/* Requirements & Offers */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-black flex items-center gap-2">
                      <FaCheckCircle className="text-2xl animate-bounce-slow" />
                      What We're Looking For
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Bachelor's degree in any field",
                        "Strong passion for teaching and education",
                        "Excellent communication skills",
                        "Patient and enthusiastic personality",
                        "Willingness to learn and grow",
                        "Creative and innovative mindset",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-black/70 font-medium group/item animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                          style={{ animationDelay: `${800 + index * 100}ms` }}
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-sm font-bold mt-0.5 group-hover/item:bg-black group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300">
                            ✓
                          </span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-black flex items-center gap-2">
                      <FaGift className="text-2xl animate-bounce-slow" />
                      What We Offer
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Competitive salary package",
                        "Professional development programs",
                        "Friendly work environment",
                        "Career growth opportunities",
                        "Flexible working hours",
                        "Health and wellness benefits",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-black/70 font-medium group/item animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                          style={{ animationDelay: `${1200 + index * 100}ms` }}
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-sm font-bold mt-0.5 group-hover/item:bg-black group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300">
                            ✓
                          </span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
