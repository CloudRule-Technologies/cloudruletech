import { useEffect, useState } from "react";
import ProcessGrid from "../../components/Services/ProcessGrid";
import ServiceGrid from "../../components/Services/ServiceGrid";
import { defaultContent } from "../../content/defaultContent";
import { api } from "../../services/api";

const ServicesPage = () => {
  const [servicesContent, setServicesContent] = useState(defaultContent.services);
  const [testimonials, setTestimonials] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    clientName: "",
    serviceTaken: "",
    message: "",
  });
  const [reviewStatus, setReviewStatus] = useState("");

  useEffect(() => {
    document.title = "Services | CloudRule";
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await api.getPublicSection("services");
        if (result?.data) {
          setServicesContent(result.data);
        }
      } catch {
        // Fallback to static defaults.
      }

      try {
        const result = await api.getTestimonials();
        setTestimonials(result.testimonials || []);
      } catch {
        setTestimonials([]);
      }
    };
    load();
  }, []);

  const submitReview = async (event) => {
    event.preventDefault();
    setReviewStatus("");
    try {
      await api.submitTestimonial({
        clientName: reviewForm.clientName,
        clientRole: `Service: ${reviewForm.serviceTaken}`,
        message: reviewForm.message,
      });
      setReviewForm({
        clientName: "",
        serviceTaken: "",
        message: "",
      });
      setReviewStatus("Review submitted. It will appear after admin approval.");
    } catch (error) {
      setReviewStatus(error.message);
    }
  };

  const stars = (count) => "★".repeat(Math.max(1, Math.min(5, Number(count) || 5)));

  return (
    <div data-testid="services-page" className="relative z-1 min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8 animate-fade-in-up">
              <span className="inline-block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                Technology Solutions
              </span>
              <br />
              <span className="inline-block mt-2 bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                Built for Purpose
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
              We turn complex business challenges into elegant, scalable digital solutions
              <span className="text-white/70"> that drive measurable results and competitive advantage.</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto animate-fade-in-up">
              {(servicesContent.stats || []).map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:scale-105"
                >
                  <div className="text-2xl mb-2 opacity-60">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ServiceGrid services={servicesContent.coreServices} />
        <ProcessGrid steps={servicesContent.processSteps} />

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Client Reviews</h2>
              <p className="text-white/60 mb-5">Reviews are shown here.</p>
              <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
                {!testimonials.length ? (
                  <p className="text-white/50">No posted reviews yet.</p>
                ) : (
                  testimonials.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <p className="text-yellow-300 text-sm">{stars(item.rating)}</p>
                      <p className="text-white/80 mt-2">{item.message}</p>
                      <p className="text-sm font-semibold mt-3">{item.clientName}</p>
                      <p className="text-xs text-white/50">{item.clientRole || "Client"}</p>
                    </article>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <h3 className="text-2xl font-bold mb-2">Write a Review</h3>
              <p className="text-white/60 mb-5">Your feedback goes to admin for approval.</p>
              <form onSubmit={submitReview} className="space-y-3">
                <label className="block">
                  <span className="text-sm text-white/70">Name</span>
                  <input
                    value={reviewForm.clientName}
                    onChange={(event) =>
                      setReviewForm((prev) => ({ ...prev, clientName: event.target.value }))
                    }
                    placeholder="Enter your name"
                    required
                    className="w-full mt-1 px-3 py-2 rounded bg-black/70 border border-white/20 text-white placeholder:text-white/40"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-white/70">Service</span>
                  <input
                    value={reviewForm.serviceTaken}
                    onChange={(event) =>
                      setReviewForm((prev) => ({ ...prev, serviceTaken: event.target.value }))
                    }
                    placeholder="Example: Web Development"
                    required
                    className="w-full mt-1 px-3 py-2 rounded bg-black/70 border border-white/20 text-white placeholder:text-white/40"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-white/70">Tell your feedback</span>
                  <textarea
                    value={reviewForm.message}
                    onChange={(event) =>
                      setReviewForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                    placeholder="Tell your feedback"
                    required
                    className="w-full mt-1 min-h-[130px] px-3 py-2 rounded bg-black/70 border border-white/20 text-white placeholder:text-white/40"
                  />
                </label>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-white text-black font-medium"
                >
                  Submit Review
                </button>
              </form>
              {reviewStatus ? <p className="mt-3 text-sm text-blue-300">{reviewStatus}</p> : null}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ServicesPage;
