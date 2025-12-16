import { useState, useEffect, useRef } from "react";
import CustomSlider from "./CustomSlider";
import DownIcon from "../../assets/image/icons/down.svg";

export default function ROICalculator(props) {
  const [showDropDown, setShowDropDown] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropDown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onClickDropDown = () => {
    setShowDropDown(true);
  };

  const onClickDropItem = () => {
    setShowDropDown(false);
  };

  return (
    <div className="w-[300px] md:w-[744px]  bg-emerald-500 rounded-[30px] mx-[16px]  p-[20px] md:p-[40px] mt-[40px] md:mt-[80px]">
      <div className="font-Outfit text-[18px] md:text-[28px] text-white font-[700] text-center">
        ROI Calculator per User
      </div>
      <div ref={wrapperRef} className=" relative w-full ">
        <div className="font-Outfit text-[16px] md:text-[22px] text-white font-[400] text-start mt-[40px]">
          What plan will you be using?
        </div>
        <button
          className="flex flex-row justify-between  w-full items-center bg-white rounded-full p-[10px_12px] md:p-[15px_24px]  mt-[20px] md:mt-[25px]"
          onClick={onClickDropDown}
        >
          <div className="text-[16px]  font-[300]  px-[14px] font-Outfit text-stone-950 ">
            Professional
          </div>
          <button>
            <img src={DownIcon} />
          </button>
        </button>
        {showDropDown ? (
          <div className="flex absolute flex-col z-50 w-11/12 left-[20px]  mt-[4px]">
            <button
              className="  opacity-100 bg-white w-full  py-[4px] rounded-b-lg"
              onClick={onClickDropItem}
            >
              <div className=" flex flex-row items-center ">
                <div className="text-[16px]  font-[300]  px-[14px] font-Outfit text-stone-950 pb-[8px]">
                  Professional
                </div>
              </div>
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <div className="font-Outfit text-[16px] md:text-[22px] text-white font-[400] text-start mt-[12px] md:mt-[40px]">
          What is your anticipated call to demo conversion rate?
        </div>
        <CustomSlider />
        <div className="flex w-full flex-row justify-between">
          <div className="font-Outfit text-[12px] md:text-[14px] font-[700] opacity-40 text-[#FFFFFF] mt-[11px] ">
            $0
          </div>
          <div className="font-Outfit text-[12px] md:text-[14px] font-[700] opacity-40 text-[#FFFFFF] mt-[11px]">
            $2000
          </div>
        </div>
      </div>
      <div>
        <div className="font-Outfit text-[16px] md:text-[22px] text-white font-[400] text-start mt-[12px] md:mt-[40px]">
          What is your anticipated email to demo conversion rate?
        </div>
        <CustomSlider />
        <div className="flex w-full flex-row justify-between">
          <div className="font-Outfit text-[12px] md:text-[14px] font-[700] opacity-40 text-[#FFFFFF] mt-[11px] ">
            $0
          </div>
          <div className="font-Outfit text-[12px] md:text-[14px] font-[700] opacity-40 text-[#FFFFFF] mt-[11px]">
            $2000
          </div>
        </div>
      </div>
    </div>
  );
}
