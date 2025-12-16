import React, { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import leftLeads from "@/assets/image/base/leftside-leads.png";
import advancedSearch from "@/assets/image/base/Advanced Search.png";
import bulkEnrich from "@/assets/image/base/Bulk Enrich.png";
import rightLeads from "@/assets/image/base/rightside-leads.png";

import MuiSlider from "./MuiSlider";
import { Typography } from "@material-tailwind/react";
import Text from "@/components/Text";

const IMAGES = [
  advancedSearch,
  leftLeads,
  leftLeads,
  bulkEnrich,
  rightLeads,
  rightLeads,
];
const PowerCompatibility = ({ index }) => {
  const TEXTS = [
    "Enrich and enhance your existing prospects directly through a CSV upload that will validate records real-time and provide you with the freshest data.",
    "Seamlessly integrate your data across several platforms such as Salesforce, Hubspot,  Outreach among others. ",
    "Manage your entire sales workforce from a single platform to streamline invoicing, manage credit limits, and track performance. ",
  ];
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={8} sm={8} lg={4} xl={4} className="max-sm:order-1">
        <Box>
          <Box className="flex flex-col items-start">
            <Box>
              <div className="font-OutfitBold text-[1.75rem] text-stone-950">
                Get automated business
                <br /> monitoring and alerting
              </div>
            </Box>
          </Box>

          <div className="font-Outfit text-md text-stone-350 mt-4 text-animation ml-0 pl-0">{TEXTS[index]}</div>
          <button className="mt-16 rounded-md bg-stone-950 text-white py-2 px-3 hover:bg-blue-500 font-OutfitMedium text-md">
            LEARN MORE
          </button>
        </Box>
      </Grid>
      <Grid item xs={16} sm={16} lg={8} xl={8} className="max-sm:order-2">
        <img src={IMAGES[3 + index]} alt="leads" />
      </Grid>
    </Grid>
  );
};

const PerfectLead = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const TEXTS = [
    "Search our database of over 500 million profiles and 20 million companies by location, industry, company details and among several other attributes.",
    "Prospect on LinkedIn and LinkedIn Navigator to get real-time data on  companies and contacts from across the world.",
    "Reliable, fast and secure email validation service to remove non-existent emails from your prospecting lists and ensure you maintain your domain credibility.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sliderProgressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 100 / 80);
    }, 75);
    let timeoutID = 0;
    if (progress === 100) {
      clearInterval(sliderProgressInterval);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 sliders
      const description = document.querySelector(".text-animation");
      description.classList.add("text-fade");
      timeoutID = setTimeout(function () {
        description.classList.remove("text-fade");
      }, 1000);
      setProgress(0);
    }

    return () => {
      clearTimeout(timeoutID);
      clearInterval(sliderProgressInterval);
    };
  }, [progress]);

  return (
    <Box className="flex justify-center flex-col mt-24">
      
      <Box className="mx-12">
        <Box
          className="text-center text-white uppercase bg-black rounded-full bg-black w-40 font-OutfitMedium text-md mb-8"
        >
          <div>EASY SEARCH</div>
        </Box>
        <Box className="w-full flex items-center justify-start mb-12">
          <div className="text-black font-OutfitBold text-[3rem] leading-relaxed">
            Tools to help you prospect<br />with precision
          </div>
        </Box>
        
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item
              xs={16}
              sm={16}
              lg={8}
              xl={8}
              // className="max-md:order-2"
            >
              <Box className="flex flex-col">
                <Box className="flex flex-wrap font-Outfit text-xl text-stone-350 mb-12">
                  <Box className="flex flex-col items-center w-1/3 px-2 gap-2">
                    {currentIndex === 0 ? (
                      <div
                        className={`text-stone-950`}
                      >
                        Advanced Search
                      </div>
                    ) : (
                      <div> Advanced Search </div>
                    )}
                    <MuiSlider progress={currentIndex === 0 ? progress : 0}/>
                  </Box>

                  <Box className="flex flex-col items-center w-1/3 px-2 gap-2">
                    {currentIndex === 1 ? (
                      <div
                        className={`text-stone-950`}
                      >
                        Browser Extension
                      </div>
                    ) : (
                      <div>
                        Browser Extension
                      </div>
                    )}
                    <MuiSlider progress={currentIndex === 1 ? progress : 0} />
                  </Box>

                  <Box className="flex flex-col items-center w-1/3 px-2 gap-2">
                    {currentIndex === 2 ? (
                      <div
                        className={`text-stone-950`}
                      >
                        Email Verification
                      </div>
                    ) : (
                      <div>
                        Email Verification
                      </div>
                    )}

                    <MuiSlider progress={currentIndex === 2 ? progress : 0} />
                  </Box>
                </Box>
                <Box>
                  <img src={IMAGES[currentIndex] || leftLeads} alt="leads" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8} sm={8} lg={4} xl={4}
            // className="max-md:order-1"
            >
              <Box className="mt-20">
                <Box className="flex flex-col items-start max-sm:items-center">
                  <div
                    className="font-OutfitBold text-[1.75rem] text-stone-950"
                  >
                    Get instant access to the
                    <br /> KompassAI database
                  </div>
                </Box>

                <div className="font-Outfit text-md text-stone-350 mt-4">
                  {TEXTS[currentIndex]}
                </div>

                <button className="mt-16 rounded-md bg-stone-950 text-white py-2 px-3 hover:bg-blue-500 font-OutfitMedium text-md">
                  LEARN MORE
                </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="flex justify-center flex-col mt-12 pt-16 pb-12 px-12 bg-[#F4F4F8]">
        <Box
          className="text-center text-white uppercase bg-black rounded-full bg-black w-60 font-OutfitMedium text-md mb-8"
        >
          <div>PERFECT COMPATIBILITY</div>
        </Box>

        <Box className="w-full flex items-center justify-start mb-12">
          <div className="text-black font-OutfitBold text-[3rem] leading-relaxed">
            Answer your own data
            <br /> questions instantly
          </div>
        </Box>

        <Box>
          <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item
              xs={16}
              sm={16}
              lg={8}
              xl={8}
              // className="max-md:order-2"
            >
            <Box className="flex flex-col">
              <Box className="flex flex-wrap font-Outfit text-xl text-stone-350 mb-12">
                <Box className="flex flex-col items-center w-1/3 px-2 gap-2">
                  {currentIndex === 0 ? (
                    <div
                      className={`text-stone-950`}
                    >
                      Bulk Enrich
                    </div>
                  ) : (
                    <div> 
                      Bulk Enrich
                    </div>
                  )}
                  <MuiSlider progress={currentIndex === 0 ? progress : 0} />
                </Box>

                <Box className="flex flex-col items-center w-1/3 px-2 gap-2">
                  {currentIndex === 1 ? (
                    <div
                      className={`text-stone-950`}
                    >
                      Integrations
                    </div>
                  ) : (
                    <div>
                      Integrations
                    </div>
                  )}
                  <MuiSlider progress={currentIndex === 1 ? progress : 0} />
                </Box>

                <Box className="flex flex-col items-center w-1/3 px-2 gap-2">
                  {currentIndex === 2 ? (
                    <div
                      className={`text-stone-950`}
                    >
                      Team Management
                    </div>
                  ) : (
                    <div
                      className={`text-stone-950`}
                    >Team Management
                    </div>
                  )}
                  <MuiSlider progress={currentIndex === 2 ? progress : 0} />
                </Box>
              </Box>
            </Box>
            </Grid>
            </Grid>
          </Box>

          <PowerCompatibility index={currentIndex} />
        </Box>
      </Box>

    </Box>
  );
};

export { PerfectLead };
