import svgPaths from "./svg-gp58bqfqqr";

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

export default function Tools() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end p-[8px] relative size-full" data-name="Tools">
      <FormatTools />
      <CardTools />
    </div>
  );
}