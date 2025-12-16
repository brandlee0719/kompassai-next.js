import { Slider, styled } from "@mui/material";
import React from "react";

const MuiSlider = ({ progress }) => {
  const StyledSlider = styled(Slider)(({ theme }) => ({
    ".MuiSlider-thumb": {
      width: " 0 ",
    },

    ".MuiSlider-root": {
      color: "#e8e7e7 ",
    },

    ".MuiSlider-track": {
      backgroundColor: "#000000 ",
    },
  }));

  return (
    <>
      <StyledSlider
        value={progress}
        disabled={true}
        marks={false}
        max={100}
        min={0}
        size="small"
        defaultValue={0}
        style={{ height: "3px", padding: "0px", margin: "0px"}}
      />
    </>
  );
};

export default MuiSlider;
