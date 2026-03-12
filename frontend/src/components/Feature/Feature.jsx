import React, { useEffect } from "react";
import { defaultContent } from "../../content/defaultContent";

const Feature = ({ features = defaultContent.home.features }) => {
  useEffect(() => {
    document.title = "Our Services - CloudRule Technology | Cloud Solutions & Web Development";

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
      let el = document.getElementById("structured-data-feature");
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = "structured-data-feature";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    setMeta(
      "name",
      "description",
      "Discover CloudRule Technology's empowering technology, dedicated focus, and future-proof security.",
    );
    setMeta("name", "author", "CloudRule Technology");
    setMeta("name", "robots", "index, follow");
    setCanonical("https://www.cloudruletech.com/#services");

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "CloudRule Technology Services",
      itemListElement: features.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
        },
      })),
    });

    return () => {
      document.title = "CloudRule Technology";
      const el = document.getElementById("structured-data-feature");
      if (el) el.remove();
    };
  }, [features]);

  return (
    <section id="services" className="relative z-10 py-28 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 opacity-0 translate-y-6 animate-[fadeInUp_0.9s_ease-out_forwards]">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why CloudRule?</h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-6 animate-[fadeInUp_0.9s_ease-out_forwards]"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="text-sky-400 font-bold text-4xl opacity-40 mb-4">{item.id}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Feature;
