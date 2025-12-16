import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function SwitchButton(props) {
  const [isAnnual, setIsAnnual] = useState(false);

  const onAnnualClick = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="flex relative items-center justify-center w-[260px] md:w-[300px] h-[50px]">
      <Button
        className="flex flex-row w-full rounded-full border-[1px] border-[#0A2E31] mt-[40px] px-[4px] py-[4px] normal-case"
        onClick={onAnnualClick}
      >
        {isAnnual ? (
          <>
            <div className=" flex p-[10px_5px] w-1/2 h-full justify-center items-center text-sm md:text-md lg:text-lg font-[400] rounded-full  bg-emerald-500  text-white">
              Annual billing
            </div>
            <div className="flex p-[10px_5px] w-1/2 justify-center items-center  text-sm md:text-md lg:text-lg text-emerald-500 font-[400] rounded-full">
              Monthly billing
            </div>
          </>
        ) : (
          <>
            <div className="flex p-[10px_5px] w-1/2 justify-center items-center text-sm md:text-md lg:text-lg font-[400] rounded-full  text-emerald-500 ">
              Annual billing
            </div>
            <div className="flex p-[10px_5px] w-1/2 justify-center items-center  bg-emerald-500  text-white  text-sm md:text-md lg:text-lg font-[400] rounded-full">
              Monthly billing
            </div>
          </>
        )}
      </Button>
      {isAnnual ? (
        <div className="absolute flex items-center justify-center text-white text-md p-[5px] md:p-[10px] top-[60px] left-[20px] md:left-[20px] -rotate-6 font-[700]  rounded-[8px] bg-magenta-500 drop-shadow-lg">
          Save 20%
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
