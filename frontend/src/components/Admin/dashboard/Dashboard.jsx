import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { api, clearAdminSession, getAdminSession } from "../../../services/api";
import { defaultContent } from "../../../content/defaultContent";
import SidebarTabs from "./SidebarTabs";
import RichTextEditor from "./RichTextEditor";
import ContentPanel from "./ContentPanel";
import ServicesPanel from "./ServicesPanel";
import TestimonialsPanel from "./TestimonialsPanel";
import SeoPanel from "./SeoPanel";
import EnquiriesPanel from "./EnquiriesPanel";
import AdminManagementPanel from "./AdminManagementPanel";
import AnalyticsPanel from "./AnalyticsPanel";
import OverviewPanel from "./OverviewPanel";

const ENQUIRY_ALERT_STORAGE_KEY = "admin_enquiries_seen_id";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "content", label: "Content" },
  { key: "services", label: "Services" },
  { key: "testimonials", label: "Testimonials" },
  { key: "seo", label: "SEO" },
  { key: "enquiries", label: "Enquiries" },
  { key: "adminManagement", label: "Admin Management" },
  { key: "analytics", label: "Analytics" },
];

const cloneNode = (node) => {
  if (Array.isArray(node)) {
    return node.map(cloneNode);
  }
  if (node && typeof node === "object") {
    return Object.fromEntries(Object.entries(node).map(([key, value]) => [key, cloneNode(value)]));
  }
  return node;
};

const setByPath = (node, path, nextValue) => {
  if (!path.length) {
    return nextValue;
  }
  const [head, ...rest] = path;
  const nextNode = Array.isArray(node) ? [...node] : { ...node };
  nextNode[head] = setByPath(node?.[head], rest, nextValue);
  return nextNode;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const session = useMemo(() => getAdminSession(), []);
  const isSubadmin = session.user?.role === "subadmin";
  const initialSection = isSubadmin ? "services" : "home";
  const [activeTab, setActiveTab] = useState(isSubadmin ? "services" : "overview");
  const [status, setStatus] = useState("");

  const [contentSections, setContentSections] = useState(defaultContent);
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [contentDraft, setContentDraft] = useState(cloneNode(defaultContent[initialSection] || {}));
  const [richEditorState, setRichEditorState] = useState({
    isOpen: false,
    path: [],
    value: "",
  });

  const [servicesForm, setServicesForm] = useState(defaultContent.services);
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    clientName: "",
    clientRole: "",
    message: "",
    rating: 5,
    isActive: true,
  });
  const [seoPageKey, setSeoPageKey] = useState("home");
  const [seoForm, setSeoForm] = useState({
    title: "",
    description: "",
    keywords: "",
  });
  const [enquiries, setEnquiries] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalViews: 0,
    todayViews: 0,
    topPages: [],
  });
  const [overview, setOverview] = useState({
    totalViews: 0,
    todayViews: 0,
    totalEnquiries: 0,
    totalTestimonials: 0,
    postedTestimonials: 0,
    pendingTestimonials: 0,
    totalAdmins: 0,
    topPagePath: "",
    topPageViews: 0,
  });
  const [adminUsers, setAdminUsers] = useState([]);
  const [enquiryAlertCount, setEnquiryAlertCount] = useState(0);
  const [subadminForm, setSubadminForm] = useState({
    name: "CloudRule Subadmin",
    email: "subadmincloud@gmail.com",
    password: "",
  });

  useEffect(() => {
    document.title = "Admin Dashboard | CloudRule";
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await api.getAdminContent();
        const data = { ...defaultContent, ...result.content };
        setContentSections(data);
        setContentDraft(cloneNode(data[initialSection] || {}));
        setServicesForm(data.services || defaultContent.services);
        if (!isSubadmin) {
          const [analyticsResult, enquiriesResult, testimonialsResult, adminsResult] =
            await Promise.all([
              api.getAnalyticsSummary(),
              api.getEnquiries(),
              api.getAdminTestimonials(),
              api.getAdmins(),
            ]);

          const summary = analyticsResult.summary || { totalViews: 0, todayViews: 0, topPages: [] };
          const topPage = (summary.topPages || [])[0] || {};
          const testimonialItems = testimonialsResult.testimonials || [];
          const postedCount = testimonialItems.filter((item) => item.isActive).length;

          setOverview({
            totalViews: summary.totalViews || 0,
            todayViews: summary.todayViews || 0,
            totalEnquiries: (enquiriesResult.enquiries || []).length,
            totalTestimonials: testimonialItems.length,
            postedTestimonials: postedCount,
            pendingTestimonials: testimonialItems.length - postedCount,
            totalAdmins: (adminsResult.admins || []).length,
            topPagePath: topPage.path || "",
            topPageViews: topPage.views || 0,
          });
        }
      } catch (error) {
        setStatus(`Failed to load content: ${error.message}`);
      }
    };
    load();
  }, [initialSection, isSubadmin]);

  const handleLogout = () => {
    clearAdminSession();
    navigate("/login");
  };

  const saveContentSection = async () => {
    setStatus("");
    try {
      await api.updateSection(selectedSection, contentDraft);
      setContentSections((prev) => ({ ...prev, [selectedSection]: contentDraft }));
      if (selectedSection === "services") {
        setServicesForm(contentDraft);
      }
      setStatus("Content saved");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const updateDraftAtPath = (path, nextValue) => {
    setContentDraft((prev) => setByPath(prev, path, nextValue));
  };

  const openRichTextEditor = (path, value) => {
    setRichEditorState({
      isOpen: true,
      path,
      value: value || "",
    });
  };

  const saveRichTextValue = (nextValue) => {
    updateDraftAtPath(richEditorState.path, nextValue);
    setRichEditorState({ isOpen: false, path: [], value: "" });
  };

  const closeRichTextEditor = () => {
    setRichEditorState({ isOpen: false, path: [], value: "" });
  };

  const saveServices = async () => {
    setStatus("");
    try {
      await api.updateSection("services", servicesForm);
      setContentSections((prev) => ({ ...prev, services: servicesForm }));
      setStatus("Services updated");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const loadTestimonials = async () => {
    try {
      const result = await api.getAdminTestimonials();
      setTestimonials(result.testimonials || []);
    } catch (error) {
      setStatus(error.message);
    }
  };

  const addTestimonial = async () => {
    try {
      await api.addTestimonial(newTestimonial);
      setNewTestimonial({
        clientName: "",
        clientRole: "",
        message: "",
        rating: 5,
        isActive: true,
      });
      await loadTestimonials();
      setStatus("Testimonial added");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const deleteTestimonial = async (id) => {
    try {
      await api.deleteTestimonial(id);
      await loadTestimonials();
      setStatus("Testimonial deleted");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const setTestimonialVisibility = async (item, isActive) => {
    try {
      await api.updateTestimonial(item.id, {
        clientName: item.clientName,
        clientRole: item.clientRole,
        message: item.message,
        rating: item.rating,
        isActive,
      });
      await loadTestimonials();
      setStatus(isActive ? "Review posted to website" : "Review hidden from website");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const loadSeo = async () => {
    try {
      const result = await api.getAdminSeo(seoPageKey);
      setSeoForm(result.seo || { title: "", description: "", keywords: "" });
    } catch (error) {
      setStatus(error.message);
    }
  };

  const saveSeo = async () => {
    try {
      await api.saveAdminSeo(seoPageKey, seoForm);
      setStatus("SEO saved");
    } catch (error) {
      setStatus(error.message);
    }
  };

  const loadEnquiries = async () => {
    try {
      const result = await api.getEnquiries();
      setEnquiries(result.enquiries || []);
      return result.enquiries || [];
    } catch (error) {
      setStatus(error.message);
      return [];
    }
  };

  const loadAnalytics = async () => {
    try {
      const result = await api.getAnalyticsSummary();
      setAnalytics(result.summary || { totalViews: 0, todayViews: 0, topPages: [] });
    } catch (error) {
      setStatus(error.message);
    }
  };

  const loadAdmins = async () => {
    try {
      const result = await api.getAdmins();
      setAdminUsers(result.admins || []);
    } catch (error) {
      setStatus(error.message);
    }
  };

  async function loadOverview() {
    try {
      const [analyticsResult, enquiriesResult, testimonialsResult, adminsResult] =
        await Promise.all([
          api.getAnalyticsSummary(),
          api.getEnquiries(),
          api.getAdminTestimonials(),
          api.getAdmins(),
        ]);

      const summary = analyticsResult.summary || { totalViews: 0, todayViews: 0, topPages: [] };
      const topPage = (summary.topPages || [])[0] || {};
      const testimonialItems = testimonialsResult.testimonials || [];
      const postedCount = testimonialItems.filter((item) => item.isActive).length;

      setOverview({
        totalViews: summary.totalViews || 0,
        todayViews: summary.todayViews || 0,
        totalEnquiries: (enquiriesResult.enquiries || []).length,
        totalTestimonials: testimonialItems.length,
        postedTestimonials: postedCount,
        pendingTestimonials: testimonialItems.length - postedCount,
        totalAdmins: (adminsResult.admins || []).length,
        topPagePath: topPage.path || "",
        topPageViews: topPage.views || 0,
      });
    } catch (error) {
      setStatus(error.message);
    }
  }

  const getSeenEnquiryId = () => {
    const raw = localStorage.getItem(ENQUIRY_ALERT_STORAGE_KEY);
    const parsed = Number(raw);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  };

  const markEnquiriesSeenNow = (entries = []) => {
    const maxSeenId = entries.reduce((maxId, item) => {
      const id = Number(item?.id);
      if (!Number.isFinite(id)) return maxId;
      return Math.max(maxId, id);
    }, 0);

    if (maxSeenId > 0) {
      localStorage.setItem(ENQUIRY_ALERT_STORAGE_KEY, String(maxSeenId));
    }
    setEnquiryAlertCount(0);
  };

  useEffect(() => {
    if (isSubadmin) return;

    let cancelled = false;
    const refreshEnquiryAlerts = async () => {
      try {
        const result = await api.getEnquiries();
        if (cancelled) return;
        const seenId = getSeenEnquiryId();
        const unseenCount = (result.enquiries || []).filter((entry) => {
          const entryId = Number(entry?.id);
          if (!Number.isFinite(entryId)) return false;
          return entryId > seenId;
        }).length;
        setEnquiryAlertCount(unseenCount);
      } catch {
        // Keep silent for alert polling.
      }
    };

    const kickoff = setTimeout(refreshEnquiryAlerts, 0);
    const timer = setInterval(refreshEnquiryAlerts, 30000);
    return () => {
      cancelled = true;
      clearTimeout(kickoff);
      clearInterval(timer);
    };
  }, [isSubadmin]);

  const saveSubadmin = async () => {
    if (!subadminForm.password) {
      setStatus("Subadmin password is required");
      return;
    }
    try {
      await api.saveSubadmin({ name: subadminForm.name, password: subadminForm.password });
      setSubadminForm((prev) => ({ ...prev, password: "" }));
      setStatus("Subadmin account saved");
      await loadAdmins();
    } catch (error) {
      setStatus(error.message);
    }
  };

  const selectContentSection = (sectionKey) => {
    if (isSubadmin && sectionKey !== "services") {
      return;
    }
    setSelectedSection(sectionKey);
    setContentDraft(cloneNode(contentSections[sectionKey] || {}));
  };

  const handleTabChange = async (tabKey) => {
    if (isSubadmin && tabKey !== "services") {
      return;
    }
    setActiveTab(tabKey);
    if (tabKey === "overview") loadOverview();
    if (tabKey === "testimonials") loadTestimonials();
    if (tabKey === "seo") loadSeo();
    if (tabKey === "enquiries") {
      const latestEnquiries = await loadEnquiries();
      markEnquiriesSeenNow(latestEnquiries);
    }
    if (tabKey === "adminManagement") loadAdmins();
    if (tabKey === "analytics") loadAnalytics();
  };

  return (
    <section className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">CloudRule Admin Panel</h1>
          <p className="text-white/60 text-sm mt-1">
            Logged in as {session.user?.email || "admin"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!isSubadmin ? (
            <button
              onClick={() => handleTabChange("enquiries")}
              className="relative px-3 py-2 rounded-lg border border-white/30 hover:bg-white/10 flex items-center gap-2"
              aria-label="Open enquiry notifications"
              title={
                enquiryAlertCount > 0
                  ? `You have ${enquiryAlertCount} new ${
                      enquiryAlertCount === 1 ? "enquiry" : "enquiries"
                    }`
                  : "No new enquiries"
              }
            >
              <FiBell className="text-lg" />
              {enquiryAlertCount > 0 ? (
                <>
                  <span className="text-sm">
                    You have {enquiryAlertCount}{" "}
                    {enquiryAlertCount === 1 ? "enquiry" : "enquiries"}
                  </span>
                  <span className="absolute -top-2 -right-2 min-w-5 px-1 h-5 rounded-full bg-red-500 text-white text-[11px] leading-5 text-center">
                    {enquiryAlertCount > 99 ? "99+" : enquiryAlertCount}
                  </span>
                </>
              ) : (
                <span className="text-sm text-white/70">No new enquiries</span>
              )}
            </button>
          ) : null}

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-6">
        <SidebarTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          isSubadmin={isSubadmin}
          tabBadges={{ enquiries: enquiryAlertCount }}
        />

        <main className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
          {!isSubadmin && enquiryAlertCount > 0 && activeTab !== "enquiries" ? (
            <div className="mb-4 rounded-lg border border-amber-300/40 bg-amber-500/10 px-4 py-3 flex items-center justify-between gap-3">
              <p className="text-sm text-amber-100">
                {enquiryAlertCount} new {enquiryAlertCount === 1 ? "enquiry" : "enquiries"} received.
              </p>
              <button
                onClick={() => handleTabChange("enquiries")}
                className="px-3 py-1.5 rounded-md border border-amber-200/60 text-amber-100 text-sm hover:bg-amber-200/10"
              >
                View Enquiries
              </button>
            </div>
          ) : null}

          {activeTab === "overview" ? <OverviewPanel overview={overview} /> : null}

          {activeTab === "content" ? (
            <ContentPanel
              isSubadmin={isSubadmin}
              contentSections={contentSections}
              selectedSection={selectedSection}
              onSelectSection={selectContentSection}
              contentDraft={contentDraft}
              updateDraftAtPath={updateDraftAtPath}
              onOpenRichTextEditor={openRichTextEditor}
              onSaveContent={saveContentSection}
            />
          ) : null}

          {activeTab === "services" ? (
            <ServicesPanel
              servicesForm={servicesForm}
              setServicesForm={setServicesForm}
              onSaveServices={saveServices}
            />
          ) : null}

          {activeTab === "testimonials" ? (
            <TestimonialsPanel
              newTestimonial={newTestimonial}
              setNewTestimonial={setNewTestimonial}
              onAddTestimonial={addTestimonial}
              testimonials={testimonials}
              onToggleTestimonialVisibility={setTestimonialVisibility}
              onDeleteTestimonial={deleteTestimonial}
            />
          ) : null}

          {activeTab === "seo" ? (
            <SeoPanel
              seoPageKey={seoPageKey}
              setSeoPageKey={setSeoPageKey}
              onLoadSeo={loadSeo}
              seoForm={seoForm}
              setSeoForm={setSeoForm}
              onSaveSeo={saveSeo}
            />
          ) : null}

          {activeTab === "enquiries" ? <EnquiriesPanel enquiries={enquiries} /> : null}

          {activeTab === "adminManagement" ? (
            <AdminManagementPanel
              subadminForm={subadminForm}
              setSubadminForm={setSubadminForm}
              onSaveSubadmin={saveSubadmin}
              adminUsers={adminUsers}
            />
          ) : null}

          {activeTab === "analytics" ? <AnalyticsPanel analytics={analytics} /> : null}

          {status ? <p className="mt-4 text-blue-300 text-sm">{status}</p> : null}
        </main>
      </div>

      <RichTextEditor
        open={richEditorState.isOpen}
        value={richEditorState.value}
        onSave={saveRichTextValue}
        onClose={closeRichTextEditor}
      />
    </section>
  );
};

export default Dashboard;
