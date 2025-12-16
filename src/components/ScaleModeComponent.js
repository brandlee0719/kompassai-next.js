import { useState, useEffect } from "react";
import CustomCheckBox from "../assets/image/icons/checkbox_scale.svg";
import DownSVGIcon from "../assets/image/icons/down.svg";
import StarSVGIcon from "../assets/image/icons/star.svg";
import { Input, Button } from "@material-tailwind/react";
export default function ScaleModeComponent(props) {
  return (
    <div className="mx-[16px] mt-[20px] flex h-[743px] w-[356px]  flex-col justify-between rounded-[30px] border-[1px] p-[8px_8px]  md:h-[843px]">
      <div>
        {" "}
        <div className="w-fullh-[158px] flex flex-col items-center rounded-[24px] bg-[#F3F3F3] p-[24px_24px] md:h-[178px]">
          <div className="font-Outfit text-[25px] font-[700] text-emerald-500 md:text-[28px]">
            Scale
          </div>
          <div className="font-Outfit text-[12px] font-[400] text-emerald-500 opacity-60">
            Ideal for prospecting at large scales
          </div>
          <div className="flex flex-row ">
            <div className="font-Outfit text-[40px] font-[600] text-emerald-500 md:text-[46px] ">
              Let's talk
            </div>
          </div>
        </div>
        <div className="mt-[20px] md:mt-[49px]">
          <div className="flex flex-col items-center">
            <img src={StarSVGIcon} width={24} height={24} />
            <div className="font-Outfit text-center text-[16px] font-[300] text-stone-950 ">
              Unlimited contacts
            </div>
            <div className="font-Outfit text-center text-[12px] font-[400] text-stone-950 opacity-40">
              Manual shows of up to 25 contacts
            </div>
          </div>
          <Button className="font-Outfit mt-[20px] flex h-[52px] w-full items-center justify-center rounded-full bg-emerald-500 px-[24px]  text-[16px] font-[700] text-white md:mt-[49px]">
            CONTACT SALES
          </Button>
          <div className=" font-Outfit mt-[24px] justify-center text-center text-[16px] font-[700] text-stone-950">
            Everything in Premium, plus:
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              CSV enrichment
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Prospecting bulk show (10,000 contacts)
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              CRM integrations
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              SSO
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Advanced team management
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Customer Success Manager
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Intent signals
            </div>
          </div>
          <div className="mt-[9px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Job changes
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center ">
        <div className="mb-[32px] flex  flex-row px-[32px]">
          <div className="font-Outfit text-[18px] font-[400] text-stone-950">
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
