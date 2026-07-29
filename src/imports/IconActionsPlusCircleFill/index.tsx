import svgPaths from "./svg-8plw7mj2nr";

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

export default function IconActionsPlusCircleFill() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Icon/Actions/plus-circle-fill">
      <PlusCircleFill />
    </div>
  );
}