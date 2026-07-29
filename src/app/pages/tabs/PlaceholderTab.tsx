export default function PlaceholderTab({ label }: { label: string }) {
  return (
    <div className="flex-1 flex items-center justify-center text-[#979797] text-[15px]">
      <span>Sección: <strong className="text-[#373737]">{label}</strong></span>
    </div>
  );
}
