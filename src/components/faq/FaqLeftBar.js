import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function FaqLeftBar(props) {
  const [selectedIndex, setSelectecIndex] = useState(0);

  return (
    <div className="flex flex-col items-center bg-white rounded-[16px] p-[32px] px-0">
      <Button
        onClick={() => setSelectecIndex(0)}
        className={`${
          selectedIndex === 0
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Get started
      </Button>
      <Button
        onClick={() => setSelectecIndex(1)}
        className={`${
          selectedIndex === 1
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Home
      </Button>
      <Button
        onClick={() => setSelectecIndex(2)}
        className={`${
          selectedIndex === 2
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Search & Prospecting
      </Button>
      <Button
        onClick={() => setSelectecIndex(3)}
        className={`${
          selectedIndex === 3
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Engage
      </Button>
      <Button
        onClick={() => setSelectecIndex(4)}
        className={`${
          selectedIndex === 4
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Plays
      </Button>
      <Button
        onClick={() => setSelectecIndex(5)}
        className={`${
          selectedIndex === 5
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Enrich
      </Button>
      <Button
        onClick={() => setSelectecIndex(6)}
        className={`${
          selectedIndex === 6
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Deals
      </Button>
      <Button
        onClick={() => setSelectecIndex(7)}
        className={`${
          selectedIndex === 7
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Integrations
      </Button>
      <Button
        onClick={() => setSelectecIndex(8)}
        className={`${
          selectedIndex === 8
            ? "bg-[#75EED9]"
            : "bg-white border-[1px] border-[#ddd]"
        } "w-[260px] h-[54px] mt-[8px] rounded-[16px] font-Outfit text-lg font-[400] normal-case text-stone-950 w-[260px] h-[54px]"`}
      >
        Settings & Billing
      </Button>
    </div>
  );
}
