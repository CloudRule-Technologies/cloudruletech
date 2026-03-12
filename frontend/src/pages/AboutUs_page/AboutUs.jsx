import { useEffect, useState } from "react";
import "./AboutUs.css";
import logo from "../../assets/Logo.jpeg";
import missionImg from "../../assets/Mission.png";
import visionImg from "../../assets/Vision.png";
import praveen from "../../assets/Praveen-Profile.jpeg";
import sailendra from "../../assets/Sailendra -Profile.jpeg";
import sujitha from "../../assets/Sujitha-Profile.jpeg";
import prakalya from "../../assets/Prakalya-Profile.jpeg";
import viji from "../../assets/Viji-Profile.png";
import isac from "../../assets/Isac-Profile.jpeg";
import { defaultContent } from "../../content/defaultContent";
import { api } from "../../services/api";

const AboutUs = () => {
  const [aboutContent, setAboutContent] = useState(defaultContent.about);

  useEffect(() => {
    document.title = "About Us | CloudRule - IT Solutions & Training Company";

    const metaTags = [
      {
        name: "description",
        content:
          "Learn about CloudRule Technology Private Limited - a leading IT solutions and software development company offering web development, digital platforms, internships, and industry-focused training programs.",
      },
      {
        name: "keywords",
        content:
          "CloudRule, CloudRule Technology, IT Solutions Company, Software Development, Web Development, Digital Platform Development, Internship Programs, Industry Training, Fullstack Development",
      },
      {
        property: "og:title",
        content: "About CloudRule | IT Solutions & Digital Transformation",
      },
      {
        property: "og:description",
        content:
          "CloudRule Technology delivers scalable IT solutions, web platforms, internships, and hands-on training programs to empower businesses and students.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: window.location.href,
      },
      {
        property: "og:image",
        content: window.location.origin + "/Logo.jpeg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "About CloudRule Technology",
      },
      {
        name: "twitter:description",
        content:
          "IT Solutions, Software Development, Internships & Industry-Focused Training Programs.",
      },
    ];

    metaTags.forEach((tag) => {
      const element = document.createElement("meta");
      Object.keys(tag).forEach((key) => {
        element.setAttribute(key, tag[key]);
      });
      document.head.appendChild(element);
    });

    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = window.location.href;
    document.head.appendChild(link);

    return () => {
      metaTags.forEach((tag) => {
        const selector = tag.name
          ? `meta[name="${tag.name}"]`
          : `meta[property="${tag.property}"]`;
        const element = document.querySelector(selector);
        if (element) document.head.removeChild(element);
      });

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) document.head.removeChild(canonical);
    };
  }, []);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const result = await api.getPublicSection("about");
        if (result?.data) {
          setAboutContent({ ...defaultContent.about, ...result.data });
        }
      } catch {
        // Keep static fallback content.
      }
    };
    loadAbout();
  }, []);

  const techTeamVisuals = [
    { image: sailendra },
    { image: isac, imgStyle: { objectPosition: "50% 15%" } },
    { image: praveen },
    { image: sujitha },
    { image: viji },
    { image: prakalya },
  ];

  return (
    <div data-testid="about-page" className="relative z-10 max-sm:mt-8 about-us-container">
      <h1 className="main-title">About Us</h1>

      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            src={aboutContent.brandImageUrl || logo}
            alt="Cloudrule Technology"
            className="about-image"
          />
        </div>
        <div className="about-text-wrapper">
          <h2 className="about-headline">{aboutContent.brandName}</h2>
          <p className="about-description">{aboutContent.aboutDescription}</p>
        </div>
      </div>

      <div className="about-content mission-section">
        <div className="about-text-wrapper">
          <h2 className="about-headline">{aboutContent.missionTitle}</h2>
          <p className="about-description">{aboutContent.missionDescription}</p>
        </div>
        <div className="about-image-wrapper">
          <img
            src={aboutContent.missionImageUrl || missionImg}
            alt="Our Mission"
            className="about-image"
          />
        </div>
      </div>

      <div className="about-content vision-section">
        <div className="about-image-wrapper">
          <img
            src={aboutContent.visionImageUrl || visionImg}
            alt="Our Vision"
            className="about-image"
          />
        </div>
        <div className="about-text-wrapper">
          <h2 className="about-headline">{aboutContent.visionTitle}</h2>
          <p className="about-description">{aboutContent.visionDescription}</p>
        </div>
      </div>

      <div className="what-we-do-section">
        <div style={{ textAlign: "center" }}>
          <h2 className="about-headline">{aboutContent.whatWeDoTitle}</h2>
        </div>
        <div className="what-we-do-grid">
          {(aboutContent.services || []).map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="our-team-section">
        <div style={{ textAlign: "center" }}>
          <h2 className="about-headline">{aboutContent.leadershipTitle}</h2>
        </div>
        <div className="team-grid">
          {(aboutContent.headTeam || []).map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrapper">
                <img src={member.imageUrl || logo} alt={member.role} className="team-image" />
              </div>
              <div className="team-info">
                <h3 className="team-role">{member.role}</h3>
                <p className="team-name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="our-team-section">
        <div style={{ textAlign: "center" }}>
          <h2 className="about-headline">{aboutContent.technicalTitle}</h2>
        </div>
        <div className="team-grid technical-team">
          {(aboutContent.techTeam || []).map((member, index) => {
            const visual = techTeamVisuals[index] || { image: logo };
            return (
              <div className="team-card" key={index}>
                <div className="team-image-wrapper">
                  <img
                    src={member.imageUrl || visual.image}
                    alt={member.role}
                    className="team-image"
                    style={visual.imgStyle || {}}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-role">{member.role}</h3>
                  <p className="team-name">{member.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
