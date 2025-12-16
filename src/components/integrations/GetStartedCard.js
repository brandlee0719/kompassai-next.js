import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import Checkbox from "@mui/material/Checkbox";
import { Button, Select, Option } from "@material-tailwind/react";

import PinkSwitch from "@/components/team/PinkSwitch";
import ConnectIcon from "@/assets/image/integrations/connect.svg";
import SetupIcon from "@/assets/image/integrations/setup.svg";

export default function GetStartedCard({ children, id, title, description }) {
  return (
    <div className="self-stretch flex flex-col p-[16px_32px_32px_32px] bg-white rounded-3xl gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row text-black font-Outfit text-lg text-left font-semibold items-center cursor-pointer gap-4">
          <div className="w-8 h-8 flex bg-[#FFE4EB] text-Outfit text-sm text-center items-center justify-center text-magenta-500 rounded-full">
            <p>{id}</p>
          </div>
          <span>{title}</span>
        </div>
      </div>
      <hr className="h-[2px] rounded-full" width="100%" color="#E8E7E7" />
      <div className="font-Outfit text-sm cursor-pointer">{description}</div>

      <div className="flex flex-row justify-center mt-5">{children}</div>
    </div>
  );
}
