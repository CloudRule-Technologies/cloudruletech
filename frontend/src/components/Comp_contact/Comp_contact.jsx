import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
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
    messagePlaceholder: "Enter your message",
    buttonText: "Send Message",
  };

  useEffect(() => {
    document.title = "Contact | CloudRule";
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
        toast.success("Form Submitted Successfully");
        setResult("");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed");
        setResult("Error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setResult("Error");
    }
  };

  return (
    <>
      <div
        data-testid="contact-page"
        className="container mt-22 mx-auto px-5 md:px-8 lg:px-12 text-center relative z-1"
      >
        {/* Main heading */}
        <h1
          className="
      text-5xl md:text-7xl lg:text-8xl xl:text-9xl
      font-black tracking-tighter mb-8
      opacity-0 animate-fade-in-up
    "
          style={{ animationDelay: "100ms" }}
        >
          <span
            className="
        inline-block
        bg-gradient-to-r from-white via-white to-white/40
        bg-clip-text text-transparent
      "
          >
            Let’s Talk
          </span>
          <br />
          <span
            className="
        inline-block mt-2
        bg-gradient-to-r from-white via-white/80 to-white/50
        bg-clip-text text-transparent
      "
          >
            Let’s Build Together
          </span>
        </h1>

        {/* Decorative line */}
        <div
          className="
      flex items-center justify-center gap-3
      opacity-0 animate-fade-in-up
    "
          style={{ animationDelay: "300ms" }}
        >
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-white/30 rounded-full" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/50" />
          <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-white/30 rounded-full" />
        </div>
      </div>

      <section className="w-full relative z-1 py-16 sm:py-24 opacity-0 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* MAP */}
          <div
            className="lg:col-span-1 h-64 sm:h-80 lg:h-full rounded-xl overflow-hidden
                     border border-gray-700 shadow-lg
                     opacity-0 animate-fade-in-left"
            style={{ animationDelay: "100ms" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.01802678779!2d78.1461676!3d9.935615199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5afea879fc7%3A0xc56c864eb028885b!2sCloudRule%20Technologies!5e1!3m2!1sen!2sin!4v1770112210252!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              title="CloudRule Location"
            />
          </div>

          {/* FORM */}
          <div
            className="lg:col-span-1 bg-white/10 backdrop-blur-md rounded-xl shadow-xl
                     p-6 sm:p-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            <form onSubmit={onSubmit} className="flex flex-col w-full">
              <h2 className="text-xl sm:text-4xl font-serif text-white/80 text-center mb-8">
                {content.title}
              </h2>

              {/* Name */}
              <div className="mb-6">
                <label className="block mb-2 text-white/70">
                  {content.fullNameLabel}
                </label>
                <div className="flex items-center border-b-2 border-gray-700 focus-within:border-white transition">
                  <AiOutlineUser className="text-xl text-gray-300 mr-3" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={content.fullNamePlaceholder}
                    className="w-full bg-transparent focus:outline-none py-2 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block mb-2 text-white/70">
                  {content.emailLabel}
                </label>
                <div className="flex items-center border-b-2 border-gray-700 focus-within:border-white transition">
                  <AiOutlineMail className="text-xl text-gray-300 mr-3" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={content.emailPlaceholder}
                    className="w-full bg-transparent focus:outline-none py-2 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block mb-2 text-white/70">
                  {content.messageLabel}
                </label>
                <div className="flex items-start border-b-2 border-gray-700 focus-within:border-white transition">
                  <AiOutlineMessage className="text-xl text-gray-300 mr-3 mt-2" />
                  <textarea
                    name="message"
                    required
                    placeholder={content.messagePlaceholder}
                    className="w-full bg-transparent focus:outline-none py-2 h-28 resize-none text-white placeholder-white/50"
                  />
                </div>
              </div>

              <p className="text-center text-sm text-white/60 mb-4">{result}</p>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg
                           hover:bg-gray-600 transition duration-300"
                >
                  {content.buttonText}
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>

          {/* INFO CARD */}
          <div
            className="lg:col-span-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl
                     p-8 sm:p-10 text-white/80 space-y-6
                     opacity-0 animate-fade-in-right"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="text-xl sm:text-4xl font-serif text-white/80 text-center mb-6">
              Contact our Support Team
            </h2>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Have questions or curious to explore more? Reach out to us and
              let’s walk you through our services.
            </p>

            <div className="flex items-start mt-4">
              <HiOutlineLocationMarker className="text-2xl text-white/70 mr-3 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-white">
                  Head Office
                </h3>
                <p className="text-white/70">KK Nagar, Madurai 625020</p>
              </div>
            </div>

            <div className="flex items-start mt-3">
              <AiOutlineMail className="text-2xl text-white/70 mr-3 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-white">Email</h3>
                <p className="text-white/70">cloudruletechnologies@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start mt-3">
              <AiOutlinePhone className="text-2xl text-white/70 mr-3 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-white">Phone</h3>
                <p className="text-white/70">+91 98765 43210</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="mailto:cloudruletechnologies@gmail.com"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg
                         hover:bg-gray-600 transition duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comp_contact;
