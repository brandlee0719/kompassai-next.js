import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import DownBtnIcon from "../../../assets/image/icons/roundBtn.svg";
export default function FaqTag(props) {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="rounded-[16px] px-[40px] py-[32px] mt-[40px] mx-[40px] border">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl md:text-2xl font-Outfit  text-stone-950 font-[400]">
          {props.title}
        </span>
        <button onClick={handleShowContent}>
          <img
            src={DownBtnIcon}
            width={26}
            height={26}
            className={showContent && "rotate-180"}
            alt="arrow"
          />
        </button>
      </div>

      {showContent && (
        <div className="pt-[20px] font-Outfit font-[400] text-[18px] text-stone-950">
          <ul>
            <a href="/home"> Webinars &gt;</a>
          </ul>
          <ul>
            <a href="/home"> Blog &gt;</a>
          </ul>
          <ul>
            <a href="/home"> FAQ &gt;</a>
          </ul>
          <ul>
            <a href="/home"> Revenue Calculator for Sales &gt;</a>
          </ul>
        </div>
      )}
    </div>
  );
}
