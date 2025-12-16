import { useState, useEffect } from "react";
import CustomCheckBox from "../../assets/image/icons/checkbox_scale.svg";
import DownSVGIcon from "../../assets/image/icons/down.svg";
import StarSVGIcon from "../../assets/image/icons/star.svg";
import { Input, Button } from "@material-tailwind/react";
import Text from "../Text";
export default function ScaleModeComponent(props) {
  return (
    <div className="mx-[16px] mt-[20px] flex h-[743px] w-[315px] flex-col justify-between rounded-[30px] border-[1px] p-[8px_8px] md:h-[843px] xl:w-[280px] 2xl:w-[315px]">
      <div>
        <div className="flex w-full flex-col items-center rounded-[24px] bg-[#F3F3F3] p-[24px_24px]">
          <Text variant="Header4" className="text-emerald-500">
            Scale
          </Text>
          <Text
            variant="CaptionSmall"
            className="h-10 text-stone-950 opacity-60"
          >
            Ideal for prospecting at large scales
          </Text>
          <div className="mt-[15px] flex flex-row">
            <Text variant="Header3" className="text-emerald-500">
              Let's talk
            </Text>
          </div>
        </div>
        <div className="mt-[16px] p-[32px_24px] md:mt-[20px]">
          <div className="flex flex-col items-center">
            <img src={StarSVGIcon} width={24} height={24} />
            <div className="font-Outfit text-md text-center font-[300] text-stone-950 ">
              Unlimited contacts
            </div>
            <div className="font-Outfit text-center text-xs font-[400] text-stone-950 opacity-40">
              Manual shows of up to 25 contacts
            </div>
          </div>
          <Button className="text-md font-Outfit mt-[20px] flex h-[40px] w-full items-center justify-center rounded-full bg-emerald-500 px-[24px] font-[700] text-white md:mt-[49px]">
            CONTACT SALES
          </Button>

          <div className="mt-6 justify-center text-center">
            <Text variant="CaptionBig" className=" text-center text-stone-950">
              Everything in Premium, plus:
            </Text>
          </div>
          <div className="mt-6 flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              CSV enrichment
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Prospecting bulk show (10,000 contacts)
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              CRM integrations
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              SSO
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Advanced team management
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Customer Success Manager
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Intent signals
            </div>
          </div>
          <div className="mt-[8px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Job changes
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
