import { useState, useRef } from "react";

export interface UploadModalProps {
  open: boolean;
  title: string;
  namePlaceholder: string;
  onClose: () => void;
  onAccept: (fileName: string) => void;
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DriveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 20L3 11l5.5-9h7l5.5 9-5.5 9H8.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 11h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

type Source = "computer" | "drive" | "url";
type Naming = "keep" | "ai" | "custom";

export default function UploadModal({ open, title, namePlaceholder, onClose, onAccept }: UploadModalProps) {
  const [source, setSource] = useState<Source>("computer");
  const [naming, setNaming] = useState<Naming>("custom");
  const [customName, setCustomName] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    }
    if (naming === "keep") setCustomName(file.name);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    }
    if (naming === "keep") setCustomName(file.name);
  }

  function handleAccept() {
    onAccept(customName);
    onClose();
  }

  const sources: { id: Source; label: string; icon: React.ReactNode }[] = [
    { id: "computer", label: "Mi Computadora", icon: <MonitorIcon /> },
    { id: "drive", label: "Google Drive", icon: <DriveIcon /> },
    { id: "url", label: "Link (URL)", icon: <LinkIcon /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-[8px] shadow-xl w-[860px] max-h-[90vh] flex flex-col overflow-hidden font-['Roboto',sans-serif]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#dadce0]">
          <span className="text-[16px] font-semibold text-[#2d353c]">{title}</span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-[28px] h-[28px] rounded hover:bg-[#f0f0f0] text-[#6b7280] transition-colors"
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 min-h-0">
          {/* Left column: source selector */}
          <div className="w-[180px] shrink-0 border-r border-[#dadce0] py-3">
            {sources.map(s => (
              <button
                key={s.id}
                onClick={() => setSource(s.id)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-left transition-colors ${
                  source === s.id
                    ? "bg-[#e8f0fe] text-[#4285f4]"
                    : "text-[#2d353c] hover:bg-[#f5f5f5]"
                }`}
              >
                <span className={source === s.id ? "text-[#4285f4]" : "text-[#6b7280]"}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Center column: naming */}
          <div className="flex-1 border-r border-[#dadce0] px-5 py-4 flex flex-col gap-3">
            <p className="text-[14px] font-semibold text-[#2d353c]">Nombre del Archivo</p>
            <div className="flex flex-col gap-2.5">
              {[
                { id: "keep" as Naming, label: "Conservar el nombre del archivo" },
                { id: "ai" as Naming, label: "Renombrar con Inteligencia Artificial de SACSpro" },
                { id: "custom" as Naming, label: "Agregar nuevo nombre al archivo" },
              ].map(opt => (
                <label key={opt.id} className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="naming"
                    value={opt.id}
                    checked={naming === opt.id}
                    onChange={() => setNaming(opt.id)}
                    className="mt-0.5 accent-[#4285f4]"
                  />
                  <span className="text-[13px] text-[#2d353c] leading-snug">{opt.label}</span>
                </label>
              ))}
            </div>
            {naming === "custom" && (
              <div className="flex flex-col gap-1 mt-1">
                <input
                  type="text"
                  value={customName}
                  onChange={e => setCustomName(e.target.value.slice(0, 100))}
                  placeholder={namePlaceholder}
                  className="w-full border border-[#dadce0] rounded-[6px] px-3 py-2 text-[13px] text-[#2d353c] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#5c96f6]"
                />
                <p className="text-[11px] text-[#6b7280]">Hasta 100 caracteres, incluyendo espacios.</p>
              </div>
            )}
          </div>

          {/* Right column: drop zone */}
          <div className="w-[280px] shrink-0 px-5 py-4 flex flex-col">
            <div
              className="flex-1 border-2 border-dashed border-[#dadce0] rounded-[6px] flex items-center justify-center cursor-pointer hover:border-[#5c96f6] transition-colors"
              onDragOver={e => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {previewUrl ? (
                <img src={previewUrl} alt="preview" className="max-h-full max-w-full object-contain rounded" />
              ) : (
                <p className="text-[13px] text-[#6b7280] text-center px-4 leading-relaxed">
                  <strong className="text-[#2d353c]">Soltar</strong> archivos aquí o{" "}
                  <strong className="text-[#2d353c]">click</strong> para subir desde computadora
                </p>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileInput}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-5 py-3 border-t border-[#dadce0]">
          <button
            onClick={onClose}
            className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[13px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#4285f4] text-white rounded-[6px] px-4 py-2 text-[13px] font-medium hover:bg-[#3367d6] transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
