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
    content: "After the candidate agrees, we'll collect their information",
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
    <div className="bg-emerald-200">
      <BaseContainer width="1680">
        <div className="w-full p-[24px] sm:p-[48px] md:p-[80px]">
          <div className="w-full">
            <div className="w-52 font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-magenta-500 bg-white">
              BUSINESS LEADER
            </div>
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">
              <div className="w-full 2xl:w-[650px] font-Outfit text-3xl md:text-5xl text-stone-950 font-[600] mt-[24px]">
                A quicker, more efficient way to do background checks
              </div>
              <div className="w-full 2xl:w-[580px] font-Outfit text-md text-stone-950 font-[400] mt-[24px]">
                Many global firms screen candidates (93%) to safeguard their
                business, but managing this through various HR platforms can be
                burdensome. KompassAI makes background checks simple with just a
                few clicks.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center bg-emerald-200 mt-[40px] md:mt-[40px]">
            <div className="w-full flex flex-col md:flex-row gap-3">
              {datas.map((data) => {
                return (
                  <div className="md:w-1/3 xl:w-[450px] 2xl:w-[490px] 2xl:h-[427px] flex flex-col rounded-3xl bg-white p-10">
                    <div className="w-full text-5xl text-emerald-500 font-Outfit font-[1000] mt-3">
                      {data.number}
                    </div>
                    <div className="w-full text-2xl text-stone-950 font-Outfit font-extrabold mt-8">
                      {data.title}
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="w-full text-md text-stone-950 font-Outfit font-[400] mt-3">
                        {data.content}
                      </div>
                      <Button className="w-[200px] border-[#0A2E31] border-[1px] font-Outfit text-sm text-emerald-500 rounded-full p-[15px_18px] mt-8">
                        {data.button}
                      </Button>
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
