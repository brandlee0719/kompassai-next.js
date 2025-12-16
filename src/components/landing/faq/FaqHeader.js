import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import BrowserImage from "../../../assets/image/browser.png";
import ShiningIcon from "../../../assets/image/icons/shiny.svg";

export default function FaqHeader(props) {
  return (
    <div className="bg-emerald-200 rounded-[16px] p-[40px] mt-[40px] mx-[40px]">
      <div className="font-Outfit text-2xl md:text-4xl font-[600] text-stone-950">
        {props.LandingHeader}
      </div>
      <div className="font-Outfit text-md font-[400] text-stone-950 mt-[15px]">
        {props.value}
      </div>
    </div>
  );
}
