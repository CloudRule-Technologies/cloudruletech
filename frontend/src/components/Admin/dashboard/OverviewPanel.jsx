const StatCard = ({ label, value, hint }) => (
  <div className="rounded-xl border border-white/15 bg-black/30 p-4">
    <p className="text-xs uppercase tracking-wide text-white/55">{label}</p>
    <p className="mt-2 text-3xl font-bold">{value}</p>
    {hint ? <p className="mt-1 text-sm text-white/60">{hint}</p> : null}
  </div>
);

const OverviewPanel = ({ overview }) => (
  <>
    <div className="mb-5">
      <h2 className="text-2xl font-semibold">Overall Dashboard</h2>
      <p className="text-sm text-white/60 mt-1">
        Quick summary of website activity and admin panel data.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <StatCard
        label="Total Views"
        value={overview.totalViews}
        hint={`Today: ${overview.todayViews}`}
      />
      <StatCard
        label="Reach Us Enquiries"
        value={overview.totalEnquiries}
        hint="Submitted via contact page"
      />
      <StatCard
        label="Testimonials"
        value={overview.totalTestimonials}
        hint={`Posted: ${overview.postedTestimonials} | Pending: ${overview.pendingTestimonials}`}
      />
      <StatCard
        label="Admin Users"
        value={overview.totalAdmins}
        hint="Admin + Subadmin accounts"
      />
      <StatCard
        label="Top Page"
        value={overview.topPagePath || "-"}
        hint={overview.topPageViews ? `${overview.topPageViews} views` : "No page view data yet"}
      />
    </div>
  </>
);

export default OverviewPanel;
