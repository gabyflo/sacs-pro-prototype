import { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/MacBookPro161/svg-0qah9wh58v";

function RefreshIcon() {
  return <svg fill="none" height="18" viewBox="0 0 17.6299 19.9582" width="18"><path d={svgPaths.p22ee372} fill="#373737" /></svg>;
}
function ThreeDotsIcon() {
  return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.pc1d980} fill="#373737" /></svg>;
}
function EyeIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 17.7778" width="18">
      <g clipPath="url(#shell-eye)"><path d={svgPaths.p348c0200} fill="#373737" /></g>
      <defs><clipPath id="shell-eye"><rect fill="white" height="17.7778" width="20" /></clipPath></defs>
    </svg>
  );
}
function CaretDownIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 12.5 20" width="10">
      <g clipPath="url(#shell-cd)"><path d={svgPaths.p34b5a3f2} fill="#373737" /></g>
      <defs><clipPath id="shell-cd"><rect fill="white" height="20" width="12.5" /></clipPath></defs>
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="#373737">
      <path d="M8.75 0C7.37109 0 6.25 1.12109 6.25 2.5V11.25C6.25 12.6289 7.37109 13.75 8.75 13.75H17.5C18.8789 13.75 20 12.6289 20 11.25V2.5C20 1.12109 18.8789 0 17.5 0H8.75ZM2.5 6.25C1.12109 6.25 0 7.37109 0 8.75V17.5C0 18.8789 1.12109 20 2.5 20H11.25C12.6289 20 13.75 18.8789 13.75 17.5V15H11.25V17.5H2.5V8.75H5V6.25H2.5Z" />
    </svg>
  );
}

export interface EditorContext {
  title: string;
  setTitle: (t: string) => void;
  subtitle: string;
  setSubtitle: (s: string) => void;
}

const TABS = [
  { label: "Editor de Texto", path: "texto" },
  { label: "Info. Básica", path: "info" },
  { label: "Imagen de la Nota", path: "imagen" },
  { label: "Archivo", path: "archivo" },
  { label: "Galería", path: "galeria" },
  { label: "Contenido Relacionado", path: "relacionado" },
  { label: "Video", path: "video" },
];

const PUBLISH_ITEMS = ["Cancelar", "Desactivar", "Eliminar", "Priorizar", "Clonar", "Log", "Flush Facebook", "Propiedades", "Template", "Encuesta"];

export default function EditorShell() {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("Cinco hábitos que están transformando la productividad remota en 2026");
  const [subtitle, setSubtitle] = useState("Equipos distribuidos reportan mejoras de hasta 30% en entregas al adoptar estas prácticas");
  const [isSaving, setIsSaving] = useState(false);
  const [showPublishMenu, setShowPublishMenu] = useState(false);
  const [showHeaderDotsMenu, setShowHeaderDotsMenu] = useState(false);

  const publishRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSaving(true);
    const t = setTimeout(() => setIsSaving(false), 1200);
    return () => clearTimeout(t);
  }, [title, subtitle]);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (publishRef.current && !publishRef.current.contains(e.target as Node)) setShowPublishMenu(false);
      if (dotsRef.current && !dotsRef.current.contains(e.target as Node)) setShowHeaderDotsMenu(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const activeTab = TABS.find(tab => location.pathname.endsWith("/" + tab.path))?.path || "texto";

  const context: EditorContext = { title, setTitle, subtitle, setSubtitle };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Article Header Bar */}
      <div className="bg-white border border-[#dee2e6] shrink-0">
        <div className="flex items-center gap-4 px-3 py-[12px]">
          <span className="bg-[#fecf4a] text-black text-[12px] font-medium px-2 py-0.5 rounded-full shrink-0">En Edición</span>
          <span className="flex-1 text-[#1f2937] text-[13px] font-medium truncate">{title || "Nueva Nota"}</span>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <button className="flex items-center justify-center w-[28px] h-[28px] hover:bg-[#f0f0f0] rounded transition-colors"><CopyIcon /></button>
              <span className="text-[#6b7280] text-[12px]">ID: 2159109</span>
            </div>
            <div className="flex items-center">
              <button className="flex items-center justify-center w-[28px] h-[28px] hover:bg-[#f0f0f0] rounded transition-colors"><CopyIcon /></button>
              <button className="text-[#0d6efd] text-[12px] hover:underline">Ir a URL</button>
            </div>
            <span className="bg-[#fdecea] text-black text-[12px] font-medium px-2 py-1 rounded-full">SEO 1.7</span>
            <span className="bg-[#e0f2f1] text-black text-[12px] font-medium px-2 py-1 rounded-full">UX 8.9</span>
            <div className="flex items-center gap-1 text-[#373737] text-[12px]">
              <RefreshIcon />
              <span className="inline-block w-[58px]">{isSaving ? "Salvando..." : "Guardado"}</span>
            </div>
            <div className="relative" ref={dotsRef}>
              <button onClick={() => setShowHeaderDotsMenu(!showHeaderDotsMenu)} className="p-1 rounded hover:bg-[#f0f0f0] transition-colors">
                <ThreeDotsIcon />
              </button>
              {showHeaderDotsMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-[6px] shadow-lg border border-[#d1d6de] py-1.5 w-[180px] z-50">
                  {PUBLISH_ITEMS.map(item => (
                    <button key={item} onClick={() => { setShowHeaderDotsMenu(false); if (item === "Cancelar") navigate("/"); }} className={`w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] hover:bg-[#f5f5f5] transition-colors ${item === "Priorizar" ? "text-[#979797]" : "text-[#373737]"}`}>{item}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center border border-[#dadce0] rounded-[6px] bg-white">
              <button className="flex items-center gap-1 px-2 py-1.5 hover:bg-[#f5f5f5] rounded-l-[6px] transition-colors"><EyeIcon /></button>
              <div className="w-px h-5 bg-[#dadce0]" />
              <button className="px-2 py-1.5 hover:bg-[#f5f5f5] rounded-r-[6px] transition-colors"><CaretDownIcon /></button>
            </div>
            <div className="relative" ref={publishRef}>
              <div className="flex items-center rounded-[6px] overflow-hidden">
                <button onClick={() => setShowPublishMenu(false)} className="bg-[#4285f4] hover:bg-[#3367d6] text-white text-[13px] font-medium px-3 py-1.5 transition-colors border-r border-[#356ac3]">Publicar</button>
                <button
                  onClick={() => setShowPublishMenu(!showPublishMenu)}
                  className={`flex items-center justify-center px-2 self-stretch transition-colors rounded-br-[6px] rounded-tr-[6px] border border-solid ${showPublishMenu ? "bg-[#356ac3] border-[#285093]" : "bg-[#4285f4] border-[#356ac3]"}`}
                >
                  <svg fill="none" height="6" viewBox="0 0 9.5 5.5" width="10" className={`transition-transform duration-150 ${showPublishMenu ? "-scale-y-100" : ""}`}>
                    <path d={svgPaths.p14416700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              {showPublishMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-[6px] shadow-lg border border-[#d1d6de] py-1.5 w-[180px] z-50">
                  {PUBLISH_ITEMS.map(item => (
                    <button key={item} onClick={() => { setShowPublishMenu(false); if (item === "Cancelar") navigate("/"); }} className={`w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] hover:bg-[#f5f5f5] transition-colors ${item === "Priorizar" ? "text-[#979797]" : "text-[#373737]"}`}>{item}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-[#fff3e0] border border-[#ff9800] rounded-[6px] px-4 py-2.5 shrink-0">
        <p className="text-[#373737] text-[13px]">⚠ El contenido está siendo editado por otro usuario: mamejia@diariolibre.com, 05/12/2022 01:53:25 p.m.</p>
      </div>

      {/* Tabs */}
      <div className="bg-[#eee] shrink-0">
        <div className="flex items-end gap-2 px-6 pt-3">
          {TABS.map(tab => {
            const isActive = activeTab === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(`/editor/${tab.path}`)}
                className={`flex flex-col items-center transition-colors ${isActive ? "text-[#373737]" : "text-[#979797] hover:text-[#585858]"}`}
              >
                <span className={`px-4 py-2 text-[14px] font-medium whitespace-nowrap rounded-tl-[6px] rounded-tr-[6px] ${isActive ? "bg-white border border-b-0 border-[#dadce0]" : ""}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <Outlet context={context} />
      </div>
    </div>
  );
}
