import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { Button, Select, Option } from "@material-tailwind/react";
import IconButton from "@mui/material/IconButton";
import { InputAdornment, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";

import AccordianComponents from "./AccordianComponents";

import DownIcon from "@/assets/image/search/down.svg";
import { ReactComponent as CloseSVG } from "@/assets/image/icons/close.svg";

function TinyAlert({ text }) {
  return (
    <div className="flex flex-row items-center bg-[#D1E1DF] border-none rounded-full text-emerald-500 font-Outfit text-xs px-2 py-[0.5px]">
      {text}
      <CloseSVG
        className="ml-[0.5px] cursor-pointer fill-black hover:fill-pink-700"
        width={12}
        height={12}
      />
    </div>
  );
}

export default function AccordianIndustry() {
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="w-full flex flex-col border-b border-b-[#E8E7E7] px-2 pt-2 pb-2">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-sm font-[600] font-Outfit">Industry name</p>
          <IconButton
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? (
              <ReactSVG src={DownIcon} style={{ rotate: "180deg" }} />
            ) : (
              <ReactSVG src={DownIcon} />
            )}
          </IconButton>
        </div>
        {expanded ? (
          <div className="w-full flex flex-col mt-1">
            <div className="w-full flex flex-wrap gap-1 p-2">
              <TinyAlert text="Software" />
              <TinyAlert text="Artificial Intelligence" />
              <TinyAlert text="Software development" />
              <TinyAlert text="Fashion" />
            </div>

            <TextField
              className="w-full"
              placeholder="Enter Industries"
              InputProps={{
                sx: {
                  height: "30px",
                  padding: "0.1rem",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "Outfit",
                  fontSize: "14px",
                },
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
