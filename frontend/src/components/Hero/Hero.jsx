import React, { useEffect } from "react";
import { defaultContent } from "../../content/defaultContent";

const Hero = ({ content = defaultContent.home.hero }) => {
  useEffect(() => {
    document.title =
      "CloudRule Technology - Cloud & Web Solutions | Code Your Future, Rule Your Cloud";

    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const setCanonical = (url) => {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", url);
    };

    const setStructuredData = (data) => {
      let el = document.getElementById("structured-data-hero");
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = "structured-data-hero";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    setMeta(
      "name",
      "description",
      "CloudRule Technology delivers scalable cloud and web solutions for next-generation businesses. Expert IT services focused on innovation, scalability, and security.",
    );
    setMeta(
      "name",
      "keywords",
      "cloud solutions, web development, IT services, cloud computing, scalable technology, digital transformation, CloudRule Technology",
    );
    setMeta("name", "author", "CloudRule Technology");
    setMeta("name", "robots", "index, follow");
    setMeta("name", "language", "English");
    setCanonical("https://www.cloudruletech.com");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://www.cloudruletech.com");
    setMeta(
      "property",
      "og:title",
      "CloudRule Technology - Cloud & Web Solutions | Code Your Future, Rule Your Cloud",
    );
    setMeta(
      "property",
      "og:description",
      "CloudRule Technology delivers scalable cloud and web solutions for next-generation businesses.",
    );
    setMeta("property", "og:image", "https://www.cloudruletech.com/og-image.jpg");
    setMeta("property", "og:site_name", "CloudRule Technology");

    setMeta("property", "twitter:card", "summary_large_image");
    setMeta("property", "twitter:url", "https://www.cloudruletech.com");
    setMeta(
      "property",
      "twitter:title",
      "CloudRule Technology - Cloud & Web Solutions",
    );
    setMeta(
      "property",
      "twitter:description",
      "CloudRule Technology delivers scalable cloud and web solutions for next-generation businesses.",
    );
    setMeta(
      "property",
      "twitter:image",
      "https://www.cloudruletech.com/og-image.jpg",
    );

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CloudRule Technology",
      description:
        "Digital foundation delivering scalable cloud and web solutions for next-generation businesses",
      url: "https://www.cloudruletech.com",
      logo: "https://www.cloudruletech.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/cloudrule",
        "https://twitter.com/cloudrule",
        "https://www.facebook.com/cloudrule",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Solutions",
              description: "Scalable cloud infrastructure and management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Modern web application development",
            },
          },
        ],
      },
    });

    return () => {
      document.title = "CloudRule Technology";
      const el = document.getElementById("structured-data-hero");
      if (el) el.remove();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 mt-20 pt-40 pb-50 px-6 flex items-center justify-center overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.94),rgba(0,0,0,0.94))]"
    >
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[140px]" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="block text-blue-300 font-semibold tracking-widest uppercase text-sm mb-5 opacity-0 translate-y-3 animate-[fadeIn_0.8s_ease-out_forwards]">
          {content.badge}
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 text-white opacity-0 translate-y-6 animate-[fadeInUp_0.9s_ease-out_forwards] [animation-delay:150ms]">
          {content.titleLine1} <br />
          <span className="text-blue-300 relative inline-block">
            {content.titleLine2}
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-blue-300/60 rounded-full" />
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed opacity-0 translate-y-6 animate-[fadeInUp_0.9s_ease-out_forwards] [animation-delay:320ms]">
          {content.description}
        </p>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
};

export default Hero;
