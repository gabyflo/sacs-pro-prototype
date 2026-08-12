import { useState } from "react";
import UploadModal from "../../components/UploadModal";

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4L6 8L10 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LandscapeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="14" width="40" height="28" rx="3" stroke="white" strokeWidth="2" strokeOpacity="0.6"/>
      <circle cx="20" cy="24" r="4" stroke="white" strokeWidth="2" strokeOpacity="0.6"/>
      <path d="M8 36l10-8 8 8 6-5 16 9" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeLinejoin="round"/>
    </svg>
  );
}

function FloatingLabelInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="border border-[#dadce0] rounded-[6px] px-3 pt-1.5 pb-1.5">
      <p className="text-[11px] text-[#6b7280] font-['Roboto',sans-serif]">{label}</p>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full text-[14px] text-[#2d353c] font-['Roboto',sans-serif] bg-transparent focus:outline-none"
      />
    </div>
  );
}

function FloatingLabelSelect({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="border border-[#dadce0] rounded-[6px] px-3 pt-1.5 pb-1.5 relative">
      <p className="text-[11px] text-[#6b7280] font-['Roboto',sans-serif]">{label}</p>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full text-[14px] text-[#2d353c] font-['Roboto',sans-serif] bg-transparent focus:outline-none appearance-none pr-6 cursor-pointer"
      >
        <option value="">- Seleccionar Tipo -</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <div className="pointer-events-none absolute right-3 bottom-2.5">
        <ChevronDown />
      </div>
    </div>
  );
}

const TIPOS = ["Foto", "Video", "Galería", "Infografía", "Ilustración"];

export default function ImagenNota() {
  const [showUpload, setShowUpload] = useState(false);
  const [tipo, setTipo] = useState("");
  const [autor, setAutor] = useState("Redacción Digital");
  const [pieFoto, setPieFoto] = useState("Pie de Foto");
  const [tags, setTags] = useState("Tags");
  const [url] = useState("https://www.diariolibre.com/actualid...");

  return (
    <div className="flex-1 overflow-y-auto font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee2e6]">
        <span className="text-[18px] font-semibold text-[#2d353c]">Imagen de la Nota</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowUpload(true)}
            className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors"
          >
            Subir Imagen
          </button>
          <button className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors">
            Buscar en Sitio
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6 flex gap-6">
        {/* Image area */}
        <div className="w-[480px] shrink-0 relative">
          <div className="bg-[#e8d5c4] rounded-[4px] h-[320px] relative flex items-center justify-center">
            <LandscapeIcon />
            {/* Edit button */}
            <button className="absolute top-2 left-2 bg-white border border-[#dadce0] rounded-[4px] px-2 py-1 text-[12px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors">
              Edit
            </button>
            {/* X button */}
            <button className="absolute top-2 right-2 bg-white border border-[#dadce0] rounded-[4px] w-[24px] h-[24px] flex items-center justify-center text-[#6b7280] hover:bg-[#f5f5f5] transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col gap-3">
          {/* URL row */}
          <div className="flex items-center gap-2 border border-[#dadce0] rounded-[6px] px-3 py-2">
            <ChainIcon />
            <span className="text-[13px] text-[#2d353c] flex-1 truncate">{url}</span>
            <button className="flex items-center justify-center w-[24px] h-[24px] hover:bg-[#f0f0f0] rounded transition-colors">
              <CopyIcon />
            </button>
          </div>

          {/* Tipo */}
          <FloatingLabelSelect
            label="Tipo"
            value={tipo}
            onChange={setTipo}
            options={TIPOS}
          />

          {/* Autor */}
          <FloatingLabelInput label="Autor" value={autor} onChange={setAutor} />

          {/* Pie de Foto */}
          <FloatingLabelInput label="Pie de Foto" value={pieFoto} onChange={setPieFoto} />

          {/* Tags */}
          <FloatingLabelInput label="Tags" value={tags} onChange={setTags} />
        </div>
      </div>

      <UploadModal
        open={showUpload}
        title="Subir Imagen"
        namePlaceholder="Nombre de la Imagen"
        onClose={() => setShowUpload(false)}
        onAccept={() => setShowUpload(false)}
      />
    </div>
  );
}
