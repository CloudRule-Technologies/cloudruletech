const ContactsPanel = ({ contacts }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">Contact Submissions</h2>
    <div className="space-y-2 max-h-[480px] overflow-auto">
      {contacts.map((c) => (
        <div key={c.id} className="border border-white/15 rounded p-3">
          <p className="font-semibold">
            {c.name} <span className="text-white/60">({c.email})</span>
          </p>
          <p className="text-white/70">{c.message}</p>
          <p className="text-xs text-white/40 mt-1">{c.createdAt}</p>
        </div>
      ))}
    </div>
  </>
);

export default ContactsPanel;
