import { Button } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";
import BaseContainer from "../../components/BaseContainer";

import DataAnalystImg1 from "@/assets/image/CSV_export/data_analytics_1.svg";
import DataAnalystImg2 from "@/assets/image/CSV_export/data_analytics_2.svg";
import DataAnalystImg3 from "@/assets/image/CSV_export/data_analytics_3.svg";

import { pageContentWidth } from "../../utils/common";

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
      <div className="bg-white p-12 sm:p-[48px] md:p-[80px] w-2/3 mx-auto space-y-4">
        

        <div className="w-full flex justify-between">
          <div className="flex w-5/12">
            <img src={DataAnalystImg1} className="h-[23rem] drop-shadow-lg"/>
          </div>
          <div className="w-7/12 my-auto pl-6 space-y-4">
            <div className="font-OutfitBold text-stone-950 text-4xl">
              Get control of your stale data instantly
            </div>
            <div className="font-Outfit text-lg text-stone-950">
              There is no need to set-up integrations or manage a complex CRM - our bulk enrichment platform enables any company to get instant access to fresh data through a CSV upload.
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="w-7/12 my-auto pr-6 space-y-4">
            <div className="font-OutfitBold text-stone-950 text-4xl">
              Reduce time to enrich large batches of records 
            </div>
            <div className="font-Outfit text-lg text-stone-950">
              Speed up your time to enrich individual records, through the bulk enrichment that enables you to get fresh data for 1000s of records within minutes.
            </div>
          </div>
         <div className="flex w-5/12 flex-row-reverse">
            <img src={DataAnalystImg2} className="h-[23rem] drop-shadow-lg"/>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex w-5/12">
            <img src={DataAnalystImg3} className="h-[23rem] drop-shadow-lg"/>
          </div>
          <div className="w-7/12 my-auto pl-6 space-y-4">
            <div className="font-OutfitBold text-stone-950 text-4xl">
              Only pay for validated and enriched data
            </div>
            <div className="font-Outfit text-lg text-stone-950">
              Save thousands of dollars compared to other platforms that charge for stale data -  KompassAI only charges for data we’re able to find and verify to ensure you can have a high level of confidence while prospecting.
            </div>
          </div>
        </div>

        

      </div>
  );
}
