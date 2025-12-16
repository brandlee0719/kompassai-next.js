import { Box, Grid } from "@mui/material";
import { ReactComponent as GroupFrameSVG } from "@/assets/image/base/groupFrame.svg";
import { ReactComponent as PartnerSVG } from "@/assets/image/base/partner.svg";
import { ReactComponent as LearnSVG } from "@/assets/image/base/learn.svg";

import SearchNav from "@/components/svgComponent/SearchNav";
import RightArrow from "@/components/svgComponent/RightArrow";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  menuProductList,
  menuResourceLearnList,
  menuResourcePartnerList,
} from "@/utils/common";

export default function (props) {
  return (
    <div className="w-full">
      {props?.isProduct && <MenuProducts />}
      {props?.isResources && <MenuResources />}
    </div>
  );
}

const MenuProducts = () => {
  return (
    <Box className="flex flex-col w-full px-6 py-8">
      <Box className="flex flex-col w-full">
        {/* <Box className="flexflex-col items-center self-stretch gap-[24px] ">
          <Box className="flex items-center self-stretch ">
            <SearchNav color={"#0A2E31"} />
            <Box>
              <Typography className="text-xl not-italic font-normal text-emerald-500 leading-[120%]">
                Products Overview
              </Typography>
            </Box>
          </Box>
        </Box> */}
        <Box className="flex flex-col items-start gap-4">
          {menuProductList.map((item, ind) => {
            return (
              <Link
                key={ind}
                to={item.router}
                className="flex items-center self-stretch gap-2"
              >
                <Typography className="font-Outfit text-md text-stone-950">
                  {item.label}
                </Typography>
                <RightArrow color={"#0A2E31"} />
              </Link>
            );
          })}
        </Box>
      </Box>
      {/* <Box className="flex flex-col w-full gap-[16px] mt-8">
        <Box className="flex flex-col items-center self-stretch gap-[24px] rounded-[16px]">
          <Box className="flex items-center self-stretch gap-[16px] ">
            <SearchNav color={"#E7436A"} />
            <Box className="w-[80%] flex flex-col">
              <Typography className="text-xl not-italic font-normal text-magenta-500 leading-[120%] flex-1 flex-grow-0 flex-shrink-0">
                Watch Demo of Product
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="px-8 flex flex-col items-start gap-[8px]">
          <Box className="flex items-center self-stretch gap-[8px]">
            <Typography className="text-base not-italic font-normal text-stone-950">
              Lorem ipsum dolor sit amet consectetur. Facilisis velit adipiscing
              fames bibendum leo proin viverra sit. Dui sed condimentum purus
              sapien nisl mattis vitae risus.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col w-full gap-[16px] mt-8">
        <Box className="flex flex-col items-center self-stretch gap-[24px] rounded-[16px]">
          <Box className="flex items-center self-stretch gap-[16px] ">
            <SearchNav color={"#00D2B4"} />
            <Box className="w-[80%] flex flex-col">
              <Typography className="text-xl not-italic font-normal text-[#00D2B4] leading-[120%] flex-1 flex-grow-0 flex-shrink-0">
                Book a Demo with Sales Rep
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="px-8 flex flex-col items-start gap-[8px]">
          <Box className="flex items-center self-stretch gap-[8px]">
            <Typography className="text-base not-italic font-normal text-stone-950">
              Dui sed condimentum purus sapien nisl mattis vitae risus. Ac
              interdum amet vulputate nisl laoreet integer ut. Dictum in vel ac
              at bibendum leo proin viverra.
            </Typography>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

const MenuResources = () => {
  return (
    <Box className="flex flex-col w-full px-6 py-8 gap-8">
      <Box className="flex flex-col w-full gap-4">
        <Box className="flex flex-col items-center self-stretch">
          <Box className="flex items-center self-stretch gap-4">
            <LearnSVG className="fill-current text-blue-500 h-6 w-6"/>
            <div className="font-Outfit text-blue-500 text-2xl ">
              Learn
            </div>
          </Box>
        </Box>
        <Box className="flex flex-col items-start gap-4">
          {menuResourceLearnList.map((item, ind) => {
            return (
              <Link
                key={ind}
                to={item.router}
                className="flex items-center self-stretch gap-2"
              >
                <Typography className="font-Outfit text-md text-stone-950">
                  {item.label}
                </Typography>
                <RightArrow color={"#0A2E31"} />
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box className="flex flex-col w-full gap-4">
        <Box className="flex flex-col items-center self-stretch gap-4">
          <Box className="flex items-center self-stretch gap-4">
            <PartnerSVG className="fill-current text-blue-500 h-6 w-6"/>
            <div className="font-Outfit text-blue-500 text-2xl">
              Partners
            </div>
          </Box>
        </Box>
        <Box className="flex flex-col items-start gap-4">
          {menuResourcePartnerList.map((item, ind) => {
            return (
              <Link
                key={ind}
                to={item.router}
                className="flex items-center self-stretch gap-2"
              >
                <Typography className="font-Outfit text-md text-stone-950">
                  {item.label}
                </Typography>
                <RightArrow color={"#0A2E31"} />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
