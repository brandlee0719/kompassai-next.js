import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import TabBar from "../common/TabBar";

import BaseContainer from "../../components/BaseContainer";

const datas = [
  {
    number: 1,
    title: "Add a Background Check on KompassAI",
    content:
      "Generate a fresh contract on KompassAI and opt for including a background check.",
    button: "Request a check",
  },
  {
    number: 2,
    title: "Data Collection Post-Candidate Agreement",
    content: "Email verification is automatic through our LinkedIn prospecting tool. Automatically validate emails at the same time you prospect on LinkedIn.",
    button: "Gather information",
  },
  {
    number: 3,
    title: "Effortless Screening Progress Tracking",
    content: "Monitor Progress and Get Screening Results Quickly on KompassAI",
    button: "Results in minutes",
  },
];
export default function BusinessLeaderPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-stone-50">
      <BaseContainer width="1680">
        <div className="w-full py-24 px-12">
          <div className="w-full">
            <div className="w-[12rem] font-Outfit uppercase flex items-center justify-center py-1 text-md rounded-full text-stone-950 bg-accents-purple">
              BUSINESS LEADER
            </div>
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">
              <div className="w-full 2xl:w-[650px] font-Outfit text-3xl md:text-5xl text-stone-950 font-[600] mt-[24px]">
                A faster, more efficient way<br />to validate emails
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center bg-stone-50 mt-[40px] md:mt-[40px]">
            <div className="w-full flex flex-col md:flex-row gap-4">
              {datas.map((data) => {
                return (
                  <div className="w-1/3 flex flex-col rounded-3xl border border-stone-250 bg-white p-12">
                    <div className="w-full text-5xl text-stone-950 font-Outfit font-[1000]">
                      {data.number}
                    </div>
                    <div className="w-full text-2xl text-stone-950 font-OutfitBold mt-8">
                      {data.title}
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="w-full text-md text-stone-950 font-Outfit font-[400] mt-4">
                        {data.content}
                      </div>
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
