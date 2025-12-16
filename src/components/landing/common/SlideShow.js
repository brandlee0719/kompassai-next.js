import PersonIcon from "../../../assets/image/icons/person.png";
import SlideMarkIcon from "../../../assets/image/icons/water.svg";
import { Button } from "@material-tailwind/react";

export default function SlideShow(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[360px] lg:w-[1000px] box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); rounded-[30px] my-[80px] p-[64px]">
        <div className="flex flex-wrap">
          <img src={PersonIcon} />
          <div className="flex flex-col">
            <div className="font-Outfit text-[28px] font-[700] text-stone-950 mx-[64px] ">
              If you do ROI on KompassAI it’s well, over 1000%. I’ve made my
              money back tenfold with Kompass AI.
            </div>
            <div className=" font-Outfit text-[26px] font-[400] text-stone-950 mx-[64px]">
              Niklas Anzingeri, Strategic Initiatives Leader
            </div>
            <div className="font-Outfit text-[20px] font-400] text-magenta-500 mx-[64px]">
              Dalia Research
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[64px]">
        <Button className="w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]"></Button>
        <Button className="w-[16px] h-[16px] rounded-full bg-emerald-500 mx-[8px]"></Button>
        <Button className="w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]"></Button>
      </div>
      <div className="flex items-center justify-center absolute t-0 bg-magenta-500 b-[20px]  rounded-[16px] w-[62px] h-[56px] ">
        <img src={SlideMarkIcon} />
      </div>
    </div>
  );
}
