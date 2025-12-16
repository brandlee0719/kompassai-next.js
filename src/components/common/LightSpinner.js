import { useState, useEffect } from "react";

import { CircularProgress } from "@mui/material";
import { pink } from "@mui/material/colors";
import { KompassColor } from "@/theme/color";

export default function LightSpinner({ position = "fixed" }) {
  return (
    <>
      <div className="absolute z-50 flex h-full w-full bg-[#ffffff00]">
        <div
          style={{
            position,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            sx={{
              // color: KompassColor["main"][300],
              position: "absolute",
              left: 0,
            }}
          />
        </div>
      </div>
    </>
  );
}
