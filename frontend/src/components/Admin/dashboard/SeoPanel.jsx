const SeoPanel = ({ seoPageKey, setSeoPageKey, onLoadSeo, seoForm, setSeoForm, onSaveSeo }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">SEO Controls</h2>
    <input
      value={seoPageKey}
      onChange={(e) => setSeoPageKey(e.target.value)}
      className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20"
      placeholder="Page key (home, services, aboutus...)"
    />
    <button
      onClick={onLoadSeo}
      className="mb-4 px-4 py-2 rounded border border-white/30"
    >
      Load SEO
    </button>
    <input
      value={seoForm.title || ""}
      onChange={(e) => setSeoForm((prev) => ({ ...prev, title: e.target.value }))}
      className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20"
      placeholder="SEO title"
    />
    <textarea
      value={seoForm.description || ""}
      onChange={(e) => setSeoForm((prev) => ({ ...prev, description: e.target.value }))}
      className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20"
      placeholder="SEO description"
    />
    <input
      value={seoForm.keywords || ""}
      onChange={(e) => setSeoForm((prev) => ({ ...prev, keywords: e.target.value }))}
      className="w-full mb-2 px-3 py-2 rounded bg-black/70 border border-white/20"
      placeholder="keywords comma separated"
    />
    <button
      onClick={onSaveSeo}
      className="px-5 py-2 rounded-lg bg-white text-black font-medium"
    >
      Save SEO
    </button>
  </>
);

export default SeoPanel;
