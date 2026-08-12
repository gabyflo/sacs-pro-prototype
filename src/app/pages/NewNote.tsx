import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/MacBookPro164-1/svg-c4ntp5eeyk";

// ── Icons ────────────────────────────────────────────────────────────────────

function RefreshCloudIcon() {
  return (
    <svg className="block" fill="none" height="18" viewBox="0 0 21.5 16.5" width="18">
      <path d={svgPaths.p141d7d80} stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
function ThreeDotsIcon() {
  return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.pc1d980} fill="#373737" /></svg>;
}
function EyeIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 17.7778" width="18">
      <g clipPath="url(#nn-eye)"><path d={svgPaths.p348c0200} fill="#373737" /></g>
      <defs><clipPath id="nn-eye"><rect fill="white" height="17.7778" width="20" /></clipPath></defs>
    </svg>
  );
}
function CaretDownSvg() {
  return (
    <svg fill="none" height="14" viewBox="0 0 12.5 20" width="10">
      <g clipPath="url(#nn-cd)"><path d={svgPaths.p34b5a3f2} fill="#373737" /></g>
      <defs><clipPath id="nn-cd"><rect fill="white" height="20" width="12.5" /></clipPath></defs>
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
  return <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d={svgPaths.p1a6a1f00} fill="#373737" /></svg>;
}
function AlignLeftIcon() {
  return <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d={svgPaths.p67e7480} fill="#373737" /></svg>;
}
function FontSizeAIcon() {
  return <svg fill="none" height="14" viewBox="0 0 12 14" width="12"><path d={svgPaths.p37756b10} fill="#373737" /></svg>;
}
function TextHeightIcon() {
  return <svg fill="none" height="16" viewBox="0 0 20 16" width="20"><path d={svgPaths.p20d00520} fill="#373737" /></svg>;
}
function BrushIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 15 20" width="14">
      <g clipPath="url(#nn-brush)"><path d={svgPaths.p37024800} fill="#373737" /></g>
      <defs><clipPath id="nn-brush"><rect fill="white" height="20" width="15" /></clipPath></defs>
    </svg>
  );
}
function UndoIcon() {
  return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path clipRule="evenodd" d={svgPaths.p235cb340} fill="#373737" fillRule="evenodd" /><path d={svgPaths.pe176c80} fill="#373737" /></svg>;
}
function RedoIcon() {
  return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path clipRule="evenodd" d={svgPaths.p2ff5f00} fill="#373737" fillRule="evenodd" /><path d={svgPaths.p350de000} fill="#373737" /></svg>;
}
function BoldIcon() {
  return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><path d={svgPaths.p1ad44900} fill="#373737" /></svg>;
}
function ItalicIcon() {
  return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><path d={svgPaths.p174528f0} fill="#373737" /></svg>;
}
function UnderlineIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 17.5 20" width="16">
      <g clipPath="url(#nn-ul)"><path d={svgPaths.p16cf4600} fill="#373737" /></g>
      <defs><clipPath id="nn-ul"><rect fill="white" height="20" width="17.5" /></clipPath></defs>
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="18">
      <g clipPath="url(#nn-link)"><path d={svgPaths.p3527010} fill="#373737" /></g>
      <defs><clipPath id="nn-link"><rect fill="white" height="16" width="20" /></clipPath></defs>
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 20 16" width="18">
      <g clipPath="url(#nn-code)"><path d={svgPaths.p2ce65400} fill="#373737" /></g>
      <defs><clipPath id="nn-code"><rect fill="white" height="16" width="20" /></clipPath></defs>
    </svg>
  );
}
function TrashIcon() {
  return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.p19a8d580} fill="#373737" /><path clipRule="evenodd" d={svgPaths.p407eaf0} fill="#373737" fillRule="evenodd" /></svg>;
}
function HighlighterIcon() {
  return <svg fill="none" height="16" viewBox="0 0 17 16" width="17"><path d={svgPaths.p1940d400} fill="#373737" /></svg>;
}
function HtmlIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 32 32" width="20" style={{ width: 28, height: 28 }}>
      <path d="M11.5 7.875H15.875V11.3125C15.875 12.8672 17.1328 14.125 18.6875 14.125H22.125V23.5C22.125 23.8438 21.8438 24.125 21.5 24.125H11.5C11.1562 24.125 10.875 23.8438 10.875 23.5V8.5C10.875 8.15625 11.1562 7.875 11.5 7.875ZM17.75 8.65234L21.3477 12.25H18.6875C18.168 12.25 17.75 11.832 17.75 11.3125V8.65234ZM11.5 6C10.1211 6 9 7.12109 9 8.5V23.5C9 24.8789 10.1211 26 11.5 26H21.5C22.8789 26 24 24.8789 24 23.5V13.2852C24 12.6211 23.7383 11.9844 23.2695 11.5156L18.4805 6.73047C18.0117 6.26172 17.3789 6 16.7148 6H11.5ZM15.6484 17.5469C15.9844 17.1523 15.9414 16.5625 15.5469 16.2266C15.1523 15.8906 14.5625 15.9336 14.2266 16.3281L12.3516 18.5156C12.0508 18.8672 12.0508 19.3828 12.3516 19.7344L14.2266 21.9219C14.5625 22.3164 15.1562 22.3594 15.5469 22.0234C15.9375 21.6875 15.9844 21.0938 15.6484 20.7031L14.2969 19.125L15.6484 17.5469ZM18.7734 16.3281C18.4375 15.9336 17.8438 15.8906 17.4531 16.2266C17.0625 16.5625 17.0156 17.1562 17.3516 17.5469L18.7031 19.125L17.3516 20.7031C17.0156 21.0977 17.0586 21.6875 17.4531 22.0234C17.8477 22.3594 18.4375 22.3164 18.7734 21.9219L20.6484 19.7344C20.9492 19.3828 20.9492 18.8672 20.6484 18.5156L18.7734 16.3281Z" fill="#373737" />
    </svg>
  );
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
        <div className="flex items-center gap-4 px-3 py-[12px]">
          <span className="bg-[#fecf4a] text-black text-[12px] font-medium px-2 py-0.5 rounded-full shrink-0">En Edición</span>
          <span className="flex-1 text-[#1f2937] text-[13px] font-medium truncate">Nueva Nota</span>
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
              <RefreshCloudIcon />
              <span className="inline-block w-[58px]">Nueva...</span>
            </div>
            <div className="relative" ref={dotsRef}>
              <button onClick={() => setShowDotsMenu(!showDotsMenu)} className="p-1 rounded hover:bg-[#f0f0f0] transition-colors">
                <ThreeDotsIcon />
              </button>
              {showDotsMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-[6px] shadow-lg border border-[#d1d6de] py-1.5 w-[180px] z-50">
                  {PUBLISH_ITEMS.map(item => (
                    <button key={item} onClick={() => { setShowDotsMenu(false); if (item === "Cancelar") navigate("/"); }} className={`w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] hover:bg-[#f5f5f5] transition-colors ${item === "Priorizar" ? "text-[#979797]" : "text-[#373737]"}`}>{item}</button>
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
                    <button key={item} onClick={() => { setShowPublishMenu(false); if (item === "Cancelar") navigate("/"); }} className={`w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] hover:bg-[#f5f5f5] transition-colors ${item === "Priorizar" ? "text-[#979797]" : "text-[#373737]"}`}>{item}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-[#fff3e0] border border-[#ff9800] rounded-[6px] shrink-0 px-4 py-2.5">
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
              { icon: <HtmlIcon />, title: "HTML" },
            ].map(({ icon, title }) => (
              <button key={title} title={title} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors text-[#373737]">
                {icon}
              </button>
            ))}
          </div>

          {/* Placeholder title */}
          <div className="px-[0px] pt-[24px] pb-[0px]">
            <textarea
              readOnly
              onClick={goToEditor}
              placeholder="Teclea o pega el título de la nota"
              className="w-full resize-none outline-none overflow-hidden font-['Roboto',sans-serif] font-medium text-[35px] leading-[1.2] placeholder-[#b1b1b1] text-[#b1b1b1] cursor-text"
              style={{ caretColor: "#5c96f6" }}
            />
          </div>

          {/* Placeholder subtitle */}
          <div className="pb-6 border-b border-[#f0f0f0]">
            <textarea
              readOnly
              onClick={goToEditor}
              placeholder="Teclea o pega el subtítulo de la nota"
              className="w-full resize-none outline-none overflow-hidden font-['Roboto',sans-serif] font-normal text-[24px] leading-[1.35] placeholder-[#b1b1b1] text-[#b1b1b1] cursor-text"
              style={{ caretColor: "#5c96f6" }}
            />
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
