import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import RoundBtnIcon from "../../assets/image/icons/roundBtn.svg";

export default function FaqItem(props) {
  return (
    <div className="bg-[#E8E7E7] rounded-[16px] p-[32px_40px] mt-[40px]">
      <div className="font-Outfit text-[26px] font-[400] text-stone-950 mt-[15px] border-[1px]">
        {props.value}
      </div>
      <Button>
        <img src={RoundBtnIcon} />
      </Button>
    </div>
  );
}
