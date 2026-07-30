import { useState } from "react";

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4L6 8L10 4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="#373737">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
    </svg>
  );
}

function PencilSquare() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="#373737">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
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

function TextInput({ placeholder, value, onChange }: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full min-h-[42px] bg-white border border-[#dadce0] rounded-[6px] px-3 py-2 text-[16px] text-[#2d353c] font-['Roboto',sans-serif] placeholder:text-[#2d353c] focus:outline-none focus:border-[#5c96f6] transition-colors"
    />
  );
}

function CharCounter({ used, max }: { used: number; max: number }) {
  return (
    <p className="text-[12px] text-[#adb5bd] font-['Roboto',sans-serif]">
      {Math.max(0, max - used)} disponibles · {used} escritos
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
          checked ? "bg-[#1976d2]" : "bg-[#E0E0E0]"
        }`}
      >
        <span
          className={`absolute top-[2px] w-[20px] h-[20px] rounded-full shadow-sm transition-transform duration-200 ${
            checked ? "bg-white translate-x-[22px]" : "bg-[#9E9E9E] translate-x-[2px]"
          }`}
        />
      </button>
      <span className="text-[14px] text-[rgba(0,0,0,0.87)] font-['Roboto',sans-serif] select-none">{label}</span>
    </div>
  );
}

function IconBtn({ children }: { children: JSX.Element }) {
  return (
    <button className="flex items-center justify-center w-[32px] h-[32px] rounded hover:bg-[#f0f0f0] transition-colors shrink-0">
      {children}
    </button>
  );
}

const TIPOS_NOTA = ["Noticia", "Opinión", "Reportaje", "Crónica", "Entrevista", "Galería"];
const SECCIONES = ["Nacionales", "Internacionales", "Deportes", "Economía", "Cultura", "Tecnología"];
const SUBSECCIONES = ["Sub 1", "Sub 2", "Sub 3"];
const FECHAS = ["Hoy", "Ayer", "Hace 2 días", "Personalizado..."];
const HORAS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
const LUGARES = ["Santo Domingo", "Santiago", "La Vega", "Puerto Plata", "San Pedro de Macorís"];
const METADATOS = ["Principal 1", "Principal 2", "Principal 3"];

export default function InfoBasica() {
  const [tipoNota, setTipoNota] = useState("");
  const [seccion, setSeccion] = useState("");
  const [subseccion, setSubseccion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tituloSeo, setTituloSeo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [subtituloSeo, setSubtituloSeo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [autor, setAutor] = useState("");
  const [keywords, setKeywords] = useState("");
  const [ocultarPublicidad, setOcultarPublicidad] = useState(true);
  const [mostrarEtiqueta, setMostrarEtiqueta] = useState(false);
  const [metaDato, setMetaDato] = useState("");

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-[768px] pt-6 pb-16 px-16 flex flex-col gap-3">

        {/* Group 1: Identificación */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <SelectField label="Tipo de Nota*" value={tipoNota} onChange={setTipoNota} options={TIPOS_NOTA} />
            <IconBtn><PlusCircle /></IconBtn>
            <IconBtn><PencilSquare /></IconBtn>
          </div>

          <div className="flex gap-2">
            <SelectField label="Sección" value={seccion} onChange={setSeccion} options={SECCIONES} />
            <SelectField label="Subsection" value={subseccion} onChange={setSubseccion} options={SUBSECCIONES} />
          </div>

          <TextInput placeholder="Titulo *" value={titulo} onChange={setTitulo} />

          <div className="flex flex-col gap-1.5">
            <TextInput placeholder="Titulo de SEO *" value={tituloSeo} onChange={setTituloSeo} />
            <CharCounter used={tituloSeo.length} max={60} />
          </div>

          <TextInput placeholder="Subtítulo*" value={subtitulo} onChange={setSubtitulo} />

          <div className="flex flex-col gap-1.5">
            <TextInput placeholder="Subtitulo SEO *" value={subtituloSeo} onChange={setSubtituloSeo} />
            <CharCounter used={subtituloSeo.length} max={150} />
          </div>
        </div>

        {/* Group 2: Metadatos */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <SelectField label="Fecha*" value={fecha} onChange={setFecha} options={FECHAS} />
            <SelectField label="Hora*" value={hora} onChange={setHora} options={HORAS} />
          </div>

          <div className="flex items-center gap-1">
            <SelectField label="Lugar *" value={lugar} onChange={setLugar} options={LUGARES} />
            <IconBtn><PlusCircle /></IconBtn>
          </div>

          <TextInput placeholder="Autor *" value={autor} onChange={setAutor} />

          <TextInput placeholder="Keywords SEO*" value={keywords} onChange={setKeywords} />

          <div className="flex flex-col gap-2">
            <Toggle
              checked={ocultarPublicidad}
              onChange={setOcultarPublicidad}
              label="Ocultar Publicidad"
            />
            <Toggle
              checked={mostrarEtiqueta}
              onChange={setMostrarEtiqueta}
              label={'Mostrar Etiqueta "Publicidad" en Portada'}
            />
          </div>

          <div className="flex items-center gap-1">
            <SelectField label="MetaDato Principal*" value={metaDato} onChange={setMetaDato} options={METADATOS} />
            <IconBtn><PlusCircle /></IconBtn>
          </div>
        </div>

      </div>
    </div>
  );
}
