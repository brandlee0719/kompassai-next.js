import { Button } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";
import BaseContainer from "../../components/BaseContainer";

import ProvideBestImg1 from "../../../assets/image/provide_best1.png";
import ProvideBestImg2 from "../../../assets/image/provide_best2.png";
import ProvideBestImg3 from "../../../assets/image/provide_best3.png";
import ProvideBestImg4 from "../../../assets/image/provide_best4.png";

import { pageContentWidth } from "../../utils/common";

export default function DeliverPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-emerald-200">
      <BaseContainer width={pageContentWidth}>
        <div className="w-full p-[24px] sm:p-[48px] md:p-[80px]">
          <div className="w-full my-[20px] sm:mt-[80px]  md:mt-[80px] mb-[64px] font-Outfit text-5xl xl:text-6xl font-[700] text-center text-emerald-500">
            We provide the best possible result
          </div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 justify-items-center">
            <div className="w-[380px] h-[336px] flex flex-col justify-center items-center gap-[62px] p-10">
              <img className="w-[160px] h-[160px]" src={ProvideBestImg1} />
              <div className="font-Outfit text-2xl font-extrabold">
                Great results
              </div>
            </div>
            <div className="w-[380px] h-[336px] flex flex-col justify-center items-center gap-[62px] p-10">
              <img className="w-[160px] h-[160px]" src={ProvideBestImg2} />
              <div className="font-Outfit text-2xl font-extrabold">
                Demo version available
              </div>
            </div>
            <div className="w-[380px] h-[336px] flex flex-col justify-center items-center gap-[62px] p-10">
              <img className="w-[160px] h-[160px]" src={ProvideBestImg3} />
              <div className="font-Outfit text-2xl font-extrabold">
                Support center
              </div>
            </div>
            <div className="w-[380px] h-[336px] flex flex-col justify-center items-center gap-[62px] p-10">
              <img className="w-[166px] h-[160px]" src={ProvideBestImg4} />
              <div className="font-Outfit text-2xl font-extrabold">
                Fast search system
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}
