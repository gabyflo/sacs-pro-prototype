import { useState } from "react";

interface RelatedItem {
  id: string;
  title: string;
  date: string;
}

const INITIAL_ITEMS: RelatedItem[] = [
  { id: "2290144", title: "Secretario general de la ONU...", date: "Abril 19, 2023 | 02:49 P.M." },
  { id: "2291751", title: "Petro dice que EE.UU. apoya...", date: "Abril 19, 2023 | 02:49 P.M." },
  { id: "2291744", title: "Karina Aristy anuncia sus aspiraciones...", date: "Abril 19, 2023 | 02:49 P.M." },
  { id: "2290144", title: "Secretario general de la ONU...", date: "Abril 19, 2023 | 02:49 P.M." },
  { id: "2291751", title: "Petro dice que EE.UU. apoya...", date: "Abril 19, 2023 | 02:49 P.M." },
  { id: "2291744", title: "Karina Aristy anuncia sus aspiraciones...", date: "Abril 19, 2023 | 02:49 P.M." },
];

function DragHandle() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M2 3h10M2 7h10M2 11h10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="#9ca3af" strokeWidth="1.5"/>
      <path d="M10.5 10.5L13.5 13.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SortIcon({ dir }: { dir: "asc" | "desc" }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      {dir === "desc"
        ? <path d="M2 3l3 4 3-4" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        : <path d="M2 7l3-4 3 4" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>}
    </svg>
  );
}

export default function ContenidoRelacionado() {
  const [items, setItems] = useState<RelatedItem[]>(INITIAL_ITEMS);
  const [searchQuery, setSearchQuery] = useState("");

  function removeItem(idx: number) {
    setItems(prev => prev.filter((_, i) => i !== idx));
  }

  return (
    <div className="flex-1 overflow-y-auto font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee2e6]">
        <span className="text-[18px] font-semibold text-[#2d353c]">Contenido Relacionado</span>
        <div className="flex items-center gap-2">
          {/* Search input */}
          <div className="flex items-center gap-2 border border-[#dadce0] rounded-[6px] px-3 py-2 w-[400px]">
            <SearchIcon />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar Contenido Relacionado"
              className="flex-1 text-[14px] text-[#2d353c] bg-transparent focus:outline-none placeholder:text-[#9ca3af]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#9ca3af] hover:text-[#6b7280] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M10 3L3 10M3 3l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
          <button className="border border-[#4285f4] text-[#4285f4] rounded-[6px] px-4 py-2 text-[14px] hover:bg-[#e8f0fe] transition-colors">
            Buscar
          </button>
        </div>
      </div>

      {/* Column headers */}
      <div className="flex items-center gap-4 px-4 py-3 text-[13px] font-semibold text-[#374151] border-b border-[#dee2e6]">
        <div className="w-[20px]" />
        <div className="flex items-center gap-1 w-[90px]">
          <span>ID</span>
          <SortIcon dir="desc" />
        </div>
        <div className="flex items-center gap-1 flex-1">
          <span>Título</span>
          <SortIcon dir="desc" />
        </div>
        <div className="flex items-center gap-1 w-[220px]">
          <span>Fecha</span>
          <SortIcon dir="asc" />
        </div>
        <div className="w-[24px]" />
      </div>

      {/* Rows */}
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 px-4 py-3 border-b border-[#f3f4f6] hover:bg-[#fef9e7] transition-colors"
        >
          <div className="w-[20px] flex justify-center cursor-grab">
            <DragHandle />
          </div>
          <div className="w-[90px]">
            <span className="text-[13px] text-[#2d353c]">{item.id}</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[14px] text-[#2d353c] truncate block">{item.title}</span>
          </div>
          <div className="w-[220px]">
            <span className="text-[13px] text-[#6b7280]">{item.date}</span>
          </div>
          <button
            onClick={() => removeItem(idx)}
            className="w-[24px] h-[24px] flex items-center justify-center text-[#9ca3af] hover:text-[#ef4444] transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M10 3L3 10M3 3l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      ))}

      {items.length === 0 && (
        <div className="px-6 py-10 text-center text-[14px] text-[#9ca3af]">
          No hay contenido relacionado.
        </div>
      )}
    </div>
  );
}
