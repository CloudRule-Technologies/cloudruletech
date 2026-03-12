const TestimonialsPanel = ({
  newTestimonial,
  setNewTestimonial,
  onAddTestimonial,
  testimonials,
  onToggleTestimonialVisibility,
  onDeleteTestimonial,
}) => (
  <>
    <h2 className="text-xl font-semibold mb-4">Testimonials Manager</h2>
    <div className="grid gap-2 mb-4">
      <input
        placeholder="Client Name"
        value={newTestimonial.clientName}
        onChange={(e) =>
          setNewTestimonial((prev) => ({
            ...prev,
            clientName: e.target.value,
          }))
        }
        className="px-3 py-2 rounded bg-black/70 border border-white/20"
      />
      <input
        placeholder="Client Role"
        value={newTestimonial.clientRole}
        onChange={(e) =>
          setNewTestimonial((prev) => ({
            ...prev,
            clientRole: e.target.value,
          }))
        }
        className="px-3 py-2 rounded bg-black/70 border border-white/20"
      />
      <textarea
        placeholder="Message"
        value={newTestimonial.message}
        onChange={(e) =>
          setNewTestimonial((prev) => ({
            ...prev,
            message: e.target.value,
          }))
        }
        className="px-3 py-2 rounded bg-black/70 border border-white/20"
      />
      <button
        onClick={onAddTestimonial}
        className="px-5 py-2 rounded-lg bg-white text-black font-medium"
      >
        Add Testimonial
      </button>
    </div>
    <div className="space-y-2">
      {testimonials.map((item) => (
        <div key={item.id} className="border border-white/15 rounded p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold">{item.clientName}</p>
            <span
              className={`text-xs px-2 py-1 rounded ${
                item.isActive
                  ? "bg-green-500/20 text-green-200 border border-green-400/40"
                  : "bg-yellow-500/20 text-yellow-100 border border-yellow-300/40"
              }`}
            >
              {item.isActive ? "Posted" : "Pending"}
            </span>
          </div>
          <p className="text-xs text-white/50">{item.clientRole || "Client"}</p>
          <p className="text-white/70 text-sm">{item.message}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              onClick={() => onToggleTestimonialVisibility(item, !item.isActive)}
              className="px-3 py-1 text-sm rounded border border-white/40 text-white"
            >
              {item.isActive ? "Unpost" : "Post to Services"}
            </button>
            <button
              onClick={() => onDeleteTestimonial(item.id)}
              className="px-3 py-1 text-sm rounded border border-red-400 text-red-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default TestimonialsPanel;
