import React, { useEffect } from "react";

const Feature = () => {

  useEffect(() => {
    // Title
    document.title = "Our Services - CloudRule Technology | Cloud Solutions & Web Development";

    // Helper to set meta tags
    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Helper to set canonical
    const setCanonical = (url) => {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", url);
    };

    // Helper to set structured data
    const setStructuredData = (data) => {
      let el = document.getElementById("structured-data-feature");
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = "structured-data-feature";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    // Primary Meta Tags
    setMeta("name", "description", "Discover CloudRule Technology's empowering technology, dedicated focus, and future-proof security. We build clean, maintainable solutions with zero-trust security models.");
    setMeta("name", "keywords", "cloud services, web development services, IT solutions, zero-trust security, modern technology, scalable solutions, CloudRule services");
    setMeta("name", "author", "CloudRule Technology");
    setMeta("name", "robots", "index, follow");
    setMeta("name", "language", "English");

    // Canonical URL
    setCanonical("https://www.cloudruletech.com/#services");

    // Open Graph / Facebook
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://www.cloudruletech.com/#services");
    setMeta("property", "og:title", "Our Services - CloudRule Technology | Cloud Solutions & Web Development");
    setMeta("property", "og:description", "Discover CloudRule Technology's empowering technology, dedicated focus, and future-proof security.");
    setMeta("property", "og:image", "https://www.cloudruletech.com/og-image.jpg");
    setMeta("property", "og:site_name", "CloudRule Technology");

    // Twitter
    setMeta("property", "twitter:card", "summary_large_image");
    setMeta("property", "twitter:url", "https://www.cloudruletech.com/#services");
    setMeta("property", "twitter:title", "Our Services - CloudRule Technology");
    setMeta("property", "twitter:description", "Discover CloudRule Technology's empowering technology, dedicated focus, and future-proof security.");
    setMeta("property", "twitter:image", "https://www.cloudruletech.com/og-image.jpg");

    // Structured Data (JSON-LD)
    setStructuredData({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "CloudRule Technology Services",
      "description": "Professional IT services offered by CloudRule Technology",
      "url": "https://www.cloudruletech.com/#services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Empowering Technology",
            "description": "We build it right the first time using modern standards, ensuring your code remains clean and maintainable.",
            "provider": {
              "@type": "Organization",
              "name": "CloudRule Technology"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Dedicated Focus",
            "description": "You aren't just another ticket in a system. Your project gets our complete undivided attention.",
            "provider": {
              "@type": "Organization",
              "name": "CloudRule Technology"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Future-Proof Security",
            "description": "Zero-trust security models integrated into the foundation to protect your data from day one.",
            "provider": {
              "@type": "Organization",
              "name": "CloudRule Technology"
            }
          }
        }
      ]
    });

    // Cleanup on unmount
    return () => {
      document.title = "CloudRule Technology";
      const el = document.getElementById("structured-data-feature");
      if (el) el.remove();
    };
  }, []);

  // ─── Original Feature Component - Completely Unchanged ────────────────────
  const features = [
    {
      id: "01",
      title: "Empowering technology",
      desc: "We build it right the first time using modern standards, ensuring your code remains clean and maintainable.",
    },
    {
      id: "02",
      title: "Dedicated Focus",
      desc: "You aren't just another ticket in a system. Your project gets our complete undivided attention.",
    },
    {
      id: "03",
      title: "Future-Proof Security",
      desc: "Zero-trust security models integrated into the foundation to protect your data from day one.",
    },
  ];

  return (
    <section id="services" className="relative z-10 py-28 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20 opacity-0 translate-y-6 animate-[fadeInUp_0.9s_ease-out_forwards]">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why CloudRule?
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-10 rounded-2xl border border-slate-100 
                         shadow-sm hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300 opacity-0 translate-y-6 
                         animate-[fadeInUp_0.9s_ease-out_forwards]"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="text-sky-400 font-bold text-4xl opacity-40 mb-4">
                {item.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(24px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
};

export default Feature;