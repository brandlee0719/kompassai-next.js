import React, { useState } from "react";
import { Box, IconButton, Grid, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as MainLogo } from "@/assets/image/base/logo.svg";
import { ReactComponent as DownArrowSVG } from "@/assets/image/base/downArrow.svg";
import { ReactComponent as GroupFrameSVG } from "@/assets/image/base/groupFrame.svg";
import { ReactComponent as PartnerSVG } from "@/assets/image/base/partner.svg";
import { ReactComponent as LearnSVG } from "@/assets/image/base/learn.svg";
import { ReactComponent as UpArrowSVG } from "@/assets/image/base/upArrow.svg";
import { Link, useNavigate } from "react-router-dom";
import SearchNav from "@/components/svgComponent/SearchNav";
import RightArrow from "@/components/svgComponent/RightArrow";
import Navbar from "./Navbar";
import { Button, Typography } from "@material-tailwind/react";
import { navList } from "@/utils/common";

import useKompassRouter from "@/hooks/useKompassRouter";

export default function (props) {
  const { isOpen, handleOpen, isSticky, handleClose } = props;
  const theme = useTheme();
  const isTablet_ = useMediaQuery(theme.breakpoints.down("md"));
  const [isProduct, setIsProduct] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const { kompassNavigate } = useKompassRouter();

  const StyledBox = styled(Box)({
    "&:hover": {
      backgroundColor: "#E7436A",
      color: "#FFFFFF !important",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },

    "&:hover .MuiBox-root": {
      color: "#FFFFFF !important",
    },
  });

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
        <Box className="h-screen">
          <Box className="w-full py-4 px-6 flex text-center items-center justify-between">
            <Box className="flex text-center items-center w-[197.71px] h-[36px]">
              <MainLogo />
            </Box>
            <IconButton size="medium" edge="end" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="flex items-center justify-center gap-[8px] w-full py-4 px-6">
            <Button
              sx={{
                border: "1px solid #104347",
                borderRadius: "40px",
                // padding: "16px, 24px, 16px, 24px",
              }}
              className="py-4 px-6 w-full text-stone-950 text-[16px] font-bold leading-[20px]"
              onClick={() => {
                kompassNavigate("/login");
              }}
            >
              LOGIN
            </Button>
            <Button
              sx={{
                border: "1px solid #104347",
                borderRadius: "40px",
                background: "#104347",
              }}
              className="bg-[#104347] w-full py-4 px-6 font-bold text-white hover:bg-[#104347]"
            >
              BOOK A DEMO
            </Button>
          </Box>
          <Box className="flex items-start justify-center flex-col gap-[24px] w-full py-4 px-6">
            <Box
              onClick={() => {
                kompassNavigate("/pricing");
              }}
            >
              <Typography className="text-stone-950 font-Outfit font-normal leading-[22.4px] cursor-pointer">
                Pricing
              </Typography>
            </Box>
            <Box className="flex flex-col items-start gap-[10px]">
              <Box
                className="flex items-center  self-stretch  gap-[8px]"
                onClick={() => {
                  if (isProduct) {
                    setIsProduct(false);
                    setIsResources(false);
                  } else {
                    setIsProduct(true);
                    setIsResources(false);
                  }
                }}
              >
                <Typography className="text-stone-950 font-Outfit font-normal leading-[22.4px] cursor-pointer">
                  Product
                </Typography>
                {isProduct ? (
                  <UpArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                ) : (
                  <DownArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                )}
              </Box>
              {isProduct && (
                <>
                  <Box className="flex w-full bg-white">
                    <Grid
                      container
                      rowSpacing={2}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
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
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Linkedin Prospecting Tool
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Email Verification
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Advanced Database Search
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                CSV Exoprt
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Integration
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
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
                                Lorem ipsum dolor sit amet consectetur.
                                Facilisis velit adipiscing fames bibendum leo
                                proin viverra sit. Dui sed condimentum purus
                                sapien nisl mattis vitae risus.
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
                                Dui sed condimentum purus sapien nisl mattis
                                vitae risus. Ac interdum amet vulputate nisl
                                laoreet integer ut. Dictum in vel ac at bibendum
                                leo proin viverra.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )}
            </Box>

            <Box className="flex flex-col items-start gap-[10px]">
              <Box
                className="flex items-center self-stretch gap-[8px]"
                onClick={() => {
                  alert("1234");
                  if (isResources) {
                    setIsProduct(false);
                    setIsResources(false);
                  } else {
                    setIsProduct(false);
                    setIsResources(true);
                  }
                }}
              >
                <Typography className="text-stone-950 font-Outfit font-normal leading-[22.4px] cursor-pointer">
                  Resources
                </Typography>
                {isResources ? (
                  <UpArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                ) : (
                  <DownArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                )}
              </Box>
              {isResources && (
                <>
                  <Box className="flex w-full bg-white">
                    <Grid
                      container
                      rowSpacing={2}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
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
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Webinars
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Blog
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                FAQ
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Revenue Calculator for Sales
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
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
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Kompass Advocate
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Affiliate model
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                            <Box className="flex items-center self-stretch gap-[8px]">
                              <Typography className="text-base not-italic font-normal text-stone-950">
                                Refer a friend
                              </Typography>
                              <RightArrow color={"#0A2E31"} />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )}
            </Box>

            <Box>
              <Typography className="text-stone-950 font-Outfit font-normal leading-[22.4px] cursor-pointer">
                Customer Stories
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {!isTablet_ && (
        <Box
          className={
            isSticky
              ? "w-full fixed top-0 z-[100] left-0 px-20 max-lg:px-4"
              : "w-full sticky top-0 z-[100] left-0 px-20 max-lg:px-4"
          }
          sx={{
            backgroundColor: "rgb(255 255 255 / 52%) !important",
            backdropFilter: "blur(25px) !important",
          }}
        >
          <Box className="flex items-center justify-between p-4">
            <Box>
              <MainLogo />
            </Box>

            <Box className="flex items-center justify-between">
              {navList.map((item, ind) => {
                if (item.router === "/prospecting") {
                  return (
                    <StyledBox
                      className="flex items-center justify-center px-4"
                      sx={{ position: isProduct ? "relative" : "initial" }}
                      onClick={() => {
                        kompassNavigate(item.router);
                        setIsProduct(false);
                        setIsResources(false);
                      }}
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        setIsProduct(true);
                        setIsResources(false);
                      }}
                      // onMouseLeave={(e) => {
                      //   e.stopPropagation();
                      //   setIsProduct(false);
                      //   setIsResources(false);
                      // }}
                    >
                      <Box className="text-black cursor-pointer">Product</Box>
                      <Box>
                        {isProduct ? (
                          <UpArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                        ) : (
                          <DownArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                        )}
                      </Box>
                    </StyledBox>
                  );
                }

                if (item.router === "/aboutme") {
                  return (
                    <StyledBox
                      className="flex items-center justify-center px-4"
                      sx={{ position: isResources ? "relative" : "initial" }}
                      onClick={(e) => {
                        kompassNavigate(item.router);
                        setIsProduct(false);
                        setIsResources(false);
                      }}
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        setIsResources(true);
                        setIsProduct(false);
                      }}
                      // onMouseLeave={(e) => {
                      //   e.stopPropagation();
                      //   setIsResources(false);
                      //   setIsProduct(false);
                      // }}
                    >
                      <Box className="text-black cursor-pointer">Resources</Box>
                      <Box>
                        {isResources ? (
                          <UpArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                        ) : (
                          <DownArrowSVG className="ml-[0.8rem] w-[12px] h-[30px]" />
                        )}
                      </Box>
                      {/* {isResources && <div className="div-overlay"></div>} */}
                    </StyledBox>
                  );
                }

                return (
                  <StyledBox
                    className="px-4 text-black cursor-pointer"
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
                  </StyledBox>
                );
              })}
            </Box>

            <Box className="flex items-center">
              <Button
                className="px-6 py-4 whitespace-nowrap rounded-[40px] border border-solid border-1 border-[#104347] mr-4"
                onClick={() => {
                  kompassNavigate("/login");
                }}
              >
                <span className="text-stone-950 font-bold">LOGIN</span>
              </Button>
              <Button className="bg-[#104347] text-white hover:bg-[#104347] px-6 py-4 whitespace-nowrap rounded-[40px] border border-solid border-1 border-[#104347]">
                BOOK A DEMO
              </Button>
            </Box>
          </Box>
          <Box
            onMouseLeave={(e) => {
              e.stopPropagation();
              setIsResources(false);
              setIsProduct(false);
            }}
          >
            <Navbar isProduct={isProduct} isResources={isResources} />
          </Box>
        </Box>
      )}
    </>
  );
}
