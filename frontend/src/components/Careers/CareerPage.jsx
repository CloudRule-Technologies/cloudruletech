// src/components/Careers/CareerPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CareerPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    address: '',
    resume: null
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({ ...prev, resume: file }));
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsFormOpen(false);
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      qualification: '',
      experience: '',
      address: '',
      resume: null
    });

    // Auto close success modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes expandRight {
          0% { width: 0; }
          100% { width: 4rem; }
        }

        @keyframes expandLeft {
          0% { width: 0; }
          100% { width: 4rem; }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes successScale {
          0% { 
            opacity: 0; 
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }

        .animate-gradient {
          animation: gradient 3s linear infinite;
          background-size: 200% auto;
        }

        .animate-expand-right {
          animation: expandRight 0.8s ease-out forwards;
        }

        .animate-expand-left {
          animation: expandLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-checkmark {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: checkmark 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-success-scale {
          animation: successScale 0.5s ease-out forwards;
        }
      `}</style>

      {/* CHANGED: Added "background" class here */}
      <div className="bg-white relative z-50 min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient blobs with animation */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
            
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400/40 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gray-500/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-gray-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-gray-500/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
          </div>
 <div className={`relative z-10 text-center max-w-5xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge with pulse animation */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 text-sm font-semibold text-black/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black/60"></span>
              </span>
              Join Our Team
            </div>
            {/* Main heading with gradient animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Build Your Career
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-black to-gray-300 bg-clip-text text-transparent animate-gradient">
                With Us
              </span>
            </h1>

            {/* Decorative line with expand animation */}
            <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="h-px bg-gradient-to-r from-transparent to-black/30 animate-expand-right"></div>
              <div className="w-4 h-4 rounded-full bg-black/60 animate-pulse"></div>
              <div className="h-px bg-gradient-to-l from-transparent to-black/30 animate-expand-left"></div>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-black /80 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              Shape the future of education and technology by joining our passionate team of innovators.
            </p>
          </div>
        </div>

        {/* Job Posting Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-black/10 text-sm font-bold text-black/80 mb-4 hover:bg-black/20 transition-colors duration-300">
              Current Openings
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black">
              Available Positions
            </h2>
          </div>

          {/* Large Teaching Position Card */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative bg- rounded-3xl shadow-xl shadow-black/5 border-2 border-black/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 hover:border-black/30 hover:-translate-y-2">
              {/* Animated shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-gray-500/20 via-black/20 to-gray-500/20 blur-xl -z-10"></div>
              
              {/* Card Content */}
              <div className="relative p-8 md:p-12 space-y-8">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Job Title */}
                  <div className="space-y-4 animate-slide-in-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-br from-gray-800 to-black text-white font-bold text-lg shadow-lg shadow-black/25 hover:shadow-black/40 hover:scale-105 transition-all duration-300">
                      <span className="text-2xl animate-bounce-slow">👨‍🏫</span>
                      <span>Teaching Professional</span>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-black/80">
                      Any Degree Graduate Welcome
                    </p>
                  </div>

                  {/* Job Meta Info */}
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-black/60 animate-slide-in-right">
                    <span className="px-4 py-2 rounded-xl bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 hover:scale-105 transition-all duration-300 cursor-default">
                      ✅ Open for Applications
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-default">
                      📍 Remote / On-site
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-default">
                      ⏰ Full-time
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-default">
                      🎓 Any Degree
                    </span>
                  </div>
                </div>

                {/* Description Section */}
                <div className="space-y-4 border-t-2 border-black/5 pt-8">
                  <h3 className="text-2xl font-black text-black flex items-center gap-3 group/title">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-gray-700 to-black rounded-full group-hover/title:h-12 transition-all duration-300"></span>
                    About the Role
                  </h3>
                  <p className="text-lg text-black/70 leading-relaxed hover:text-black/90 transition-colors duration-300">
                    We are looking for passionate and dedicated individuals who have a strong interest in the teaching field. 
                    If you love sharing knowledge, inspiring others, and making a real impact on students' lives, this is the 
                    perfect opportunity for you!
                  </p>
                  <p className="text-lg text-black/70 leading-relaxed hover:text-black/90 transition-colors duration-300">
                    Whether you're a fresh graduate or someone looking to transition into education, we welcome candidates from 
                    all academic backgrounds who demonstrate enthusiasm for teaching and learning.
                  </p>
                </div>

                {/* Requirements Grid */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  {/* What We're Looking For */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-black flex items-center gap-2">
                      <span className="text-2xl animate-bounce-slow">✅</span>
                      What We're Looking For
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Bachelor's degree in any field",
                        "Strong passion for teaching and education",
                        "Excellent communication skills",
                        "Patient and enthusiastic personality",
                        "Willingness to learn and grow",
                        "Creative and innovative mindset"
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

                  {/* What We Offer */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-black flex items-center gap-2">
                      <span className="text-2xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🎁</span>
                      What We Offer
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Competitive salary package",
                        "Professional development programs",
                        "Friendly work environment",
                        "Career growth opportunities",
                        "Flexible working hours",
                        "Health and wellness benefits"
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

                {/* CTA Section */}
                <div className="border-t-2 border-black/5 pt-8 mt-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-br from-black/5 to-black/0 hover:from-gray-100/50 hover:to-gray-50/50 transition-all duration-500">
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl font-black text-black mb-2">
                        Interested in shaping young minds?
                      </h4>
                      <p className="text-black/60 font-medium">
                        Send your resume and cover letter to join our team
                      </p>
                    </div>
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="group/btn relative px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-black text-white font-bold text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 active:scale-95 overflow-hidden flex-shrink-0"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Apply Now
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      {/* Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300 rounded-2xl"></div>
                    </button>
                  </div>

                  {/* Bottom accent line with animation */}
                  <div className="mt-8 h-1.5 bg-gradient-to-r from-gray-700 via-black to-gray-700 rounded-full animate-gradient"></div>
                </div>

                {/* Additional Info Section */}
                <div className="text-center py-6 px-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group/info">
                  <p className="text-lg font-bold text-black/80 mb-2 group-hover/info:text-black transition-colors duration-300">
                    Don't see the perfect role? Send us your resume anyway!
                  </p>
                  <p className="text-black/60 font-medium group-hover/info:text-black/80 transition-colors duration-300">
                    We're always looking for talented individuals to join our growing team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl animate-scale-in">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-lg bg-black/5 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-black/60 group-hover:text-white group-hover:rotate-90 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Form Header */}
              <div className="p-8 md:p-12 pb-0">
                <div className="text-center space-y-4 mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-black text-white text-3xl shadow-lg shadow-black/25 animate-bounce-slow">
                    📝
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-black animate-fade-in-up">
                    Job Application
                  </h2>
                  <p className="text-black/60 font-medium max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    Fill in your details below to apply for the Teaching Professional position
                  </p>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 md:p-12 pt-0 space-y-6">
                {/* Full Name */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label className="block text-sm font-bold text-black mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder:text-black/40"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder:text-black/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 rounded-lg border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder:text-black/40"
                    />
                  </div>
                </div>

                {/* Qualification */}
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <label className="block text-sm font-bold text-black mb-2">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., B.Tech, M.Sc, etc."
                    className="w-full px-4 py-3 rounded-lg border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder:text-black/40"
                  />
                </div>

                {/* Experience */}
                <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <label className="block text-sm font-bold text-black mb-2">
                    Teaching Experience (if any)
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 years or Fresher"
                    className="w-full px-4 py-3 rounded-lg border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder:text-black/40"
                  />
                </div>

                {/* Address */}
                <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <label className="block text-sm font-bold text-black mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="2"
                    placeholder="Enter your full address"
                    className="w-full px-4 py-3 rounded-lg border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder:text-black/40 resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                  <label className="block text-sm font-bold text-black mb-2">
                    Upload Resume (PDF only) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-black/20 rounded-lg p-8 hover:border-black/40 hover:bg-gray-50/30 transition-all duration-300 cursor-pointer group">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-gray-100 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-8 h-8 text-black/40 group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-black/60 font-semibold mb-1 group-hover:text-black transition-colors duration-300">
                        {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-black/40 text-sm">
                        PDF file (max 5MB)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="flex-1 px-6 py-4 rounded-lg border-2 border-black/20 text-black font-bold hover:bg-black/5 hover:border-black/40 hover:scale-105 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 rounded-lg bg-gradient-to-r from-gray-800 to-black text-white font-bold hover:from-gray-700 hover:to-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 flex items-center justify-center gap-2 group/submit"
                  >
                    Submit Application
                    <svg className="w-5 h-5 group-hover/submit:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-success-scale">
              {/* Green Check Icon */}
              <div className="mx-auto w-20 h-20 mb-6 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                  <svg className="w-12 h-12 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
                Application Submitted!
              </h3>
              <p className="text-black/60 font-medium text-lg mb-6">
                Your application has been successfully submitted. We'll review it and get back to you soon.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
              >
                Great!
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default CareerPage;