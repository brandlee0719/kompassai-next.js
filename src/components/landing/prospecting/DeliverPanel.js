import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      <div className="p-[24px] sm:p-[48px] md::p-[80px] bg-white">
        <div className="w-[300px] md:w-[550px] h-[171px] ">
          <div className="w-[200px] font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-magenta-500 bg-white">
            DATA ANALYST
          </div>
          <div className="font-Outfit text-3xl md:text-5xl text-stone-950 font-[600] mt-[24px]">
            Deliver safe, reliable,self-
            <br />
            service analytics
          </div>
        </div>
        <TabBar1 />
      </div>
    </div>
  );
}
