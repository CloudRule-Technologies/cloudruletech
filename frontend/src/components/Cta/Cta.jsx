import React, { useEffect } from "react";

const Cta = () => {

  useEffect(() => {
    // Title
    document.title = "Get Started with CloudRule Technology | Build • Learn • Launch";

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
      let el = document.getElementById("structured-data-cta");
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = "structured-data-cta";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    // Primary Meta Tags
    setMeta("name", "description", "Ready to set the rules? Experience the power of infrastructure. Join the CloudRule network today and transform your business with scalable cloud and web solutions.");
    setMeta("name", "keywords", "get started cloud solutions, contact CloudRule, cloud infrastructure, join CloudRule, web development consultation, IT services inquiry");
    setMeta("name", "author", "CloudRule Technology");
    setMeta("name", "robots", "index, follow");
    setMeta("name", "language", "English");

    // Canonical URL
    setCanonical("https://www.cloudruletech.com/#contact");

    // Open Graph / Facebook
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://www.cloudruletech.com/#contact");
    setMeta("property", "og:title", "Get Started with CloudRule Technology | Build • Learn • Launch");
    setMeta("property", "og:description", "Ready to set the rules? Experience the power of infrastructure. Join the CloudRule network today.");
    setMeta("property", "og:image", "https://www.cloudruletech.com/og-image.jpg");
    setMeta("property", "og:site_name", "CloudRule Technology");

    // Twitter
    setMeta("property", "twitter:card", "summary_large_image");
    setMeta("property", "twitter:url", "https://www.cloudruletech.com/#contact");
    setMeta("property", "twitter:title", "Get Started with CloudRule Technology | Build • Learn • Launch");
    setMeta("property", "twitter:description", "Ready to set the rules? Experience the power of infrastructure. Join the CloudRule network today.");
    setMeta("property", "twitter:image", "https://www.cloudruletech.com/og-image.jpg");

    // Structured Data (JSON-LD)
    setStructuredData({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Get Started - CloudRule Technology",
      "description": "Contact CloudRule Technology to start your cloud transformation journey",
      "url": "https://www.cloudruletech.com/#contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "CloudRule Technology",
        "url": "https://www.cloudruletech.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "areaServed": "Worldwide",
          "availableLanguage": ["English"]
        }
      },
      "potentialAction": {
        "@type": "CommunicateAction",
        "name": "Contact CloudRule Technology",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.cloudruletech.com/#contact"
        }
      }
    });

    // Cleanup on unmount
    return () => {
      document.title = "CloudRule Technology";
      const el = document.getElementById("structured-data-cta");
      if (el) el.remove();
    };
  }, []);

  // ─── Original CTA Component - Completely Unchanged ────────────────────────
  return (
    <section className="py-24 px-6">
      <div
        className="max-w-5xl mx-auto bg-black/80 rounded-3xl p-10 md:p-16
                   text-center text-white
                   shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                   border border-white/10
                   opacity-0 translate-y-6
                   animate-[fadeInUp_0.9s_ease-out_forwards]"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to set the rules?
        </h2>

        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          Experience the power of infrastructure. Join the CloudRule network
          today.
        </p>

        <button
          className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg
                     hover:bg-slate-100 transition-all duration-300
                     hover:scale-105"
        >
          Build • Learn • Launch
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </section>
  );
};

export default Cta;