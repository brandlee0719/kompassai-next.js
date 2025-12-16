import Text from "@/components/Text";
import { Typography } from "@material-tailwind/react";
import { Box, Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const KompassAi = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <>
      <Box className="">
        <Box className="inline-flex w-full items-center flex-col bg-stone-950 px-12 py-24 gap-16">
          <div className="font-OutfitBold text-stone-950 text-white text-center text-[3rem]">
            See how KompassAI stacks up against <br />
            other sales intelligence providers
          </div>
          <Box className="flex py-3 px-5 items-center justify-center rounded-full bg-blue-500 mb-8">
            <Box>
              <div className="text-2xl font-OutfitMedium uppercase text-white">
                compare kompassai
              </div>
            </Box>
          </Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3.9}
              lg={3.9}
              xl={3.9}
            >
              <Box className="flex flex-col items-center gap-6">
                <Box>
                  <div className="text-white text-center text-3xl font-OutfitBold">
                    30% more accurate emails and phone numbers
                  </div>
                </Box>
                <Box>
                  <div className="text-white text-center text-xl font-Outfit">
                    on average compared to Zoominfo
                  </div>
                </Box>
              </Box>
            </Grid>
            <Divider
              orientation={isMobile || isTablet ? "horizontal" : "vertical"}
              flexItem
              sx={{ width: isMobile || isTablet ? "100%" : "0"}}
              className="bg-stone-350"
            ></Divider>
            <Grid
              item
              xs={12}
              sm={12}
              md={3.9}
              lg={3.9}
              xl={3.9}
            >
             <Box className="flex flex-col items-center gap-6">
                <Box>
                  <div className="text-white text-center text-3xl font-OutfitBold">
                    “It gives me more time to focus on selling”
                  </div>
                </Box>
                <Box>
                  <div className="text-white text-center text-xl font-Outfit">
                    Save 5 hours a month on data sanitation vs. typical
                    enrichment tools
                  </div>
                </Box>
              </Box>
            </Grid>
            <Divider
              orientation={isMobile || isTablet ? "horizontal" : "vertical"}
              flexItem
              sx={{ width: isMobile || isTablet ? "100%" : "0" }}
              className="bg-stone-350"
            ></Divider>
            <Grid
              item
              xs={12}
              sm={12}
              md={3.9}
              lg={3.9}
              xl={3.9}
            >
              <Box className="flex flex-col items-center gap-6">
                <Box>
                  <div className="text-white text-center text-3xl font-OutfitBold">
                    Switch to KompassAI in less than 5 minutes
                  </div>
                </Box>
                <Box>
                  <div className="text-white text-center text-xl font-Outfit">
                    Simple set-up and optimized UI, allows customers to start
                    prospecting instantly¹
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <div className="text-center text-sm font-OutfitMedium text-stone-350">
              ¹Based on an August 2023 survey of KompassAI customers
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default KompassAi;
