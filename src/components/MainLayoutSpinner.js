import React from "react";
import { CircularProgress } from "@mui/material";
import { pink } from "@mui/material/colors";

const LayoutSpinner = () => {
  return (
    <div className="z-50 absolute w-full h-full flex bg-[#00000080]">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          sx={{
            color: "light-blue",
            position: "absolute",
            left: 0,
          }}
        />
      </div>
    </div>
  );
};

export default LayoutSpinner;
