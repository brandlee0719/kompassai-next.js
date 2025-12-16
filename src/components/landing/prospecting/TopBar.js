import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import BrowserImage from "../../../assets/image/browser.png";
import ShiningIcon from "../../../assets/image/icons/shiny.svg";

import BaseContainer from '../BaseContainer'
import { pageContentWidth } from "../../utils/common";

export default function TopBar(props) {
  return (
    <div className="w-full bg-[#75EED9]">
      <BaseContainer width={pageContentWidth}>
        <div className="w-full flex flex-col md:flex-row md:justify-between py-[60px] px-[24px] md:pl-[80px] md:pr-[0px] ">
          <div className="relative flex flex-col items-center md:items-start">
            <Button className="rounded-full p-[5px_16px] text-xs md:text-lg font-[400] text-[#0A2E31] font-Outfit bg-[#CEFFF9]">
              LINKEDIN PROSPECTING TOOL
            </Button>
            <div className="font-Outfit w-full md:w-[450px] xl:w-[870px] leading-none text-5xl 2xl:text-7xl font-[700] text-[#090C05] mt-[24px]">
              Hire employees worldwide with the #1 Employer of Record
            </div>
            <div className="absolute  top-[30px] right-[10px] md:top-[50px] md:right-[50px]">
              <img src={ShiningIcon} />
            </div>
            <div className="font-Outfit md:w-[450px] w-full xl:w-[870px] text-xl text-[#090C05] opacity-70 mt-[40px]">
              Let us hire employees on your behalf to quickly onboard employees
              in 100+
              <br />
              countries without the cost and extra admin.
            </div>
            <Button className="flex items-center justify-center p-[20px_32px] rounded-full bg-[#0A2E31] mt-[64px]">
              <div className="font-Outfit text-2xl font-[600] text-[#FFF]">
                REQUEST A DEMO
              </div>
            </Button>
          </div>
          <div className=" mt-[24px]">
            <img src={BrowserImage} />
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}
