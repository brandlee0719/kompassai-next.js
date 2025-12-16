import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function SwitchButton(props) {
  const [isAnnual, setIsAnnual] = useState(false);

  const onAnnualClick = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="flex relative items-center justify-center w-[260px] md:w-[400px] h-[100px]">
      <Button
        className="flex flex-row w-[320px] h-[60px] rounded-full border-[1px] border-[#0A2E31] mt-[40px] px-[4px] py-[4px]"
        onClick={onAnnualClick}
      >
        {isAnnual ? (
          <>
            <div className=" flex  w-[160px] h-[50px] justify-center items-center text-[16px] md:text-[20px] font-[400] rounded-full  bg-emerald-500  text-white">
              Annual billing
            </div>
            <div className="flex  w-[160px] h-[50px] justify-center items-center  text-[16px] md:text-[20px] text-emerald-500 font-[400] rounded-full">
              Monthly billing
            </div>
          </>
        ) : (
          <>
            <div className=" flex  w-[160px] h-[50px] justify-center items-center text-[16px] md:text-[20px] font-[400] rounded-full  text-emerald-500 ">
              Annual billing
            </div>
            <div className="flex  w-[160px] h-[50px] justify-center items-center  bg-emerald-500  text-white  text-[16px] md:text-[20px] font-[400] rounded-full">
              Monthly billing
            </div>
          </>
        )}
      </Button>
      {isAnnual ? (
        <div className="absolute flex items-center justify-center text-white text-[14px] p-[6px] md:p-[12px] top-[88px] left-[36px] md:left-[70px] -rotate-6 font-[700]  rounded-[8px] bg-magenta-500">
          Save 20%
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
