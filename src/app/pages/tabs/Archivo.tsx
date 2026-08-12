import { useState } from "react";
import UploadModal from "../../components/UploadModal";

function FloatingLabelInput({ label, value, onChange, placeholder }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="border border-[#dadce0] rounded-[6px] px-3 pt-1.5 pb-1.5">
      <p className="text-[11px] text-[#6b7280] font-['Roboto',sans-serif]">{label}</p>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-[14px] text-[#2d353c] font-['Roboto',sans-serif] bg-transparent focus:outline-none placeholder:text-[#9ca3af]"
      />
    </div>
  );
}

export default function Archivo() {
  const [showUpload, setShowUpload] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("Nuevo Nombre del Archivo");
  const [ruta, setRuta] = useState("");

  return (
    <div className="flex-1 overflow-y-auto font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee2e6]">
        <span className="text-[18px] font-semibold text-[#2d353c]">Archivo</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowUpload(true)}
            className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors"
          >
            Subir Archivo
          </button>
          <button className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors">
            Buscar en Librería
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6 flex flex-col gap-4">
        {/* File info row */}
        <div className="flex items-center gap-4">
          <div className="w-[56px] h-[56px] bg-[#2d3748] rounded-[8px] flex items-center justify-center shrink-0">
            <span className="text-white text-[13px] font-bold tracking-wide">PDF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#6b7280]">Nombre Original del Archivo</span>
            <span className="text-[14px] font-semibold text-[#2d353c]">Abril 2020 Wallpaper. pdf</span>
          </div>
        </div>

        {/* Nombre del Archivo */}
        <FloatingLabelInput
          label="Nombre del Archivo"
          value={nuevoNombre}
          onChange={setNuevoNombre}
        />

        {/* Ruta del Archivo */}
        <FloatingLabelInput
          label="Ruta del Archivo"
          value={ruta}
          onChange={setRuta}
          placeholder="Dropbox/Form/Floating Input/Empty-Supportive Text"
        />

        {/* Actions */}
        <div className="flex items-center gap-2 mt-1">
          <button className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors">
            Abrir
          </button>
          <button className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors">
            Eliminar
          </button>
        </div>
      </div>

      <UploadModal
        open={showUpload}
        title="Subir Archivo"
        namePlaceholder="Nombre del archivo"
        onClose={() => setShowUpload(false)}
        onAccept={() => setShowUpload(false)}
      />
    </div>
  );
}
