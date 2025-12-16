import React from "react";

function TabHeader(props) {
  const { renderIcon, title, subtitle } = props;
  return (
    <div className="mb-8 flex w-full flex-row items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 p-2.5">
        <div className="relative flex h-5 w-5 flex-col items-start justify-start">
          {renderIcon({ className: "w-5 h-5 relative fill-[#E7436A]" })}
        </div>
      </div>
      <div className="inline-flex w-full shrink grow basis-0 flex-col items-start justify-start">
        <div className="font-Outfit leading-relaxed self-stretch text-xl font-normal text-black">
          {title}
        </div>
        <div className="font-Outfit leading-tight text-right text-sm font-normal text-neutral-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default TabHeader;
