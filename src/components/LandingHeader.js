import React, { useState } from "react";
import { Box, IconButton, Grid, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as MainLogo } from "@/assets/image/icons/logo.svg";
import { ReactComponent as DownArrowSVG } from "@/assets/image/base/downArrow.svg";
import { ReactComponent as GroupFrameSVG } from "@/assets/image/base/groupFrame.svg";
import { ReactComponent as PartnerSVG } from "@/assets/image/base/partner.svg";
import { ReactComponent as LearnSVG } from "@/assets/image/base/learn.svg";
import { ReactComponent as UpArrowSVG } from "@/assets/image/base/upArrow.svg";
import { Link, useNavigate } from "react-router-dom";
import SearchNav from "@/components/svgComponent/SearchNav";
import RightArrow from "@/components/svgComponent/RightArrow";

import useKompassRouter from "@/hooks/useKompassRouter";

import { Button, Typography } from "@material-tailwind/react";
import {
  hexToRGB,
  menuProductList,
  menuResourceLearnList,
  menuResourcePartnerList,
  navList,
} from "@/utils/common";
import Navbar from "./landing/base/Navbar";
import NavPopup from "./popup/NavPopup";

export default function LandingHeader(props) {
  const { isOpen, handleOpen, isSticky, handleClose } = props;
  const theme = useTheme();
  const isTablet_ = useMediaQuery(theme.breakpoints.down("lg"));
  const [isProduct, setIsProduct] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const { kompassNavigate } = useKompassRouter();

  const StyledBox = styled(Box)({
    "&:hover": {
      backgroundColor: "#E7436A",
      color: "#FFFFFF !important",
      // padding: "0.5rem",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },

    "&:hover .MuiBox-root": {
      // padding: "0.5rem",
      color: "#FFFFFF !important",
    },
  });

  // const UpArrowIcon = props.invertColor ? (
  //   <UpArrowSVG className="ml-[0.8rem] w-[12px] h-[30px] text-white" />
  // ) : (
  //   <UpArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
  // );
  // const DownArrowIcon = props.invertColor ? (
  //   <DownArrowSVG className="ml-[0.8rem] w-[12px] h-[30px] text-white" />
  // ) : (
  //   <DownArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
  // );

  const [profilePopupAnchorEl, setProfilePopupAnchorEl] = useState(null);

  const profilePopupClosed = () => {
    setProfilePopupAnchorEl(null);
  };

  return (
    <>
      {isTablet_ && !isOpen && (
        <Box className="w-full py-4 px-6 flex text-center items-center justify-between">
          <Box className="flex text-center items-center w-[197.71px] h-[36px]">
            <MainLogo />
          </Box>
          <IconButton size="medium" edge="end" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {isTablet_ && isOpen && (
        <Box>
          <Box className="w-full py-4 px-6 flex text-center items-center justify-between">
            <Link
              to={"/"}
              className="flex text-center items-center w-[197.71px] h-[36px]"
            >
              {props.invertColor ? (
                <MainLogo fill="#ffffff" className="h-3" />
              ) : (
                <MainLogo className="w-10 h-3" />
              )}
            </Link>
            <IconButton size="medium" edge="end" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="flex items-center justify-center gap-[8px] w-full py-4 px-6">
            <Button
            // sx={{
            //   border: "3px solid #104347",
            //   borderRadius: "40px",
            //   // padding: "16px, 24px, 16px, 24px",
            // }}
            >
              LOGIN
            </Button>
            <Button
              sx={{
                border: "3px solid #104347",
                borderRadius: "40px",
                background: "#104347",
              }}
              className="bg-[#104347] w-full py-4 px-6 font-bold text-white hover:bg-[#104347]"
            >
              BOOK A DEMO
            </Button>
          </Box>
        </Box>
      )}

      {!isTablet_ && (
        <Box
          sx={{
            backgroundColor: isSticky
              ? hexToRGB(props.backColor, 85) + " !important"
              : "",
            backdropFilter: "blur(25px) !important",
          }}
          className={
            !isSticky
              ?  "w-full relative px-12 max-lg:px-4"
              : "w-full sticky top-0 z-[100]  px-12 max-lg:px-4 left-0"
          }
        >
          <Box className="flex items-center justify-between py-4">
            <Link to={"/"}>
              {props.invertColor ? (
                <MainLogo className="MainLogo_Pos fill-current text-white" />
              ) : (
                <MainLogo className="MainLogo_Pos fill-current text-stone-950"/>
              )}
            </Link>

            <Box className="flex items-center justify-between font-Outfit h-11 gap-8">
              {navList.map((item, ind) => {
                if (item.router === "/prospecting") {
                  return (
                    <Box className="group gap-8">
                      <Box
                        className="flex items-center justify-center py-2 gap-2"
                        sx={{ position: isProduct ? "relative" : "initial" }}
                        key={ind}
                      >
                        {props.invertColor ? (
                          <Box className="text-white cursor-pointer">
                            {item.label}
                          </Box>
                        ) : (
                          <Box className="text-black cursor-pointer">
                            {item.label}
                          </Box>
                        )}
                        <span
                          aria-hidden="true"
                          className="group-hover:rotate-180"
                        >
                          <svg
                            height="6"
                            width="8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 3.388L0 .387v2l4 3.001 4.001-3.001v-2z"
                              fill="#111"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </Box>
                      <div
                        className="bg-white filter drop-shadow-lg absolute hidden group-hover:block focus-within:block 
                          z-[10001] border border-stone-250 rounded-md"
                        aria-hidden="true"
                      >
                        <Navbar isProduct={true} />
                      </div>
                    </Box>
                  );
                }

                if (item.router === "/aboutme") {
                  return (
                    <Box className="group gap-8">
                      <Box
                        className="flex items-center justify-center py-2 gap-2"
                        sx={{ position: isProduct ? "relative" : "initial" }}
                        key={ind}
                      >
                        {props.invertColor ? (
                          <Box className="text-white cursor-pointer">
                            {item.label}
                          </Box>
                        ) : (
                          <Box className="text-black cursor-pointer">
                            {item.label}
                          </Box>
                        )}
                        <span
                          aria-hidden="true"
                          className="group-hover:rotate-180"
                        >
                          <svg
                            height="6"
                            width="8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 3.388L0 .387v2l4 3.001 4.001-3.001v-2z"
                              fill="#111"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </Box>
                      <div
                        className="bg-white filter drop-shadow-lg absolute hidden group-hover:block focus-within:block 
                          z-[10001] border border-stone-250 rounded-md"
                        aria-hidden="true"
                      >
                        <Navbar isResources={true} />
                      </div>
                    </Box>
                  );
                }

                return (
                  <Box className="border-b-2 border-transparent hover:border-stone-950">
                    <Box
                      className={`py-2 ${
                        props.invertColor ? "text-white" : "text-black"
                      } cursor-pointer`}
                      onClick={() => {
                        kompassNavigate(item.router);
                      }}
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        setIsResources(false);
                        setIsProduct(false);
                      }}
                    >
                      {item.label}
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Box className="flex items-center gap-4">
              {/* <Button
                className="px-6 py-4 whitespace-nowrap rounded-[40px] border border-solid border-1 border-[#104347] mr-4"
                onClick={() => {
                  kompassNavigate("/signin");
                }}
              >
                <span className="text-stone-950 font-bold">LOGIN</span>
              </Button>
              <Button className="bg-[#104347] text-white hover:bg-[#104347] px-6 py-4 whitespace-nowrap rounded-[40px] border border-solid border-1 border-[#104347]">
                BOOK A DEMO
              </Button> */}

              <Button
                onClick={() => {
                  kompassNavigate("/signin");
                }}
                // style={{ border: "2px solid #999999" }}
                className= {`cursor-pointer border rounded-md font-outfit text-sm px-4 py-2 bg-transparent ${
                  props.invertColor ? "text-white border-white" : "text-black border-stone-950"
                } `}
              >
                LOGIN
              </Button>
              <Button
                onClick={() => {
                  kompassNavigate("/");
                }}
                className= {`cursor-pointer border rounded-md font-outfit text-sm px-4 py-2 ${
                  props.invertColor ? "bg-white text-stone-950 border-white" : "bg-stone-950 text-white border-stone-950"
                } `}
              >
                BOOK A DEMO
              </Button>
            </Box>
          </Box>
          {/* <NavPopup
            anchorEl={profilePopupAnchorEl}
            handleClose={profilePopupClosed}
            isProduct={isProduct}
            isResources={isResources}
            onMouseLeave={(e) => {
              profilePopupClosed();
              e.stopPropagation();
              setIsResources(false);
              setIsProduct(false);
            }}
          /> */}
        </Box>
      )}
    </>
  );
}

const MenuProducts = () => {
  return (
    <Box className="flex w-full bg-white">
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3.9}>
          <Box className="flex flex-col w-full gap-[32px]">
            <Box className="p-8 flex  flex-col items-center self-stretch gap-[24px] bg-gray-200 rounded-[16px]">
              <Box className="flex items-center self-stretch gap-[16px]">
                <SearchNav color={"#0A2E31"} />
                <Box>
                  <Typography className="text-xl not-italic font-normal text-emerald-500 leading-[120%]">
                    Products Overview
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="px-8 flex flex-col items-start gap-[8px]">
              {menuProductList.map((item, ind) => {
                return (
                  <Link
                    key={ind}
                    to={item.router}
                    className="flex items-center self-stretch gap-[8px]"
                  >
                    <Typography className="text-base not-italic font-normal text-stone-950 ">
                      {item.label}
                    </Typography>
                    <RightArrow color={"#0A2E31"} />
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3.9}>
          <Box className="flex flex-col w-full gap-[32px]">
            <Box className="p-8 flex flex-col items-center self-stretch gap-[24px] bg-red-100 rounded-[16px]">
              <Box className="flex items-center self-stretch gap-[16px] ">
                <SearchNav color={"#E7436A"} />
                <Box className="w-[80%] flex flex-col">
                  <Typography className="text-xl not-italic font-normal text-magenta-500 leading-[120%] flex-1 flex-grow-0 flex-shrink-0">
                    Watch Demo of Product
                  </Typography>
                </Box>
                <Box className="flex w-[20%] justify-end">
                  <RightArrow color={"#E7436A"} />
                </Box>
              </Box>
            </Box>
            <Box className="px-8 flex flex-col items-start gap-[8px]">
              <Box className="flex items-center self-stretch gap-[8px]">
                <Typography className="text-base not-italic font-normal text-stone-950">
                  Lorem ipsum dolor sit amet consectetur. Facilisis velit
                  adipiscing fames bibendum leo proin viverra sit. Dui sed
                  condimentum purus sapien nisl mattis vitae risus.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3.9}>
          <Box className="flex flex-col w-full gap-[32px]">
            <Box className="p-8 flex flex-col items-center self-stretch gap-[24px] bg-gray-100 rounded-[16px]">
              <Box className="flex items-center self-stretch gap-[16px] ">
                <SearchNav color={"#00D2B4"} />
                <Box className="w-[80%] flex flex-col">
                  <Typography className="text-xl not-italic font-normal text-[#00D2B4] leading-[120%] flex-1 flex-grow-0 flex-shrink-0">
                    Book a Demo with Sales Rep
                  </Typography>
                </Box>
                <Box className="flex w-[20%] justify-end">
                  <RightArrow color={"#00D2B4"} />
                </Box>
              </Box>
            </Box>
            <Box className="px-8 flex flex-col items-start gap-[8px]">
              <Box className="flex items-center self-stretch gap-[8px]">
                <Typography className="text-base not-italic font-normal text-stone-950">
                  Dui sed condimentum purus sapien nisl mattis vitae risus. Ac
                  interdum amet vulputate nisl laoreet integer ut. Dictum in vel
                  ac at bibendum leo proin viverra.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const MenuResources = () => {
  return (
    <Box className="flex w-full bg-white">
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={3.9}
          className="max-sm:order-3 max-lg:order-3"
        >
          <Box className="p-8">
            <GroupFrameSVG className="m-auto" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={3.9}
          className="max-sm:order-1"
        >
          <Box className="flex flex-col w-full gap-[32px]">
            <Box className="p-8 flex flex-col items-center self-stretch gap-[24px] bg-gray-200 rounded-[16px]">
              <Box className="flex items-center self-stretch gap-[16px] ">
                <LearnSVG />
                <Box className="">
                  <Typography className="text-xl not-italic font-normal text-emerald-500 leading-[120%] flex-1 flex-grow-0 flex-shrink-0">
                    Learn
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="px-8 flex flex-col items-start gap-[8px]">
              {menuResourceLearnList.map((item, ind) => {
                return (
                  <Link
                    key={ind}
                    to={item.router}
                    className="flex items-center self-stretch gap-[8px]"
                  >
                    <Typography className="text-base not-italic font-normal text-stone-950">
                      {item.label}
                    </Typography>
                    <RightArrow color={"#0A2E31"} />
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={3.9}
          className="max-sm:order-2"
        >
          <Box className="flex flex-col w-full gap-[32px]">
            <Box className="p-8 flex flex-col items-center self-stretch gap-[24px] bg-red-100 rounded-[16px]">
              <Box className="flex items-center self-stretch gap-[16px] ">
                <PartnerSVG />
                <Box className="">
                  <Typography className="text-xl not-italic font-normal text-magenta-500 leading-[120%] flex-1 flex-grow-0 flex-shrink-0">
                    Partners
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="px-8 flex flex-col items-start gap-[8px]">
              {menuResourcePartnerList.map((item, ind) => {
                return (
                  <Link
                    key={ind}
                    to={item.router}
                    className="flex items-center self-stretch gap-[8px]"
                  >
                    <Typography className="text-base not-italic font-normal text-stone-950">
                      {item.label}
                    </Typography>
                    <RightArrow color={"#0A2E31"} />
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
