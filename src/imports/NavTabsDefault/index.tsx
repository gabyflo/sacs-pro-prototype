function Label() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#373737] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tab
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

export default function NavTabsDefault() {
  return (
    <div className="content-stretch flex items-start relative rounded-tr-[6px] size-full" data-name="Nav Tabs/Default">
      <TabItem />
    </div>
  );
}