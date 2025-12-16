import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { pink } from '@mui/material/colors';
import IconButton from "@mui/material/IconButton";
import Checkbox from '@mui/material/Checkbox';

import DownIcon from "@/assets/image/search/down.svg";
import LockIcon from "@/assets/image/search/lock.svg";
import PlusIcon from "@/assets/image/search/plus.svg";
import MinusIcon from "@/assets/image/search/minus.svg";
import PinkSwitch from "../team/PinkSwitch";

function AccordianComponent({ title, icon, children, expand = false }) {
  const [expanded, setExpanded] = React.useState(expand);

  return (
    <>
      <div className="w-full flex flex-col border-b border-stone-250 py-3">
        <div className="w-full flex flex-row justify-between items-center mb-1">
          <p className="flex flex-row gap-1 items-center text-sm font-OutfitMedium">
            <ReactSVG
              src={icon}
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width: 18px");
                svg.setAttribute("fill", "#090C05");
              }}
            />
            {title}
          </p>
          <IconButton
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? (
              <ReactSVG src={MinusIcon} />
            ) : (
              <ReactSVG src={PlusIcon} />
            )}
          </IconButton>
        </div>
        {expanded ? children : null}
      </div>
    </>
  );
}

function DataEnrichedComponent() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="w-full flex flex-col border-b border-b-[#E8E7E7] px-2 pt-2 pb-3">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="flex flex-row gap-1 items-center text-xs font-[600] font-Outfit">
            <ReactSVG
              src={LockIcon}
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width: 14px");
                svg.setAttribute("fill", "#090C05");
              }}
            />
            {'Data Enriched'}
          </p>
          <PinkSwitch />
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-row items-center gap-1 font-Outfit text-sm">
            <Checkbox
            className="w-5 h-5"
              {...label}
              defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
              size="small"
            />
            Email
          </div>
          <div className="w-full flex flex-row items-center gap-1 font-Outfit text-sm">
            <Checkbox
            className="w-5 h-5"
              {...label}
              defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
              size="small"
            />
            Phone
          </div>
        </div>
      </div>
    </>
  );
}

export { AccordianComponent, DataEnrichedComponent };
