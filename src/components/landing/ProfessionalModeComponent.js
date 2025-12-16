import { useState, useEffect, useRef } from "react";
import CustomCheckBox from "../../assets/image/icons/checkbox_pro.svg";
import DownSVGIcon from "../../assets/image/icons/down.svg";
import { Input, Button, Select, Option } from "@material-tailwind/react";

export default function ProfessionalModeComponent(props) {
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
    <div className="mx-[16px] mt-[20px] flex h-[743px] w-[356px]  flex-col justify-between rounded-[30px] border-[1px] p-[8px_8px] md:h-[843px]">
      <div>
        <div className="flex h-[158px] w-full  flex-col items-center rounded-[24px] bg-[#F0FEFC] p-[24px_24px] md:h-[178px]">
          <div className="font-Outfit text-[25px] font-[700]  text-[#75EED9] md:text-[28px]">
            Professional
          </div>
          <div className="font-Outfit text-[12px] font-[400] text-stone-950 opacity-60">
            Essential for finding your prospects
          </div>
          <div className="flex flex-row ">
            <div className="font-Outfit text-[40px] font-[600]  text-[#75EED9] md:text-[46px] ">
              $29
            </div>
            <div className="flex items-end  py-[10px]">
              <div className="  font-Outfit text-[16px] font-[700] text-[#75EED9] ">
                /user/month
              </div>
            </div>
          </div>
        </div>
        <div ref={wrapperRef} className=" relative p-[32px_24px] ">
          <button
            className="flex h-[49px] w-full items-center  justify-between  rounded-full border-[1px] border-[#E8E7E7] px-[24px]  "
            onClick={onClickDropDown}
          >
            {/* <Option>Material Tailwind HTML</Option> */}
            <div className="flex flex-row">
              <div className="font-Outfit text-[16px] font-[300] text-stone-950">
                480 credits
              </div>
              <div className="font-Outfit ml-[12px] text-[16px] font-[300] text-stone-950 opacity-70">
                1 user
              </div>
            </div>
            <button>
              <img src={DownSVGIcon} />
            </button>
          </button>
          {showDropDown ? (
            <div className="absolute left-[48px] z-50  flex flex-col">
              <button
                className="  h-[30px] w-60 bg-white py-[8px] opacity-100"
                onClick={onClickDropItem}
              >
                <div className=" flex flex-row items-center ">
                  <div className="font-Outfit text-[16px] font-[300] text-stone-950">
                    480 credits
                  </div>
                  <div className="font-Outfit ml-[12px] text-[16px] font-[300] text-stone-950 opacity-70">
                    1 user
                  </div>
                </div>
              </button>
              <button
                className="  h-[30px] w-60 bg-white py-[8px] opacity-100"
                onClick={onClickDropItem}
              >
                <div className=" flex flex-row items-center ">
                  <div className="font-Outfit text-[16px] font-[300] text-stone-950">
                    480 credits
                  </div>
                  <div className="font-Outfit ml-[12px] text-[16px] font-[300] text-stone-950 opacity-70">
                    1 user
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div></div>
          )}
          <div className="mt-[8px] w-full text-center text-[12px] opacity-40">
            Credits are provided upfront
          </div>
          <div className="mt-[8px] flex flex-row items-center  justify-center">
            <div className=" text-[14px] font-[700] opacity-70">
              Total price:
            </div>
            <div className=" ml-[8px] text-[12px] font-[400] opacity-70">
              $29 per month, billed annually
            </div>
          </div>
          <Button className="font-Outfit mt-[30px] flex h-[52px] w-full items-center justify-center rounded-full bg-[#75EED9] px-[24px]  text-[16px] font-[700] text-emerald-500">
            CHOOSE PLAN
          </Button>
          <div className=" font-Outfit mt-[24px] justify-center text-center text-[16px] font-[700] text-stone-950">
            Everything in Free, plus:
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              List management
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              List export
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Basic team management
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-[16px] font-[300] text-stone-950 ">
              Shared credit pool
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <div className="mb-[32px] flex  flex-row px-[32px]">
          <div className="font-Outfit text-[15px] font-[400] text-stone-950 md:text-[18px]">
            Show plan comparison
          </div>
          <div className="ml-[16px] flex items-center ">
            <img src={DownSVGIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
