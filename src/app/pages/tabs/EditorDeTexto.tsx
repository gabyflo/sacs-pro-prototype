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
function HtmlIcon() { return <svg fill="none" height="22" viewBox="0 0 19.2 22.4" width="19"><path d={svgPaths1641.p1dbdf400} fill="#373737" /></svg>; }
function PlusCircleIcon() { return <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><g clipPath="url(#et-pc)"><path d={svgPaths.p2e749b00} fill="#373737" /></g><defs><clipPath id="et-pc"><rect fill="white" height="20" width="20" /></clipPath></defs></svg>; }

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

function BlockInserter({ onInsert }: { onInsert: (type: BlockType) => void }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const visible = hovered || open;

  return (
    <div className="relative flex items-center h-8 gap-2" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={`relative z-10 flex-shrink-0 w-5 h-5 flex items-center justify-center transition-all duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
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
}

function ParagraphBlock({ block, pendingFocusRef, onContentChange }: ParagraphBlockProps) {
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
        onInput={() => { if (divRef.current) onContentChange(block.id, divRef.current.innerHTML); }}
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "z") return;
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

  const [blocks, setBlocks] = useState<Block[]>([]);

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef<string | null>(null);

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

  return (
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
        className="max-w-4xl mx-auto px-16 pb-64 min-h-full cursor-text"
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
            { icon: <IconActionsTrash />, title: "Eliminar", onClick: () => document.execCommand("delete") },
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
            className="w-full resize-none outline-none font-['Roboto',sans-serif] font-medium text-[35px] leading-[1.2] placeholder-[#b1b1b1] text-[#373737]"
            style={{ caretColor: "#5c96f6" }}
            placeholder="Teclea o pega el título de la nota"
            value={title}
            onChange={e => setTitle(e.target.value)}
            rows={1}
          />
        </div>

        {/* Subtitle */}
        <div className="pb-6 border-b border-[#f0f0f0]">
          <textarea
            className="w-full resize-none outline-none font-['Roboto',sans-serif] font-normal text-[24px] leading-[1.35] placeholder-[#b1b1b1] text-[#373737]"
            style={{ caretColor: "#5c96f6" }}
            placeholder="Teclea o pega el subtítulo de la nota"
            value={subtitle}
            onChange={e => setSubtitle(e.target.value)}
            rows={1}
          />
        </div>

        {/* Blocks */}
        {blocks.map((block, i) => (
          <div key={block.id}>
            <ParagraphBlock block={block} pendingFocusRef={pendingFocusRef} onContentChange={updateBlockContent} />
            <BlockInserter onInsert={type => insertBlock(i, type)} />
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
  );
}
