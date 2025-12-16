import { useState } from "react";
import "./index.css";
import * as React from "react";
import RightIcon from "../../assets/image/icons/right.svg";
import LeftIcon from "../../assets/image/icons/left.svg";
import ReactSlider from "react-slider";

export default function CustomSlider() {
  const Thumb1 = (props, state) => (
    <div
      {...props}
      className="flex p-[4px] md:p-[8px] flex-row justify-between items-center top-0  w-[50px] md:w-[119px] h-[28px] md:h-[30px] bg-[#75EED9] rounded-full mb-[20px]"
    >
      <div>
        <img src={LeftIcon} />
      </div>
      <div className="font-Outfit text-[12px] md:text-[16px] text-emerald-500 font-[700]">
        ${state.valueNow}
      </div>
      <div>
        <img src={RightIcon} />
      </div>
    </div>
  );

  const Track1 = (props, state) => (
    <div
      {...props}
      index={state.index}
      className={`${
        state.index === 2
          ? "bg-[#DDD]"
          : state.index === 1
          ? "bg-[#DDD]"
          : "bg-[#75EED9]"
      } h-[6px] md:h-[10px] rounded-full`}
    ></div>
  );

  return (
    <div>
      <ReactSlider
        className=" flex justify-center items-center w-full h-[25px]"
        max={2000}
        renderTrack={Track1}
        renderThumb={Thumb1}
      />
    </div>
  );
}
