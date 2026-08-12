import { useState, useRef, useEffect } from "react";

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4L6 8L10 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#plus-circle-clip)">
        <path d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z" fill="#373737"/>
        <path d="M10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H10.625V14.375C10.625 14.5408 10.5592 14.6997 10.4419 14.8169C10.3247 14.9342 10.1658 15 10 15C9.83424 15 9.67527 14.9342 9.55806 14.8169C9.44085 14.6997 9.375 14.5408 9.375 14.375V10.625H5.625C5.45924 10.625 5.30027 10.5592 5.18306 10.4419C5.06585 10.3247 5 10.1658 5 10C5 9.83424 5.06585 9.67527 5.18306 9.55806C5.30027 9.44085 5.45924 9.375 5.625 9.375H9.375V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5Z" fill="#373737"/>
      </g>
      <defs><clipPath id="plus-circle-clip"><rect width="20" height="20" fill="white"/></clipPath></defs>
    </svg>
  );
}

function PencilSquare() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M19.3775 2.425C19.4943 2.54215 19.5599 2.70083 19.5599 2.86625C19.5599 3.03167 19.4943 3.19035 19.3775 3.3075L18.0737 4.6125L15.5737 2.1125L16.8775 0.8075C16.9947 0.690331 17.1536 0.624508 17.3194 0.624508C17.4851 0.624508 17.644 0.690331 17.7612 0.8075L19.3775 2.42375V2.425ZM17.19 5.495L14.69 2.995L6.17375 11.5125C6.10495 11.5813 6.05316 11.6652 6.0225 11.7575L5.01625 14.775C4.998 14.83 4.99541 14.889 5.00877 14.9454C5.02212 15.0018 5.0509 15.0534 5.09188 15.0944C5.13287 15.1353 5.18444 15.1641 5.24084 15.1775C5.29724 15.1908 5.35624 15.1882 5.41125 15.17L8.42875 14.1637C8.52096 14.1335 8.60484 14.0821 8.67375 14.0138L17.19 5.495Z" fill="#373737"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.25 16.875C1.25 17.3723 1.44754 17.8492 1.79917 18.2008C2.15081 18.5525 2.62772 18.75 3.125 18.75H16.875C17.3723 18.75 17.8492 18.5525 18.2008 18.2008C18.5525 17.8492 18.75 17.3723 18.75 16.875V9.375C18.75 9.20924 18.6842 9.05027 18.5669 8.93306C18.4497 8.81585 18.2908 8.75 18.125 8.75C17.9592 8.75 17.8003 8.81585 17.6831 8.93306C17.5658 9.05027 17.5 9.20924 17.5 9.375V16.875C17.5 17.0408 17.4342 17.1997 17.3169 17.3169C17.1997 17.4342 17.0408 17.5 16.875 17.5H3.125C2.95924 17.5 2.80027 17.4342 2.68306 17.3169C2.56585 17.1997 2.5 17.0408 2.5 16.875V3.125C2.5 2.95924 2.56585 2.80027 2.68306 2.68306C2.80027 2.56585 2.95924 2.5 3.125 2.5H11.25C11.4158 2.5 11.5747 2.43415 11.6919 2.31694C11.8092 2.19973 11.875 2.04076 11.875 1.875C11.875 1.70924 11.8092 1.55027 11.6919 1.43306C11.5747 1.31585 11.4158 1.25 11.25 1.25H3.125C2.62772 1.25 2.15081 1.44754 1.79917 1.79917C1.44754 2.15081 1.25 2.62772 1.25 3.125V16.875Z" fill="#373737"/>
    </svg>
  );
}

function SelectField({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative flex-1 min-w-0">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full h-[48px] appearance-none bg-white border border-[#dadce0] rounded-[6px] px-4 pr-10 text-[16px] text-[#2d353c] font-['Roboto',sans-serif] cursor-pointer focus:outline-none focus:border-[#5c96f6] transition-colors"
      >
        <option value="">{label}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <ChevronDown />
      </div>
    </div>
  );
}

function TextInput({ placeholder, value, onChange, error }: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full min-h-[42px] bg-white border rounded-[6px] px-3 py-2 text-[16px] text-[#2d353c] font-['Roboto',sans-serif] placeholder:text-[#2d353c] focus:outline-none transition-colors ${
        error ? "border-[#f44336] focus:border-[#f44336]" : "border-[#dadce0] focus:border-[#5c96f6]"
      }`}
    />
  );
}

function CharCounter({ used, max }: { used: number; max: number }) {
  const over = used > max;
  return (
    <p className={`text-[12px] font-['Roboto',sans-serif] ${over ? "text-[#f44336]" : "text-[#adb5bd]"}`}>
      {over
        ? `${max} disponibles ${used} escritos. Excede caracteres disponibles.`
        : `${max - used} disponibles · ${used} escritos`}
    </p>
  );
}

function Toggle({ checked, onChange, label }: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 p-1">
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-200 focus:outline-none shrink-0 ${
          checked ? "bg-[#5c96f6]" : "bg-[#E0E0E0]"
        }`}
      >
        <span
          className="absolute top-[2px] right-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm transition-transform duration-200"
          style={{ transform: checked ? "translateX(0px)" : "translateX(-22px)" }}
        />
      </button>
      <span className="text-[14px] text-[rgba(0,0,0,0.87)] font-['Roboto',sans-serif] select-none">{label}</span>
    </div>
  );
}

const MONTHS_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEK_DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function DatePicker({ value, onChange }: {
  value: Date | null;
  onChange: (d: Date) => void;
}) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(value?.getMonth() ?? today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function getDaysGrid() {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();
    const cells: { day: number; kind: "prev" | "cur" | "next" }[] = [];
    for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrevMonth - i, kind: "prev" });
    for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, kind: "cur" });
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++) cells.push({ day: d, kind: "next" });
    return cells;
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function selectDay(day: number, kind: "prev" | "cur" | "next") {
    let m = viewMonth, y = viewYear;
    if (kind === "prev") { m--; if (m < 0) { m = 11; y--; } }
    if (kind === "next") { m++; if (m > 11) { m = 0; y++; } }
    onChange(new Date(y, m, day));
    setOpen(false);
  }

  const isSelected = (day: number, kind: "prev" | "cur" | "next") =>
    !!value && kind === "cur" && value.getDate() === day && value.getMonth() === viewMonth && value.getFullYear() === viewYear;

  const display = value
    ? `${String(value.getDate()).padStart(2,"0")}/${String(value.getMonth()+1).padStart(2,"0")}/${value.getFullYear()}`
    : "";

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full h-[48px] flex items-center justify-between bg-white border border-[#dadce0] rounded-[6px] px-4 focus:outline-none focus:border-[#5c96f6] transition-colors"
      >
        <span className={`text-[16px] font-['Roboto',sans-serif] ${display ? "text-[#2d353c]" : "text-[#9ca3af]"}`}>
          {display || "DD/MM/AAAA"}
        </span>
        <ChevronDown />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#e5e7eb] p-4 z-50 w-[300px]">
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth} className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#f0f0f0]">
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M7 1L1 6.5L7 12" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <span className="font-semibold text-[15px] text-[#1f2937]">{MONTHS_EN[viewMonth]} {viewYear}</span>
            <button onClick={nextMonth} className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#f0f0f0]">
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none"><path d="M1 1L7 6.5L1 12" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-7 mb-1">
            {WEEK_DAYS.map(d => (
              <div key={d} className="flex items-center justify-center h-8 text-[13px] font-semibold text-[#374151]">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {getDaysGrid().map((cell, i) => (
              <button
                key={i}
                onClick={() => selectDay(cell.day, cell.kind)}
                className={`flex items-center justify-center h-9 w-full text-[14px] rounded-[6px] transition-colors ${
                  isSelected(cell.day, cell.kind)
                    ? "bg-[#4285f4] text-white font-medium"
                    : cell.kind !== "cur"
                    ? "text-[#9ca3af] hover:bg-[#f5f5f5]"
                    : "text-[#1f2937] hover:bg-[#f5f5f5]"
                }`}
              >
                {cell.day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type TimeVal = { hour: number; minute: number; period: "AM" | "PM" };

function TimePicker({ value, onChange }: {
  value: TimeVal | null;
  onChange: (v: TimeVal) => void;
}) {
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState(value?.hour ?? 12);
  const [minute, setMinute] = useState(value?.minute ?? 0);
  const [period, setPeriod] = useState<"AM" | "PM">(value?.period ?? "AM");
  const [hourStr, setHourStr] = useState(String(value?.hour ?? 12).padStart(2, "0"));
  const [minStr, setMinStr] = useState(String(value?.minute ?? 0).padStart(2, "0"));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        commitAndClose();
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [hour, minute, period]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "a" || e.key === "A") setPeriod("AM");
      if (e.key === "p" || e.key === "P") setPeriod("PM");
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  function commitAndClose() {
    const h = Math.min(12, Math.max(1, parseInt(hourStr, 10) || 12));
    const m = Math.min(59, Math.max(0, parseInt(minStr, 10) || 0));
    setHour(h); setMinute(m);
    setHourStr(String(h).padStart(2, "0"));
    setMinStr(String(m).padStart(2, "0"));
    onChange({ hour: h, minute: m, period });
    setOpen(false);
  }

  function handleHourBlur() {
    const h = Math.min(12, Math.max(1, parseInt(hourStr, 10) || 12));
    setHour(h);
    setHourStr(String(h).padStart(2, "0"));
  }

  function handleMinBlur() {
    const m = Math.min(59, Math.max(0, parseInt(minStr, 10) || 0));
    setMinute(m);
    setMinStr(String(m).padStart(2, "0"));
  }

  const display = value
    ? `${String(value.hour).padStart(2,"0")}:${String(value.minute).padStart(2,"0")} ${value.period}`
    : "";

  const ChevUp = () => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 7L7 1L13 7" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  const ChevDn = () => (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );

  const boxClass = "w-[60px] h-[60px] flex items-center justify-center border border-[#dadce0] rounded-[8px] text-[20px] font-medium text-[#1f2937]";

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full h-[48px] flex items-center justify-between bg-white border border-[#dadce0] rounded-[6px] px-4 focus:outline-none focus:border-[#5c96f6] transition-colors"
      >
        <span className={`text-[16px] font-['Roboto',sans-serif] ${display ? "text-[#2d353c]" : "text-[#9ca3af]"}`}>
          {display || "00:00 AM"}
        </span>
        <ChevronDown />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#e5e7eb] p-5 z-50">
          <div className="flex items-center gap-2">
            {/* Hour */}
            <div className="flex flex-col items-center gap-2">
              <button onClick={() => { const h = hour === 12 ? 1 : hour + 1; setHour(h); setHourStr(String(h).padStart(2,"0")); }} className="p-1 hover:bg-[#f0f0f0] rounded"><ChevUp /></button>
              <input
                type="text"
                inputMode="numeric"
                value={hourStr}
                onChange={e => setHourStr(e.target.value.replace(/\D/g, "").slice(0, 2))}
                onBlur={handleHourBlur}
                className={`${boxClass} text-center focus:outline-none focus:border-[#5c96f6]`}
              />
              <button onClick={() => { const h = hour === 1 ? 12 : hour - 1; setHour(h); setHourStr(String(h).padStart(2,"0")); }} className="p-1 hover:bg-[#f0f0f0] rounded"><ChevDn /></button>
            </div>
            <span className="text-[20px] font-medium text-[#9ca3af] pb-1">:</span>
            {/* Minute */}
            <div className="flex flex-col items-center gap-2">
              <button onClick={() => { const m = minute === 59 ? 0 : minute + 1; setMinute(m); setMinStr(String(m).padStart(2,"0")); }} className="p-1 hover:bg-[#f0f0f0] rounded"><ChevUp /></button>
              <input
                type="text"
                inputMode="numeric"
                value={minStr}
                onChange={e => setMinStr(e.target.value.replace(/\D/g, "").slice(0, 2))}
                onBlur={handleMinBlur}
                className={`${boxClass} text-center focus:outline-none focus:border-[#5c96f6]`}
              />
              <button onClick={() => { const m = minute === 0 ? 59 : minute - 1; setMinute(m); setMinStr(String(m).padStart(2,"0")); }} className="p-1 hover:bg-[#f0f0f0] rounded"><ChevDn /></button>
            </div>
            <span className="text-[20px] font-medium text-[#9ca3af] pb-1">:</span>
            {/* AM/PM */}
            <div className="flex flex-col items-center gap-2">
              <button onClick={() => setPeriod(p => p === "AM" ? "PM" : "AM")} className="p-1 hover:bg-[#f0f0f0] rounded"><ChevUp /></button>
              <button onClick={() => setPeriod(p => p === "AM" ? "PM" : "AM")} className={`${boxClass} hover:bg-[#f5f5f5] transition-colors`}>{period}</button>
              <button onClick={() => setPeriod(p => p === "AM" ? "PM" : "AM")} className="p-1 hover:bg-[#f0f0f0] rounded"><ChevDn /></button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

function IconBtn({ children, onClick }: { children: JSX.Element; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-[32px] h-[32px] rounded hover:bg-[#f0f0f0] transition-colors shrink-0">
      {children}
    </button>
  );
}


type PropScreen = "list" | "new" | "edit";

function PanelHeader({ label, onBack, onClose }: { label: string; onBack?: () => void; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#f3f4f6]">
      <div className="flex items-center gap-2">
        {onBack && (
          <button onClick={onBack} className="text-[#6b7280] hover:text-[#1f2937] text-[22px] leading-none pr-1">‹</button>
        )}
        <span className="font-semibold text-[15px] text-[#1f2937]">{label}</span>
      </div>
      <button
        onClick={e => { e.stopPropagation(); onClose(); }}
        className="w-6 h-6 flex items-center justify-center rounded-full bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb] text-[13px]"
      >✕</button>
    </div>
  );
}

interface PropsPanelProps {
  tipos: string[];
  onClose: () => void;
  onAdd: (name: string) => void;
  onDelete: (name: string) => void;
  onRename: (oldName: string, newName: string) => void;
}

function PropertiesPanel({ tipos, onClose, onAdd, onDelete, onRename }: PropsPanelProps) {
  const [screen, setScreen] = useState<PropScreen>("list");
  const [search, setSearch] = useState("");
  const [editingTipo, setEditingTipo] = useState("");
  const [editName, setEditName] = useState("");
  const [newName, setNewName] = useState("");

  const filtered = tipos.filter(t => t.toLowerCase().includes(search.toLowerCase()));

  if (screen === "new") return (
    <div className="w-[300px] bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.18)] border border-[#e5e7eb] overflow-hidden">
      <PanelHeader label="Nuevo Tipo de Nota" onBack={() => setScreen("list")} onClose={onClose} />
      <div className="px-3 py-3 flex flex-col gap-3">
        <input
          autoFocus
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder="Nombre del tipo"
          className="w-full bg-[#f5f5f5] rounded-[6px] px-3 py-2 text-[14px] text-[#1f2937] focus:outline-none border border-transparent focus:border-[#4285f4]"
        />
        <div className="flex justify-end">
          <button
            disabled={!newName.trim()}
            onClick={() => { if (newName.trim()) { onAdd(newName.trim()); setNewName(""); setScreen("list"); } }}
            className="px-4 py-2 text-[14px] text-white bg-[#4285f4] hover:bg-[#3367d6] disabled:opacity-50 rounded-[6px] transition-colors"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );

  if (screen === "edit") return (
    <div className="w-[300px] bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.18)] border border-[#e5e7eb] overflow-hidden">
      <PanelHeader label="Editar Tipo de Nota" onBack={() => setScreen("list")} onClose={onClose} />
      <div className="px-3 py-3 border-b border-[#f3f4f6]">
        <input
          autoFocus
          value={editName}
          onChange={e => setEditName(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && editName.trim() && editName.trim() !== editingTipo) {
              onRename(editingTipo, editName.trim());
              setScreen("list");
            }
          }}
          className="w-full bg-[#f5f5f5] rounded-[6px] px-3 py-2 text-[14px] text-[#1f2937] focus:outline-none border border-transparent focus:border-[#4285f4]"
        />
      </div>
      <button
        onClick={() => { onDelete(editingTipo); setScreen("list"); }}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#fef2f2] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 2h4M2 4h12M3.5 4l.9 8.1A1 1 0 005.4 13h5.2a1 1 0 001-.9L12.5 4" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[14px] text-[#ef4444]">Eliminar</span>
      </button>
    </div>
  );

  return (
    <div className="w-[300px] bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.18)] border border-[#e5e7eb] overflow-hidden">
      <PanelHeader label="Nuevo Tipo de Nota" onClose={onClose} />
      <div className="px-3 py-2">
        <input
          autoFocus
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar Tipo de Nota"
          className="w-full bg-[#f5f5f5] rounded-[6px] px-3 py-2 text-[14px] text-[#1f2937] focus:outline-none border border-transparent focus:border-[#4285f4]"
        />
      </div>
      <div className="py-1 max-h-[220px] overflow-y-auto">
        {filtered.map(t => (
          <button
            key={t}
            onClick={() => { setEditingTipo(t); setEditName(t); setScreen("edit"); }}
            className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors text-left"
          >
            <span className="text-[14px] text-[#1f2937]">{t}</span>
            <span className="text-[#9ca3af] text-[16px]">›</span>
          </button>
        ))}
      </div>
      <div className="border-t border-[#f3f4f6]">
        <button onClick={() => setScreen("new")} className="w-full flex items-center gap-2 px-4 py-3 text-[14px] text-[#6b7280] hover:bg-[#f5f5f5] transition-colors">
          <span className="text-[18px] leading-none">+</span>
          <span>Nuevo Tipo de Nota</span>
        </button>
      </div>
    </div>
  );
}

const TIPOS_NOTA = ["Foto Nota", "Video", "Galería", "Columna", "Caricatura", "Patrocinada"];
const SECCIONES = ["Nacionales", "Internacionales", "Deportes", "Economía", "Cultura", "Tecnología"];
const SUBSECCIONES = ["Sub 1", "Sub 2", "Sub 3"];
const LUGARES = ["Santo Domingo", "Santiago", "La Vega", "Puerto Plata", "San Pedro de Macorís"];
const METADATOS = ["Principal 1", "Principal 2", "Principal 3"];

function AddModal({ title, placeholder, onClose, onAdd }: {
  title: string;
  placeholder: string;
  onClose: () => void;
  onAdd: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-[8px] shadow-xl w-[400px] p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-semibold text-[#1f2937]">{title}</h3>
          <button onClick={onClose} className="text-[#6b7280] hover:text-[#1f2937] text-xl leading-none">×</button>
        </div>
        <input
          autoFocus
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-[#dadce0] rounded-[6px] px-3 py-2 text-[15px] text-[#2d353c] focus:outline-none focus:border-[#5c96f6]"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-[14px] text-[#374151] border border-[#dadce0] rounded-[6px] hover:bg-[#f5f5f5]">Cancelar</button>
          <button
            disabled={!value.trim()}
            onClick={() => { if (value.trim()) { onAdd(value.trim()); onClose(); } }}
            className="px-4 py-2 text-[14px] text-white bg-[#4285f4] hover:bg-[#3367d6] disabled:opacity-50 rounded-[6px]"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function InfoBasica() {
  const [tipos, setTipos] = useState([...TIPOS_NOTA]);
  const [tipoNota, setTipoNota] = useState("Foto Nota");
  const [seccion, setSeccion] = useState("Nacionales");
  const [subseccion, setSubseccion] = useState("Sub 1");
  const [titulo, setTitulo] = useState("Cinco hábitos que están transformando la productividad remota en 2026");
  const [tituloSeo, setTituloSeo] = useState("Cinco hábitos productividad remota 2026");
  const [subtitulo, setSubtitulo] = useState("Equipos distribuidos reportan mejoras de hasta 30% en entregas al adoptar estas prácticas");
  const [subtituloSeo, setSubtituloSeo] = useState("Mejoras 30% productividad equipos remotos 2026");
  const [fecha, setFecha] = useState<Date | null>(new Date(2026, 7, 12));
  const [hora, setHora] = useState<TimeVal | null>({ hour: 8, minute: 0, period: "AM" });
  const [lugares, setLugares] = useState([...LUGARES]);
  const [lugar, setLugar] = useState("Santo Domingo");
  const [autor, setAutor] = useState("Redacción Digital");
  const [keywords, setKeywords] = useState("productividad remota, trabajo distribuido, hábitos laborales, 2026");
  const [ocultarPublicidad, setOcultarPublicidad] = useState(true);
  const [mostrarEtiqueta, setMostrarEtiqueta] = useState(false);
  const [metadatos, setMetadatos] = useState([...METADATOS]);
  const [metaDato, setMetaDato] = useState("Principal 1");
  const [addModal, setAddModal] = useState<"tipo" | "lugar" | "metadato" | null>(null);
  const [showProperties, setShowProperties] = useState(false);

  return (
    <>
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-[768px] pt-6 pb-16 px-16 flex flex-col gap-3">

        {/* Group 1: Identificación */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <SelectField label="Tipo de Nota*" value={tipoNota} onChange={setTipoNota} options={tipos} />
            <IconBtn onClick={() => setAddModal("tipo")}><PlusCircle /></IconBtn>
            <div className="relative">
              <IconBtn onClick={() => setShowProperties(true)}><PencilSquare /></IconBtn>
              {showProperties && (
                <div className="absolute left-0 top-full mt-1 z-50" onClick={e => e.stopPropagation()}>
                  <PropertiesPanel
                    tipos={tipos}
                    onClose={() => setShowProperties(false)}
                    onAdd={v => { setTipos(prev => [v, ...prev]); setTipoNota(v); }}
                    onDelete={v => { setTipos(prev => prev.filter(t => t !== v)); if (tipoNota === v) setTipoNota(""); }}
                    onRename={(old, newN) => { setTipos(prev => prev.map(t => t === old ? newN : t)); if (tipoNota === old) setTipoNota(newN); }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <SelectField label="Sección" value={seccion} onChange={setSeccion} options={SECCIONES} />
            <SelectField label="Subsección" value={subseccion} onChange={setSubseccion} options={SUBSECCIONES} />
          </div>

          <TextInput placeholder="Titulo *" value={titulo} onChange={setTitulo} />

          <div className="flex flex-col gap-1.5">
            <TextInput placeholder="Titulo de SEO *" value={tituloSeo} onChange={setTituloSeo} error={tituloSeo.length > 60} />
            <CharCounter used={tituloSeo.length} max={60} />
          </div>

          <TextInput placeholder="Subtítulo*" value={subtitulo} onChange={setSubtitulo} />

          <div className="flex flex-col gap-1.5">
            <TextInput placeholder="Subtitulo SEO *" value={subtituloSeo} onChange={setSubtituloSeo} error={subtituloSeo.length > 150} />
            <CharCounter used={subtituloSeo.length} max={150} />
          </div>
        </div>

        {/* Group 2: Metadatos */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <DatePicker value={fecha} onChange={setFecha} />
            <TimePicker value={hora} onChange={setHora} />
          </div>

          <div className="flex items-center gap-1">
            <SelectField label="Lugar *" value={lugar} onChange={setLugar} options={lugares} />
            <IconBtn onClick={() => setAddModal("lugar")}><PlusCircle /></IconBtn>
          </div>

          <TextInput placeholder="Autor *" value={autor} onChange={setAutor} />

          <TextInput placeholder="Keywords SEO*" value={keywords} onChange={setKeywords} />

          <div className="flex flex-col gap-2">
            <Toggle checked={ocultarPublicidad} onChange={setOcultarPublicidad} label="Ocultar Publicidad" />
            <Toggle checked={mostrarEtiqueta} onChange={setMostrarEtiqueta} label={'Mostrar Etiqueta "Publicidad" en Portada'} />
          </div>

          <div className="flex items-center gap-1">
            <SelectField label="MetaDato Principal*" value={metaDato} onChange={setMetaDato} options={metadatos} />
            <IconBtn onClick={() => setAddModal("metadato")}><PlusCircle /></IconBtn>
          </div>
        </div>

      </div>
    </div>

    {addModal === "tipo" && (
      <AddModal
        title="Agregar Tipo de Nota"
        placeholder="Nombre del tipo"
        onClose={() => setAddModal(null)}
        onAdd={v => { setTipos(prev => [v, ...prev]); setTipoNota(v); }}
      />
    )}
    {addModal === "lugar" && (
      <AddModal
        title="Agregar Lugar"
        placeholder="Nombre del lugar"
        onClose={() => setAddModal(null)}
        onAdd={v => { setLugares(prev => [...prev, v]); setLugar(v); }}
      />
    )}
    {addModal === "metadato" && (
      <AddModal
        title="Agregar MetaDato Principal"
        placeholder="Nombre del metadato"
        onClose={() => setAddModal(null)}
        onAdd={v => { setMetadatos(prev => [...prev, v]); setMetaDato(v); }}
      />
    )}
    </>
  );
}
