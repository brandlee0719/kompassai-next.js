import { Button } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";
import BaseContainer from "../../components/BaseContainer";

import DataAnalystImg1 from "../../../assets/image/data_analyst1.png";
import DataAnalystImg2 from "../../../assets/image/data_analyst2.png";
import DataAnalystImg3 from "../../../assets/image/data_analyst3.png";

import { pageContentWidth } from "../../utils/common";

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <BaseContainer width={pageContentWidth}>
      <div className="w-full bg-white p-[24px] sm:p-[48px] md:p-[80px]">
        {/* Streamline your hiring and screening */}
        <div className="w-[200px] font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-magenta-500 bg-white">
          DATA ANALYST
        </div>
        <div className="w-full flex flex-col xl:flex-row xl:gap-[80px] justify-between">
          <div className="w-full xl:w-[661px]">
            <div className="font-Outfit text-3xl md:text-4xl text-stone-950 font-[600] mt-[24px]">
              Streamline your hiring and screening process
            </div>
            <div className="font-Outfit text-lg md:text-2xl text-stone-950 font-[600] mt-[24px] lg:mt-[81px]">
              Effortless hiring : simplify screening and documentation
            </div>
            <div className="font-Outfit text-md md:text-lg text-stone-950 font-[400] mt-[24px] lg:mt-[60px]">
              Eliminate the need for HR personnel to access additional platforms
              or track down documents. When you request a background check
              through Deel, we take care of all the administrative work.
            </div>
          </div>
          <div className="flex justify-center">
            <img src={DataAnalystImg1} />
          </div>
        </div>

        <div className="w-full flex flex-col-reverse xl:flex-row xl:gap-[80px] justify-between items-center">
          <div className="flex justify-center">
            <img src={DataAnalystImg2} />
          </div>
          <div className="w-full xl:w-[661px]">
            <div className="font-Outfit text-3xl md:text-4xl text-stone-950 font-[600] mt-[24px]">
              Accelerate Your Hiring Process with Our Rapid Turnaround Time.
            </div>
            <div className="font-Outfit text-md md:text-lg text-stone-950 font-[400] mt-[24px] lg:mt-[60px]">
              Achieve an approximately 80% reduction in your time-to-hire,
              receiving screening results within minutes, all thanks to our
              AI-powered technology
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row xl:gap-[80px] justify-between items-center">
          <div className="w-full xl:w-[661px]">
            <div className="font-Outfit text-3xl md:text-4xl text-stone-950 font-[600] mt-[24px]">
              Enhance Candidate Convenience
            </div>
            <div className="font-Outfit text-md md:text-lg text-stone-950 font-[400] mt-[24px] lg:mt-[60px]">
              Candidates can conveniently verify their identity using either a
              mobile or desktop device, monitor the progress of their background
              check, and access in-app support.
            </div>
          </div>
          <div className="flex justify-center">
            <img src={DataAnalystImg3} />
          </div>
        </div>
      </div>
    </BaseContainer>
  );
}
