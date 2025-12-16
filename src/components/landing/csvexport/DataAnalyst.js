import { Button } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";
import BaseContainer from "../../components/BaseContainer";

import DataAnalystImg4 from "../../../assets/image/data_analyst4.png";
import DataAnalystImg5 from "../../../assets/image/data_analyst5.png";

import { pageContentWidth } from "../../utils/common";

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <BaseContainer width={pageContentWidth}>
      <div className="w-full bg-white p-[24px] sm:p-[48px] md:p-[80px]">
        <div className="w-full flex flex-col-reverse xl:flex-row xl:gap-[50px] justify-between">
          <div className="flex">
            <img src={DataAnalystImg4} />
          </div>
          <div className="w-full xl:w-[600px]">
            <div className="font-Outfit text-3xl md:text-4xl text-stone-950 font-[600] mt-[24px]">
              Simplify your project management and collaboration efforts
            </div>
            <div className="font-Outfit text-md md:text-lg text-stone-950 font-[400] mt-[24px] lg:mt-[60px]">
              Say goodbye to the hassle of juggling multiple tools and searching
              for project updates. When you use KompassAI, we centralize all
              your project-related tasks and communication, streamlining your
              workflow and eliminating the need for constant platform hopping.
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row xl:gap-[80px] justify-between items-center my-10">
          <div className="w-full xl:w-[661px]">
            <div className="w-[200px] font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-magenta-500 bg-white">
              ADVANTAGE
            </div>
            <div className="font-Outfit text-3xl md:text-4xl text-stone-950 font-[600] mt-[24px]">
              Discover the power of KompassAI
            </div>
            <div className="font-Outfit text-md md:text-lg text-stone-950 font-[400] mt-[24px] lg:mt-[60px]">
              Unlock the potential of your sales strategy with KompassAI, the
              comprehensive sales intelligence platform that consolidates all
              your lead identification needs into one seamless solution.
            </div>
            <div className="my-10">
              <Button className="p-[10px_25px] text-sm md:text-md border-[#FFF] bg-emerald-500 border-[1px] font-Outfit text-white font-[700] rounded-full uppercase">
                TRY FOR FREE
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={DataAnalystImg5} />
          </div>
        </div>
      </div>
    </BaseContainer>
  );
}
