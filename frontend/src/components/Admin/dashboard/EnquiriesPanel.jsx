const EnquiriesPanel = ({ enquiries }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">Reach Us Enquiries</h2>
    <div className="space-y-2 max-h-[480px] overflow-auto">
      {enquiries.map((entry) => (
        <div key={entry.id} className="border border-white/15 rounded p-3">
          <p className="font-semibold">
            {entry.name} <span className="text-white/60">({entry.email})</span>
          </p>
          {entry.role ? (
            <p className="text-sm text-white/50">Role: {entry.role}</p>
          ) : null}
          <p className="text-white/70">{entry.message}</p>
          <p className="text-xs text-white/40 mt-1">{entry.createdAt}</p>
        </div>
      ))}
    </div>
  </>
);

export default EnquiriesPanel;
