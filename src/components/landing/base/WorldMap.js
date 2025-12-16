import React from "react";
import { ReactComponent as WorldMapSVG } from "@/assets/image/WorldMap.svg";
import { Box } from "@mui/material";
import CountryMap from "./CountryMap";

const WorldMap = (props) => {
  const { elements } = props;
  return (
    <div className="w-full">
      <Box
        className="w-full max-sm:h-[167.px] relative ml-0 rounded-3xl"
        sx={{
          flexGrow: 1,
          background: "#F4F4F8",
        }}
      >
        <CountryMap elements={elements} />
        <WorldMapSVG className="w-5/6 max-sm:w-full max-lg:w-full m-auto" />
      </Box>
    </div>
  );
};

export default WorldMap;
