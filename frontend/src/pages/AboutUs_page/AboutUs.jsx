import "./AboutUs.css";
import logo from "../../assets/Logo.jpeg";
import missionImg from "../../assets/Mission.png";
import visionImg from "../../assets/Vision.png";
import isac from "../../assets/Isac-profile.jpeg";
import praveen from "../../assets/Praveen-Profile.jpeg";
import sailendra from "../../assets/Sailendra -Profile.jpeg";
import sujitha from "../../assets/Sujitha-Profile.jpeg";
import prakalya from "../../assets/Prakalya-Profile.jpeg";
import viji from "../../assets/Viji-Profile.png";
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(() =>{
        document.title = "AboutUS | CloudRule"
    })
    const services = [
        {
            title: "IT Solutions & Software Development",
            desc: "We design and develop robust, scalable, and secure software solutions tailored to business needs. From custom applications to enterprise systems, we help organizations transform digitally."
        },
        {
            title: "Web & Digital Platform Development",
            desc: "We build responsive websites and high-performance digital platforms using modern technologies, ensuring seamless user experience and long-term scalability."
        },
        {
            title: "Industry-Focused Training Programs",
            desc: "We provide hands-on training for school and college students, covering in-demand technologies and practical skills aligned with industry standards."
        },
        {
            title: "Internships & Real-World Projects",
            desc: "Our internship programs offer real-time project exposure, enabling students to apply theoretical knowledge to practical challenges and gain industry readiness."
        }
    ];

    const headTeam = [
        { role: "Chief Executive Officer", name: "Sathya Priya" },
        { role: "Director", name: "Karthikeyan" },
        { role: "Joint Managing Director", name: "Preethi" }
    ];

    const techTeam = [
        { role: "Software Team Lead", name: "Sailendra Prasath N", image: sailendra },
        { role: "Fullstack Developer", name: "Isac Newton", image: isac, imgStyle: { objectPosition: "50% 15%" } },
        { role: "Fullstack Developer", name: "Praveen Sethuvel", image: praveen },
        { role: "Fullstack Developer", name: "Sujitha", image: sujitha },
        { role: "Business Development Manager", name: "Viji Kannan", image: viji },
        { role: "Digital Marketing", name: "Prakalya", image: prakalya }

    ];

    return (
      <div
        data-testid="about-page"
        className="relative z-10 max-sm:mt-8 about-us-container"
      >
        <h1 className="main-title">About Us</h1>

        {/* About Section */}
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src={logo}
              alt="Cloudrule Technology"
              className="about-image"
            />
          </div>
          <div className="about-text-wrapper">
            <h2 className="about-headline">Cloudrule Technology</h2>
            <p className="about-description">
              Cloudrule Technology Private Limited is a technology-driven
              company delivering innovative IT solutions and scalable digital
              platforms. We also empower school and college students through
              industry-focused training, internships, and real-world projects to
              build skilled professionals.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="about-content mission-section">
          <div className="about-text-wrapper">
            <h2 className="about-headline">Our Mission</h2>
            <p className="about-description">
              To provide reliable and scalable IT solutions,empower students
              with industry-relevant skills through hands-on learning,bridge the
              gap between academia and industry, and build long-term strategic
              partnerships.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img src={missionImg} alt="Our Mission" className="about-image" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="about-content vision-section">
          <div className="about-image-wrapper">
            <img src={visionImg} alt="Our Vision" className="about-image" />
          </div>
          <div className="about-text-wrapper">
            <h2 className="about-headline">Our Vision</h2>
            <p className="about-description">
              To become a trusted technology partner by driving digital
              transformation for businesses and educational institutions while
              nurturing future-ready talent through practical learning and
              innovation
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="what-we-do-section">
          <div style={{ textAlign: "center" }}>
            <h2 className="about-headline">What We Do</h2>
          </div>
          <div className="what-we-do-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="our-team-section">
          <div style={{ textAlign: "center" }}>
            <h2 className="about-headline">Our Leadership</h2>
          </div>
          <div className="team-grid">
            {headTeam.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image-wrapper">
                  <img src={logo} alt={member.role} className="team-image" />
                </div>
                <div className="team-info">
                  <h3 className="team-role">{member.role}</h3>
                  <p className="team-name">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Technical Team Section */}
        <div className="our-team-section">
          <div style={{ textAlign: "center" }}>
            <h2 className="about-headline">Our Technical Team</h2>
          </div>
          <div className="team-grid technical-team">
            {techTeam.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="team-image"
                    style={member.imgStyle || {}}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-role">{member.role}</h3>
                  <p className="team-name">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
