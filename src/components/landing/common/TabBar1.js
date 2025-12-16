import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import BrowserImage from "../../../assets/image/browser1.png";
import BrowserImage1 from "../../../assets/image/browser.png";

export default function TabBar1(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 bg-white mt-[81px]">
      <div className="">
        <div className="flex flex-row">
          <Button className="mx-[8px] w-[267px]" onClick={() => setTabIndex(0)}>
            <div className="font-Outfit text-lg font-[400] text-emerald-500 normal-case">
              Connect
            </div>
            <div
              className={`mt-2 ${
                tabIndex == 0 ? "bg-emerald-500" : "bg-[#CDE2DF]"
              }  h-[4px] rounded-full`}
            ></div>
          </Button>
          <Button className="mx-[8px] w-[267px]" onClick={() => setTabIndex(1)}>
            <div className="font-Outfit text-lg font-[400] text-emerald-500 normal-case">
              Model
            </div>
            <div
              className={`mt-2 ${
                tabIndex == 1 ? "bg-emerald-500" : "bg-[#CDE2DF]"
              }  h-[4px] rounded-full`}
            ></div>
          </Button>
          <Button className="mx-[8px] w-[267px]" onClick={() => setTabIndex(2)}>
            <div className="font-Outfit text-lg font-[400] text-emerald-500 normal-case">
              Auto analyze
            </div>
            <div
              className={`mt-2 ${
                tabIndex == 2 ? "bg-emerald-500" : "bg-[#CDE2DF]"
              }  h-[4px] rounded-full`}
            ></div>
          </Button>
        </div>
        <div className=" flex-col mt-[100px] ">
          <div className="font-Outfit  text-3xl font-[700] text-emerald-500">
            Flexibly model your data, your way
          </div>
          <div className="font-Outfit text-xl font-[400] text-stone-950 mt-[60px]">
            Whether you prefer dbt, custom SQL views, or our lightweight
            <br />
            worksheets, you can create a fully scriptable, centrally governed
            <br />
            data model in minutes from the Data Workspace. It’s an analytics
            <br />
            engineer’s dream come true.
          </div>
        </div>
      </div>
      <div className="mt-[81px]">
        <div className="flex flex-row justify-between drop-shadow-lg">
          {tabIndex == 0 && <img src={BrowserImage} />}
          {tabIndex == 1 && <img src={BrowserImage1} />}
          {tabIndex == 2 && <img src={BrowserImage} />}
        </div>
      </div>
    </div>
  );
}
