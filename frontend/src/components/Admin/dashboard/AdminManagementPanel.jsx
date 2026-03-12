const AdminManagementPanel = ({ subadminForm, setSubadminForm, onSaveSubadmin, adminUsers }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">Admin Management</h2>
    <div className="rounded-lg border border-white/15 p-4 mb-4">
      <p className="text-sm text-white/60 mb-3">
        Fixed subadmin email: <span className="text-white">subadmincloud@gmail.com</span>
      </p>
      <input
        value={subadminForm.name}
        onChange={(e) => setSubadminForm((prev) => ({ ...prev, name: e.target.value }))}
        className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20"
        placeholder="Subadmin name"
        autoComplete="off"
      />
      <input
        value={subadminForm.email}
        readOnly
        className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20 text-white/60"
        autoComplete="off"
      />
      <input
        type="password"
        value={subadminForm.password}
        onChange={(e) => setSubadminForm((prev) => ({ ...prev, password: e.target.value }))}
        className="w-full mb-3 px-3 py-2 rounded bg-black/70 border border-white/20"
        placeholder="Set subadmin password"
        autoComplete="new-password"
      />
      <button
        onClick={onSaveSubadmin}
        className="px-5 py-2 rounded-lg bg-white text-black font-medium"
      >
        Save Subadmin
      </button>
    </div>

    <h3 className="font-semibold mb-2">Admin Accounts</h3>
    <div className="space-y-2">
      {adminUsers.map((admin) => (
        <div key={admin.id} className="border border-white/15 rounded p-3">
          <p className="font-semibold">{admin.name}</p>
          <p className="text-sm text-white/60">{admin.email}</p>
          <p className="text-xs text-white/50">Role: {admin.role}</p>
        </div>
      ))}
    </div>
  </>
);

export default AdminManagementPanel;
