import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import LeadGenImg from "@/assets/image/advanced_search/lead-gen.svg";
import ManualImg from "@/assets/image/advanced_search/manual.svg";
import ROIImg from "@/assets/image/advanced_search/roi.svg";



const data = [
  {
    icon: LeadGenImg,
    title: "Automated Lead Generation",
    content:
      "Enrich company and contact information, improve the quality of your leads and increase ABM campaign conversion rates."
  },
  {
    icon: ManualImg, 
    title: "Reduced Manual Work",
    content: "Streamlining your work processes like lead prioritization and assignment by teams or territories."
  },
  {
    icon: ROIImg,
    title: "Increased ROI",
    content: "Spend less time prospecting and maximize time spent reaching out to ideal customers or prospects."
  }
];
export default function OpportunitiesPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-white">
        <div className="w-full py-24 px-12">
          <div className="w-full">
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">
              <div className="w-full 2xl:w-[650px] font-OutfitBold text-[3.3rem] text-center text-stone-950 mt-[24px]">
                Seize new business opportunities
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center mt-[40px] md:mt-[40px]">
            <div className="w-full flex flex-col md:flex-row gap-4">
              {data.map((d) => {
                return (
                  <div className="w-1/3 flex flex-col p-12 text-center">
                    <div className="mx-auto">
                      <ReactSVG beforeInjection={(svg) => {
                          svg.classList.add('h-20')
                        }} 
                        src={d.icon}
                      />
                    </div>
                    <div className="w-full text-2xl text-stone-950 font-OutfitBold mt-8">
                      {d.title}
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="w-full text-md text-stone-950 font-Outfit font-[400] mt-4">
                        {d.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
}
