import svgPaths from "./svg-5vcpkkef7v";

function Trash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trash">
          <path d={svgPaths.p19a8d580} fill="var(--fill-0, #373737)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p407eaf0} fill="var(--fill-0, #373737)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function IconActionsTrash() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] size-full" data-name="Icon/Actions/trash">
      <Trash />
    </div>
  );
}