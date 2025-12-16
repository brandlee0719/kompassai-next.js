import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import Checkbox from "@mui/material/Checkbox";
import { Button, Select, Option } from "@material-tailwind/react";

import BlueSwitch from "@/components/team/PinkSwitch";
import { ReactComponent as ConnectIcon} from "@/assets/image/integrations/connect.svg";
import { ReactComponent as SetupIcon}  from "@/assets/image/integrations/setup.svg";

export default function IntegrateCard({ info, onConnect }) {
  return (
    <div className="self-stretch flex flex-col p-[16px_32px_32px_32px] bg-white border border-stone-250 hover:m-[-2px] hover:drop-shadow-lg hover:border-blue-500 rounded-md transition-all duration-300 gap-1">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row text-black font-Outfit text-lg text-left font-bold items-center cursor-pointer gap-2">
          <ReactSVG src={info.icon} />
          <span>{info.label}</span>
        </div>
        {info.visible ? (
          <div className="flex flex-row justify-center items-center font-Outfit text-sm font-bold">
            <span>Primary</span>
            <BlueSwitch />
          </div>
        ) : null}
      </div>
      <hr className="rounded-full w-full bg-stone-250" />
      <div className="font-Outfit text-sm 2xl:text-md cursor-pointer">
        {info.description}
      </div>

      <div
        className={
          info.visible
            ? "flex flex-row justify-between mt-5"
            : "flex flex-row justify-end mt-5"
        }
      >
        {info.visible ? (
          <span className="flex justify-start items-center text-Outfit text-sm text-blue-500 font-bold cursor-pointer">
            <p>Disconnect</p>
          </span>
        ) : null}
        <div className="flex justify-end">
          {info.visible ? (
            <Button className="flex items-center justify-center bg-stone-950 text-white text-sm font-OutfitBold rounded-md px-4 py-2">
              setup
              <SetupIcon className="ml-2 fill-current text-white w-4 h-4" />
            </Button>
          ) : (
            <Button
              className="flex items-center justify-center bg-stone-950 text-white text-sm font-OutfitBold rounded-md px-4 py-2"
              onClick={onConnect}
            >
              connect
              <ConnectIcon className="ml-2 fill-current text-white w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
