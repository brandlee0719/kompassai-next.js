import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import BrowserImage from "../../../assets/image/browser1.png";
import BrowserImage1 from "../../../assets/image/browser.png";

export default function TabBar(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 bg-emerald-200 mt-[40px] md:mt-[81px]">
      <div>
        <div className="mt-[81px]">
          <div className="flex flex-row justify-between drop-shadow-lg">
            {tabIndex == 0 && <img src={BrowserImage} />}
            {tabIndex == 1 && <img src={BrowserImage1} />}
            {tabIndex == 2 && <img src={BrowserImage} />}
          </div>
        </div>
      </div>
      <div className=" flex-col sm:mx-[20px] md:mx-[40px] lg:mx-[80px] mt-[100px] ">
        <div className="font-Outfit  text-3xl font-[700] text-emerald-500">
          Get automated business monitoring and alerting
        </div>
        <div className="font-Outfit text-xl font-[400] text-stone-950 mt-[60px]">
          Stay on top of your most important business KPIs and learn why changes
          happen so you can take action in the moment.
        </div>
      </div>
    </div>
  );
}
