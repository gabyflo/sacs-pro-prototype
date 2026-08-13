import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { useOutletContext } from "react-router";
import svgPaths from "../../../imports/MacBookPro161/svg-0qah9wh58v";
import svgPaths1641 from "../../../imports/MacBookPro164-1/svg-c4ntp5eeyk";
import IconActionsTrash from "../../../imports/IconActionsTrash/index";
import type { EditorContext } from "../EditorShell";

// ── Icons ─────────────────────────────────────────────────────────────────────

function BoldIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><path d={svgPaths.p1ad44900} fill={active ? "#4285f4" : "#373737"} /></svg>; }
function ItalicIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 15 20" width="14"><path d={svgPaths.p174528f0} fill={active ? "#4285f4" : "#373737"} /></svg>; }
function UnderlineIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="18" viewBox="0 0 17.5 20" width="16"><path d={svgPaths.p16cf4600} fill={active ? "#4285f4" : "#373737"} /></svg>; }
function LinkIcon() { return <svg fill="none" height="16" viewBox="0 0 20 16" width="18"><g clipPath="url(#et-lc)"><path d={svgPaths.p3527010} fill="#373737" /></g><defs><clipPath id="et-lc"><rect fill="white" height="16" width="20" /></clipPath></defs></svg>; }
function ImageIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><g clipPath="url(#et-ic)"><path d={svgPaths.p249d3c80} fill="#373737" /><path d={svgPaths.pe2f5680} fill="#373737" /></g><defs><clipPath id="et-ic"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function CodeBlockIcon() { return <svg fill="none" height="14" viewBox="0 0 20 16" width="18"><g clipPath="url(#et-codec)"><path d={svgPaths.p2ce65400} fill="#373737" /></g><defs><clipPath id="et-codec"><rect fill="white" height="16" width="20" /></clipPath></defs></svg>; }
function QuoteIcon() { return <svg fill="none" height="18" viewBox="0 0 17.5 20" width="16"><g clipPath="url(#et-qc)"><path d={svgPaths.p22c60680} fill="#373737" /></g><defs><clipPath id="et-qc"><rect fill="white" height="20" width="17.5" /></clipPath></defs></svg>; }
function CardTextIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><g clipPath="url(#et-ctc)"><path d={svgPaths.p19e61c80} fill="#373737" /><path d={svgPaths.p25ce7a00} fill="#373737" /></g><defs><clipPath id="et-ctc"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function ListOlIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p20507300} fill="#373737" /></svg>; }
function ListUlIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.pb4ecd00} fill="#373737" /></svg>; }
function ClockIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p17d035f0} fill="#373737" /><path d={svgPaths.p12700b00} fill="#373737" /></svg>; }
function VideoIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path clipRule="evenodd" d={svgPaths.p150f0500} fill="#373737" fillRule="evenodd" /></svg>; }
function AttachIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p4178200} stroke="#373737" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" /></svg>; }
function SortNumericIcon() { return <svg fill="none" height="18" viewBox="0 0 20 20" width="18"><path d={svgPaths.p61af200} fill="#373737" /><path clipRule="evenodd" d={svgPaths.p1d50e400} fill="#373737" fillRule="evenodd" /><path d={svgPaths.p100a6480} fill="#373737" /></svg>; }
function TableIcon() { return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><g clipPath="url(#et-tbl)"><path d={svgPaths1641.p9537900} fill="#373737" /></g><defs><clipPath id="et-tbl"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function HighlighterIcon({ active = false }: { active?: boolean }) { return <svg fill="none" height="16" viewBox="0 0 17 16" width="17"><path d={svgPaths1641.p1940d400} fill={active ? "#f59e0b" : "#373737"} /></svg>; }
function HtmlIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 32 32" width="20">
      <path d="M11.5 7.875H15.875V11.3125C15.875 12.8672 17.1328 14.125 18.6875 14.125H22.125V23.5C22.125 23.8438 21.8438 24.125 21.5 24.125H11.5C11.1562 24.125 10.875 23.8438 10.875 23.5V8.5C10.875 8.15625 11.1562 7.875 11.5 7.875ZM17.75 8.65234L21.3477 12.25H18.6875C18.168 12.25 17.75 11.832 17.75 11.3125V8.65234ZM11.5 6C10.1211 6 9 7.12109 9 8.5V23.5C9 24.8789 10.1211 26 11.5 26H21.5C22.8789 26 24 24.8789 24 23.5V13.2852C24 12.6211 23.7383 11.9844 23.2695 11.5156L18.4805 6.73047C18.0117 6.26172 17.3789 6 16.7148 6H11.5ZM15.6484 17.5469C15.9844 17.1523 15.9414 16.5625 15.5469 16.2266C15.1523 15.8906 14.5625 15.9336 14.2266 16.3281L12.3516 18.5156C12.0508 18.8672 12.0508 19.3828 12.3516 19.7344L14.2266 21.9219C14.5625 22.3164 15.1562 22.3594 15.5469 22.0234C15.9375 21.6875 15.9844 21.0938 15.6484 20.7031L14.2969 19.125L15.6484 17.5469ZM18.7734 16.3281C18.4375 15.9336 17.8438 15.8906 17.4531 16.2266C17.0625 16.5625 17.0156 17.1562 17.3516 17.5469L18.7031 19.125L17.3516 20.7031C17.0156 21.0977 17.0586 21.6875 17.4531 22.0234C17.8477 22.3594 18.4375 22.3164 18.7734 21.9219L20.6484 19.7344C20.9492 19.3828 20.9492 18.8672 20.6484 18.5156L18.7734 16.3281Z" fill="#373737" />
    </svg>
  );
}
function PlusCircleIcon() { return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><g clipPath="url(#et-pc)"><path d={svgPaths.p2e749b00} fill="#373737" /></g><defs><clipPath id="et-pc"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }
function DragHandleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <circle cx="4.5" cy="2.5" r="1.25" />
      <circle cx="9.5" cy="2.5" r="1.25" />
      <circle cx="4.5" cy="7"   r="1.25" />
      <circle cx="9.5" cy="7"   r="1.25" />
      <circle cx="4.5" cy="11.5" r="1.25" />
      <circle cx="9.5" cy="11.5" r="1.25" />
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
function AlignLeftIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="#373737"><path d="M2 4h12v1.5H2V4zm0 3h8v1.5H2V7zm0 3h12v1.5H2V10zm0 3h8v1.5H2V13z"/></svg>; }
function AlignCenterIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="#373737"><path d="M2 4h12v1.5H2V4zm2 3h8v1.5H4V7zm-2 3h12v1.5H2V10zm2 3h8v1.5H4V13z"/></svg>; }
function AlignRightIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="#373737"><path d="M2 4h12v1.5H2V4zm4 3h8v1.5H6V7zm-4 3h12v1.5H2V10zm4 3h8v1.5H6V13z"/></svg>; }
function AlignJustifyIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="#373737"><path d="M2 4h12v1.5H2V4zm0 3h12v1.5H2V7zm0 3h12v1.5H2V10zm0 3h10v1.5H2V13z"/></svg>; }
function PaletteIcon() { return <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8c.74 0 1.38-.41 1.68-1.02.27-.54.21-1.17-.15-1.67-.26-.36-.4-.78-.4-1.21 0-1.1.9-2 2-2h2.18C17.1 12.1 18 10.7 18 9c0-3.87-3.58-7-8-7zm-5 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#373737"/></svg>; }

// ── Types ─────────────────────────────────────────────────────────────────────

type BlockType = "paragraph" | "image" | "code" | "quote" | "insert" | "numbered-list" | "bullet-list" | "chronology" | "video" | "attachment";

interface Block {
  id: string;
  type: BlockType;
  content: string;
}

function newId() { return crypto.randomUUID(); }

const BLOCK_PALETTE = [
  { type: "image" as BlockType,         icon: <ImageIcon />,      label: "Imagen" },
  { type: "code" as BlockType,          icon: <CodeBlockIcon />,  label: "Código" },
  { type: "quote" as BlockType,         icon: <QuoteIcon />,      label: "Cita" },
  { type: "insert" as BlockType,        icon: <CardTextIcon />,   label: "Insertar" },
  { type: "numbered-list" as BlockType, icon: <ListOlIcon />,     label: "Lista #" },
  { type: "bullet-list" as BlockType,   icon: <ListUlIcon />,     label: "Lista •" },
  { type: "chronology" as BlockType,    icon: <ClockIcon />,      label: "Cronología" },
  { type: "paragraph" as BlockType,     icon: <SortNumericIcon />,label: "Párrafo" },
  { type: "video" as BlockType,         icon: <VideoIcon />,      label: "Video" },
  { type: "attachment" as BlockType,    icon: <AttachIcon />,     label: "Adjunto" },
];

const FONTS = ["Roboto", "Arial", "Georgia", "Courier New", "Times New Roman"];
const FONT_SIZES = [10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48];
const ALIGN_OPTIONS = [
  { cmd: "justifyLeft",   icon: <AlignLeftIcon />,    label: "Izquierda" },
  { cmd: "justifyCenter", icon: <AlignCenterIcon />,  label: "Centro" },
  { cmd: "justifyRight",  icon: <AlignRightIcon />,   label: "Derecha" },
  { cmd: "justifyFull",   icon: <AlignJustifyIcon />, label: "Justificar" },
];
const PRESET_COLORS = [
  "#ef4444","#f97316","#eab308","#84cc16","#22c55e","#14b8a6","#3b82f6","#8b5cf6",
  "#ec4899","#ffffff","#d1d5db","#6b7280","#374151","#111827","#000000",
];

// ── Table Picker ──────────────────────────────────────────────────────────────

function TablePicker({ onInsert, onClose }: { onInsert: (rows: number, cols: number) => void; onClose: () => void }) {
  const [hovered, setHovered] = useState({ r: 0, c: 0 });
  const MAX = 8;
  return (
    <div className="absolute left-0 top-full mt-1 bg-white border border-[#dadce0] rounded-[8px] shadow-lg p-3 z-50" style={{ minWidth: 200 }}>
      <p className="text-[12px] text-[#6b7280] mb-2 text-center">
        {hovered.r > 0 && hovered.c > 0 ? `${hovered.r} × ${hovered.c} tabla` : "Selecciona el tamaño"}
      </p>
      <div className="grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${MAX}, 1fr)` }}>
        {Array.from({ length: MAX * MAX }, (_, idx) => {
          const r = Math.floor(idx / MAX) + 1;
          const c = (idx % MAX) + 1;
          const active = r <= hovered.r && c <= hovered.c;
          return (
            <div
              key={idx}
              className={`w-5 h-5 border rounded-[2px] cursor-pointer transition-colors ${active ? "bg-[#d9e7fd] border-[#4285f4]" : "bg-white border-[#dadce0]"}`}
              onMouseEnter={() => setHovered({ r, c })}
              onClick={() => { onInsert(r, c); onClose(); }}
            />
          );
        })}
      </div>
    </div>
  );
}

// ── Color Picker Panel ────────────────────────────────────────────────────────

function ColorPickerPanel({ onApply, onClose }: { onApply: (color: string) => void; onClose: () => void }) {
  const [hex, setHex] = useState("#000000");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);

  function isValidHex(v: string) { return /^#[0-9A-Fa-f]{6}$/.test(v); }

  return (
    <div ref={ref} className="absolute left-0 top-full mt-1 bg-white border border-[#dadce0] rounded-[8px] shadow-lg p-3 z-50 w-[220px]">
      <p className="text-[12px] font-medium text-[#374151] mb-2">Color de texto</p>
      <div className="grid grid-cols-8 gap-1 mb-3">
        {PRESET_COLORS.map(c => (
          <button
            key={c}
            onClick={() => { onApply(c); onClose(); }}
            className="w-6 h-6 rounded border border-[#e5e7eb] hover:scale-110 transition-transform"
            style={{ background: c }}
            title={c}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={hex}
          onChange={e => setHex(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer border border-[#dadce0]"
        />
        <input
          value={hex}
          onChange={e => setHex(e.target.value)}
          placeholder="#000000"
          className="flex-1 border border-[#dadce0] rounded px-2 py-1 text-[13px] font-mono focus:outline-none focus:border-[#5c96f6]"
        />
        <button
          onClick={() => { if (isValidHex(hex)) { onApply(hex); onClose(); } }}
          className="text-[12px] bg-[#4285f4] text-white px-2 py-1 rounded hover:bg-[#3367d6] transition-colors"
        >OK</button>
      </div>
    </div>
  );
}

// ── Align Menu ────────────────────────────────────────────────────────────────

function AlignMenu({ onApply, onClose }: { onApply: (cmd: string) => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);

  return (
    <div ref={ref} className="absolute left-0 top-full mt-1 bg-white border border-[#dadce0] rounded-[8px] shadow-lg py-1 z-50 w-[160px]">
      {ALIGN_OPTIONS.map(({ cmd, icon, label }) => (
        <button
          key={cmd}
          onClick={() => { onApply(cmd); onClose(); }}
          className="w-full flex items-center gap-3 px-3 h-9 hover:bg-[#f5f5f5] transition-colors text-[14px] text-[#373737]"
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

// ── Floating Toolbar (on text selection) ──────────────────────────────────────

function FloatingToolbar() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [boldOn, setBoldOn] = useState(false);
  const [italicOn, setItalicOn] = useState(false);
  const [underlineOn, setUnderlineOn] = useState(false);
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

  function execFmt(cmd: string) {
    document.execCommand(cmd, false);
    setBoldOn(document.queryCommandState("bold"));
    setItalicOn(document.queryCommandState("italic"));
    setUnderlineOn(document.queryCommandState("underline"));
  }

  function openLink() {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) savedRange.current = sel.getRangeAt(0).cloneRange();
    setShowLink(true);
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

  function removeLink() {
    if (savedRange.current) {
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(savedRange.current);
      document.execCommand("unlink", false);
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
        <button onClick={openLink} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors" title="Enlace"><LinkIcon /></button>
        <div className="w-px h-5 bg-[#dadce0] mx-1" />
        <button onClick={() => { document.execCommand("delete", false); setShow(false); }} className="w-8 h-8 flex items-center justify-center rounded hover:bg-red-50 transition-colors" title="Eliminar selección">
          <IconActionsTrash />
        </button>
      </div>

      {showLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20" onClick={() => setShowLink(false)}>
          <div className="bg-white rounded-[12px] shadow-xl p-6 w-[420px]" onClick={e => e.stopPropagation()}>
            <p className="font-['Roboto',sans-serif] text-[#1f2937] text-[15px] mb-4">Ingresa la dirección del enlace (URL) para este link.</p>
            <input
              autoFocus
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") insertLink(); if (e.key === "Escape") setShowLink(false); }}
              placeholder="https://"
              className="w-full border-2 border-[#5c96f6] rounded-[6px] px-3 py-2 text-[14px] font-['Roboto',sans-serif] outline-none"
            />
            <div className="flex items-center justify-between mt-5">
              <button onClick={removeLink} className="text-[14px] font-['Roboto',sans-serif] text-[#6b7280] hover:text-[#374151] transition-colors">Eliminar Enlace</button>
              <div className="flex gap-3">
                <button onClick={() => setShowLink(false)} className="text-[14px] font-['Roboto',sans-serif] font-medium text-[#374151] hover:text-[#111]">Cancelar</button>
                <button onClick={insertLink} className="text-[14px] font-['Roboto',sans-serif] font-medium text-[#374151] hover:text-[#111]">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
  const [hoveredDragIndex, setHoveredDragIndex] = useState<number | null>(null);
  const [openPaletteIndex, setOpenPaletteIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const dragStartIndex = useRef<number | null>(null);

  // toolbar popovers
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState("Roboto");
  const toolbarRef = useRef<HTMLDivElement>(null);

  // modals
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeContent, setCodeContent] = useState("");
  const [showHtmlModal, setShowHtmlModal] = useState(false);
  const [highlightMode, setHighlightMode] = useState(false);
  const savedLinkRange = useRef<Range | null>(null);

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

  // close popovers on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
        setActivePopover(null);
      }
      const palette = document.getElementById("block-palette-popup");
      if (palette && !palette.contains(e.target as Node)) setOpenPaletteIndex(null);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // highlight mode: auto-apply on selection
  useEffect(() => {
    if (!highlightMode) return;
    function onMouseUp() {
      const sel = window.getSelection();
      if (sel && !sel.isCollapsed) {
        document.execCommand("hiliteColor", false, "#fef08a");
        setHighlightMode(false);
      }
    }
    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [highlightMode]);

  function togglePopover(name: string) {
    setActivePopover(prev => prev === name ? null : name);
  }

  function insertTable(rows: number, cols: number) {
    const thead = `<thead><tr>${Array(cols).fill("<th style=\"border:1px solid #dadce0;padding:6px 10px;background:#f8f9fa;min-width:80px\">&nbsp;</th>").join("")}</tr></thead>`;
    const bodyRow = `<tr>${Array(cols).fill("<td style=\"border:1px solid #dadce0;padding:6px 10px;min-width:80px\">&nbsp;</td>").join("")}</tr>`;
    const tbody = `<tbody>${Array(rows).fill(bodyRow).join("")}</tbody>`;
    const table = `<table style="border-collapse:collapse;width:100%;margin:8px 0">${thead}${tbody}</table>`;
    document.execCommand("insertHTML", false, table);
  }

  function applyColor(color: string) {
    document.execCommand("foreColor", false, color);
  }

  function toggleHighlight() {
    const sel = window.getSelection();
    if (sel && !sel.isCollapsed) {
      document.execCommand("hiliteColor", false, "#fef08a");
    } else {
      setHighlightMode(prev => !prev);
    }
  }

  function openStickyLink() {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) savedLinkRange.current = sel.getRangeAt(0).cloneRange();
    setShowLinkModal(true);
    setActivePopover(null);
  }

  function insertStickyLink() {
    if (savedLinkRange.current) {
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(savedLinkRange.current);
      document.execCommand("createLink", false, linkUrl);
    }
    setShowLinkModal(false);
    setLinkUrl("");
  }

  function removeStickyLink() {
    if (savedLinkRange.current) {
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(savedLinkRange.current);
      document.execCommand("unlink", false);
    }
    setShowLinkModal(false);
    setLinkUrl("");
  }

  function insertCode() {
    const escaped = codeContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    document.execCommand("insertHTML", false, `<pre style="background:#1e1e1e;color:#d4d4d4;padding:12px 16px;border-radius:6px;font-family:Courier New,monospace;font-size:13px;overflow-x:auto;margin:8px 0"><code>${escaped}</code></pre>`);
    setShowCodeModal(false);
    setCodeContent("");
  }

  function getHtml(): string {
    const titleHtml = `<h1>${title}</h1>`;
    const subtitleHtml = `<h2>${subtitle}</h2>`;
    const bodyHtml = blocks.map(b => `<p>${b.content}</p>`).join("\n");
    return `${titleHtml}\n${subtitleHtml}\n${bodyHtml}`;
  }

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

  return (
    <>
    <div className="flex-1 overflow-y-auto bg-white">
      <FloatingToolbar />
      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        onMouseLeave={() => { setHoveredBlockIndex(null); setHoveredDragIndex(null); }}
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
        <div ref={toolbarRef} className="sticky top-0 bg-white border-b border-[#dadce0] py-1.5 flex items-center justify-center flex-wrap gap-0.5 z-10 px-2">

          {/* Table */}
          <div className="relative">
            <button title="Tabla" onClick={() => togglePopover("table")} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${activePopover === "table" ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`}><TableIcon /></button>
            {activePopover === "table" && <TablePicker onInsert={insertTable} onClose={() => setActivePopover(null)} />}
          </div>

          {/* Color picker */}
          <div className="relative">
            <button title="Color" onClick={() => togglePopover("color")} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${activePopover === "color" ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`}><PaletteIcon /></button>
            {activePopover === "color" && <ColorPickerPanel onApply={applyColor} onClose={() => setActivePopover(null)} />}
          </div>

          {/* Alignment */}
          <div className="relative">
            <button title="Alineación" onClick={() => togglePopover("align")} className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${activePopover === "align" ? "bg-[#d9e7fd]" : "hover:bg-[#f0f4ff]"}`}><AlignLeftIcon /></button>
            {activePopover === "align" && <AlignMenu onApply={cmd => document.execCommand(cmd, false)} onClose={() => setActivePopover(null)} />}
          </div>

          <div className="w-px h-5 bg-[#dadce0] mx-0.5" />

          {/* Font family */}
          <select
            value={fontFamily}
            onChange={e => { setFontFamily(e.target.value); document.execCommand("fontName", false, e.target.value); }}
            className="h-7 text-[12px] border border-[#dadce0] rounded px-1 bg-white text-[#373737] font-['Roboto',sans-serif] focus:outline-none focus:border-[#5c96f6] cursor-pointer max-w-[110px]"
            title="Tipografía"
          >
            {FONTS.map(f => <option key={f} value={f}>{f}</option>)}
          </select>

          {/* Font size */}
          <select
            value={fontSize}
            onChange={e => {
              const val = Number(e.target.value);
              setFontSize(val);
              // execCommand fontSize uses 1-7; we map via inline style instead
              const sel = window.getSelection();
              if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
                document.execCommand("fontSize", false, "7");
                const spans = document.querySelectorAll<HTMLElement>("font[size='7']");
                spans.forEach(s => { s.removeAttribute("size"); (s as HTMLElement).style.fontSize = val + "px"; });
              }
            }}
            className="h-7 w-[52px] text-[12px] border border-[#dadce0] rounded px-1 bg-white text-[#373737] font-['Roboto',sans-serif] focus:outline-none focus:border-[#5c96f6] cursor-pointer"
            title="Tamaño"
          >
            {FONT_SIZES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <div className="w-px h-5 bg-[#dadce0] mx-0.5" />

          {/* B I U */}
          <button title="Negrita" onClick={() => document.execCommand("bold")} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors"><BoldIcon /></button>
          <button title="Cursiva" onClick={() => document.execCommand("italic")} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors"><ItalicIcon /></button>
          <button title="Subrayado" onClick={() => document.execCommand("underline")} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors"><UnderlineIcon /></button>

          <div className="w-px h-5 bg-[#dadce0] mx-0.5" />

          {/* Link */}
          <button title="Enlace" onClick={openStickyLink} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors"><LinkIcon /></button>

          {/* Code */}
          <button title="Código" onClick={() => { setShowCodeModal(true); setActivePopover(null); }} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors"><CodeBlockIcon /></button>

          {/* Trash */}
          <button title="Eliminar nota" onClick={() => setShowDeleteAlert(true)} className="w-8 h-8 flex items-center justify-center rounded hover:bg-red-50 transition-colors"><IconActionsTrash /></button>

          {/* Highlight */}
          <button
            title="Resaltar texto"
            onClick={toggleHighlight}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${highlightMode ? "bg-[#fef9c3] ring-2 ring-[#f59e0b]" : "hover:bg-[#f0f4ff]"}`}
          >
            <HighlighterIcon active={highlightMode} />
          </button>

          {/* HTML */}
          <button title="Ver HTML" onClick={() => setShowHtmlModal(true)} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors"><HtmlIcon /></button>
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
            onDragOver={(e) => { e.preventDefault(); setDragOverIndex(i); }}
            onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragOverIndex(null); }}
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

              {/* Drag handle with Notion tooltip */}
              <div className="relative">
                <button
                  draggable
                  onDragStart={() => { dragStartIndex.current = i; }}
                  onDragEnd={() => { dragStartIndex.current = null; setDragOverIndex(null); }}
                  onMouseEnter={() => setHoveredDragIndex(i)}
                  onMouseLeave={() => setHoveredDragIndex(null)}
                  className="flex items-center justify-center w-[42px] h-[42px] rounded hover:bg-[#f0f0f0] text-[#bbb] hover:text-[#585858] cursor-grab active:cursor-grabbing transition-colors"
                >
                  <DragHandleIcon />
                </button>
                {hoveredDragIndex === i && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-[#1f2937] text-white rounded-[6px] px-3 py-2 text-[12px] leading-[1.4] whitespace-nowrap z-50 pointer-events-none shadow-lg">
                    <p><span className="font-semibold">Arrastra</span> para mover</p>
                    <p><span className="font-semibold">Clic</span> o <span className="font-mono bg-white/20 rounded px-1">⌘/</span> para abrir menú</p>
                  </div>
                )}
              </div>
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

        {blocks.length === 0 && (
          <div
            className="flex items-center gap-2 py-3 cursor-text"
            onClick={() => insertBlockAtStart("paragraph", true)}
          >
            <div className="shrink-0"><PlusCircleIcon /></div>
            <span className="text-[#b1b1b1] text-[14px] font-['Roboto',sans-serif]">Teclea o pega para empezar a editar tu nota.</span>
          </div>
        )}
      </div>
    </div>

    {/* Delete confirmation modal */}
    {showDeleteAlert && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-[8px] shadow-xl w-[420px] p-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#fdecea] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 11H9v-2h2v2zm0-4H9V5h2v4z" fill="#f44336"/>
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1f2937]">¿Eliminar esta nota?</p>
              <p className="text-[13px] text-[#6b7280] mt-1">Esta acción no se puede deshacer. Puedes guardarla como borrador si quieres volver más tarde.</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setShowDeleteAlert(false)}
              className="px-4 py-2 text-[14px] text-[#374151] border border-[#dadce0] rounded-[6px] hover:bg-[#f5f5f5] transition-colors"
            >Cancelar</button>
            <div className="flex gap-2">
              <button
                onClick={() => setShowDeleteAlert(false)}
                className="px-4 py-2 text-[14px] text-[#374151] border border-[#dadce0] rounded-[6px] hover:bg-[#f5f5f5] transition-colors"
              >Guardar para después</button>
              <button
                onClick={() => { setBlocks([]); setShowDeleteAlert(false); }}
                className="px-4 py-2 text-[14px] text-white bg-[#f44336] hover:bg-[#d32f2f] rounded-[6px] transition-colors"
              >Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Link modal (sticky toolbar) */}
    {showLinkModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20" onClick={() => setShowLinkModal(false)}>
        <div className="bg-white rounded-[12px] shadow-xl p-6 w-[420px]" onClick={e => e.stopPropagation()}>
          <p className="font-['Roboto',sans-serif] text-[#1f2937] text-[15px] mb-4">Ingresa la dirección del enlace (URL) para este link.</p>
          <input
            autoFocus
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") insertStickyLink(); if (e.key === "Escape") setShowLinkModal(false); }}
            placeholder="https://"
            className="w-full border-2 border-[#5c96f6] rounded-[6px] px-3 py-2 text-[14px] font-['Roboto',sans-serif] outline-none"
          />
          <div className="flex items-center justify-between mt-5">
            <button onClick={removeStickyLink} className="text-[14px] font-['Roboto',sans-serif] text-[#6b7280] hover:text-[#374151] transition-colors">Eliminar Enlace</button>
            <div className="flex gap-3">
              <button onClick={() => setShowLinkModal(false)} className="text-[14px] font-['Roboto',sans-serif] font-medium text-[#374151] hover:text-[#111]">Cancelar</button>
              <button onClick={insertStickyLink} className="text-[14px] font-['Roboto',sans-serif] font-medium text-[#374151] hover:text-[#111]">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Code modal */}
    {showCodeModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20" onClick={() => setShowCodeModal(false)}>
        <div className="bg-white rounded-[12px] shadow-xl p-6 w-[560px]" onClick={e => e.stopPropagation()}>
          <p className="font-['Roboto',sans-serif] font-semibold text-[#1f2937] text-[16px] mb-3">Insertar código</p>
          <textarea
            autoFocus
            value={codeContent}
            onChange={e => setCodeContent(e.target.value)}
            placeholder="Pega o escribe el código aquí..."
            rows={10}
            className="w-full border border-[#dadce0] rounded-[6px] px-3 py-2 text-[13px] font-mono text-[#1f2937] bg-[#f8f9fa] focus:outline-none focus:border-[#5c96f6] resize-y"
          />
          <div className="flex justify-end gap-3 mt-4">
            <button onClick={() => setShowCodeModal(false)} className="px-4 py-2 text-[14px] text-[#374151] border border-[#dadce0] rounded-[6px] hover:bg-[#f5f5f5] transition-colors">Cancelar</button>
            <button onClick={insertCode} className="px-4 py-2 text-[14px] text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-[6px] transition-colors">Insertar</button>
          </div>
        </div>
      </div>
    )}

    {/* HTML modal */}
    {showHtmlModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowHtmlModal(false)}>
        <div className="bg-white rounded-[12px] shadow-xl p-6 w-[680px] max-h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-4">
            <p className="font-['Roboto',sans-serif] font-semibold text-[#1f2937] text-[16px]">Ver HTML</p>
            <button onClick={() => setShowHtmlModal(false)} className="text-[#6b7280] hover:text-[#1f2937] text-[22px] leading-none">×</button>
          </div>
          <pre className="flex-1 overflow-auto bg-[#1e1e1e] text-[#d4d4d4] rounded-[8px] p-4 text-[12px] font-mono leading-[1.6] whitespace-pre-wrap break-words">
            {getHtml()}
          </pre>
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => navigator.clipboard.writeText(getHtml())}
              className="px-4 py-2 text-[14px] text-[#374151] border border-[#dadce0] rounded-[6px] hover:bg-[#f5f5f5] transition-colors"
            >Copiar HTML</button>
            <button onClick={() => setShowHtmlModal(false)} className="px-4 py-2 text-[14px] text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-[6px] transition-colors">Cerrar</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
