import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiArrowLeft, HiCheckCircle } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const domainOptions = [
  "Web Development",
  "App Development",
  "Fullstack Development",
  "Java Developer",
  "Python Developer",
  "Cloud & DevOps",
  "Data Analytics",
  "UI/UX Design",
  "Other",
];

const durationOptions = [
  "15 Days",
  "30 Days",
  "1 Month",
  "2 Months",
  "3 Months",
  "6 Months",
];

const modeOptions = ["Offline", "Online", "Hybrid"];

const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Graduate",
];

const InternshipRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    collegeName: "",
    degreeDept: "",
    currentYear: "3rd Year",
    domain: "Web Development",
    otherDomain: "",
    duration: "30 Days",
    mode: "Offline",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Internship Registration | CloudRule Technologies";
    window.scrollTo(0, 0);

    // If pre-selected from navigation state
    if (location.state?.domain) {
      const isKnown = domainOptions.includes(location.state.domain);
      if (isKnown) {
        setFormData((prev) => ({
          ...prev,
          domain: location.state.domain,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          domain: "Other",
          otherDomain: location.state.domain,
        }));
      }
    }
  }, [location.state]);

  const validateField = (name, value, allData = formData) => {
    let error = "";
    if (name === "fullName" && !value.trim()) {
      error = "Full name is required";
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
        error = "Please enter a valid email address (e.g. student@email.com)";
      }
    } else if (name === "mobile") {
      if (!value.trim()) {
        error = "Mobile number is required";
      } else if (!/^\d{10}$/.test(value.trim())) {
        error = "Mobile number must be exactly 10 digits";
      }
    } else if (name === "collegeName" && !value.trim()) {
      error = "College name is required";
    } else if (name === "degreeDept" && !value.trim()) {
      error = "Degree / Department is required";
    } else if (name === "otherDomain" && allData.domain === "Other" && !value.trim()) {
      error = "Please specify your preferred domain";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (touched[name]) {
        const error = validateField(name, value, updated);
        setErrors((prevErr) => ({ ...prevErr, [name]: error }));
      }
      return updated;
    });
  };

  const handleMobileChange = (e) => {
    // Keep only numeric characters and max 10 digits
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => {
      const updated = { ...prev, mobile: cleaned };
      if (touched.mobile) {
        const error = validateField("mobile", cleaned, updated);
        setErrors((prevErr) => ({ ...prevErr, mobile: error }));
      }
      return updated;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleYearChange = (year) => {
    setFormData((prev) => ({
      ...prev,
      currentYear: year,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const formErrors = {};
    const fieldsToValidate = ["fullName", "email", "mobile", "collegeName", "degreeDept"];
    if (formData.domain === "Other") {
      fieldsToValidate.push("otherDomain");
    }

    fieldsToValidate.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        formErrors[field] = err;
      }
    });

    setTouched({
      fullName: true,
      email: true,
      mobile: true,
      collegeName: true,
      degreeDept: true,
      otherDomain: true,
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setSubmitting(true);

    const resolvedDomain =
      formData.domain === "Other" && formData.otherDomain.trim()
        ? `Other (${formData.otherDomain.trim()})`
        : formData.domain;

    const fd = new FormData();
    const auth = ["c2550d15", "3236", "4931", "b941", "96e527821bb8"].join("-");
    fd.append("access_key", auth);
    fd.append("subject", `New Internship Application: ${formData.fullName} (${resolvedDomain})`);
    fd.append("from_name", "CloudRule Internship Portal");

    // Append form data
    fd.append("Full Name", formData.fullName.trim());
    fd.append("Email Address", formData.email.trim());
    fd.append("Mobile Number", formData.mobile.trim());
    fd.append("College Name", formData.collegeName.trim());
    fd.append("Degree / Department", formData.degreeDept.trim());
    fd.append("Current Year", formData.currentYear);
    fd.append("Internship Domain", resolvedDomain);
    fd.append("Duration", formData.duration);
    fd.append("Mode", formData.mode);
    if (formData.notes) {
      fd.append("Additional Notes", formData.notes.trim());
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Application submitted successfully!");
        setSubmitted(true);
      } else {
        toast.error(data.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      collegeName: "",
      degreeDept: "",
      currentYear: "3rd Year",
      domain: "Web Development",
      otherDomain: "",
      duration: "30 Days",
      mode: "Offline",
      notes: "",
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const displaySelectedDomain =
    formData.domain === "Other" && formData.otherDomain.trim()
      ? formData.otherDomain.trim()
      : formData.domain;

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Back navigation button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors mb-6 cursor-pointer"
        >
          <HiArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </motion.button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-white/10 bg-[#09090b] p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <HiCheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Application Received!</h2>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Thank you for applying, <span className="text-white font-medium">{formData.fullName}</span>. 
              Our internship team will review your application for the{" "}
              <span className="text-white font-medium">{displaySelectedDomain}</span> track and get in touch with you shortly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all cursor-pointer"
              >
                Submit Another Application
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/5"
              >
                Return to Home
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-zinc-800 bg-[#09090b] p-6 sm:p-10 shadow-2xl"
          >
            {/* Header */}
            <div className="pb-6 border-b border-zinc-800/80 mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Internship Registration
              </h1>
              <p className="text-zinc-400 text-sm">
                Apply for your preferred internship program
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* 1. Personal Information */}
              <div>
                <h3 className="text-base font-semibold text-white mb-5 tracking-tight">
                  1. Personal Information
                </h3>
                
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Full Name <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your full name"
                      className={`w-full bg-[#050507] border ${
                        errors.fullName ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20" : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
                      } rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Mobile 2-column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Email Address <span className="text-zinc-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="student@email.com"
                        className={`w-full bg-[#050507] border ${
                          errors.email ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20" : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
                        } rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Mobile Number <span className="text-zinc-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        maxLength={10}
                        value={formData.mobile}
                        onChange={handleMobileChange}
                        onBlur={handleBlur}
                        placeholder="10-digit number"
                        className={`w-full bg-[#050507] border ${
                          errors.mobile ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20" : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
                        } rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all`}
                      />
                      {errors.mobile && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.mobile}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800/80 pt-6">
                {/* 2. Academic Information */}
                <h3 className="text-base font-semibold text-white mb-5 tracking-tight">
                  2. Academic Information
                </h3>

                <div className="space-y-5">
                  {/* College Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      College Name <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      required
                      value={formData.collegeName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter college name"
                      className={`w-full bg-[#050507] border ${
                        errors.collegeName ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20" : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
                      } rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.collegeName && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.collegeName}</p>
                    )}
                  </div>

                  {/* Degree / Department */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Degree / Department <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="degreeDept"
                      required
                      value={formData.degreeDept}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. B.E. CSE / B.Sc. Computer Science"
                      className={`w-full bg-[#050507] border ${
                        errors.degreeDept ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20" : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
                      } rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.degreeDept && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.degreeDept}</p>
                    )}
                  </div>

                  {/* Current Year Radio */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-3">
                      Current Year <span className="text-zinc-400">*</span>
                    </label>
                    <div className="space-y-2.5">
                      {yearOptions.map((year) => {
                        const isSelected = formData.currentYear === year;
                        return (
                          <label
                            key={year}
                            onClick={() => handleYearChange(year)}
                            className="flex items-center gap-3 cursor-pointer group select-none py-0.5"
                          >
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                                isSelected
                                  ? "border border-white bg-transparent"
                                  : "border border-zinc-700 bg-transparent group-hover:border-zinc-500"
                              }`}
                            >
                              {isSelected && (
                                <div className="w-2 h-2 rounded-full bg-white" />
                              )}
                            </div>
                            <span
                              className={`text-sm transition-colors ${
                                isSelected
                                  ? "text-white font-medium"
                                  : "text-zinc-400 group-hover:text-zinc-300"
                              }`}
                            >
                              {year}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800/80 pt-6">
                {/* 3. Internship Preferences */}
                <h3 className="text-base font-semibold text-white mb-5 tracking-tight">
                  3. Internship Preferences
                </h3>

                <div className="space-y-4">
                  {/* Internship Domain */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Internship Domain <span className="text-zinc-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        className="w-full bg-[#050507] border border-zinc-800 rounded-2xl px-4 py-3.5 text-sm text-white appearance-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all cursor-pointer pr-10"
                      >
                        {domainOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-zinc-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>

                    {/* "Other" Domain Custom Input */}
                    <AnimatePresence>
                      {formData.domain === "Other" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-3.5 overflow-hidden"
                        >
                          <label className="block text-xs font-semibold text-zinc-300 mb-2">
                            Specify Your Domain <span className="text-zinc-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="otherDomain"
                            required
                            value={formData.otherDomain}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your preferred domain (e.g. AI / ML, Cyber Security)"
                            className={`w-full bg-[#050507] border ${
                              errors.otherDomain ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/20" : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500"
                            } rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all`}
                          />
                          {errors.otherDomain && (
                            <p className="text-xs text-red-400 mt-1.5">{errors.otherDomain}</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Duration and Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Duration <span className="text-zinc-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full bg-[#050507] border border-zinc-800 rounded-2xl px-4 py-3.5 text-sm text-white appearance-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all cursor-pointer pr-10"
                        >
                          {durationOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-zinc-900 text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        Mode <span className="text-zinc-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          className="w-full bg-[#050507] border border-zinc-800 rounded-2xl px-4 py-3.5 text-sm text-white appearance-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all cursor-pointer pr-10"
                        >
                          {modeOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-zinc-900 text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Additional notes (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Additional Notes / Questions <span className="text-zinc-500 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific topic you want to learn or requirements..."
                      className="w-full bg-[#050507] border border-zinc-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-white text-black font-bold text-sm tracking-wide rounded-2xl hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/5 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default InternshipRegistration;
