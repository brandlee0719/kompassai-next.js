import { useState, useEffect } from "react";
import CustomCheckBox from "../../assets/image/icons/checkbox_free.svg";
import DownSVGIcon from "../../assets/image/icons/down.svg";
import { Input, Button } from "@material-tailwind/react";
import Text from "../Text";

export default function FreeModeComponent(props) {
  return (
    <div className="mx-[16px] mt-[20px] flex h-[743px] w-[315px] flex-col justify-between rounded-[30px] border-[1px] p-[8px_8px] md:h-[843px] xl:w-[280px] 2xl:w-[315px]">
      <div>
        <div className="flex w-full flex-col  items-center rounded-[24px] bg-[#F3F3F3] p-[24px_24px]">
          <Text variant="Header4" className="text-stone-950">
            Free
          </Text>
          <Text
            variant="CaptionSmall"
            className="h-10 text-stone-950 opacity-60"
          >
            Test drive it
          </Text>
          <div className="mt-[15px] flex flex-row">
            <Text variant="Header3" className="text-stone-950">
              $0
            </Text>
            <div className="flex items-end">
              <Text variant="CaptionBig" className="text-stone-950">
                /mo
              </Text>
            </div>
          </div>
        </div>
        <div className="p-[32px_24px]">
          <div className="flex h-[49px] w-full  items-center  rounded-full border-[1px] border-[#E8E7E7] px-[24px]">
            <div className="font-Outfit text-sm font-[300] text-stone-950">
              5 credits
            </div>
            <div className="font-Outfit ml-[12px] text-sm font-[300] text-stone-950 opacity-70">
              1 user
            </div>
          </div>
          <Button className="text-md  font-Outfit mt-[15px] flex h-[40px] w-full items-center justify-center rounded-full bg-[#090C05] px-[24px] font-[700] text-white sm:mt-[85px]">
            GET STARTED
          </Button>
          <div className="mt-6 justify-center text-center">
            <Text variant="CaptionBig" className=" text-center text-stone-950">
              Free includes:
            </Text>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Direct phone numbers
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Landline phone numbers
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Email addresses
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Basic prospecting platform
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Basic Chrome extension
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <div className="mb-[32px] flex  flex-row px-[32px]">
          <div className="font-Outfit text-md font-[400] text-stone-950">
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
