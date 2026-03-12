const AnalyticsPanel = ({ analytics }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="rounded-lg border border-white/15 p-4">
        <p className="text-white/60 text-sm">Total Views</p>
        <p className="text-3xl font-bold">{analytics.totalViews}</p>
      </div>
      <div className="rounded-lg border border-white/15 p-4">
        <p className="text-white/60 text-sm">Today Views</p>
        <p className="text-3xl font-bold">{analytics.todayViews}</p>
      </div>
    </div>
    <h3 className="font-semibold mb-2">Top Pages</h3>
    <div className="space-y-2">
      {(analytics.topPages || []).map((item, idx) => (
        <div key={idx} className="flex justify-between border border-white/15 rounded p-2">
          <span>{item.path}</span>
          <span>{item.views}</span>
        </div>
      ))}
    </div>
  </>
);

export default AnalyticsPanel;
