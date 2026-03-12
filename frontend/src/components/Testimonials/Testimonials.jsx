import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Testimonials = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api
      .getTestimonials()
      .then((result) => setItems(result.testimonials || []))
      .catch(() => setItems([]));
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <p className="text-slate-700 mb-4 leading-relaxed">{item.message}</p>
              <p className="text-sm font-semibold text-slate-900">{item.clientName}</p>
              <p className="text-xs text-slate-500">{item.clientRole || "Client"}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
