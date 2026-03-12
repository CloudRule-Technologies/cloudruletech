
import { useEffect, useRef, useState } from "react";

const RichTextEditor = ({ open, value, onSave, onClose }) => {
  const editorRef = useRef(null);
  const [fontName, setFontName] = useState("Arial");
  const [fontSize, setFontSize] = useState("3");

  useEffect(() => {
    if (!open || !editorRef.current) {
      return;
    }
    editorRef.current.innerHTML = value || "";
  }, [open, value]);

  const runCommand = (command, option) => {
    if (!editorRef.current) {
      return;
    }
    editorRef.current.focus();
    document.execCommand(command, false, option);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-4xl rounded-2xl border border-white/20 bg-[#0f0f0f] p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Rich Text Editor</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border border-white/30 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <button
            onClick={() => runCommand("bold")}
            className="px-3 py-1 rounded border border-white/30 hover:bg-white/10 font-bold"
          >
            B
          </button>
          <button
            onClick={() => runCommand("italic")}
            className="px-3 py-1 rounded border border-white/30 hover:bg-white/10 italic"
          >
            I
          </button>
          <button
            onClick={() => runCommand("underline")}
            className="px-3 py-1 rounded border border-white/30 hover:bg-white/10 underline"
          >
            U
          </button>
          <button
            onClick={() => runCommand("insertUnorderedList")}
            className="px-3 py-1 rounded border border-white/30 hover:bg-white/10"
          >
            Bullet List
          </button>

          <select
            value={fontName}
            onChange={(event) => {
              setFontName(event.target.value);
              runCommand("fontName", event.target.value);
            }}
            className="px-2 py-1 rounded bg-black/60 border border-white/30"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>

          <select
            value={fontSize}
            onChange={(event) => {
              setFontSize(event.target.value);
              runCommand("fontSize", event.target.value);
            }}
            className="px-2 py-1 rounded bg-black/60 border border-white/30"
          >
            <option value="1">Small</option>
            <option value="3">Normal</option>
            <option value="5">Large</option>
            <option value="7">XL</option>
          </select>
        </div>

        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className="min-h-[260px] max-h-[420px] overflow-auto rounded-xl border border-white/20 bg-black/60 p-3 outline-none"
        />

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onSave(editorRef.current?.innerHTML || "")}
            className="px-5 py-2 rounded-lg bg-white text-black font-medium"
          >
            Save Formatted Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
