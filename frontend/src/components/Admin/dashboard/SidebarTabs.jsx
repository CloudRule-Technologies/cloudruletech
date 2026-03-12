const SidebarTabs = ({ tabs, activeTab, onTabChange, isSubadmin, tabBadges = {} }) => (
  <aside className="rounded-2xl border border-white/10 bg-white/5 p-4 h-fit">
    {tabs
      .filter((tab) => !(isSubadmin && tab.key !== "services"))
      .map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
            activeTab === tab.key ? "bg-white text-black" : "bg-black/50 text-white"
          }`}
        >
          <span className="flex items-center justify-between gap-2">
            <span>{tab.label}</span>
            {tabBadges[tab.key] ? (
              <span className="inline-flex min-w-6 justify-center rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                {tabBadges[tab.key]}
              </span>
            ) : null}
          </span>
        </button>
      ))}
  </aside>
);

export default SidebarTabs;
