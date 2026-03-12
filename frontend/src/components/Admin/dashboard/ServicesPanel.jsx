const ServicesPanel = ({ servicesForm, setServicesForm, onSaveServices }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">Service Page Editor</h2>
    {(servicesForm.coreServices || []).map((service, index) => (
      <div key={index} className="border border-white/15 rounded-lg p-3 mb-3">
        <input
          value={service.title}
          onChange={(e) => {
            const next = { ...servicesForm };
            next.coreServices[index].title = e.target.value;
            setServicesForm(next);
          }}
          className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20"
        />
        <textarea
          value={service.caption}
          onChange={(e) => {
            const next = { ...servicesForm };
            next.coreServices[index].caption = e.target.value;
            setServicesForm(next);
          }}
          className="w-full px-3 py-2 rounded bg-black/70 border border-white/20"
        />
      </div>
    ))}
    <button
      onClick={onSaveServices}
      className="px-5 py-2 rounded-lg bg-white text-black font-medium"
    >
      Save Services
    </button>
  </>
);

export default ServicesPanel;
