import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import Step1SVG from "@/assets/image/integrations/step1.svg";
import Step2SVG from "@/assets/image/integrations/step2.svg";
import Step3SVG from "@/assets/image/integrations/step3.svg";
import Step4SVG from "@/assets/image/integrations/step4.svg";
import Step5SVG from "@/assets/image/integrations/step5.svg";
import Step6SVG from "@/assets/image/integrations/step6.svg";



import BaseContainer from "../../components/BaseContainer";

const row1 = [
  {
    icon: Step1SVG,
    title: "Step 1",
    sub: "Connect to CRM in 1 Click"
  },
  {
    icon: Step2SVG, 
    title: "Step 2",
    sub: "Filter your search results"
  },
  {
    icon: Step3SVG,
    title: "Step 3",
    sub: "Bulk enrich 100s of contacts in 1 click"
  }
];

const row2 = [
  {
    icon: Step4SVG, 
    title: "Step 4",
    sub: "Bulk save the list to CRM"
  },
  {
    icon: Step5SVG,
    title: "Step 5",
    sub: "Enrich your database"
  },
  {
    icon: Step6SVG,
    title: "Step 6",
    sub: "Use the list to book meetings"
  }
];

export default function BusinessLeaderPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-white">
      <BaseContainer width="1680">
        <div className="w-full py-24 px-12">
          <div className="w-full">
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">
              <div className="w-full 2xl:w-[650px] font-OutfitBold text-[2.25rem] text-center text-stone-950">
                How it works
              </div>
              <div className="w-full font-Outfit text-[1.25rem] text-center text-stone-350 mt-4">
                Sync the most accurate data and always work with the freshest database.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center mt-16">
            <div className="w-full flex flex-col md:flex-row justify-center gap-12">
              {row1.map((d) => {
                return (
                  <div className="w-2/12 flex flex-col text-center">
                    <div className="">
                      <ReactSVG beforeInjection={(svg) => {
                          svg.classList.add('h-20')
                          svg.classList.add('mx-auto')
                        }} 
                        src={d.icon}
                      />
                    </div>
                    <div className="w-full text-lg text-stone-950 font-OutfitBold mt-2">
                      {d.title}
                    </div>
                     <div className="w-full text-sm text-stone-950 font-Outfit mt-2">
                      {d.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-row justify-center mt-12">
            <div className="w-full flex flex-col md:flex-row justify-center gap-12">
              {row2.map((d) => {
                return (
                  <div className="w-2/12 flex flex-col text-center">
                    <div className="">
                      <ReactSVG beforeInjection={(svg) => {
                          svg.classList.add('h-20')
                          svg.classList.add('mx-auto')
                        }} 
                        src={d.icon}
                      />
                    </div>
                    <div className="w-full text-lg text-stone-950 font-OutfitBold mt-2">
                      {d.title}
                    </div>
                     <div className="w-full text-sm text-stone-950 font-Outfit mt-2">
                      {d.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}
