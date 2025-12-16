import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ArrowLeftIcon from "../../../assets/image/icons/Arrow_Left.svg";

export default function ArticleLeftBar(props) {
  const [selectedIndex, setSelectecIndex] = useState(0);

  return (
    <div className="w-[350px] hidden xl:flex flex-col px-5">
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
        <button
          className="font-Outfit text-start text-stone-950 text-md font-normal leading-[22.4px] opacity-70"
          onClick={() => props.setNavIndex(1)}
        >
          The power of predictive analytics
        </button>
        <button
          className="font-Outfit text-start text-magenta-500 text-md font-normal leading-[22.4px]"
          onClick={() => props.setNavIndex(2)}
        >
          Real-world applications with model training and with model training
        </button>
        <button
          className="font-Outfit text-start text-stone-950 text-md font-normal leading-[22.4px] opacity-70"
          onClick={() => props.setNavIndex(3)}
        >
          Innovation Beyond Boundaries
        </button>
        <button
          className="font-Outfit text-start text-stone-950 text-md font-normal leading-[22.4px] opacity-70"
          onClick={() => props.setNavIndex(4)}
        >
          Conclusion
        </button>
      </div>
    </div>
  );
}
