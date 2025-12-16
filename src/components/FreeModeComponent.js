import { useState, useEffect } from "react";
import CustomCheckBox from "../assets/image/icons/checkbox_free.svg";
import DownSVGIcon from "../assets/image/icons/down.svg";
import { Input, Button } from "@material-tailwind/react";

export default function FreeModeComponent(props) {
  return (
    <div className="mx-[16px] mt-[20px] flex h-[743px] w-[356px] flex-col justify-between rounded-[30px] border-[1px] p-[8px_8px] md:h-[843px]">
      <div>
        <div className="flex h-[158px] w-full  flex-col items-center rounded-[24px] bg-[#F3F3F3] p-[24px_24px] md:h-[178px]">
          <div className="font-Outfit text-[25px] font-[700] text-stone-950 md:text-[28px]">
            Free
          </div>
          <div className="font-Outfit text-[12px] font-[400] text-stone-950 opacity-60">
            Test drive it
          </div>
          <div className="flex flex-row ">
            <div className="font-Outfit text-[40px] font-[600] text-stone-950 md:text-[46px] ">
              $0
            </div>
            <div className="flex items-end  py-[10px]">
              <div className="  font-Outfit text-[16px] font-[700] text-stone-950 ">
                /mo
              </div>
            </div>
          </div>
        </div>
        <div className="p-[32px_24px]">
          <div className="flex h-[49px] w-full  items-center  rounded-full border-[1px] border-[#E8E7E7] px-[24px]">
            <div className="font-Outfit text-[16px] font-[300] text-stone-950">
              5 credits
            </div>
            <div className="font-Outfit ml-[12px] text-[16px] font-[300] text-stone-950 opacity-70">
              1 user
            </div>
          </div>
          <Button className="font-Outfit mt-[15px] flex h-[52px] w-full items-center justify-center rounded-full bg-[#090C05] px-[24px]  text-[16px] font-[700] text-white sm:mt-[85px]">
            GET STARTED
          </Button>
          <div className=" font-Outfit mt-[24px] justify-center text-center text-[16px] font-[700] text-stone-950">
            Free includes:
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Direct phone numbers
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Landline phone numbers
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Email addresses
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Basic prospecting platform
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Basic Chrome extension
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <div className="mb-[32px] flex  flex-row px-[32px]">
          <div className="font-Outfit text-[15px] font-[400] text-stone-950 md:text-[18px]">
            Show plan comparison
          </div>
          <div className="ml-[16px] flex items-center ">
            <img src={DownSVGIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
