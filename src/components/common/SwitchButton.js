import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import cn from "classnames";
export default function SwitchButton(props) {
  const { switchState } = props;
  const [isAnnual, setIsAnnual] = switchState;

  const onAnnualClick = () => {
    setIsAnnual(!isAnnual);
  };
  const options = [
    {
      text: "Annual billing",
      annual: true,
    },
    { text: "Monthly billing", annual: false },
  ];
  return (
    <div className="relative flex w-[294px] items-center justify-center lg:w-[380px]">
      <div className="relative mt-[10px] flex w-full flex-row rounded-[30px] border-[1px] border-[#E0E0E2] bg-transparent px-[4px] py-[4px] normal-case">
        <div
          className={cn(
            { "translate-x-[calc(100%)]": !isAnnual },
            "left-4px absolute top-[50%] z-[1] h-[calc(100%-12px)] w-[calc(50%-4px)] translate-y-[-50%] rounded-[30px] bg-black transition",
          )}
        ></div>
        {options.map((el) => {
          return (
            <div
              onClick={onAnnualClick}
              className={cn(
                "font-Outfit md:text-md z-[2] flex h-full w-1/2 items-center justify-center rounded-[30px] p-[9px_5px] lg:p-[12px_5px]  font-[400] text-lg lg:text-2xl",
              )}
            >
              <span
                className={cn("text-black", {
                  "text-white ": !(!isAnnual === el.annual),
                })}
              >
                {el.text}
              </span>
            </div>
          );
        })}
  
        <div className="font-OutfitSemiBold absolute left-[25%] top-[100%] z-10 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[8px] bg-[#F9D861] p-[2.5px_20px] text-xs font-[700] leading-[140%] text-black  drop-shadow-lg  ">
          Save 20%
        </div>
      </div>
    </div>
  );
}
