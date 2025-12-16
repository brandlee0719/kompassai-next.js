import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import TabBar1 from "../common/TabBar1";
import BFlagIcon from "../../../assets/image/flags/Brazil.svg";
import KFlagIcon from "../../../assets/image/flags/Korea.svg";
import IFlagIcon from "../../../assets/image/flags/India.svg";

export default function CountryPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center mt-2">
      <div className="flex flex-row items-center  box-Shadow  p-[8px_24px] rounded-[16px] mx-[8px] opacity-40  my-2 md:my-10">
        <img src={BFlagIcon} />
        <div className="font-Outfit text-[16px] text-stone-950 font-[400] ml-[8px]">
          You can only hire Brazilian independent contractors on a project
          basis.
        </div>
      </div>

      <div className="flex flex-row items-center  box-Shadow  p-[8px_24px] rounded-[16px] mx-[8px] my-2 md:my-[40px]">
        <img src={BFlagIcon} />
        <div className="font-Outfit text-[16px] text-stone-950 font-[400] ml-[8px] w-[260px] md:w-[416px]">
          You can only hire Brazilian independent contractors on a project
          basis.
        </div>
      </div>
      <div className="flex flex-row items-center  box-Shadow  p-[8px_24px] rounded-[16px] mx-[8px] opacity-40 my-2 md:my-10">
        <img src={BFlagIcon} />
        <div className="font-Outfit text-[16px] text-stone-950 font-[400] ml-[8px]">
          You can only hire Brazilian independent contractors on a project
          basis.
        </div>
      </div>
    </div>
  );
}
