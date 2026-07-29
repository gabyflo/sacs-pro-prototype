import svgPaths from "./svg-0qah9wh58v";

function Bar() {
  return <div className="bg-[#373737] h-[2px] relative shrink-0 w-[20px]" data-name="Bar1" />;
}

function Bar1() {
  return <div className="bg-[#373737] h-[2px] relative shrink-0 w-[20px]" data-name="Bar2" />;
}

function Bar2() {
  return <div className="bg-[#373737] h-[2px] relative shrink-0 w-[20px]" data-name="Bar3" />;
}

function Hamburger() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-between overflow-clip relative shrink-0 w-[20px]" data-name="Hamburger">
      <Bar />
      <Bar1 />
      <Bar2 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip pr-[20px] relative shrink-0 w-[230px]" data-name="Left">
      <Hamburger />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        SACS Pro
      </p>
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_1027)" id="search">
          <path d={svgPaths.p15ed7c00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_1027">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0" data-name="Icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Search & Filter/search">
        <Search1 />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#eee] flex-[1_0_0] min-w-px relative rounded-[10px]" data-name="Search">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[20px] relative size-full">
          <Icon />
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#979797] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Search...
          </p>
        </div>
      </div>
    </div>
  );
}

function BellFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell-fill">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_996)" id="bell-fill">
          <path d={svgPaths.p37073f00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_996">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#5c96f6] overflow-clip relative rounded-[9999px] shrink-0 size-[34px]" data-name="Avatar">
      <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[9.5px] text-[12px] text-white top-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        GC
      </p>
    </div>
  );
}

function Caret() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="Caret">
      <p className="[word-break:break-word] font-['Material_Icons:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[14px] whitespace-nowrap">expand_more</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#373737] text-[16px] whitespace-nowrap">Genive Contreras</p>
      <Caret />
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User">
      <Avatar />
      <Name />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-w-px overflow-clip relative" data-name="Right">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[16px]" data-name="Icon Button">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[10px]" data-name="Icon/Status & Alerts/bell-fill">
          <BellFill />
        </div>
      </div>
      <User />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#5c96f6] overflow-clip relative rounded-[9999px] shrink-0 size-[60px]" data-name="Avatar">
      <p className="[word-break:break-word] absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-21px)] text-[32px] text-white top-[calc(50%-19px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        GC
      </p>
    </div>
  );
}

function CaretUp() {
  return (
    <div className="absolute h-[20px] left-[9.75px] top-[6px] w-[12.5px]" data-name="caret-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 12.5 20" width="12.5">
        <g id="caret-up">
          <path d={svgPaths.p119be980} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="User Info">
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Navigation/caret-right">
        <CaretUp />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Mis Sitios
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
          <Avatar1 />
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="bg-[#e9e9e9] h-px relative shrink-0 w-full" data-name="Divider" />;
}

function NavHeaderWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav Header Wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[20px] py-[15px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] opacity-45 relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Navegación
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5c96f6] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[normal]">home</p>
      </div>
    </div>
  );
}

function HomeActive() {
  return (
    <div className="bg-[#d9e7fd] content-stretch flex gap-[16px] h-[36px] items-center overflow-clip px-[12px] py-[7px] relative rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[218px]" data-name="Home (Active)">
      <Icon1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#5c96f6] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dashboard
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#585858] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[normal]">bar_chart</p>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Analytics">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[7px] relative size-full">
          <Icon2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[14.4px] min-w-px relative text-[#2d353c] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Analytics
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#585858] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[normal]">group</p>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Users">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[7px] relative size-full">
          <Icon3 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#585858] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Producción
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#585858] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[normal]">description</p>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Reports">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[7px] relative size-full">
          <Icon4 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#585858] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Priorizar
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#585858] text-[22px] text-center whitespace-nowrap">
        <p className="leading-[normal]">settings</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Settings">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[7px] relative size-full">
          <Icon5 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#585858] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Módulos
          </p>
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_943)" id="copy">
          <path d={svgPaths.peebcb00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_943">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Id() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="id">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ID: 2159109
      </p>
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Actions/copy">
        <Copy />
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_943)" id="copy">
          <path d={svgPaths.peebcb00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_943">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Url() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="url">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0d6efd] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ir a URL
      </p>
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Actions/copy">
        <Copy1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute flex inset-[0.16%_5.93%_0.05%_5.93%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="relative size-full" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9582" preserveAspectRatio="none" viewBox="0 0 17.6299 19.9582" width="17.6299">
            <g id="Group">
              <path d={svgPaths.p22ee372} fill="var(--fill-0, #373737)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Refresh1() {
  return (
    <div className="absolute left-[6px] overflow-clip size-[20px] top-[6px]" data-name="refresh">
      <Group />
    </div>
  );
}

function Refresh() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Refresh">
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Actions/refresh">
        <Refresh1 />
      </div>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Salvando...
      </p>
    </div>
  );
}

function ThreeDots() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="three-dots">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="three-dots">
          <path d={svgPaths.pc1d980} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="info">
      <Id />
      <Url />
      <div className="bg-[#b3cefb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          SEO
        </p>
      </div>
      <div className="bg-[#b3cefb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          UX
        </p>
      </div>
      <Refresh />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Navigation/three-dots">
        <ThreeDots />
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="h-[17.778px] relative shrink-0 w-[20px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.7778" preserveAspectRatio="none" viewBox="0 0 20 17.7778" width="20">
        <g clipPath="url(#clip0_2_1009)" id="eye">
          <path d={svgPaths.p348c0200} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_1009">
            <rect fill="white" height="17.7778" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="absolute h-[20px] left-[9.75px] top-[6px] w-[12.5px]" data-name="caret-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 12.5 20" width="12.5">
        <g clipPath="url(#clip0_2_1018)" id="caret-down">
          <path d={svgPaths.p34b5a3f2} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_1018">
            <rect fill="white" height="20" width="12.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center pl-[10px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon/Content & Files/eye">
          <Eye />
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Navigation/caret-down">
        <CaretDown />
      </div>
    </div>
  );
}

function Preview() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[6px] shrink-0" data-name="Preview">
      <div aria-hidden className="absolute border border-[#dadce0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container1 />
    </div>
  );
}

function Caret1() {
  return (
    <div className="h-[4px] relative shrink-0 w-[8px]" data-name="Caret">
      <div className="absolute inset-[-18.75%_-9.38%]">
        <svg className="block size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 9.5 5.5" width="9.5">
          <g id="Caret">
            <path d={svgPaths.p14416700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#4285f4] content-stretch flex h-[32px] items-center justify-center px-[10px] relative rounded-bl-[6px] rounded-tl-[6px] shrink-0" data-name="Input Group / Btn">
        <div aria-hidden className="absolute border border-[#356ac3] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Publicar
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#356ac3] content-stretch flex h-[32px] items-center justify-center relative rounded-br-[6px] rounded-tr-[6px] w-[26px]" data-name="Input Group / Caret Toggle">
            <div aria-hidden className="absolute border border-[#285093] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
            <Caret1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleHeaderBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Article Header Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[19px] items-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#fecf4a] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              En Edición
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] min-w-px relative text-[#1f2937] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Entre dolor y cantos de alabanza a Dios, sepultan a la estudiante Esmeralda Richiez en Higüey
          </p>
          <Info />
          <Preview />
          <Frame1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#373737] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        El contenido está siendo editado por otro usuario: mamejia@diariolibre.com, 05/12/2022 01:53:25 p.m.
      </p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Editor de Texto
      </p>
    </div>
  );
}

function TabItem() {
  return (
    <div className="bg-white relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab Item">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Label />
        <div className="bg-white h-[2px] relative shrink-0 w-full" data-name="Indicator" />
      </div>
      <div aria-hidden className="absolute border-[#dadce0] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Info. Básica
      </p>
    </div>
  );
}

function TabItem1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tab Item">
      <Label1 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Imagen de la Nota
      </p>
    </div>
  );
}

function TabItem2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tab Item">
      <Label2 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Archivo
      </p>
    </div>
  );
}

function TabItem3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tab Item">
      <Label3 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Galería
      </p>
    </div>
  );
}

function TabItem4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tab Item">
      <Label4 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contenido Relacionado
      </p>
    </div>
  );
}

function TabItem5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tab Item">
      <Label5 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Video
      </p>
    </div>
  );
}

function TabItem6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tab Item">
      <Label6 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#eee] relative shrink-0 w-full" data-name="Tabs">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pt-[12px] px-[24px] relative size-full">
          <div className="content-stretch flex items-start relative rounded-tr-[6px] shrink-0" data-name="Nav Tabs/Default">
            <TabItem />
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav Tabs/Default">
            <TabItem1 />
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav Tabs/Default">
            <TabItem2 />
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav Tabs/Default">
            <TabItem3 />
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav Tabs/Default">
            <TabItem4 />
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav Tabs/Default">
            <TabItem5 />
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav Tabs/Default">
            <TabItem6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SpellCheck() {
  return (
    <div className="absolute h-[16px] left-[6px] top-[8px] w-[20px]" data-name="spell-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="spell-check">
          <path d={svgPaths.p2a1c2d00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Binoculars() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="binoculars">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="binoculars">
          <path d={svgPaths.p230a9900} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Copy2() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_943)" id="copy">
          <path d={svgPaths.peebcb00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_943">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Clipboard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="clipboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="clipboard">
          <path d={svgPaths.p3d06e400} fill="var(--fill-0, #373737)" id="Vector" />
          <path d={svgPaths.p31c89200} fill="var(--fill-0, #373737)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tools() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Tools">
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Text Editor/spell-check">
        <SpellCheck />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Search & Filter/binoculars">
        <Binoculars />
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Icon/Actions/copy">
        <Copy2 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Data & Charts/clipboard">
        <Clipboard />
      </div>
    </div>
  );
}

function PlusCircleFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus-circle-fill">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_979)" id="plus-circle-fill">
          <path d={svgPaths.p2e749b00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_979">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XCircleFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x-circle-fill">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_973)" id="x-circle-fill">
          <path d={svgPaths.p85b6000} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_973">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_952)" id="image">
          <path d={svgPaths.p249d3c80} fill="var(--fill-0, #373737)" id="Vector" />
          <path d={svgPaths.pe2f5680} fill="var(--fill-0, #373737)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_952">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Code() {
  return (
    <div className="absolute h-[16px] left-[6px] top-[8px] w-[20px]" data-name="code">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g clipPath="url(#clip0_2_1024)" id="code">
          <path d={svgPaths.p2ce65400} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_1024">
            <rect fill="white" height="16" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuoteLeft() {
  return (
    <div className="absolute h-[20px] left-[7.25px] top-[6px] w-[17.5px]" data-name="quote-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 17.5 20" width="17.5">
        <g clipPath="url(#clip0_2_970)" id="quote-left">
          <path d={svgPaths.p22c60680} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_970">
            <rect fill="white" height="20" width="17.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardText() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="card-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_963)" id="card-text">
          <path d={svgPaths.p19e61c80} fill="var(--fill-0, #373737)" id="Vector" />
          <path d={svgPaths.p25ce7a00} fill="var(--fill-0, #373737)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_963">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListOl() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="list-ol">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="list-ol">
          <path d={svgPaths.p20507300} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListUl() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="list-ul">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="list-ul">
          <path d={svgPaths.pb4ecd00} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_2_956)" id="clock">
          <path d={svgPaths.p17d035f0} fill="var(--fill-0, #373737)" id="Vector" />
          <path d={svgPaths.p12700b00} fill="var(--fill-0, #373737)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_956">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SortNumericDown() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="sort-numeric-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="sort-numeric-down">
          <path d={svgPaths.p61af200} fill="var(--fill-0, #373737)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d50e400} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p100a6480} fill="var(--fill-0, #373737)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function FileEarmark() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-earmark">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-earmark">
          <path d={svgPaths.p27769000} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CameraVideo() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="camera-video">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="camera-video">
          <path clipRule="evenodd" d={svgPaths.p150f0500} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AttachOutline() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="attach-outline">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="attach-outline">
          <path d={svgPaths.p4178200} id="Vector" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f8f9fa] relative rounded-[6px] shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[8px] py-[9px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Content & Files/image">
          <Image />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Content & Files/code">
          <Code />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Text Editor/quote-left">
          <QuoteLeft />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Content & Files/card-text">
          <CardText />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Content & Files/list-ol">
          <ListOl />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Content & Files/list-ul">
          <ListUl />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Status & Alerts/clock">
          <Clock />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Search & Filter/sort-numeric-down">
          <SortNumericDown />
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Content & Files/file-earmark">
          <FileEarmark />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Content & Files/camera-video">
          <CameraVideo />
        </div>
        <div className="relative shrink-0 size-[32px]" data-name="Icon/Content & Files/attach-outline">
          <AttachOutline />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Tools2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tools 02">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Actions/x-circle-fill">
        <XCircleFill />
      </div>
      <Frame />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="list">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="list">
          <path clipRule="evenodd" d={svgPaths.p38df880} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#373737] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Párrafo
          </p>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-name="Divider" />;
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#979797] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Card body content area for text.
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#eee] h-[47px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[32px] items-start justify-end leading-[1.5] px-[20px] py-[12px] relative size-full text-[14px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#979797]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cancel
          </p>
          <p className="relative shrink-0 text-[#5c96f6]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Aceptar
          </p>
        </div>
      </div>
    </div>
  );
}

function Bold() {
  return (
    <div className="absolute h-[20px] left-[8.5px] top-[6px] w-[15px]" data-name="bold">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
        <g id="bold">
          <path d={svgPaths.p1ad44900} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Italic() {
  return (
    <div className="absolute h-[20px] left-[8.5px] top-[6px] w-[15px]" data-name="italic">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
        <g id="italic">
          <path d={svgPaths.p174528f0} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Underline() {
  return (
    <div className="absolute h-[20px] left-[7.25px] top-[6px] w-[17.5px]" data-name="underline">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 17.5 20" width="17.5">
        <g clipPath="url(#clip0_2_931)" id="underline">
          <path d={svgPaths.p16cf4600} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_931">
            <rect fill="white" height="20" width="17.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="link">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g clipPath="url(#clip0_2_949)" id="link">
          <path d={svgPaths.p3527010} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_949">
            <rect fill="white" height="16" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowRotateLeft() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="arrow-rotate-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow-rotate-left">
          <path d={svgPaths.p1229240} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRotateRight() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="arrow-rotate-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow-rotate-right">
          <path d={svgPaths.p16664f0} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Brush() {
  return (
    <div className="absolute h-[20px] left-[8.5px] top-[6px] w-[15px]" data-name="brush">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
        <g clipPath="url(#clip0_2_925)" id="brush">
          <path d={svgPaths.p37024800} fill="var(--fill-0, #373737)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_925">
            <rect fill="white" height="20" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FormatTools() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pr-[16px] relative shrink-0" data-name="Format tools">
      <div aria-hidden className="absolute border-[#dadce0] border-r border-solid inset-0 pointer-events-none" />
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Text Editor/bold">
        <Bold />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Text Editor/italic">
        <Italic />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Text Editor/underline">
        <Underline />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Content & Files/link">
        <Link />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Actions/arrow-rotate-left">
        <ArrowRotateLeft />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Actions/arrow-rotate-right">
        <ArrowRotateRight />
      </div>
      <div className="bg-[#d9e7fd] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Content & Files/brush">
        <Brush />
      </div>
    </div>
  );
}

function ArrowDownCircle() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="arrow-down-circle">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
          <g id="arrow-down-circle">
            <path clipRule="evenodd" d={svgPaths.pcca600} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #373737)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUpCircle() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="arrow-up-circle">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
          <g id="arrow-up-circle">
            <path clipRule="evenodd" d={svgPaths.pecb63f0} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #373737)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function XCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x-circle">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
          <g id="x-circle">
            <path d={svgPaths.pb301a80} fill="var(--fill-0, #373737)" id="Vector" stroke="var(--stroke-0, #373737)" />
            <path d={svgPaths.p14d90980} fill="var(--fill-0, #373737)" id="Vector_2" stroke="var(--stroke-0, #373737)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CardTools() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Card tools">
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Data & Charts/arrow-down-circle">
        <ArrowDownCircle />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Data & Charts/arrow-up-circle">
        <ArrowUpCircle />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon/Actions/x-circle">
        <XCircle />
      </div>
    </div>
  );
}

function Tools1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end p-[8px] right-0 top-[4px]" data-name="Tools">
      <FormatTools />
      <CardTools />
    </div>
  );
}

function Parrafo() {
  return (
    <div className="content-stretch flex gap-[8px] items-start py-[24px] relative shrink-0 w-full" data-name="Parrafo">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Navigation/list">
        <List />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[200px] items-start min-w-px overflow-clip relative rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]" data-name="Card">
        <Header />
        <Divider1 />
        <Body />
        <Footer />
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.15)] flex flex-col items-start py-[6px] right-[73px] rounded-[6px] top-[44px] w-[104px]" data-name="Dropdown Menu">
        <div aria-hidden className="absolute border border-[#d1d6de] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Style A
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#d9e7fd] h-[34px] relative shrink-0 w-full" data-name="Submenu">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Style B
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#eee] h-[34px] relative shrink-0 w-full" data-name="Submenu">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Style C
              </p>
            </div>
          </div>
        </div>
        <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Style D
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tools1 />
    </div>
  );
}

function EditorCanvas() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="Editor Canvas">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[14px] relative size-full">
          <Tools />
          <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[#373737] text-[35px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Entre dolor y cantos de alabanza a Dios, sepultan a la estudiante Esmeralda Richiez en Higüey
          </p>
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.35] min-w-full relative shrink-0 text-[#373737] text-[24px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ministerio Público no ha presentado el expediente para conocer medida. Hoy fueron interrogadas varias personas, incluyendo tres menores
          </p>
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#2d353c] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt vestibulum magna, non efficitur tellus cursus ac. Cras ligula ipsum, fringilla sed vulputate eget, interdum non mauris. Nunc convallis odio id lacus suscipit, non hendrerit purus sagittis. Pellentesque lacinia cursus risus, et volutpat quam. Morbi consequat, tortor et vestibulum sodales, justo enim facilisis quam, ac suscipit tellus orci ut tellus. Nullam ut fringilla velit, at commodo sapien. Fusce nec velit risus. Sed et fringilla ligula. Aliquam semper nunc eu urna feugiat, ac mollis lacus ultricies. Nunc et pretium sem, a pretium augue. Aliquam tempus ante et hendrerit convallis. Quisque et lacus nec neque efficitur interdum porttitor eget mauris.
          </p>
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon/Actions/plus-circle-fill">
            <PlusCircleFill />
          </div>
          <Tools2 />
          <Parrafo />
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#2d353c] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt vestibulum magna, non efficitur tellus cursus ac. Cras ligula ipsum, fringilla sed vulputate eget, interdum non mauris. Nunc convallis odio id lacus suscipit, non hendrerit purus sagittis. Pellentesque lacinia cursus risus, et volutpat quam. Morbi consequat, tortor et vestibulum sodales, justo enim facilisis quam, ac suscipit tellus orci ut tellus. Nullam ut fringilla velit, at commodo sapien. Fusce nec velit risus. Sed et fringilla ligula. Aliquam semper nunc eu urna feugiat, ac mollis lacus ultricies. Nunc et pretium sem, a pretium augue. Aliquam tempus ante et hendrerit convallis. Quisque et lacus nec neque efficitur interdum porttitor eget mauris.
          </p>
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#2d353c] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt vestibulum magna, non efficitur tellus cursus ac. Cras ligula ipsum, fringilla sed vulputate eget, interdum non mauris. Nunc convallis odio id lacus suscipit, non hendrerit purus sagittis. Pellentesque lacinia cursus risus, et volutpat quam. Morbi consequat, tortor et vestibulum sodales, justo enim facilisis quam, ac suscipit tellus orci ut tellus. Nullam ut fringilla velit, at commodo sapien. Fusce nec velit risus. Sed et fringilla ligula. Aliquam semper nunc eu urna feugiat, ac mollis lacus ultricies. Nunc et pretium sem, a pretium augue. Aliquam tempus ante et hendrerit convallis. Quisque et lacus nec neque efficitur interdum porttitor eget mauris.
          </p>
        </div>
      </div>
    </div>
  );
}

function EditorArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Editor Area">
      <div className="content-stretch flex items-start pb-[64px] px-[64px] relative size-full">
        <EditorCanvas />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Cancelar
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#eee] h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Desactivar
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Eliminar
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#979797] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Priorizar
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Clonar
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Log
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Flush Facebook
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Propiedades
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Template
            </p>
          </div>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-full" data-name="Submenu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Encuesta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <ArticleHeaderBar />
      <div className="bg-[#fff3e0] relative rounded-[6px] shrink-0 w-full" data-name="Warning Banner">
        <div aria-hidden className="absolute border border-[#ff9800] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            ⚠
          </p>
          <Content1 />
        </div>
      </div>
      <Tabs />
      <EditorArea />
      <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.15)] flex flex-col items-start left-[1286px] py-[6px] rounded-[6px] top-[42px] w-[200px]" data-name="Dropdown Menu">
        <div aria-hidden className="absolute border border-[#d1d6de] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="bg-white content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[230px]" data-name="App Sidebar">
        <div aria-hidden className="absolute border-[#dadce0] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
        <Profile />
        <Divider />
        <NavHeaderWrap />
        <HomeActive />
        <Analytics />
        <Users />
        <Reports />
        <Settings />
      </div>
      <Content />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MacBook Pro 16' - 1">
      <div className="bg-white drop-shadow-[0px_1px_0px_rgba(218,219,224,0.25)] relative shrink-0 w-full" data-name="App Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[40px] items-center px-[20px] py-[8px] relative size-full">
            <Left />
            <Search />
            <Right />
          </div>
        </div>
      </div>
      <Container />
    </div>
  );
}