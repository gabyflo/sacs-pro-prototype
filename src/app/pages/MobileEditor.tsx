import React, { useState } from "react";
import svgPaths from "../../imports/MacBookPro164-1/svg-c4ntp5eeyk";

// ── App-header icons ──────────────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="bg-[#373737] h-[2px] w-[20px]" />
      <div className="bg-[#373737] h-[2px] w-[20px]" />
      <div className="bg-[#373737] h-[2px] w-[20px]" />
    </div>
  );
}

// ── Article-header icons ──────────────────────────────────────────────────────

function UndoIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 20 20" width="18" style={{ width: '22px', height: '22px' }}>
      <path clipRule="evenodd" d="M10 3.75C11.3508 3.75052 12.6651 4.18866 13.746 4.9988C14.8269 5.80894 15.6162 6.94746 15.9958 8.24385C16.3753 9.54023 16.3247 10.9247 15.8514 12.1899C15.3781 13.455 14.5076 14.5328 13.3704 15.2618C12.2332 15.9908 10.8904 16.3317 9.54317 16.2335C8.19594 16.1352 6.91679 15.6032 5.89731 14.717C4.87783 13.8308 4.17289 12.6382 3.88809 11.3177C3.60328 9.9973 3.75394 8.62013 4.3175 7.3925C4.37884 7.24324 4.38007 7.07605 4.32094 6.9259C4.26181 6.77576 4.1469 6.6543 4.00025 6.58696C3.85361 6.51961 3.6866 6.51159 3.53418 6.56458C3.38176 6.61757 3.25574 6.72746 3.1825 6.87125C2.50626 8.34449 2.32554 9.99716 2.66741 11.5817C3.00928 13.1663 3.85534 14.5974 5.07884 15.6608C6.30235 16.7242 7.83745 17.3625 9.4542 17.4802C11.0709 17.5979 12.6823 17.1886 14.0469 16.3136C15.4115 15.4387 16.4559 14.1452 17.0237 12.6268C17.5914 11.1085 17.652 9.44703 17.1962 7.89139C16.7405 6.33575 15.793 4.96964 14.4956 3.99769C13.1983 3.02574 11.621 2.50028 10 2.5V3.75Z" fill="#373737" fillRule="evenodd" />
      <path d="M10 5.5825V0.6675C9.99998 0.608121 9.98304 0.549977 9.95117 0.499876C9.91929 0.449776 9.8738 0.409794 9.82003 0.384612C9.76625 0.359429 9.70642 0.350089 9.64753 0.357684C9.58863 0.36528 9.53313 0.389497 9.4875 0.4275L6.5375 2.885C6.50233 2.91433 6.47404 2.95103 6.45462 2.9925C6.4352 3.03397 6.42514 3.07921 6.42514 3.125C6.42514 3.17079 6.4352 3.21603 6.45462 3.2575C6.47404 3.29897 6.50233 3.33567 6.5375 3.365L9.4875 5.8225C9.53313 5.8605 9.58863 5.88472 9.64753 5.89232C9.70642 5.89991 9.76625 5.89057 9.82003 5.86539C9.8738 5.84021 9.91929 5.80022 9.95117 5.75012C9.98304 5.70002 9.99998 5.64188 10 5.5825Z" fill="#373737" />
    </svg>
  );
}

function RedoIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 20 20" width="18" style={{ width: '22px', height: '22px' }}>
      <path clipRule="evenodd" d="M10 3.75C8.64919 3.75052 7.33491 4.18866 6.25401 4.9988C5.1731 5.80894 4.38376 6.94746 4.00421 8.24385C3.62465 9.54023 3.67531 10.9247 4.14861 12.1899C4.6219 13.455 5.49235 14.5328 6.62958 15.2618C7.76681 15.9908 9.1096 16.3317 10.4568 16.2335C11.8041 16.1352 13.0832 15.6032 14.1027 14.717C15.1222 13.8308 15.8271 12.6382 16.1119 11.3177C16.3967 9.9973 16.2461 8.62013 15.6825 7.3925C15.6212 7.24324 15.6199 7.07605 15.6791 6.9259C15.7382 6.77576 15.8531 6.6543 15.9997 6.58696C16.1464 6.51961 16.3134 6.51159 16.4658 6.56458C16.6182 6.61757 16.7443 6.72746 16.8175 6.87125C17.4937 8.34449 17.6745 9.99716 17.3326 11.5817C16.9907 13.1663 16.1447 14.5974 14.9212 15.6608C13.6976 16.7242 12.1625 17.3625 10.5458 17.4802C8.92906 17.5979 7.3177 17.1886 5.95308 16.3136C4.58847 15.4387 3.54407 14.1452 2.97633 12.6268C2.40858 11.1085 2.34804 9.44703 2.80379 7.89139C3.25954 6.33575 4.20704 4.96964 5.50435 3.99769C6.80167 3.02574 8.37898 2.50028 10 2.5V3.75Z" fill="#373737" fillRule="evenodd" />
      <path d="M10 5.5825V0.6675C10 0.608121 10.017 0.549977 10.0488 0.499876C10.0807 0.449776 10.1262 0.409794 10.18 0.384612C10.2337 0.359429 10.2936 0.350089 10.3525 0.357684C10.4114 0.36528 10.4669 0.389497 10.5125 0.4275L13.4625 2.885C13.6125 3.01 13.6125 3.24 13.4625 3.365L10.5125 5.8225C10.4669 5.8605 10.4114 5.88472 10.3525 5.89232C10.2936 5.89991 10.2337 5.89057 10.18 5.86539C10.1262 5.84021 10.0807 5.80022 10.0488 5.75012C10.017 5.70002 10 5.64188 10 5.5825Z" fill="#373737" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 20 20" width="18">
      <g clipPath="url(#me-plus)">
        <path d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM10.625 5.625C10.625 5.45924 10.5592 5.30027 10.4419 5.18306C10.3247 5.06585 10.1658 5 10 5C9.83424 5 9.67527 5.06585 9.55806 5.18306C9.44085 5.30027 9.375 5.45924 9.375 5.625V9.375H5.625C5.45924 9.375 5.30027 9.44085 5.18306 9.55806C5.06585 9.67527 5 9.83424 5 10C5 10.1658 5.06585 10.3247 5.18306 10.4419C5.30027 10.5592 5.45924 10.625 5.625 10.625H9.375V14.375C9.375 14.5408 9.44085 14.6997 9.55806 14.8169C9.67527 14.9342 9.83424 15 10 15C10.1658 15 10.3247 14.9342 10.4419 14.8169C10.5592 14.6997 10.625 14.5408 10.625 14.375V10.625H14.375C14.5408 10.625 14.6997 10.5592 14.8169 10.4419C14.9342 10.3247 15 10.1658 15 10C15 9.83424 14.9342 9.67527 14.8169 9.55806C14.6997 9.44085 14.5408 9.375 14.375 9.375H10.625V5.625Z" fill="#373737" />
      </g>
      <defs>
        <clipPath id="me-plus">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ThreeDotsIcon() {
  return (
    <svg fill="none" height="22" viewBox="0 0 20 20" width="22">
      <path d="M3.75 11.875C3.25272 11.875 2.77581 11.6775 2.42417 11.3258C2.07254 10.9742 1.875 10.4973 1.875 10C1.875 9.50272 2.07254 9.02581 2.42417 8.67417C2.77581 8.32254 3.25272 8.125 3.75 8.125C4.24728 8.125 4.72419 8.32254 5.07583 8.67417C5.42746 9.02581 5.625 9.50272 5.625 10C5.625 10.4973 5.42746 10.9742 5.07583 11.3258C4.72419 11.6775 4.24728 11.875 3.75 11.875ZM10 11.875C9.50272 11.875 9.02581 11.6775 8.67417 11.3258C8.32254 10.9742 8.125 10.4973 8.125 10C8.125 9.50272 8.32254 9.02581 8.67417 8.67417C9.02581 8.32254 9.50272 8.125 10 8.125C10.4973 8.125 10.9742 8.32254 11.3258 8.67417C11.6775 9.02581 11.875 9.50272 11.875 10C11.875 10.4973 11.6775 10.9742 11.3258 11.3258C10.9742 11.6775 10.4973 11.875 10 11.875ZM16.25 11.875C15.7527 11.875 15.2758 11.6775 14.9242 11.3258C14.5725 10.9742 14.375 10.4973 14.375 10C14.375 9.50272 14.5725 9.02581 14.9242 8.67417C15.2758 8.32254 15.7527 8.125 16.25 8.125C16.7473 8.125 17.2242 8.32254 17.5758 8.67417C17.9275 9.02581 18.125 9.50272 18.125 10C18.125 10.4973 17.9275 10.9742 17.5758 11.3258C17.2242 11.6775 16.7473 11.875 16.25 11.875Z" fill="#373737" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <g clipPath="url(#me-copy)">
        <path d="M8.75 0C7.37109 0 6.25 1.12109 6.25 2.5V11.25C6.25 12.6289 7.37109 13.75 8.75 13.75H17.5C18.8789 13.75 20 12.6289 20 11.25V2.5C20 1.12109 18.8789 0 17.5 0H8.75ZM2.5 6.25C1.12109 6.25 0 7.37109 0 8.75V17.5C0 18.8789 1.12109 20 2.5 20H11.25C12.6289 20 13.75 18.8789 13.75 17.5V15H11.25V17.5H2.5V8.75H5V6.25H2.5Z" fill="#6b7280" />
      </g>
      <defs>
        <clipPath id="me-copy">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
      <path d="M2 4L6 8L10 4" stroke="#373737" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

// ── Formatting-toolbar icons ──────────────────────────────────────────────────

function BoldIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 15 20" width="14">
      <path d={svgPaths.p1ad44900} fill="#373737" />
    </svg>
  );
}

function ItalicIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 15 20" width="14">
      <path d={svgPaths.p174528f0} fill="#373737" />
    </svg>
  );
}

function UnderlineIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 17.5 20" width="16">
      <g clipPath="url(#me-ul)">
        <path d={svgPaths.p16cf4600} fill="#373737" />
      </g>
      <defs>
        <clipPath id="me-ul">
          <rect fill="white" height="20" width="17.5" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FontSizeAIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 12 14" width="12">
      <path d={svgPaths.p37756b10} fill="black" />
    </svg>
  );
}

function EyedropperIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p1a6a1f00} fill="black" />
    </svg>
  );
}

function TextHeightIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="20">
      <path d={svgPaths.p20d00520} fill="black" />
    </svg>
  );
}

function AlignLeftIcon() {
  return (
    <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
      <path d={svgPaths.p67e7480} fill="black" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 15 20" width="15">
      <g clipPath="url(#me-brush)">
        <path d={svgPaths.p37024800} fill="#373737" />
      </g>
      <defs>
        <clipPath id="me-brush">
          <rect fill="white" height="20" width="15" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="20">
      <g clipPath="url(#me-link)">
        <path d={svgPaths.p3527010} fill="#373737" />
      </g>
      <defs>
        <clipPath id="me-link">
          <rect fill="white" height="16" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="20">
      <g clipPath="url(#me-code)">
        <path d={svgPaths.p2ce65400} fill="#373737" />
      </g>
      <defs>
        <clipPath id="me-code">
          <rect fill="white" height="16" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TableIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <g clipPath="url(#me-table)">
        <path d={svgPaths.p9537900} fill="#373737" />
      </g>
      <defs>
        <clipPath id="me-table">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p19a8d580} fill="#373737" />
      <path clipRule="evenodd" d={svgPaths.p407eaf0} fill="#373737" fillRule="evenodd" />
    </svg>
  );
}

function HighlighterIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 17 16" width="17">
      <path d={svgPaths.p1940d400} fill="black" />
    </svg>
  );
}

function HtmlTagIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 19.2 22.4" width="17">
      <path d={svgPaths.p1dbdf400} fill="black" />
    </svg>
  );
}

// ── Info Básica form icons ────────────────────────────────────────────────────

function AddSquareIcon() {
  return (
    <img alt="" src="https://www.figma.com/api/mcp/asset/835dd992-c7b7-45f3-951a-ad8aa44ef38d" width="20" height="20" />
  );
}

function PenEditIcon() {
  return (
    <img alt="" src="https://www.figma.com/api/mcp/asset/e30581c4-fc0d-4f50-8177-1d780cd99f5a" width="20" height="20" />
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button onClick={onChange} className="relative flex-shrink-0" style={{ width: 51, height: 31 }}>
      <div className={`absolute inset-0 rounded-full transition-colors duration-200 ${checked ? 'bg-[#34c759]' : 'bg-[#e5e7eb]'}`} />
      <div className={`absolute top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow-md transition-transform duration-200 ${checked ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
    </button>
  );
}

// ── Keyboard icons ────────────────────────────────────────────────────────────

function ShiftIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 20 20" width="16">
      <path d="M10 3L18 11H13V17H7V11H2L10 3Z" fill="#455a64" />
    </svg>
  );
}

function BackspaceIcon() {
  return (
    <svg fill="none" height="16" viewBox="0 0 22 16" width="20">
      <path d="M9 1H20C20.5523 1 21 1.44772 21 2V14C21 14.5523 20.5523 15 20 15H9C8.72386 15 8.46143 14.8817 8.27786 14.6742L1.5 8L8.27786 1.32584C8.46143 1.11831 8.72386 1 9 1Z" stroke="#455a64" strokeWidth="1.5" />
      <path d="M14 5.5L10.5 9M10.5 5.5L14 9" stroke="#455a64" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg fill="none" height="22" viewBox="0 0 14 22" width="14">
      <rect height="12" rx="4" stroke="white" strokeWidth="1.5" width="8" x="3" y="1" />
      <path d="M1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
      <line stroke="white" strokeLinecap="round" strokeWidth="1.5" x1="7" x2="7" y1="16" y2="21" />
    </svg>
  );
}

// ── Keyboard component ────────────────────────────────────────────────────────

const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];
const NUMBER_ROW = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function AndroidKeyboard() {
  return (
    <div className="w-full bg-[#d6d9dc] pt-[4px] pb-[6px] select-none">
      {/* Row 1 — letter keys with number hints */}
      <div className="flex justify-center gap-[5px] mb-[8px] px-[4px]">
        {KEYBOARD_ROWS[0].map((key, i) => (
          <div
            key={key}
            className="flex-1 bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex flex-col items-center justify-end pb-[5px] pt-[3px] relative"
            style={{ minWidth: 0 }}
          >
            <span className="absolute top-[3px] right-[4px] text-[#455a64] text-[9px] font-medium leading-none opacity-80">
              {NUMBER_ROW[i]}
            </span>
            <span className="text-[#37474f] text-[18px] font-medium leading-none">{key}</span>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex justify-center gap-[5px] mb-[8px] px-[20px]">
        {KEYBOARD_ROWS[1].map((key) => (
          <div
            key={key}
            className="flex-1 bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center py-[8px]"
            style={{ minWidth: 0 }}
          >
            <span className="text-[#37474f] text-[18px] font-medium leading-none">{key}</span>
          </div>
        ))}
      </div>

      {/* Row 3 — shift + letters + backspace */}
      <div className="flex items-center justify-center gap-[5px] mb-[8px] px-[4px]">
        <div className="bg-[#b8bec5] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center w-[40px] h-[40px] shrink-0">
          <ShiftIcon />
        </div>
        <div className="flex flex-1 justify-center gap-[5px]">
          {KEYBOARD_ROWS[2].map((key) => (
            <div
              key={key}
              className="flex-1 bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center py-[8px]"
              style={{ minWidth: 0 }}
            >
              <span className="text-[#37474f] text-[18px] font-medium leading-none">{key}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#b8bec5] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center w-[40px] h-[40px] shrink-0">
          <BackspaceIcon />
        </div>
      </div>

      {/* Bottom row — ?123, comma, space, period, mic */}
      <div className="flex items-center gap-[5px] px-[4px]">
        <div className="bg-[#b8bec5] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center px-[6px] h-[40px] shrink-0">
          <span className="text-[#37474f] text-[13px] font-medium">?123</span>
        </div>
        <div className="bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center w-[30px] h-[40px] shrink-0">
          <span className="text-[#37474f] text-[18px] font-medium">,</span>
        </div>
        <div className="flex-1 bg-[#b8bec5] rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center h-[40px]">
          <span className="text-[#37474f] text-[14px]" />
        </div>
        <div className="bg-white rounded-[5px] shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center w-[30px] h-[40px] shrink-0">
          <span className="text-[#37474f] text-[18px] font-medium">.</span>
        </div>
        <div className="bg-[#8eb6f8] rounded-full shadow-[0_1px_0_rgba(0,0,0,0.3)] flex items-center justify-center w-[42px] h-[40px] shrink-0">
          <MicrophoneIcon />
        </div>
      </div>
    </div>
  );
}

// ── Formatting toolbar ────────────────────────────────────────────────────────

const TOOLBAR_TOOLS = [
  { icon: <BoldIcon />, label: "Negrita" },
  { icon: <ItalicIcon />, label: "Cursiva" },
  { icon: <UnderlineIcon />, label: "Subrayado" },
  { icon: <FontSizeAIcon />, label: "Tamaño" },
  { icon: <EyedropperIcon />, label: "Cuentagotas" },
  { icon: <TextHeightIcon />, label: "Alto de texto" },
  { icon: <AlignLeftIcon />, label: "Alinear" },
  { icon: <BrushIcon />, label: "Formato" },
  { icon: <LinkIcon />, label: "Enlace" },
  { icon: <CodeIcon />, label: "Código" },
  { icon: <TableIcon />, label: "Tabla" },
  { icon: <TrashIcon />, label: "Eliminar" },
  { icon: <HighlighterIcon />, label: "Resaltar" },
  { icon: <HtmlTagIcon />, label: "HTML" },
];

// ── Info Básica form ──────────────────────────────────────────────────────────

function FieldBox({ label, chevron = false, withAdd = false, withEdit = false, counter, tall = false }: {
  label: string; chevron?: boolean; withAdd?: boolean; withEdit?: boolean; counter?: string; tall?: boolean;
}) {
  const inputClass = "w-full font-['Roboto',sans-serif] text-[14px] text-[#373737] bg-transparent border-none outline-none pb-[6px]";
  return (
    <div>
      <div className="flex items-start gap-[8px]">
        <div className="flex-1 border border-[#dadce0] rounded-[4px] px-[12px] pt-[6px]" style={{ minHeight: tall ? 72 : 48 }}>
          <label className="font-['Roboto',sans-serif] text-[11px] text-[#9ca3af] block">{label}</label>
          {chevron ? (
            <div className="relative flex items-center">
              <select className={`${inputClass} appearance-none pr-[20px] cursor-pointer`}>
                <option value="" />
              </select>
              <div className="absolute right-0 pointer-events-none">
                <ChevronDownIcon />
              </div>
            </div>
          ) : tall ? (
            <textarea className={`${inputClass} resize-none`} rows={2} />
          ) : (
            <input type="text" className={inputClass} />
          )}
        </div>
        {withAdd && (
          <button type="button" className="flex-shrink-0 flex items-center justify-center" style={{ width: 32, minHeight: 48 }}>
            <AddSquareIcon />
          </button>
        )}
        {withEdit && (
          <button type="button" className="flex-shrink-0 flex items-center justify-center" style={{ width: 32, minHeight: 48 }}>
            <PenEditIcon />
          </button>
        )}
      </div>
      {counter && (
        <span className="font-['Roboto',sans-serif] text-[11px] text-[#9ca3af] mt-[2px] block">{counter}</span>
      )}
    </div>
  );
}

function InfoBasicaForm() {
  const [ocultarPublicidad, setOcultarPublicidad] = useState(false);
  const [mostrarEtiqueta, setMostrarEtiqueta] = useState(false);

  return (
    <div className="flex flex-col gap-[8px] p-[12px]">
      <p className="font-['Roboto',sans-serif] font-bold text-[18px] text-[#373737] leading-[27px]">
        Información Básica
      </p>

      <FieldBox label="Tipo de Nota*" chevron withAdd withEdit />
      <FieldBox label="Sección" chevron />
      <FieldBox label="Subsección" chevron />
      <FieldBox label="Título*" tall />
      <FieldBox label="Título de SEO" tall counter="60 disponibles 0 escritos" />
      <FieldBox label="Subtítulo*" tall />
      <FieldBox label="Subtítulo SEO *" tall counter="150 disponibles 0 escritos" />
      <FieldBox label="Fecha*" chevron />
      <FieldBox label="Hora*" chevron />
      <FieldBox label="Lugar *" chevron withAdd withEdit />

      <FieldBox label="Autor *" withAdd />
      <span className="font-['Roboto',sans-serif] text-[11px] text-[#9ca3af] -mt-[4px]">Supportive Text</span>

      <FieldBox label="Keywords SEO*" tall />

      <div className="flex items-center justify-between py-[4px]">
        <span className="font-['Roboto',sans-serif] font-normal text-[14px] text-[#373737]">Ocultar Publicidad</span>
        <Toggle checked={ocultarPublicidad} onChange={() => setOcultarPublicidad(v => !v)} />
      </div>

      <div className="flex items-center justify-between py-[4px]">
        <span className="font-['Roboto',sans-serif] font-normal text-[14px] text-[#373737] pr-[12px]">Mostrar Etiqueta "Publicidad" en Portada</span>
        <Toggle checked={mostrarEtiqueta} onChange={() => setMostrarEtiqueta(v => !v)} />
      </div>

      <FieldBox label="MetaDato Principal*" tall withAdd />
    </div>
  );
}

// ── Placeholder menu icons ────────────────────────────────────────────────────

const PLUS_MENU_ITEMS = [
  { label: "Galería", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#585858" strokeWidth="1.5"/><path d="M3 16l5-5 4 4 3-3 6 4" stroke="#585858" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" fill="#585858"/></svg> },
  { label: "Script", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><polyline points="16 18 22 12 16 6" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: "Cita Textual", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#585858"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg> },
  { label: "Web Insert", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#585858" strokeWidth="1.5"/><path d="M3 9h18M9 21V9" stroke="#585858" strokeWidth="1.5"/></svg> },
  { label: "Números", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M4 14h2a1 1 0 0 1 0 2H4l2 2H4" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: "Bullets", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><line x1="9" y1="6" x2="20" y2="6" stroke="#585858" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="12" x2="20" y2="12" stroke="#585858" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="18" x2="20" y2="18" stroke="#585858" strokeWidth="1.5" strokeLinecap="round"/><circle cx="4" cy="6" r="1.5" fill="#585858"/><circle cx="4" cy="12" r="1.5" fill="#585858"/><circle cx="4" cy="18" r="1.5" fill="#585858"/></svg> },
  { label: "Cronología", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="9" stroke="#585858" strokeWidth="1.5"/><polyline points="12 7 12 12 15 15" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: "Cifras", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" fill="#585858"/><rect x="10" y="8" width="4" height="13" rx="1" fill="#585858"/><rect x="17" y="4" width="4" height="17" rx="1" fill="#585858"/></svg> },
  { label: "Contenido Relacionado", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: "Video", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="2" y="6" width="14" height="12" rx="2" stroke="#585858" strokeWidth="1.5"/><path d="M16 10l6-4v12l-6-4V10z" stroke="#585858" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
  { label: "Adjunto", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: "Encuesta", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#585858" strokeWidth="1.5"/><path d="M9 9h6M9 12h6M9 15h4" stroke="#585858" strokeWidth="1.5" strokeLinecap="round"/></svg> },
];

// ── Main page ─────────────────────────────────────────────────────────────────

const DOTS_MENU_ITEMS = [
  { label: "Publicar", color: "#5c96f6" },
  { label: "Desactivar", color: "#585858" },
  { label: "Eliminar", color: "#585858" },
  { label: "Priorizar", color: "#979797" },
  { label: "Clonar", color: "#585858" },
  { label: "Log", color: "#585858" },
  { label: "Flush Facebook", color: "#585858" },
  { label: "Propiedades", color: "#585858" },
  { label: "Template", color: "#585858" },
  { label: "Encuesta", color: "#585858" },
];

export default function MobileEditor() {
  const [showEditorMenu, setShowEditorMenu] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [selectedEditor, setSelectedEditor] = useState("Editor de Texto");
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [copied, setCopied] = useState<'id' | 'url' | null>(null);

  function handleCopy(type: 'id' | 'url') {
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  const editorTypes = [
    "Editor de Texto",
    "Info. Básica",
    "Imagen de la Nota",
    "Archivo",
    "Galería",
  ];

  return (
    /* Outer centering shell — keeps the 393 px frame centered on desktop */
    <div className="min-h-screen bg-[#e5e7eb] flex items-start justify-center py-8">
      <div
        className="relative bg-white flex flex-col overflow-hidden"
        style={{ width: 393, height: 852, borderRadius: 12, boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
      >
        {/* ── App Header ── */}
        <header
          className="bg-white flex items-center justify-between px-[6px] pr-[16px] shrink-0"
          style={{ height: 50, boxShadow: "0 1px 0 rgba(218,219,224,0.25)" }}
        >
          <div className="flex items-center gap-[4px]">
            <button className="flex items-center justify-center w-[32px] h-[32px]" onClick={() => setShowSearchPanel(v => !v)}>
              <HamburgerIcon />
            </button>
            <span className="font-['Roboto',sans-serif] font-medium text-[14px] text-[#373737] leading-[21px]">
              SACS Pro
            </span>
          </div>
          <div
            className="rounded-full flex items-center justify-center overflow-hidden"
            style={{ width: 30, height: 30, background: "#5c96f6" }}
          >
            <span className="font-['Roboto',sans-serif] font-medium text-[16px] text-white">GC</span>
          </div>
        </header>

        {/* ── Article Header Bar ── */}
        <div className="bg-white px-[12px] shrink-0">
          {/* Top row */}
          <div className="flex items-center justify-between h-[42px]">
            <div className="bg-[#fecf4a] flex items-center justify-center px-[8px] py-[4px] rounded-[4px]">
              <span className="font-['Roboto',sans-serif] font-medium text-[14px] text-black leading-[21px] whitespace-nowrap">
                En Edición
              </span>
            </div>
            <div className="flex items-center gap-[0px]" style={{ height: '42px' }}>
              <button className="flex items-center justify-center w-[32px] h-full" style={{ width: '42px', height: '42px' }}>
                <UndoIcon />
              </button>
              <button className="flex items-center justify-center w-[32px] h-full" style={{ width: '42px', height: '42px' }}>
                <RedoIcon />
              </button>
              <button className="flex items-center justify-center w-[32px] h-full" style={{ width: '42px' }} onClick={() => setShowPlusMenu(v => !v)}>
                <PlusCircleIcon />
              </button>
              <button
                className="flex items-center justify-center w-[32px] h-full px-[0px]"
                style={{ paddingLeft: '0px', paddingRight: '0px', width: '42px' }}
                onClick={() => setShowDotsMenu(v => !v)}
              >
                <ThreeDotsIcon />
              </button>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex items-center gap-[16px] h-[48px]">
            {/* ID */}
            <div className="relative flex items-center">
              <button className="flex items-center" onClick={() => handleCopy('id')}>
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                  <CopyIcon />
                </div>
                <span className="font-['Roboto',sans-serif] font-normal text-[14px] text-[#6b7280] leading-[21px] whitespace-nowrap">
                  ID: 2159109
                </span>
              </button>
              {copied === 'id' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[4px] bg-[#373737] text-white text-[12px] px-[8px] py-[4px] rounded-[4px] whitespace-nowrap pointer-events-none">
                  copiado
                </div>
              )}
            </div>
            {/* URL */}
            <div className="relative flex items-center">
              <button className="flex items-center" onClick={() => handleCopy('url')}>
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                  <CopyIcon />
                </div>
                <span className="font-['Roboto',sans-serif] font-normal text-[14px] text-[#0d6efd] leading-[21px] whitespace-nowrap">
                  Ir a URL
                </span>
              </button>
              {copied === 'url' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[4px] bg-[#373737] text-white text-[12px] px-[8px] py-[4px] rounded-[4px] whitespace-nowrap pointer-events-none">
                  copiado
                </div>
              )}
            </div>
            {/* SEO badge */}
            <div className="bg-[#fdecea] flex items-center justify-center px-[8px] py-[4px] rounded-full">
              <span className="font-['Roboto',sans-serif] font-medium text-[14px] text-black leading-[21px] whitespace-nowrap">
                SEO 1.4
              </span>
            </div>
            {/* UX badge */}
            <div className="bg-[#e0f2f1] flex items-center justify-center px-[8px] py-[4px] rounded-full">
              <span className="font-['Roboto',sans-serif] font-medium text-[14px] text-black leading-[21px] whitespace-nowrap">
                UX 8.7
              </span>
            </div>
          </div>
        </div>

        {/* ── Editor Type Selector ── */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowEditorMenu(!showEditorMenu)}
            className="w-full h-[48px] bg-white border border-[#dadce0] flex items-center justify-between px-[16px] py-[10px]"
            style={{ borderRadius: 6 }}
          >
            <span className="font-['Roboto',sans-serif] font-normal text-[16px] text-[#373737] leading-[24px]">
              {selectedEditor}
            </span>
            <div className={`transition-transform duration-150 ${showEditorMenu ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </div>
          </button>
          {showEditorMenu && (
            <div className="absolute left-0 right-0 top-full bg-white border border-[#dadce0] z-20 shadow-lg" style={{ borderRadius: 6 }}>
              {editorTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => { setSelectedEditor(type); setShowEditorMenu(false); }}
                  className="w-full text-left px-[16px] h-[44px] font-['Roboto',sans-serif] text-[15px] text-[#373737] hover:bg-[#f5f5f5] transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Note Content Area ── */}
        <div className="flex-1 overflow-y-auto">
          {selectedEditor === "Info. Básica" ? (
            <InfoBasicaForm />
          ) : (
            <div className="flex flex-col gap-[12px] p-[12px]">
              <p
                className="font-['Roboto',sans-serif] font-medium leading-[1.3] text-[#b1b1b1] w-full"
                style={{ fontSize: 28 }}
              >
                Título de la nota
              </p>
              <p
                className="font-['Roboto',sans-serif] font-medium leading-[1.4] text-[#b1b1b1] w-full"
                style={{ fontSize: 20 }}
              >
                Subtitulo de la nota
              </p>
              <p
                className="font-['Roboto',sans-serif] font-normal text-[14px] text-[#b1b1b1] leading-[21px]"
              >
                Cuerpo de la nota
              </p>
            </div>
          )}
        </div>

        {/* ── Bottom keyboard area ── */}
        <div className="shrink-0">
          {/* Formatting toolbar */}
          <div
            className="bg-white flex items-center px-[8px] py-[6px] overflow-x-auto"
            style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-center gap-[6px]">
              {TOOLBAR_TOOLS.map(({ icon, label }) => (
                <button
                  key={label}
                  title={label}
                  className="w-[32px] h-[32px] flex items-center justify-center rounded hover:bg-[#f0f4ff] transition-colors shrink-0"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Android keyboard */}
          <AndroidKeyboard />
        </div>

        {/* ── Search panel (hamburger) ── */}
        {showSearchPanel && (
          <>
            <div
              className="absolute left-0 right-0 bottom-0 bg-[#d9d9d9] mix-blend-multiply z-20"
              style={{ top: 50 }}
              onClick={() => setShowSearchPanel(false)}
            />
            <div className="absolute left-0 right-0 bg-white z-30" style={{ top: 50 }}>
              <div className="px-[12px] py-[8px]">
                <div className="flex items-center bg-[#eeeeee] rounded-[10px] px-[10px] gap-[8px]" style={{ height: 36 }}>
                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                    <path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667Z" stroke="#8e8e93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M14 14l-2.9-2.9" stroke="#8e8e93" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <span className="font-['Roboto',sans-serif] font-normal text-[16px] text-[#8e8e93] leading-[24px]">
                    Búsqueda
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── Plus → Añadir Placeholders menu ── */}
        {showPlusMenu && (
          <>
            <div
              className="absolute inset-0 bg-[#d9d9d9] mix-blend-multiply z-20"
              onClick={() => setShowPlusMenu(false)}
            />
            <div className="absolute top-0 bottom-0 right-0 bg-white z-30 flex flex-col overflow-hidden" style={{ width: 240 }}>
              <div className="bg-[#f5f5f5] px-[16px] flex items-center shrink-0" style={{ height: 48 }}>
                <span className="font-['Roboto',sans-serif] font-medium text-[14px] text-[#585858] leading-[21px]">
                  Añadir Placeholders
                </span>
              </div>
              <div className="overflow-y-auto flex-1">
                {PLUS_MENU_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-[12px] px-[16px] shrink-0 hover:bg-[#f5f5f5] transition-colors"
                    style={{ minHeight: 48 }}
                    onClick={() => setShowPlusMenu(false)}
                  >
                    {item.icon}
                    <span className="font-['Roboto',sans-serif] font-normal text-[15px] text-[#373737] leading-[22px] whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Three-dots dropdown menu ── */}
        {showDotsMenu && (
          <>
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#d9d9d9] mix-blend-multiply"
              onClick={() => setShowDotsMenu(false)}
            />
            {/* Menu panel */}
            <div className="absolute top-0 right-0 bg-white border border-[#dadce0] flex flex-col py-[6px] overflow-y-auto" style={{ width: 226, bottom: 0 }}>
              {DOTS_MENU_ITEMS.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center px-[16px] shrink-0 text-left hover:bg-[#f5f5f5] transition-colors"
                  style={{ minHeight: 48, color: item.color }}
                  onClick={() => setShowDotsMenu(false)}
                >
                  <span className="font-['Roboto',sans-serif] font-normal text-[16px] leading-[24px] whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
