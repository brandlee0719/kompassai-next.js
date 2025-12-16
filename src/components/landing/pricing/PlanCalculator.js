import { useState, useEffect } from "react";
import CustomSlider from "../common/CustomSlider";

export default function PlanCalculator(props) {
  return (
    <div className="w-[300px] xl:w-[500px] 2xl:w-[600px] bg-emerald-500 rounded-[15px] md:rounded-[30px] mx-[16px] p-[20px] md:p-[20px_40px] mt-[40px] md:mt-[80px]">
      <div className="font-Outfit text-2xl text-white font-[700] text-center">
        Plan Estimation Calculator
      </div>
      <div>
        <div className="font-Outfit text-md text-white font-[400] text-start mt-[12px] md:mt-[40px]">
          What is your monthly sales demo target? 10 Demos
        </div>
        <CustomSlider />
        <div className="flex w-full flex-row justify-between">
          <div className="font-Outfit text-sm font-[700] opacity-40 text-[#FFFFFF] mt-[11px] ">
            $0
          </div>
          <div className="font-Outfit text-sm font-[700] opacity-40 text-[#FFFFFF] mt-[11px]">
            $2000
          </div>
        </div>
      </div>
      <div>
        <div className="font-Outfit text-md text-white font-[400] text-start mt-[40px]">
          What is your anticipated call to demo conversion rate?
        </div>
        <CustomSlider />
        <div className="flex w-full flex-row justify-between">
          <div className="font-Outfit text-sm font-[700] opacity-40 text-[#FFFFFF] mt-[11px] ">
            $0
          </div>
          <div className="font-Outfit text-sm font-[700] opacity-40 text-[#FFFFFF] mt-[11px]">
            $2000
          </div>
        </div>
      </div>
      <div>
        <div className="font-Outfit text-md text-white font-[400] text-start mt-[40px]">
          What is your anticipated email to demo conversion rate?
        </div>
        <CustomSlider />
        <div className="flex w-full flex-row justify-between">
          <div className="font-Outfit text-sm font-[700] opacity-40 text-[#FFFFFF] mt-[11px] ">
            $0
          </div>
          <div className="font-Outfit text-sm font-[700] opacity-40 text-[#FFFFFF] mt-[11px]">
            $2000
          </div>
        </div>
      </div>
    </div>
  );
}
