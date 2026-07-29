import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/MacBookPro164-1/svg-c4ntp5eeyk";
import IconTextEditorHtml from "../../imports/IconTextEditorHtml";

// ── Icons ────────────────────────────────────────────────────────────────────

function RefreshCloudIcon() {
  return (
    <svg className="block" fill="none" height="16.5" viewBox="0 0 21.5 16.5" width="21.5">
      <path d={svgPaths.p141d7d80} stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
function ThreeDotsIcon() {
  return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.pc1d980} fill="#373737" /></svg>;
}
function EyeIcon() {
  return (
    <svg fill="none" height="17.7778" viewBox="0 0 20 17.7778" width="20">
      <g clipPath="url(#nn-eye)"><path d={svgPaths.p348c0200} fill="#373737" /></g>
      <defs><clipPath id="nn-eye"><rect fill="white" height="17.7778" width="20" /></clipPath></defs>
    </svg>
  );
}
function CaretDownSvg() {
  return (
    <svg fill="none" height="20" viewBox="0 0 12.5 20" width="12.5">
      <g clipPath="url(#nn-cd)"><path d={svgPaths.p34b5a3f2} fill="#373737" /></g>
      <defs><clipPath id="nn-cd"><rect fill="white" height="20" width="12.5" /></clipPath></defs>
    </svg>
  );
}
function PublishCaretSvg() {
  return (
    <svg fill="none" height="5.5" viewBox="0 0 9.5 5.5" width="9.5">
      <path d={svgPaths.p14416700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

// ── Toolbar icons ─────────────────────────────────────────────────────────────
function TableIcon() {
  return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><g clipPath="url(#nn-table)"><path d={svgPaths.p9537900} fill="#373737" /></g><defs><clipPath id="nn-table"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>;
}
function EyedropperIcon() {
  return <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d={svgPaths.p1a6a1f00} fill="black" /></svg>;
}
function AlignLeftIcon() {
  return <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d={svgPaths.p67e7480} fill="black" /></svg>;
}
function FontSizeAIcon() {
  return <svg fill="none" height="14" viewBox="0 0 12 14" width="12"><path d={svgPaths.p37756b10} fill="black" /></svg>;
}
function TextHeightIcon() {
  return <svg fill="none" height="16" viewBox="0 0 20 16" width="20"><path d={svgPaths.p20d00520} fill="black" /></svg>;
}
function BrushIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 15 20" width="15">
      <g clipPath="url(#nn-brush)"><path d={svgPaths.p37024800} fill="#373737" /></g>
      <defs><clipPath id="nn-brush"><rect fill="white" height="20" width="15" /></clipPath></defs>
    </svg>
  );
}
function UndoIcon() {
  return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path clipRule="evenodd" d={svgPaths.p235cb340} fill="#373737" fillRule="evenodd" /><path d={svgPaths.pe176c80} fill="#373737" /></svg>;
}
function RedoIcon() {
  return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path clipRule="evenodd" d={svgPaths.p2ff5f00} fill="#373737" fillRule="evenodd" /><path d={svgPaths.p350de000} fill="#373737" /></svg>;
}
function BoldIcon() {
  return <svg fill="none" height="20" viewBox="0 0 15 20" width="15"><path d={svgPaths.p1ad44900} fill="#373737" /></svg>;
}
function ItalicIcon() {
  return <svg fill="none" height="20" viewBox="0 0 15 20" width="15"><path d={svgPaths.p174528f0} fill="#373737" /></svg>;
}
function UnderlineIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 17.5 20" width="17.5">
      <g clipPath="url(#nn-ul)"><path d={svgPaths.p16cf4600} fill="#373737" /></g>
      <defs><clipPath id="nn-ul"><rect fill="white" height="20" width="17.5" /></clipPath></defs>
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="20">
      <g clipPath="url(#nn-link)"><path d={svgPaths.p3527010} fill="#373737" /></g>
      <defs><clipPath id="nn-link"><rect fill="white" height="16" width="20" /></clipPath></defs>
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="20">
      <g clipPath="url(#nn-code)"><path d={svgPaths.p2ce65400} fill="#373737" /></g>
      <defs><clipPath id="nn-code"><rect fill="white" height="16" width="20" /></clipPath></defs>
    </svg>
  );
}
function TrashIcon() {
  return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.p19a8d580} fill="#373737" /><path clipRule="evenodd" d={svgPaths.p407eaf0} fill="#373737" fillRule="evenodd" /></svg>;
}
function HighlighterIcon() {
  return <svg fill="none" height="16" viewBox="0 0 17 16" width="17"><path d={svgPaths.p1940d400} fill="black" /></svg>;
}
function HtmlIcon() {
  return <svg fill="none" height="22.4" viewBox="0 0 19.2 22.4" width="19.2"><path d={svgPaths.p1dbdf400} fill="black" /></svg>;
}
function PlusCircleFillIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <g clipPath="url(#nn-plus)"><path d={svgPaths.p2e749b00} fill="#373737" /></g>
      <defs><clipPath id="nn-plus"><rect fill="white" height="20" width="20" /></clipPath></defs>
    </svg>
  );
}

// ── Tab config ────────────────────────────────────────────────────────────────

const TABS = [
  { label: "Editor de Texto", path: "/editor/texto" },
  { label: "Info. Básica", path: "/editor/info" },
  { label: "Imagen de la Nota", path: "/editor/imagen" },
  { label: "Archivo", path: "/editor/archivo" },
  { label: "Galería", path: "/editor/galeria" },
  { label: "Contenido Relacionado", path: "/editor/relacionado" },
  { label: "Video", path: "/editor/video" },
];

const PUBLISH_ITEMS = ["Cancelar", "Desactivar", "Eliminar", "Priorizar", "Clonar", "Log", "Flush Facebook", "Propiedades", "Template", "Encuesta"];

// ── NewNote page ──────────────────────────────────────────────────────────────

export default function NewNote() {
  const navigate = useNavigate();
  const [showPublishMenu, setShowPublishMenu] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const publishRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  function goToEditor() {
    navigate("/editor/texto");
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Article Header Bar */}
      <div className="bg-white border border-[#dee2e6] shrink-0">
        <div className="flex items-center gap-4 px-3 py-2">
          <span className="bg-[#fecf4a] text-black text-[12px] font-medium px-2 py-0.5 rounded-full shrink-0">En Edición</span>
          <span className="flex-1 text-[#1f2937] text-[13px] font-medium truncate">Nueva Nota</span>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#6b7280] text-[12px]">ID: 2159109</span>
            <button className="text-[#0d6efd] text-[12px] hover:underline">Ir a URL</button>
            <span className="bg-[#b3cefb] text-black text-[11px] font-medium px-2 py-0.5 rounded-full">SEO</span>
            <span className="bg-[#b3cefb] text-black text-[11px] font-medium px-2 py-0.5 rounded-full">UX</span>
            <div className="flex items-center gap-1 text-[#373737] text-[12px]">
              <RefreshCloudIcon />
              <span>Nueva...</span>
            </div>
            <div className="relative" ref={dotsRef}>
              <button onClick={() => setShowDotsMenu(!showDotsMenu)} className="p-1 rounded hover:bg-[#f0f0f0] transition-colors">
                <ThreeDotsIcon />
              </button>
              {showDotsMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-[6px] shadow-lg border border-[#d1d6de] py-1.5 w-[180px] z-50">
                  {PUBLISH_ITEMS.map(item => (
                    <button key={item} onClick={() => setShowDotsMenu(false)} className={`w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] hover:bg-[#f5f5f5] transition-colors ${item === "Priorizar" ? "text-[#979797]" : "text-[#373737]"}`}>{item}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center border border-[#dadce0] rounded-[6px] bg-white">
              <button className="flex items-center gap-1 px-2 py-1.5 hover:bg-[#f5f5f5] rounded-l-[6px] transition-colors"><EyeIcon /></button>
              <div className="w-px h-5 bg-[#dadce0]" />
              <button className="px-2 py-1.5 hover:bg-[#f5f5f5] rounded-r-[6px] transition-colors"><CaretDownSvg /></button>
            </div>
            <div className="relative" ref={publishRef}>
              <div className="flex items-center rounded-[6px] overflow-hidden">
                <button onClick={goToEditor} className="bg-[#4285f4] hover:bg-[#3367d6] text-white text-[13px] font-medium px-3 py-1.5 transition-colors border-r border-[#356ac3]">Publicar</button>
                <button onClick={() => setShowPublishMenu(!showPublishMenu)} className={`flex items-center justify-center px-2 self-stretch transition-colors rounded-br-[6px] rounded-tr-[6px] border border-solid ${showPublishMenu ? "bg-[#356ac3] border-[#285093]" : "bg-[#4285f4] border-[#356ac3]"}`}>
                  <div className={`transition-transform duration-150 ${showPublishMenu ? "-scale-y-100" : ""}`}>
                    <PublishCaretSvg />
                  </div>
                </button>
              </div>
              {showPublishMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-[6px] shadow-lg border border-[#d1d6de] py-1.5 w-[180px] z-50">
                  {PUBLISH_ITEMS.map(item => (
                    <button key={item} onClick={() => setShowPublishMenu(false)} className={`w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] hover:bg-[#f5f5f5] transition-colors ${item === "Priorizar" ? "text-[#979797]" : "text-[#373737]"}`}>{item}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-[#fff3e0] border border-[#ff9800] rounded-[6px] py-2.5 shrink-0 px-[16px] py-[10px] mx-[0px] mt-[8px] mb-[0px] m-[0px]">
        <p className="text-[#373737] text-[13px]">⚠ El contenido está siendo editado por otro usuario: mamejia@diariolibre.com, 05/12/2022 01:53:25 p.m.</p>
      </div>

      {/* Tabs */}
      <div className="bg-[#eee] shrink-0">
        <div className="flex items-end gap-2 px-6 pt-3">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center transition-colors ${i === 0 ? "text-[#373737]" : "text-[#979797] hover:text-[#585858]"}`}
            >
              <span className={`px-4 py-2 text-[14px] font-medium whitespace-nowrap rounded-tl-[6px] rounded-tr-[6px] ${i === 0 ? "bg-white border border-b-0 border-[#dadce0]" : ""}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Editor Area — placeholder state, click anywhere to start editing */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-16 pb-64 min-h-full">
          {/* Toolbar */}
          <div className="sticky top-0 bg-white border-b border-[#dadce0] py-1.5 flex items-center justify-center flex-wrap gap-0.5 z-10">
            {[
              { icon: <TableIcon />, title: "Tabla" },
              { icon: <EyedropperIcon />, title: "Cuentagotas" },
              { icon: <AlignLeftIcon />, title: "Alinear izquierda" },
              { icon: <FontSizeAIcon />, title: "Tamaño de fuente" },
              { icon: <TextHeightIcon />, title: "Alto de texto" },
              { icon: <BrushIcon />, title: "Formato" },
              { icon: <UndoIcon />, title: "Deshacer" },
              { icon: <RedoIcon />, title: "Rehacer" },
              { icon: <BoldIcon />, title: "Negrita" },
              { icon: <ItalicIcon />, title: "Cursiva" },
              { icon: <UnderlineIcon />, title: "Subrayado" },
              { icon: <LinkIcon />, title: "Enlace" },
              { icon: <CodeIcon />, title: "Código" },
              { icon: <TrashIcon />, title: "Eliminar" },
              { icon: <HighlighterIcon />, title: "Resaltar" },
              { icon: <div className="w-[19px] h-[22px]"><IconTextEditorHtml /></div>, title: "HTML" },
            ].map(({ icon, title }) => (
              <button key={title} title={title} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors text-[#373737]">
                {icon}
              </button>
            ))}
          </div>

          {/* Placeholder title */}
          <div className="pt-6 pb-2">
            <div
              className="w-full font-['Roboto',sans-serif] font-medium text-[#b1b1b1] text-[35px] leading-[1.2] cursor-text"
              onClick={goToEditor}
            >
              Teclea o pega el título de la nota
            </div>
          </div>

          {/* Placeholder subtitle */}
          <div className="pb-6 border-b border-[#f0f0f0]">
            <div
              className="w-full font-['Roboto',sans-serif] font-normal text-[#b1b1b1] text-[24px] leading-[1.35] cursor-text"
              onClick={goToEditor}
            >
              Teclea o pega el subtítulo de la nota
            </div>
          </div>

          {/* Placeholder paragraph row */}
          <div
            className="flex items-center gap-2 py-3 cursor-text"
            onClick={goToEditor}
          >
            <div className="shrink-0"><PlusCircleFillIcon /></div>
            <span className="text-[#b1b1b1] text-[14px] font-['Roboto',sans-serif]">
              Teclea o Pega para empezar a editar tu nota.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
