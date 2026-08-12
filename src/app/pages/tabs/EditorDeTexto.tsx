import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { useOutletContext } from "react-router";
import svgPaths from "../../../imports/MacBookPro161/svg-0qah9wh58v";
import svgPaths164 from "../../../imports/MacBookPro164/svg-oywnd1b1en";
import svgPaths1641 from "../../../imports/MacBookPro164-1/svg-c4ntp5eeyk";
import IconActionsTrash from "../../../imports/IconActionsTrash/index";
import type { EditorContext } from "../EditorShell";

// ── Icons ─────────────────────────────────────────────────────────────────────

function SpellCheckIcon() { return <svg fill="none" height="16" viewBox="0 0 20 16" width="18"><path d={svgPaths.p2a1c2d00} fill="#373737" /></svg>; }
function BinocularsIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p230a9900} fill="#373737" /></svg>; }
function CopyIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><g clipPath="url(#et-cc)"><path d={svgPaths.peebcb00} fill="#373737" /></g><defs><clipPath id="et-cc"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function ClipboardIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p3d06e400} fill="#373737" /><path d={svgPaths.p31c89200} fill="#373737" /></svg>; }
function UndoIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path clipRule="evenodd" d={svgPaths164.p235cb340} fill="#373737" fillRule="evenodd" /><path d={svgPaths164.pe176c80} fill="#373737" /></svg>; }
function RedoIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path clipRule="evenodd" d={svgPaths164.p2ff5f00} fill="#373737" fillRule="evenodd" /><path d={svgPaths164.p350de000} fill="#373737" /></svg>; }
function BoldIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><path d={svgPaths.p1ad44900} fill={active ? "#4285f4" : "#373737"} /></svg>; }
function ItalicIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><path d={svgPaths.p174528f0} fill={active ? "#4285f4" : "#373737"} /></svg>; }
function UnderlineIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 17.5 20" width="16"><path d={svgPaths.p16cf4600} fill={active ? "#4285f4" : "#373737"} /></svg>; }
function LinkIcon() { return <svg fill="none" height="16" viewBox="0 0 20 16" width="18"><g clipPath="url(#et-lc)"><path d={svgPaths.p3527010} fill="#373737" /></g><defs><clipPath id="et-lc"><rect fill="white" height="16" width="20" /></clipPath></defs></svg>; }
function BrushIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><g clipPath="url(#et-bc)"><path d={svgPaths.p37024800} fill={active ? "#4285f4" : "#373737"} /></g><defs><clipPath id="et-bc"><rect fill="white" height="20" width="15" /></clipPath></defs></svg>; }
function ImageIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><g clipPath="url(#et-ic)"><path d={svgPaths.p249d3c80} fill="#373737" /><path d={svgPaths.pe2f5680} fill="#373737" /></g><defs><clipPath id="et-ic"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function CodeBlockIcon() { return <svg fill="none" height="14" viewBox="0 0 20 16" width="18"><g clipPath="url(#et-codec)"><path d={svgPaths.p2ce65400} fill="#373737" /></g><defs><clipPath id="et-codec"><rect fill="white" height="16" width="20" /></clipPath></defs></svg>; }
function QuoteIcon() { return <svg fill="none" height="18" viewBox="0 0 17.5 20" width="16"><g clipPath="url(#et-qc)"><path d={svgPaths.p22c60680} fill="#373737" /></g><defs><clipPath id="et-qc"><rect fill="white" height="20" width="17.5" /></clipPath></defs></svg>; }
function CardTextIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><g clipPath="url(#et-ctc)"><path d={svgPaths.p19e61c80} fill="#373737" /><path d={svgPaths.p25ce7a00} fill="#373737" /></g><defs><clipPath id="et-ctc"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function ListOlIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p20507300} fill="#373737" /></svg>; }
function ListUlIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.pb4ecd00} fill="#373737" /></svg>; }
function ClockIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p17d035f0} fill="#373737" /><path d={svgPaths.p12700b00} fill="#373737" /></svg>; }
function VideoIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path clipRule="evenodd" d={svgPaths.p150f0500} fill="#373737" fillRule="evenodd" /></svg>; }
function FileIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p27769000} fill="#373737" /></svg>; }
function AttachIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p4178200} stroke="#373737" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" /></svg>; }
function SortNumericIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p61af200} fill="#373737" /><path clipRule="evenodd" d={svgPaths.p1d50e400} fill="#373737" fillRule="evenodd" /><path d={svgPaths.p100a6480} fill="#373737" /></svg>; }

// Expanded toolbar icons (from MacBookPro164-1)
function TableIcon() { return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><g clipPath="url(#et-tbl)"><path d={svgPaths1641.p9537900} fill="#373737" /></g><defs><clipPath id="et-tbl"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function EyedropperIcon() { return <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d={svgPaths1641.p1a6a1f00} fill="#373737" /></svg>; }
function AlignLeftIcon() { return <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d={svgPaths1641.p67e7480} fill="#373737" /></svg>; }
function FontAIcon() { return <svg fill="none" height="14" viewBox="0 0 12 14" width="12"><path d={svgPaths1641.p37756b10} fill="#373737" /></svg>; }
function TextHeightIcon() { return <svg fill="none" height="16" viewBox="0 0 20 16" width="20"><path d={svgPaths1641.p20d00520} fill="#373737" /></svg>; }
function HighlighterIcon() { return <svg fill="none" height="16" viewBox="0 0 17 16" width="17"><path d={svgPaths1641.p1940d400} fill="#373737" /></svg>; }
function HtmlIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 32 32" width="20" style={{ width: 28, height: 28 }}>
      <path d="M11.5 7.875H15.875V11.3125C15.875 12.8672 17.1328 14.125 18.6875 14.125H22.125V23.5C22.125 23.8438 21.8438 24.125 21.5 24.125H11.5C11.1562 24.125 10.875 23.8438 10.875 23.5V8.5C10.875 8.15625 11.1562 7.875 11.5 7.875ZM17.75 8.65234L21.3477 12.25H18.6875C18.168 12.25 17.75 11.832 17.75 11.3125V8.65234ZM11.5 6C10.1211 6 9 7.12109 9 8.5V23.5C9 24.8789 10.1211 26 11.5 26H21.5C22.8789 26 24 24.8789 24 23.5V13.2852C24 12.6211 23.7383 11.9844 23.2695 11.5156L18.4805 6.73047C18.0117 6.26172 17.3789 6 16.7148 6H11.5ZM15.6484 17.5469C15.9844 17.1523 15.9414 16.5625 15.5469 16.2266C15.1523 15.8906 14.5625 15.9336 14.2266 16.3281L12.3516 18.5156C12.0508 18.8672 12.0508 19.3828 12.3516 19.7344L14.2266 21.9219C14.5625 22.3164 15.1562 22.3594 15.5469 22.0234C15.9375 21.6875 15.9844 21.0938 15.6484 20.7031L14.2969 19.125L15.6484 17.5469ZM18.7734 16.3281C18.4375 15.9336 17.8438 15.8906 17.4531 16.2266C17.0625 16.5625 17.0156 17.1562 17.3516 17.5469L18.7031 19.125L17.3516 20.7031C17.0156 21.0977 17.0586 21.6875 17.4531 22.0234C17.8477 22.3594 18.4375 22.3164 18.7734 21.9219L20.6484 19.7344C20.9492 19.3828 20.9492 18.8672 20.6484 18.5156L18.7734 16.3281Z" fill="#373737" />
    </svg>
  );
}
function PlusCircleIcon() { return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><g clipPath="url(#et-pc)"><path d={svgPaths.p2e749b00} fill="#373737" /></g><defs><clipPath id="et-pc"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function DragHandleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <rect x="1" y="1"    width="10" height="1.5" rx="0.75" />
      <rect x="1" y="5.25" width="10" height="1.5" rx="0.75" />
      <rect x="1" y="9.5"  width="10" height="1.5" rx="0.75" />
    </svg>
  );
}
function SmallPlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 6.5V15.5M6.5 11H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

type BlockType = "paragraph" | "image" | "code" | "quote" | "insert" | "numbered-list" | "bullet-list" | "chronology" | "video" | "attachment";

interface Block {
  id: string;
  type: BlockType;
  content: string;
}

function newId() { return crypto.randomUUID(); }

const BLOCK_PALETTE = [
  { type: "image" as BlockType, icon: <ImageIcon />, label: "Imagen" },
  { type: "code" as BlockType, icon: <CodeBlockIcon />, label: "Código" },
  { type: "quote" as BlockType, icon: <QuoteIcon />, label: "Cita" },
  { type: "insert" as BlockType, icon: <CardTextIcon />, label: "Insertar" },
  { type: "numbered-list" as BlockType, icon: <ListOlIcon />, label: "Lista #" },
  { type: "bullet-list" as BlockType, icon: <ListUlIcon />, label: "Lista •" },
  { type: "chronology" as BlockType, icon: <ClockIcon />, label: "Cronología" },
  { type: "paragraph" as BlockType, icon: <SortNumericIcon />, label: "Párrafo" },
  { type: "video" as BlockType, icon: <VideoIcon />, label: "Video" },
  { type: "attachment" as BlockType, icon: <AttachIcon />, label: "Adjunto" },
];

// ── Floating Toolbar ──────────────────────────────────────────────────────────

function FloatingToolbar() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [boldOn, setBoldOn] = useState(false);
  const [italicOn, setItalicOn] = useState(false);
  const [underlineOn, setUnderlineOn] = useState(false);
  const [showBrush, setShowBrush] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const savedRange = useRef<Range | null>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onSelectionChange() {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
        if (!showLink) setShow(false);
        return;
      }
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width < 2) { setShow(false); return; }
      setPos({ top: rect.top + window.scrollY - 52, left: rect.left + window.scrollX + rect.width / 2 });
      setBoldOn(document.queryCommandState("bold"));
      setItalicOn(document.queryCommandState("italic"));
      setUnderlineOn(document.queryCommandState("underline"));
      setShow(true);
    }
    document.addEventListener("mouseup", onSelectionChange);
    document.addEventListener("keyup", onSelectionChange);
    return () => { document.removeEventListener("mouseup", onSelectionChange); document.removeEventListener("keyup", onSelectionChange); };
  }, [showLink]);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) setShowBrush(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function execFmt(cmd: string) {
    document.execCommand(cmd, false);
    setBoldOn(document.queryCommandState("bold"));
    setItalicOn(document.queryCommandState("italic"));
    setUnderlineOn(document.queryCommandState("underline"));
  }

  function applyTransform(type: string) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const text = range.toString();
    if (type === "Highlight") { document.execCommand("hiliteColor", false, "#fef08a"); setShowBrush(false); return; }
    let result = text;
    if (type === "lowercase") result = text.toLowerCase();
    if (type === "UPPERCASE") result = text.toUpperCase();
    if (type === "Capitalize") result = text.replace(/\b\w/g, c => c.toUpperCase());
    range.deleteContents();
    range.insertNode(document.createTextNode(result));
    setShowBrush(false);
  }

  function openLink() {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) savedRange.current = sel.getRangeAt(0).cloneRange();
    setShowLink(true);
    setShowBrush(false);
  }

  function insertLink() {
    if (savedRange.current) {
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(savedRange.current);
      document.execCommand("createLink", false, linkUrl);
    }
    setShowLink(false);
    setLinkUrl("");
    setShow(false);
  }

  if (!show) return null;

  return (
    <>
      <div
        ref={toolbarRef}
        className="fixed z-50 bg-white border border-[#dadce0] rounded-[6px] shadow-lg flex items-center gap-1 px-2 py-1.5"
        style={{ top: pos.top, left: pos.left, transform: "translateX(-50%)" }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <button onClick={() => execFmt("bold")} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${boldOn ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`} title="Negrita"><BoldIcon active={boldOn} /></button>
        <button onClick={() => execFmt("italic")} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${italicOn ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`} title="Cursiva"><ItalicIcon active={italicOn} /></button>
        <button onClick={() => execFmt("underline")} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${underlineOn ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`} title="Subrayado"><UnderlineIcon active={underlineOn} /></button>
        <button onClick={openLink} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors" title="Insertar enlace"><LinkIcon /></button>
        <div className="relative">
          <button onClick={() => setShowBrush(!showBrush)} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${showBrush ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`} title="Formato"><BrushIcon active={showBrush} /></button>
          {showBrush && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-[#dadce0] rounded-[6px] shadow-lg py-1.5 w-[130px] z-50">
              {["lowercase", "UPPERCASE", "Capitalize", "Highlight"].map(opt => (
                <button key={opt} onClick={() => applyTransform(opt)} className="w-full text-left px-4 h-[34px] text-[14px] font-['Roboto',sans-serif] text-[#373737] hover:bg-[#f5f5f5] transition-colors">{opt}</button>
              ))}
            </div>
          )}
        </div>
        <div className="w-px h-5 bg-[#dadce0] mx-1" />
        <button onClick={() => { document.execCommand("delete", false); setShow(false); }} className="w-8 h-8 flex items-center justify-center rounded hover:bg-red-50 transition-colors" title="Eliminar selección">
          <IconActionsTrash />
        </button>
      </div>

      {showLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20" onClick={() => setShowLink(false)}>
          <div className="bg-white rounded-[8px] shadow-xl p-6 w-[400px]" onClick={e => e.stopPropagation()}>
            <p className="font-['Roboto',sans-serif] font-medium text-[#373737] text-[15px] mb-4">Insertar enlace</p>
            <input autoFocus value={linkUrl} onChange={e => setLinkUrl(e.target.value)} onKeyDown={e => { if (e.key === "Enter") insertLink(); if (e.key === "Escape") setShowLink(false); }} placeholder="https://..." className="w-full border border-[#dadce0] rounded-[6px] px-3 py-2 text-[14px] font-['Roboto',sans-serif] outline-none focus:border-[#5c96f6] transition-colors" />
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setShowLink(false)} className="text-[#979797] font-['Roboto',sans-serif] font-medium text-[14px] hover:text-[#373737]">Cancelar</button>
              <button onClick={insertLink} className="bg-[#4285f4] text-white font-['Roboto',sans-serif] font-medium text-[14px] px-4 py-1.5 rounded-[6px] hover:bg-[#3367d6] transition-colors">Insertar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Block Inserter ────────────────────────────────────────────────────────────

function BlockInserter({ onInsert, visible }: { onInsert: (type: BlockType) => void; visible: boolean }) {
  const [open, setOpen] = useState(false);

  if (!visible && !open) return <div className="h-8" />;

  return (
    <div className="relative flex items-center h-8 gap-2">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-10 flex-shrink-0 w-5 h-5 flex items-center justify-center"
        title={open ? "Cerrar" : "Insertar bloque"}
      >
        {open ? (
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><circle cx="10" cy="10" r="10" fill="#373737" /><path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
        ) : (
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.p2e749b00} fill="#373737" /></svg>
        )}
      </button>
      {open && (
        <div className="absolute left-7 top-1/2 -translate-y-1/2 z-30 bg-white rounded-lg shadow-lg border border-[#dee2e6] flex items-center gap-1 px-2 py-2">
          {BLOCK_PALETTE.map(({ type, icon, label }) => (
            <button key={type} title={label} onClick={() => { onInsert(type); setOpen(false); }} className="flex items-center justify-center w-8 h-8 rounded hover:bg-[#f0f4ff] text-[#373737] transition-colors">{icon}</button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Paragraph Block ───────────────────────────────────────────────────────────

interface ParagraphBlockProps {
  block: Block;
  pendingFocusRef: React.MutableRefObject<string | null>;
  onContentChange: (id: string, html: string) => void;
  onFocus?: (id: string) => void;
  onBlur?: () => void;
  onEnter?: () => void;
}

function ParagraphBlock({ block, pendingFocusRef, onContentChange, onFocus, onBlur, onEnter }: ParagraphBlockProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const shouldFocus = pendingFocusRef.current === block.id;

  useLayoutEffect(() => {
    const el = divRef.current;
    if (!el) return;
    el.innerHTML = block.content;
    if (shouldFocus) {
      pendingFocusRef.current = null;
      el.focus();
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative py-0.5">
      <div
        ref={divRef}
        contentEditable
        suppressContentEditableWarning
        className="outline-none font-['Roboto',sans-serif] font-normal text-[14px] text-[#2d353c] leading-[1.5] min-h-[1.5em] py-1"
        style={{ caretColor: "#5c96f6", wordBreak: "break-word" }}
        onFocus={() => onFocus?.(block.id)}
        onBlur={() => onBlur?.()}
        onInput={() => { if (divRef.current) onContentChange(block.id, divRef.current.innerHTML); }}
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "z") return;
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onEnter?.();
            return;
          }
          if (e.key === "Backspace") {
            const el = divRef.current;
            if (!el) return;
            if (el.innerText.trim() === "") {
              e.preventDefault();
              const all = document.querySelectorAll<HTMLDivElement>("[data-block-id]");
              const idx = Array.from(all).findIndex(n => n === el);
              if (idx > 0) {
                const prev = all[idx - 1];
                prev.focus();
                const r = document.createRange();
                r.selectNodeContents(prev);
                r.collapse(false);
                window.getSelection()?.removeAllRanges();
                window.getSelection()?.addRange(r);
              }
              onContentChange(block.id, "__DELETE__");
            }
          }
        }}
        data-block-id={block.id}
      />
    </div>
  );
}

// ── Editor De Texto ───────────────────────────────────────────────────────────

export default function EditorDeTexto() {
  const { title, setTitle, subtitle, setSubtitle } = useOutletContext<EditorContext>();

  const INITIAL_BLOCKS: Block[] = [
    { id: "b1",  type: "paragraph", content: "<strong>El cambio ya no es una tendencia, es la norma</strong>" },
    { id: "b2",  type: "paragraph", content: "El trabajo remoto dejó de ser una excepción para convertirse en la norma en buena parte de las industrias tecnológicas. Sin embargo, no todos los equipos logran los mismos resultados. Un estudio reciente identificó cinco hábitos clave que diferencian a los equipos de alto rendimiento de aquellos que siguen luchando contra la desorganización y el agotamiento por videollamadas." },
    { id: "b3",  type: "paragraph", content: "<strong>1. Bloques de tiempo sin reuniones</strong>" },
    { id: "b4",  type: "paragraph", content: "Los equipos más productivos reservan al menos dos bloques diarios de trabajo profundo, sin interrupciones ni notificaciones. Esto permite avanzar en tareas complejas sin el costo cognitivo de cambiar constantemente de contexto." },
    { id: "b5",  type: "paragraph", content: "<strong>2. Documentación asíncrona por defecto</strong>" },
    { id: "b6",  type: "paragraph", content: "En lugar de depender de reuniones para transmitir información, estos equipos documentan decisiones, procesos y actualizaciones en espacios compartidos. Cualquier persona puede ponerse al día sin necesidad de agendar una llamada." },
    { id: "b7",  type: "paragraph", content: "<strong>3. Checkpoints semanales breves</strong>" },
    { id: "b8",  type: "paragraph", content: "No se trata de eliminar las reuniones, sino de hacerlas más eficientes. Un checkpoint de 15 minutos una vez por semana suele ser suficiente para alinear prioridades sin consumir horas productivas." },
    { id: "b9",  type: "paragraph", content: "<strong>4. Límites claros de disponibilidad</strong>" },
    { id: "b10", type: "paragraph", content: "Definir horarios de conexión y desconexión —y respetarlos— reduce el agotamiento y mejora la calidad del trabajo entregado. Los equipos de alto rendimiento normalizan decir \"fuera de horario\" sin culpa." },
    { id: "b11", type: "paragraph", content: "<strong>5. Herramientas compartidas de seguimiento</strong>" },
    { id: "b12", type: "paragraph", content: "El uso de tableros visibles para todo el equipo elimina la necesidad de preguntar constantemente \"¿cómo va esto?\" y da visibilidad real del progreso de cada persona." },
    { id: "b13", type: "paragraph", content: "<strong>Resultados medibles</strong>" },
    { id: "b14", type: "paragraph", content: "Los equipos que adoptaron al menos tres de estas prácticas reportaron una mejora del 30% en cumplimiento de plazos durante los últimos seis meses, junto con una reducción notable en el número de reuniones semanales. El dato más interesante: la satisfacción laboral también subió, sugiriendo que estos hábitos no solo mejoran los números, sino también la experiencia diaria del equipo." },
  ];

  const [blocks, setBlocks] = useState<Block[]>(INITIAL_BLOCKS);
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);
  const [hoveredBlockIndex, setHoveredBlockIndex] = useState<number | null>(null);
  const [openPaletteIndex, setOpenPaletteIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const dragStartIndex = useRef<number | null>(null);

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    function resize(el: HTMLTextAreaElement | null) {
      if (!el) return;
      el.style.height = "0";
      el.style.height = el.scrollHeight + "px";
    }
    resize(titleRef.current);
    resize(subtitleRef.current);
  }, [title, subtitle]);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  }, []);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== canvasRef.current) return;
    const editable = canvasRef.current?.querySelectorAll<HTMLDivElement>("[contenteditable]");
    if (!editable || editable.length === 0) return;
    const last = editable[editable.length - 1];
    last.focus();
    const range = document.createRange();
    range.selectNodeContents(last);
    range.collapse(false);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
  }, []);

  const insertBlock = useCallback((afterIndex: number, type: BlockType, focus = false) => {
    const id = newId();
    if (focus) pendingFocusRef.current = id;
    setBlocks(prev => { const next = [...prev]; next.splice(afterIndex + 1, 0, { id, type, content: "" }); return next; });
  }, []);

  const insertBlockAtStart = useCallback((type: BlockType, focus = false) => {
    const id = newId();
    if (focus) pendingFocusRef.current = id;
    setBlocks(prev => [{ id, type, content: "" }, ...prev]);
  }, []);

  const updateBlockContent = useCallback((id: string, html: string) => {
    if (html === "__DELETE__") { setBlocks(prev => prev.filter(b => b.id !== id)); return; }
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, content: html } : b));
  }, []);

  const reorderBlock = useCallback((from: number, to: number) => {
    if (from === to) return;
    setBlocks(prev => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);

  useEffect(() => {
    function handle(e: MouseEvent) {
      const palette = document.getElementById("block-palette-popup");
      if (palette && !palette.contains(e.target as Node)) setOpenPaletteIndex(null);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <>
    <div className="flex-1 overflow-y-auto bg-white">
      <FloatingToolbar />
      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "a") {
            e.preventDefault();
            const editables = canvasRef.current?.querySelectorAll<HTMLElement>("[contenteditable]");
            if (!editables || editables.length === 0) return;
            const range = document.createRange();
            range.setStart(editables[0], 0);
            range.setEnd(editables[editables.length - 1], editables[editables.length - 1].childNodes.length);
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(range);
          }
        }}
        className="max-w-4xl mx-auto pl-[100px] pr-16 pb-64 min-h-full cursor-text"
      >

        {/* Sticky toolbar */}
        <div className="sticky top-0 bg-white border-b border-[#dadce0] py-1.5 flex items-center justify-center flex-wrap gap-0.5 z-10">
          {[
            { icon: <TableIcon />, title: "Tabla" },
            { icon: <EyedropperIcon />, title: "Cuentagotas" },
            { icon: <AlignLeftIcon />, title: "Alinear izquierda" },
            { icon: <FontAIcon />, title: "Tamaño de fuente" },
            { icon: <TextHeightIcon />, title: "Alto de texto" },
            { icon: <BrushIcon />, title: "Formato" },
            { icon: <UndoIcon />, title: "Deshacer", onClick: () => document.execCommand("undo") },
            { icon: <RedoIcon />, title: "Rehacer", onClick: () => document.execCommand("redo") },
            { icon: <BoldIcon />, title: "Negrita", onClick: () => document.execCommand("bold") },
            { icon: <ItalicIcon />, title: "Cursiva", onClick: () => document.execCommand("italic") },
            { icon: <UnderlineIcon />, title: "Subrayado", onClick: () => document.execCommand("underline") },
            { icon: <LinkIcon />, title: "Enlace" },
            { icon: <CodeBlockIcon />, title: "Código" },
            { icon: <IconActionsTrash />, title: "Eliminar", onClick: () => setShowDeleteAlert(true) },
            { icon: <HighlighterIcon />, title: "Resaltar", onClick: () => document.execCommand("hiliteColor", false, "#fef08a") },
            { icon: <HtmlIcon />, title: "HTML" },
          ].map(({ icon, title, onClick }) => (
            <button key={title} title={title} onClick={onClick} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors text-[#373737]">
              {icon}
            </button>
          ))}
        </div>

        {/* Title */}
        <div className="px-[0px] pt-[24px] pb-[0px]">
          <textarea
            ref={titleRef}
            className="w-full resize-none outline-none overflow-hidden font-['Roboto',sans-serif] font-medium text-[35px] leading-[1.2] placeholder-[#b1b1b1] text-[#373737]"
            style={{ caretColor: "#5c96f6" }}
            placeholder="Teclea o pega el título de la nota"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          />
        </div>

        {/* Subtitle */}
        <div className="pb-6 border-b border-[#f0f0f0]">
          <textarea
            ref={subtitleRef}
            className="w-full resize-none outline-none overflow-hidden font-['Roboto',sans-serif] font-normal text-[24px] leading-[1.35] placeholder-[#b1b1b1] text-[#373737]"
            style={{ caretColor: "#5c96f6" }}
            placeholder="Teclea o pega el subtítulo de la nota"
            value={subtitle}
            onChange={e => {
              setSubtitle(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          />
        </div>

        {/* Blocks */}
        {blocks.map((block, i) => (
          <div
            key={block.id}
            className="relative"
            onMouseEnter={() => setHoveredBlockIndex(i)}
            onMouseLeave={() => setHoveredBlockIndex(null)}
            onDragOver={(e) => { e.preventDefault(); setDragOverIndex(i); }}
            onDragLeave={() => setDragOverIndex(null)}
            onDrop={() => { if (dragStartIndex.current !== null) { reorderBlock(dragStartIndex.current, i); } setDragOverIndex(null); }}
          >
            {/* Drop indicator */}
            {dragOverIndex === i && dragStartIndex.current !== i && (
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#5c96f6] rounded pointer-events-none z-10" />
            )}

            {/* Left gutter controls */}
            <div
              className={`absolute flex items-center gap-0.5 transition-opacity duration-100 ${hoveredBlockIndex === i || focusedBlockId === block.id ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              style={{ left: -92, top: 0 }}
            >
              <button
                id={openPaletteIndex === i ? "block-palette-trigger" : undefined}
                className="flex items-center justify-center w-[42px] h-[42px] rounded hover:bg-[#f0f0f0] text-[#bbb] hover:text-[#585858] transition-colors"
                title="Insertar bloque"
                onClick={() => setOpenPaletteIndex(openPaletteIndex === i ? null : i)}
              >
                <SmallPlusIcon />
              </button>
              <button
                draggable
                onDragStart={() => { dragStartIndex.current = i; }}
                onDragEnd={() => { dragStartIndex.current = null; setDragOverIndex(null); }}
                className="flex items-center justify-center w-[42px] h-[42px] rounded hover:bg-[#f0f0f0] text-[#bbb] hover:text-[#585858] cursor-grab active:cursor-grabbing transition-colors"
                title="Mover bloque"
              >
                <DragHandleIcon />
              </button>
            </div>

            {/* Block palette popup */}
            {openPaletteIndex === i && (
              <div
                id="block-palette-popup"
                className="absolute z-30 bg-[#f8f9fa] border border-[#dee2e6] rounded-[6px] flex items-center gap-1 px-2 py-2 shadow-md"
                style={{ left: 0, top: "calc(100% + 4px)" }}
              >
                {BLOCK_PALETTE.map(({ type, icon, label }) => (
                  <button
                    key={type}
                    title={label}
                    onClick={() => { insertBlock(i, type, true); setOpenPaletteIndex(null); }}
                    className="flex items-center justify-center w-8 h-8 rounded hover:bg-[#e9ecef] text-[#373737] transition-colors"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            )}

            <ParagraphBlock
              block={block}
              pendingFocusRef={pendingFocusRef}
              onContentChange={updateBlockContent}
              onFocus={(id) => { setFocusedBlockId(id); setOpenPaletteIndex(null); }}
              onBlur={() => setFocusedBlockId(null)}
              onEnter={() => insertBlock(i, "paragraph", true)}
            />
          </div>
        ))}

        {/* Placeholder paragraph hint when no blocks yet */}
        {blocks.length === 0 && (
          <div
            className="flex items-center gap-2 py-3 cursor-text"
            onClick={() => insertBlockAtStart("paragraph", true)}
          >
            <div className="shrink-0"><PlusCircleIcon /></div>
            <span className="text-[#b1b1b1] text-[14px] font-['Roboto',sans-serif]">
              Teclea o pega para empezar a editar tu nota.
            </span>
          </div>
        )}
      </div>
    </div>

    {/* Delete confirmation modal */}
    {showDeleteAlert && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-[8px] shadow-xl w-[400px] p-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fdecea] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 11H9v-2h2v2zm0-4H9V5h2v4z" fill="#f44336"/>
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1f2937]">¿Eliminar contenido?</p>
              <p className="text-[13px] text-[#6b7280] mt-1">El contenido seleccionado será eliminado. Esta acción no se puede deshacer.</p>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setShowDeleteAlert(false)}
              className="px-4 py-2 text-[14px] text-[#374151] border border-[#dadce0] rounded-[6px] hover:bg-[#f5f5f5] transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={() => { document.execCommand("delete"); setShowDeleteAlert(false); }}
              className="px-4 py-2 text-[14px] text-white bg-[#f44336] hover:bg-[#d32f2f] rounded-[6px] transition-colors"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
