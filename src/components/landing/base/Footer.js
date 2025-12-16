import {
  Box,
  Grid,
  TextField,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { ReactComponent as MainLogoSVG } from "@/assets/image/base/logo.svg";
import { ReactComponent as SocialMediaSVG } from "@/assets/image/base/socialMedia.svg";
import { ReactComponent as ChromeSVG } from "@/assets/image/base/chrome.svg";
import { ReactComponent as LogoWhiteSVG } from "@/assets/image/base/logoWhite.svg";
import { Button, Typography } from "@material-tailwind/react";
import Text from "@/components/Text";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      width: "inherit",
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  });

  //   xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px

  return (
    <>
      <Box>
        <Box className="inline-flex mx-24 px-24 flex-col items-center gap-[10px] bg-stone-950 w-full">
          <Box className="flex flex-col items-start gap-[80px]">
            <Grid
              container
              rowSpacing={5.5}
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 12 }}
            >
              <Grid item xs={12} sm={6} md={6} lg={4} xl={2.4}>
                <Box className="max-sm:flex max-sm:w-full max-sm:flex-wrap">
                  <Box className="max-sm:w-3/6 order-1 flex ">
                    <MainLogoSVG fill="#FFFFFF" />
                  </Box>
                  <Box className="max-sm:w-full order-3">
                    <Text
                      variant="caption"
                      className="max-sm:mt-0 mt-[40px] mb-[40] text-white "
                    >
                      Gather verified email addresses & phone numbers directly
                      from LinkedIn, reach out, and see when they open your
                      emails.
                    </Text>
                  </Box>
                  <Box className="max-sm:w-3/6 order-2">
                    <SocialMediaSVG />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={2.6}
                xl={2.4}
                sx={{
                  alignItems: "start",
                  display: isTablet ? "flex" : "block",
                  justifyContent: isMobile
                    ? "flex-start"
                    : isTablet
                    ? "center"
                    : "flex-end",
                }}
              >
                <Box className="inline-flex items-start gap-[64px] max-sm:gap-[40px]">
                  <Box className="flex w-56 flex-col items-start gap-[40px] max-sm:gap-[24px]">
                    <Text
                      variant="Header4"
                      className="text-white h-8 self-stretch"
                    >
                      Product
                    </Text>
                    <Box className="flex flex-col items-start self-stretch gap-[24px] w-[260px]">
                      <Text variant="LinkButton" className="text-white">
                        Pricing
                      </Text>
                      <Text variant="LinkButton" className="text-white">
                        Products Overview
                      </Text>
                      <Text variant="LinkButton" className="text-white">
                        Watch Demo of Product
                      </Text>
                      <Text variant="LinkButton" className="text-white">
                        Book a Demo with Sales Rep
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={2.6}
                xl={2.4}
                sx={{
                  alignItems: "start",
                  justifyContent: isMobile
                    ? "flex-start"
                    : isTablet
                    ? "center"
                    : "flex-end",
                }}
              >
                <Box className="inline-flex items-start gap-[64px]">
                  <Box className="flex w-56 flex-col items-start gap-[40px] max-sm:gap-[24px]">
                    <Typography className="text-3xl not-italic font-bold  text-white h-8 self-stretch">
                      Resources
                    </Typography>
                    <Box className="flex flex-col items-start self-stretch gap-[24px] w-[260px]">
                      <Typography className="text-lg not-italic font-normal text-white ">
                        Revenue Calculator for Sales
                      </Typography>
                      <Typography className="text-lg not-italic font-normal text-white ">
                        Customer Stories
                      </Typography>
                      <Typography className="text-lg not-italic font-normal text-white ">
                        Blog
                      </Typography>
                      <Typography className="text-lg not-italic font-normal text-white ">
                        FAQ
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={2.6}
                xl={2.4}
                sx={{
                  display: isTablet ? "flex" : "block",
                  justifyContent: isMobile
                    ? "flex-start"
                    : isTablet
                    ? "center"
                    : "flex-end",
                }}
              >
                <Box className="inline-flex items-start gap-[64px]">
                  <Box className="flex w-56 flex-col items-start gap-[40px] max-sm:gap-[24px]">
                    <Typography className="text-3xl not-italic font-bold  text-white h-8 self-stretch">
                      Company
                    </Typography>
                    <Box className="flex flex-col items-start self-stretch gap-[24px] w-[260px]">
                      <Typography className="text-lg not-italic font-normal text-white ">
                        About Us
                      </Typography>
                      <Typography className="text-lg not-italic font-normal text-white ">
                        Legal Terms & Conditions
                      </Typography>
                      <Typography className="text-lg not-italic font-normal text-white ">
                        Company Alternatives
                      </Typography>
                      <Typography className="text-lg not-italic font-normal text-white ">
                        Opt Out of the Email List
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={2.4}
                sx={{
                  justifyContent: isMobile
                    ? "flex-start"
                    : isTablet
                    ? "center"
                    : "flex-end",
                  width: "100%",
                }}
              >
                <Box className="flex max-sm:w-full flex-col items-start gap-[16px]">
                  <Box className="flex p-5 items-center max-sm:justify-center self-stretch gap-[8px] rounded-[20px] border border-solid border-[#fff] bg-[#051F21]">
                    <ChromeSVG className="w-[24px] h-[24px] flex items-center justify-center text-white" />
                    <Typography className="text-xl not-italic font-bold text-white text-wrap">
                      Chrome Extension
                    </Typography>
                  </Box>
                  <Box className="flex p-5 items-center max-sm:justify-center self-stretch gap-[8px] rounded-[20px] border border-solid border-[#fff] bg-[#051F21]">
                    <LogoWhiteSVG className="w-[24px] h-[24px] flex items-center justify-center text-white" />
                    <Typography className="text-xl not-italic font-bold text-white text-wrap">
                      Login on platform
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box className="flex flex-col justify-center items-center self-stretch gap-[64px]">
              <Box className="h-[2px] w-full border border-solid border-[#fff]"></Box>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Box>
                    <Typography className="text-5xl max-sm:text-3xl not-italic font-semibold text-white ">
                      Join the 15,000+ businesses simplifying their finances
                      with KompassAI
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <Box className="flex flex-col items-start">
                    <Box className="w-full max-sm:mx-0 h-[60px] rounded-[40px] bg-[#FFFFFF] flex items-center justify-between">
                      <Box className="w-full h-[60px] rounded-[40px] bg-[#FFFFFF] flex items-center justify-start flex-1">
                        <CssTextField
                          placeholder="Enter your work email"
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </Box>
                      <Button className="flex-2 rounded-[40px] bg-magenta-500 text-[#FFFFFF] m-4 p-3 hover:bg-magenta-500 ">
                        GET STARTED
                      </Button>
                    </Box>
                    <Typography className="text-sm not-italic font-bold  text-white pt-3 ml-[20px]">
                      No personal credit checks or founder guarantee.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box className="h-[2px] w-full border border-solid border-[#fff]"></Box>
            </Box>
            <Box className="flex flex-wrap max-sm:flex-col max-lg:flex-col items-start gap-[34px] max-sm:gap-0 max-lg:gap-0">
              <Typography className="text-sm not-italic font-bold  text-white opacity-50 flex-1 flex-grow-9 leading-9 flex-shrink-0">
                © 2023 Ramp Business Corporation. “Ramp” and the Ramp logo are
                registered trademarks of the company. <br />
                The Ramp Visa Commercial Card and the Ramp Visa Corporate Card
                are issued by Sutton Bank and Celtic Bank (Members FDIC),
                respectively. <br />
                *International payments may be subject to a currency conversion
                fee. Flex extended payment terms and other optional
                international payments may incur transactional or financing
                fees. Please see the Platform Agreement and Payment Card
                Addendum for additional details.
                <br />
                *Individual results may vary. Ramp makes no guarantee as to the
                savings any specific customer will experience.
              </Typography>
              <Typography className="text-sm not-italic font-bold  text-white opacity-50 flex-1 flex-grow-9 leading-9 flex-shrink-0">
                Please visit our Terms of Service for more details. Read our
                Editorial Guidelines and Privacy Policy
                <br /> Ramp Payments Corporation - NMLS 2371465
                <br /> Ramp Financing Corporation - NMLS 2431387
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
