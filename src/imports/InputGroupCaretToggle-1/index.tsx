import svgPaths from "./svg-rq9u34ywz0";

function Caret() {
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

export default function InputGroupCaretToggle() {
  return (
    <div className="bg-[#356ac3] content-stretch flex items-center justify-center relative rounded-br-[6px] rounded-tr-[6px] size-full" data-name="Input Group / Caret Toggle">
      <div aria-hidden className="absolute border border-[#285093] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
      <Caret />
    </div>
  );
}