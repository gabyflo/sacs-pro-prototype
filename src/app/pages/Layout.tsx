import { Outlet, useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/MacBookPro161/svg-0qah9wh58v";

function SearchIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 20 20" width="18">
      <g clipPath="url(#layout-search)">
        <path d={svgPaths.p15ed7c00} fill="#373737" />
      </g>
      <defs><clipPath id="layout-search"><rect fill="white" height="20" width="20" /></clipPath></defs>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 20 20" width="18">
      <g clipPath="url(#layout-bell)">
        <path d={svgPaths.p37073f00} fill="#373737" />
      </g>
      <defs><clipPath id="layout-bell"><rect fill="white" height="20" width="20" /></clipPath></defs>
    </svg>
  );
}

function CaretDownIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 12.5 20" width="10">
      <g clipPath="url(#layout-caret)">
        <path d={svgPaths.p34b5a3f2} fill="#373737" />
      </g>
      <defs><clipPath id="layout-caret"><rect fill="white" height="20" width="12.5" /></clipPath></defs>
    </svg>
  );
}

const NAV_ITEMS = [
  { icon: "home", label: "Dashboard", path: "/" },
  { icon: "bar_chart", label: "Analytics", path: "/analytics" },
  { icon: "group", label: "Producción", path: "/produccion" },
  { icon: "description", label: "Priorizar", path: "/priorizar" },
  { icon: "settings", label: "Módulos", path: "/modulos" },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen bg-white font-['Roboto',sans-serif] overflow-hidden">
      {/* App Header */}
      <header className="bg-white border-b border-[#dadce0] shrink-0 z-20">
        <div className="flex items-center gap-10 px-5 py-2">
          <div className="flex items-center gap-3 w-[230px] shrink-0">
            <div className="flex flex-col gap-[4px]">
              <div className="bg-[#373737] h-[2px] w-[20px]" />
              <div className="bg-[#373737] h-[2px] w-[20px]" />
              <div className="bg-[#373737] h-[2px] w-[20px]" />
            </div>
            <span className="font-medium text-[#373737] text-[14px]">SACS Pro</span>
          </div>
          <div className="flex-1 bg-[#eee] rounded-[10px] flex items-center px-3 py-2 gap-2">
            <SearchIcon />
            <span className="text-[#979797] text-[15px]">Buscar...</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button className="text-[#373737] hover:text-[#5c96f6] transition-colors"><BellIcon /></button>
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-[34px] h-[34px] rounded-full bg-[#5c96f6] flex items-center justify-center text-white text-[12px] font-medium">GC</div>
              <span className="text-[#373737] text-[15px]">Genive Contreras</span>
              <CaretDownIcon />
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[230px] bg-white border-r border-[#dadce0] shrink-0 flex flex-col overflow-y-auto">
          <div className="bg-[#f4f4f4] p-5 flex flex-col gap-3">
            <div className="w-[60px] h-[60px] rounded-full bg-[#5c96f6] flex items-center justify-center text-white text-[28px] font-medium">GC</div>
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 12.5 20" fill="none">
                <path d={svgPaths.p119be980} fill="#373737" />
              </svg>
              <span className="font-bold text-[#212121] text-[14px]">Mis Sitios</span>
            </div>
          </div>
          <div className="h-px bg-[#e9e9e9]" />
          <div className="px-5 py-4">
            <span className="text-[13px] font-bold text-[#212121] opacity-45">Navegación</span>
          </div>
          {NAV_ITEMS.map(({ icon, label, path }) => {
            const isActive =
              location.pathname === path ||
              (path === "/" && location.pathname.startsWith("/editor"));
            return (
              <button
                key={label}
                onClick={() => navigate(path)}
                className={`flex items-center gap-4 w-full px-3 py-2 text-left transition-colors ${isActive ? "bg-[#d9e7fd] rounded-r-[24px] text-[#5c96f6]" : "text-[#585858] hover:bg-[#f0f0f0]"}`}
                style={{ width: isActive ? "218px" : "100%" }}
              >
                <span className={`material-icons text-[22px] ${isActive ? "text-[#5c96f6]" : "text-[#585858]"}`}>{icon}</span>
                <span className="text-[14px] font-medium">{label}</span>
              </button>
            );
          })}
        </aside>

        {/* Main content area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
