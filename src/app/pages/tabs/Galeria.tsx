import { useState } from "react";
import UploadModal from "../../components/UploadModal";

const CARD_COLORS = [
  "#c8d8e8", "#d8e8c8", "#e8c8d8", "#c8e8e8",
  "#e8d8c8", "#d8c8e8", "#e8e8c8", "#c8d8d8",
  "#e8c8c8", "#d8e8d8", "#c8c8e8", "#e8d8e8",
];

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="1" y="6" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="1" y="11" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4L6 8L10 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrosshairIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="white" fillOpacity="0.85"/>
      <line x1="10" y1="4" x2="10" y2="16" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="10" x2="16" y2="10" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Galeria() {
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set([0, 1, 4, 5]));
  const [marcaAgua, setMarcaAgua] = useState("Sin Marca");
  const [showUpload, setShowUpload] = useState(false);

  function toggleSelect(idx: number) {
    setSelectedImages(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  function selectAll() {
    setSelectedImages(new Set(CARD_COLORS.map((_, i) => i)));
  }

  function deselectAll() {
    setSelectedImages(new Set());
  }

  function deleteSelected() {
    setSelectedImages(new Set());
  }

  function borderColor(idx: number) {
    if (idx === 0) return "border-[#f97316]";
    if (selectedImages.has(idx)) return "border-[#4285f4]";
    return "border-[#dadce0]";
  }

  const selCount = selectedImages.size;

  return (
    <div className="flex-1 overflow-y-auto font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee2e6]">
        <span className="text-[18px] font-semibold text-[#2d353c]">Galería</span>
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

      {/* Controls bar */}
      <div className="flex items-center gap-3 px-6 py-3 border-b border-[#dee2e6] flex-wrap">
        {/* Marca de Agua select */}
        <div className="relative flex items-center">
          <label className="text-[13px] text-[#6b7280] mr-1">Marca de Agua:</label>
          <div className="relative">
            <select
              value={marcaAgua}
              onChange={e => setMarcaAgua(e.target.value)}
              className="appearance-none border border-[#dadce0] rounded-[6px] pl-3 pr-7 py-1.5 text-[13px] text-[#2d353c] bg-white focus:outline-none focus:border-[#5c96f6] cursor-pointer"
            >
              <option>Sin Marca</option>
              <option>Marca 1</option>
              <option>Marca 2</option>
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Selection info */}
        <span className="text-[13px] text-[#6b7280]">
          {selCount} {selCount === 1 ? "Imagen Seleccionada" : "Imágenes Seleccionadas"}
        </span>

        {/* Actions */}
        <button
          onClick={selectAll}
          className="text-[13px] text-[#4285f4] hover:underline"
        >
          Seleccionar Todos
        </button>
        <button
          onClick={deselectAll}
          className="text-[13px] text-[#4285f4] hover:underline"
        >
          Deseleccionar
        </button>
        <button
          onClick={deleteSelected}
          className="text-[13px] text-[#ef4444] hover:underline"
        >
          Borrar
        </button>

        {/* Vertical divider */}
        <div className="w-px h-5 bg-[#dadce0] mx-1" />

        {/* View mode buttons */}
        <button className="flex items-center justify-center w-[30px] h-[30px] border border-[#dadce0] rounded-[4px] text-[#4285f4] hover:bg-[#f0f0f0] transition-colors">
          <GridIcon />
        </button>
        <button className="flex items-center justify-center w-[30px] h-[30px] border border-[#dadce0] rounded-[4px] text-[#6b7280] hover:bg-[#f0f0f0] transition-colors">
          <ListIcon />
        </button>
      </div>

      {/* Grid */}
      <div className="px-6 py-6 grid grid-cols-4 gap-4">
        {CARD_COLORS.map((color, idx) => (
          <div
            key={idx}
            onClick={() => toggleSelect(idx)}
            className={`border-2 ${borderColor(idx)} rounded-[8px] overflow-hidden relative cursor-pointer transition-colors`}
          >
            {/* Placeholder image */}
            <div
              className="h-[120px] flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <CrosshairIcon />
            </div>
            {/* Card footer */}
            <div className="flex items-center justify-between px-2 py-1.5 bg-white">
              <button
                onClick={e => { e.stopPropagation(); }}
                className="text-[11px] text-[#2d353c] border border-[#dadce0] rounded-[3px] px-1.5 py-0.5 hover:bg-[#f5f5f5] transition-colors"
              >
                Editar
              </button>
              <button
                onClick={e => { e.stopPropagation(); }}
                className="flex items-center justify-center w-[20px] h-[20px] text-[#6b7280] hover:text-[#ef4444] transition-colors"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M8.5 2.5L2.5 8.5M2.5 2.5l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
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
