const richTextKeyPattern = /(description|desc|caption|message|content|body|text)$/i;

const toLabel = (value) =>
  String(value)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const ContentValueRenderer = ({
  value,
  path,
  updateDraftAtPath,
  onOpenRichTextEditor,
}) => {
  const pathKey = String(path[path.length - 1] ?? "");

  if (Array.isArray(value) || (value && typeof value === "object")) {
    const entries = Array.isArray(value)
      ? value.map((item, index) => [index, item])
      : Object.entries(value);

    return (
      <div className="rounded-lg border border-white/15 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/10 text-white/80">
            <tr>
              <th className="text-left px-3 py-2 w-[220px]">Field</th>
              <th className="text-left px-3 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([key, nestedValue]) => (
              <tr key={`${path.join(".")}-${String(key)}`} className="border-t border-white/10 align-top">
                <td className="px-3 py-2 text-white/80">
                  {Array.isArray(value) ? `[${key}]` : toLabel(key)}
                </td>
                <td className="px-3 py-2">
                  <ContentValueRenderer
                    value={nestedValue}
                    path={[...path, key]}
                    updateDraftAtPath={updateDraftAtPath}
                    onOpenRichTextEditor={onOpenRichTextEditor}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <select
        value={value ? "true" : "false"}
        onChange={(event) => updateDraftAtPath(path, event.target.value === "true")}
        className="w-full px-3 py-2 rounded bg-black/70 border border-white/20"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    );
  }

  if (typeof value === "number") {
    return (
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        onChange={(event) => {
          const next = event.target.value;
          updateDraftAtPath(path, next === "" ? 0 : Number(next));
        }}
        className="w-full px-3 py-2 rounded bg-black/70 border border-white/20"
      />
    );
  }

  const textValue = value == null ? "" : String(value);
  const isRichText = richTextKeyPattern.test(pathKey);

  return (
    <div className="space-y-2">
      <textarea
        value={textValue}
        onChange={(event) => updateDraftAtPath(path, event.target.value)}
        className="w-full min-h-[90px] px-3 py-2 rounded bg-black/70 border border-white/20"
      />
      {isRichText ? (
        <button
          onClick={() => onOpenRichTextEditor(path, textValue)}
          className="px-3 py-1 text-sm rounded border border-white/30 hover:bg-white/10"
        >
          Open Rich Text Editor
        </button>
      ) : null}
    </div>
  );
};

const ContentPanel = ({
  isSubadmin,
  contentSections,
  selectedSection,
  onSelectSection,
  contentDraft,
  updateDraftAtPath,
  onOpenRichTextEditor,
  onSaveContent,
}) => (
  <>
    <div className="flex gap-3 mb-4">
      {Object.keys(contentSections)
        .filter((key) => !(isSubadmin && key !== "services"))
        .map((key) => (
          <button
            key={key}
            onClick={() => onSelectSection(key)}
            className={`px-4 py-2 rounded ${
              selectedSection === key ? "bg-white text-black" : "bg-black/60"
            }`}
          >
            {key}
          </button>
        ))}
    </div>

    <div className="rounded-xl border border-white/10 bg-black/30 p-3 md:p-4 max-h-[560px] overflow-auto">
      <ContentValueRenderer
        value={contentDraft}
        path={[]}
        updateDraftAtPath={updateDraftAtPath}
        onOpenRichTextEditor={onOpenRichTextEditor}
      />
    </div>

    <button
      onClick={onSaveContent}
      className="mt-3 px-5 py-2 rounded-lg bg-white text-black font-medium"
    >
      Save Content
    </button>
  </>
);

export default ContentPanel;
