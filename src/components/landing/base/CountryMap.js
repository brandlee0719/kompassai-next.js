import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@material-tailwind/react";
import Text from "@/components/Text";

const CountryMap = (props) => {
  return (
    <Box className="w-full flex items-center justify-center flex-wrap">
      {props?.elements?.map((data, index) => (
        <Box
          key={index}
          className={`country-card max-w-60 rounded-md bg-white absolute px-2 py-2`}
          style={{
            top: data.top,
            left: data.left,
          }}
        >
          <Box className="mb-2">
            <Typography
              className="text-center text-white uppercase bg-black font-OutfitMedium rounded-full text-sm"
            >
              {data.label}
            </Typography>
          </Box>
          <Box className="flex">
            <Typography className="text-black font-bold">
              <strong>{data.number}</strong>
            </Typography>
            <Typography className={`text-stone-950 ml-1`}>
              Individual Records
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CountryMap;
