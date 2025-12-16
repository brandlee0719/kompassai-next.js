import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import TabBar from "../common/TabBar";

export default function AnswerPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      <div className="p-[24px] sm:p-[48px] md::p-[80px] bg-emerald-200">
        <div className="h-[171px] ">
          <div className="w-[200px] font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-magenta-500 bg-white">
            BUSINESS LEADER
          </div>
          <div className="font-Outfit text-3xl md:text-5xl text-stone-950 font-[600] mt-[24px]">
            Answer your own <br /> dataquestions instantly
          </div>
        </div>
        <TabBar />
      </div>
    </div>
  );
}
