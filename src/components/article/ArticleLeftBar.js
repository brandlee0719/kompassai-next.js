import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ArrowLeftIcon from "../../assets/image/icons/Arrow_Left.svg";

export default function ArticleLeftBar(props) {
  return (
    <div className="w-[350px] hidden xl:flex flex-col px-5">
      <div>
        <button className="w-[250px] h-[51px] flex flex-row justify-center items-center border-[#000] border-[1px] bg-white rounded-[40px] font-Outfit text-emerald-500 text-base font-normal leading-[22.4px] uppercase pl-4 py-2 pr-6">
          <img
            src={ArrowLeftIcon}
            className="w-4 h-4 mr-4 text-black"
            alt="arrow_left"
          />
          <p className="font-Outfit text-md uppercase">back to all articles</p>
        </button>
        <p className="mt-10 font-Outfit text-emerald-500 text-[26px] font-normal leading-8">
          Table of contents
        </p>
        <div className="mt-6 flex flex-col gap-[20px]">
          {props?.sections?.map((item) => {
            return (
              <button
                className={`font-Outfit text-start text-[${
                  props.navIndex === item.id ? "#E7436A" : "#090C05"
                }] text-md font-normal leading-[22.4px] opacity-70`}
                onClick={() => props.setNavIndex(item.id)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
