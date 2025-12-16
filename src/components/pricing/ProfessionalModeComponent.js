import { useState, useEffect, useRef } from "react";
import CustomCheckBox from "../../assets/image/icons/checkbox_pro.svg";
import DownSVGIcon from "../../assets/image/icons/down.svg";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import Text from "../Text";

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
    <div className="mx-[16px] mt-[20px] flex h-[743px] w-[315px] flex-col justify-between rounded-[30px] border-[1px] p-[8px_8px] md:h-[843px] xl:w-[280px] 2xl:w-[315px]">
      <div>
        <div className="flex w-full flex-col items-center rounded-[24px] bg-[#F0FEFC] p-[24px_24px]">
          <Text variant="Header4" className="text-[#75EED9]">
            Professional
          </Text>
          <Text
            variant="CaptionSmall"
            className="h-10 text-stone-950 opacity-60"
          >
            Essential for finding your prospects
          </Text>
          <div className="mt-[15px] flex flex-row">
            <Text variant="Header3" className="text-[#75EED9]">
              $29
            </Text>
            <div className="flex items-end">
              <Text variant="CaptionBig" className="text-[#75EED9]">
                /user/month
              </Text>
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
              <div className="text-md font-Outfit font-[300] text-stone-950">
                480 credits
              </div>
              <div className="text-md font-Outfit ml-[12px] font-[300] text-stone-950 opacity-70">
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
                  <div className="text-md font-Outfit font-[300] text-stone-950">
                    480 credits
                  </div>
                  <div className="text-md font-Outfit ml-[12px] font-[300] text-stone-950 opacity-70">
                    1 user
                  </div>
                </div>
              </button>
              <button
                className="  h-[30px] w-60 bg-white py-[8px] opacity-100"
                onClick={onClickDropItem}
              >
                <div className=" flex flex-row items-center ">
                  <div className="text-md font-Outfit font-[300] text-stone-950">
                    480 credits
                  </div>
                  <div className="text-md font-Outfit ml-[12px] font-[300] text-stone-950 opacity-70">
                    1 user
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div></div>
          )}
          <div className="mt-[8px] w-full text-center text-xs opacity-40">
            Credits are provided upfront
          </div>
          <div className="mt-[8px] flex flex-row items-center  justify-center">
            <div className="text-sm font-[700] opacity-70">Total price:</div>
            <div className="ml-[8px] text-xs font-[400] opacity-70">
              $29 per month, billed annually
            </div>
          </div>
          <Button className="text-md  font-Outfit mt-[30px] flex h-[40px] w-full items-center justify-center rounded-full bg-[#75EED9] px-[24px] font-[700] text-emerald-500">
            CHOOSE PLAN
          </Button>

          <div className="mt-6 justify-center text-center">
            <Text variant="CaptionBig" className=" text-center text-stone-950">
              Everything in Free, plus:
            </Text>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              List management
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              List export
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Basic team management
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Shared credit pool
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <div className="mb-[32px] flex  flex-row px-[32px]">
          <div className="font-Outfit text-md font-[400] text-stone-950">
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
