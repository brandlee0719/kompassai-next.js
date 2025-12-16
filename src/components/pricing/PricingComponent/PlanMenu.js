import { useState,useRef } from "react";
import PlanMenuButton from "./PlanMenuButton";
import pluralize from "pluralize";
import DownSVGIcon from "@/assets/image/icons/down.svg";
import { useOutsideClick } from "@/hooks/useOutsideClick";

function PlanMenu(props) {
  const { menuState, selectionState, options } = props;
  const [menuOpen, setMenuOpen] = menuState;
  const [currentOption, setCurrentOption] = useState(options[0]);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    setMenuOpen(false);
  });
  const disableSelect = options.length != 1
 
  const handleOptionSelect = (option) => {
    setMenuOpen(false);
    setCurrentOption(option);
  };
  return (
    <div
      ref={wrapperRef}
      className="flex flex-col justify-center w-full relative"
    >
      <button
        key="activator"
        className="flex justify-between items-center px-[24px]  w-full  h-[49px] rounded-full border-[1px] border-[#E8E7E7]  "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* <Option>Material Tailwind HTML</Option> */}
        <div className="flex flex-row">
          <div className="text-md font-[300] font-Outfit text-stone-950">
            {currentOption.amount} credit
          </div>
          <div className="text-md font-[300] font-Outfit opacity-70 text-stone-950 ml-[12px]">
            {currentOption.text}
          </div>
        </div>
        {disableSelect ? (
          <button>
            <img className="" src={DownSVGIcon} alt="open menu" />
          </button>
        ) : (
          <></>
        )}
      </button>
      {menuOpen && disableSelect ? (
        <ul className="w-full mt-1 top-full border-[1px] border-[#E8E7E7] flex absolute  flex-col  bg-white rounded-3xl   z-50">
          {options.map((option, index) => (
            <PlanMenuButton
              option={option}
              index={index}
              handleClickButton={() => handleOptionSelect(option)}
            ></PlanMenuButton>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PlanMenu;
