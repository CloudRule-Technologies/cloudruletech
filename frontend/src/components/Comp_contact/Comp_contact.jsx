import React, { useEffect, useState } from "react";
import { HiOutlineEnvelope, HiOutlineUser, HiOutlineChatBubbleLeftRight, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comp_contact = () => {
  const [result, setResult] = useState("");

  const content = {
    title: "Reach Out to Us",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter Your Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter Your Email",
    messageLabel: "Your Message",
    messagePlaceholder: "How can we help you?",
    buttonText: "Send Message",
  };

  useEffect(() => {
    document.title = "Contact | CloudRule - Let's Build Together";
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c2550d15-3236-4931-b941-96e527821bb8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully!");
        setResult("");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed");
        setResult("Error occurred");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setResult("Error occurred");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030711] pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h1 className="mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Have a project in mind or just want to say hello? We'd love to hear from you. 
            Our team usually responds within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-8 animate-fade-in-left">
            <div className="glass p-8 rounded-3xl space-y-8 border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <HiOutlineEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-medium">cloudruletechnologies@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <HiOutlinePhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-medium">+91 86959 54966</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <HiOutlineMapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-white font-medium">KK Nagar, Madurai, Tamil Nadu 625020</p>
                </div>
              </div>
            </div>

            {/* Google Map Mini */}
            <div className="glass p-2 rounded-3xl border-white/10 overflow-hidden h-64 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.01802678779!2d78.1461676!3d9.935615199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5afea879fc7%3A0xc56c864eb028885b!2sCloudRule%20Technologies!5e1!3m2!1sen!2sin!4v1770112210252!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl"
                loading="lazy"
                title="CloudRule Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 animate-fade-in-right">
            <div className="glass p-10 md:p-12 rounded-[2.5rem] border-white/10">
              <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="md:col-span-1 space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    {content.fullNameLabel}
                  </label>
                  <div className="relative group">
                    <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={content.fullNamePlaceholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-1 space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    {content.emailLabel}
                  </label>
                  <div className="relative group">
                    <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={content.emailPlaceholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    {content.messageLabel}
                  </label>
                  <div className="relative group">
                    <HiOutlineChatBubbleLeftRight className="absolute left-4 top-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    <textarea
                      name="message"
                      required
                      placeholder={content.messagePlaceholder}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 h-40 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col items-center gap-6 mt-4">
                  <p className={`text-sm font-medium ${result.includes("Error") ? "text-red-400" : "text-blue-400"}`}>
                    {result}
                  </p>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/5 disabled:opacity-50"
                    disabled={result === "Sending..."}
                  >
                    {result === "Sending..." ? "Processing..." : content.buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Comp_contact;

