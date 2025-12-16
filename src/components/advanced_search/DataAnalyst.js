import { Button } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";
import BaseContainer from "../../components/BaseContainer";

import DataAnalystImg1 from "../../assets/image/data_analyst1.png";
import DataAnalystImg2 from "../../assets/image/data_analyst2.png";
import DataAnalystImg3 from "@/assets/image/data_analyst3.png";
import { ReactComponent as Checkbox } from "@/assets/image/icons/advanced_check.svg";


import { pageContentWidth } from "../../utils/common";

const content = [
  {
    image: DataAnalystImg2,
    title: "Company Search", 
    points: ["Find companies that match your ideal customer profile", 
      "Get up to 1000 companies and enriched data in one search", 
      "Target high priority accounts and succeed your goals"]
  },
  {
    image: DataAnalystImg1,
    title: "Laser-Focused Lists", 
    points: ["Find companies that match your ideal customer profile", 
      "Get up to 1000 companies and enriched data in one search", 
      "Target high priority accounts and succeed your goals"]
  },
  {
    image: DataAnalystImg3,
    title: "Painless Integration", 
    points: ["Find companies that match your ideal customer profile", 
      "Get up to 1000 companies and enriched data in one search", 
      "Target high priority accounts and succeed your goals"]
  }
]

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <BaseContainer width={pageContentWidth}>
      <div className="w-full px-12 py-24 space-y-12 mb-12 bg-stone-150">
        
      {content.map((c) => {
        return (
          <div className="w-full flex flex-col-reverse xl:flex-row xl:gap-[80px] justify-between items-center">
            <div className="w-1/2 flex justify-center">
              <img src={c.image} className="h-[18rem] mx-auto"/>
            </div>
            <div className="w-1/2 space-y-6">
              <div className="font-Outfit text-3xl md:text-4xl text-stone-950 font-[600]">
                {c.title}
              </div>
              <div className="font-Outfit text-md md:text-lg text-stone-950 font-[400] space-y-6">
                {c.points.map((point) => {
                  return (
                    <div className="flex gap-2">
                      <Checkbox className="h-6"/>
                      <div>{point}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      </div>
    </BaseContainer>
  );
}
