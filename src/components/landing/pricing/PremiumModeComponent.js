import { useState, useEffect, useRef } from "react";
import CustomCheckBox from "../../../assets/image/icons/checkbox_premium.svg";
import DownSVGIcon from "../../../assets/image/icons/down.svg";
import { Input, Button } from "@material-tailwind/react";

export default function PremiumModeComponent(props) {
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
      <div className=" relative">
        <div className="flex  h-[158px] w-full  flex-col items-center  rounded-[24px] bg-[#FFEEF2] p-[24px_24px] md:h-[178px]">
          <div className="text-md  absolute  -top-[25px] left-[110px] flex rotate-6 items-center justify-center  rounded-[8px] bg-magenta-500 p-[12px]  font-[700] text-white  drop-shadow-lg">
            Most popular
          </div>
          <div className="font-Outfit text-3xl font-[700] text-magenta-500">
            Premium
          </div>
          <div className="font-Outfit text-xs font-[400] text-stone-950 opacity-60">
            Perfect for small teams with simple workflows
          </div>
          <div className="mt-[15px] flex flex-row">
            <div className="font-Outfit text-5xl font-[600] text-magenta-500 ">
              $51
            </div>
            <div className="flex items-end">
              <div className="  text-md font-Outfit font-[700] text-magenta-500 ">
                /user/month
              </div>
            </div>
          </div>
        </div>
        <div className="p-[32px_24px]">
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
                className="  h-[30px] w-60 bg-white py-[8px]  opacity-100"
                onClick={onClickDropItem}
              >
                <div className=" flex flex-row  ">
                  <div className="text-md font-Outfit font-[300] text-stone-950">
                    480 credits
                  </div>
                  <div className="text-md font-Outfit ml-[12px] font-[300] text-stone-950 opacity-70">
                    1 user
                  </div>
                </div>
              </button>
              <button
                className="  left-[48px] z-50  h-[30px] w-60 bg-white py-[8px] opacity-100"
                onClick={onClickDropItem}
              >
                <div className=" flex flex-row  ">
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
            <div className=" text-sm font-[700] opacity-70">Total price:</div>
            <div className=" ml-[8px] text-xs font-[400] opacity-70">
              $51 per month, billed annually
            </div>
          </div>
          <Button className="text-md font-Outfit mt-[30px] flex h-[40px] w-full items-center justify-center rounded-full bg-magenta-500  px-[24px] font-[700] text-white">
            GET STARTED
          </Button>
          <div className=" text-md font-Outfit mt-[24px] justify-center text-center font-[700] text-stone-950">
            Everything in Pro, plus:
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Prospecting bulk show (25 contacts)
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Extension bulk show (25 contacts)
            </div>
          </div>
          <div className="mt-[16px] flex flex-row">
            <img src={CustomCheckBox} />
            <div className="ml-[8px] text-sm font-[300] text-stone-950 ">
              Basic usage analytics
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
