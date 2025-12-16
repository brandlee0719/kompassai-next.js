import pluralize from "pluralize";
import { useEffect } from "react";

function PlanMenuButton(props) {
  const { option, handleClickButton } = props;

  return (
    <li
      key={option}
      className="w-full py-2 pl-[24px] pr-2 opacity-100 bg-white h-fit cursor-pointer hover:bg-[#ecf4f3] first:rounded-tl-3xl first:rounded-tr-3xl last:rounded-bl-3xl last:rounded-br-3xl last:rounded-tr-0 last:rounded-tl-0"
      onClick={handleClickButton}
    >
      <div className=" flex flex-row items-center justify-between pr-2">
        <div className="text-md font-[300] font-Outfit text-stone-950">
          {option.amount} 
        </div>
        <div className="text-md font-[300] font-Outfit opacity-70 text-stone-950 ml-[12px]">
          {option.text}
        </div>
      </div>
    </li>
  );
}

export default PlanMenuButton;
