import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import BrowserImage from "../../../assets/image/browser1.png";
import BrowserImage1 from "../../../assets/image/browser.png";
import SearchBar from "../blog/SearchBar";

export default function SortTab(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col mt-[40px] md:mt-[81px] px-[20px] md:px-[80px]">
      <div className="flex flex-wrap  justify-between">
        <div className="flex flex-wrap justify-between">
          <Button
            className="mt-[8px] md:pl-[0px] "
            onClick={() => setTabIndex(0)}
          >
            <div
              className={`${
                tabIndex == 0 ? "text-magenta-500" : "text-emerald-500"
              } font-Outfit text-lg md:text-xl font-[400] text-emerald-500 normal-case`}
            >
              All
            </div>
            <div
              className={`${
                tabIndex == 0 ? "bg-magenta-500" : "bg-white"
              }  h-[2px] `}
            ></div>
          </Button>
          <Button className="mt-[8px]" onClick={() => setTabIndex(1)}>
            <div
              className={`${
                tabIndex == 1 ? "text-magenta-500" : "text-emerald-500"
              } font-Outfit text-lg md:text-xl font-[400] text-emerald-500 normal-case`}
            >
              Data analytics
            </div>
            <div
              className={`${
                tabIndex == 1 ? "bg-magenta-500" : "bg-white"
              }  h-[2px] `}
            ></div>
          </Button>
          <Button className="mt-[8px]" onClick={() => setTabIndex(2)}>
            <div
              className={`${
                tabIndex == 2 ? "text-magenta-500" : "text-emerald-500"
              } font-Outfit text-lg md:text-xl font-[400] text-emerald-500 normal-case`}
            >
              Marketing
            </div>
            <div
              className={`${
                tabIndex == 2 ? "bg-magenta-500" : "bg-white"
              }  h-[2px] `}
            ></div>
          </Button>
          <Button className="mt-[8px]" onClick={() => setTabIndex(3)}>
            <div
              className={`${
                tabIndex == 3 ? "text-magenta-500" : "text-emerald-500"
              } font-Outfit text-lg md:text-xl font-[400] text-emerald-500 normal-case`}
            >
              Trends
            </div>
            <div
              className={`${
                tabIndex == 3 ? "bg-magenta-500" : "bg-white"
              }  h-[2px] `}
            ></div>
          </Button>
          <Button className="mt-[8px]" onClick={() => setTabIndex(4)}>
            <div
              className={`${
                tabIndex == 4 ? "text-magenta-500" : "text-emerald-500"
              } font-Outfit text-lg md:text-xl font-[400] text-emerald-500 normal-case`}
            >
              Guide
            </div>
            <div
              className={`${
                tabIndex == 4 ? "bg-magenta-500" : "bg-white"
              }  h-[2px] `}
            ></div>
          </Button>
        </div>
        <div className="">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
