import { Box, Grid } from "@mui/material";
import React from "react";
import { ReactComponent as Frame1SVG } from "@/assets/image/base/frame1.svg";
import { ReactComponent as Frame2SVG } from "@/assets/image/base/frame2.svg";
import { ReactComponent as Frame3SVG } from "@/assets/image/base/frame3.svg";
import { ReactComponent as Frame4SVG } from "@/assets/image/base/frame4.svg";
import { Typography } from "@material-tailwind/react";
import Text from "@/components/Text";

const MeetAnswers = () => {
  return (
    <>
      <Box className="inline-flex flex-col items-center pt-[80px] pr-[80px] pb-[160px] pl-[80px] max-sm:py-[80px] max-sm:px-[16px] max-lg:py-12 max-lg:px-8 gap-[64px] max-sm:gap-[40px] w-full">
        <Box>
          <Text variant="Header2" className="text-center text-emerald-500 ">
            Questions? Meet answers!
          </Text>
        </Box>
        {/* <Box className="flex gap-[8px] items-start"> */}
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          rowGap={{ xs: 1, sm: 1, md: 2, lg: 2 }}
          className="justify-center"
        >
          {questionList.map((item) => {
            return (
              <Grid key={item.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Box className="flex p-10 flex-col justify-between items-center flex-1 flex-shrink-0 rounded-[30px] bg-[#F3F3F3]">
                  <Box className="flex flex-col items-start self-stretch gap-4">
                    <Box className="min-h-[108px]">
                      <Text variant="Header4" className="text-stone-950">
                        {item.title}
                      </Text>
                    </Box>
                    <Box className="min-h-[80px]">
                      <Text className="text-stone-950 ">
                        {item.description}
                      </Text>
                    </Box>
                  </Box>
                  <Box className="flex flex-col justify-end items-center gap-[40px] mt-4">
                    <item.FrameSVG />
                    <Box className="flex justify-end items-center py-[16px]  px-[24px] gap-[16px] rounded-[40px] border border-solid border-[#090C05]">
                      <Box>
                        <Text className="text-base not-italic font-bold uppercase text-stone-950 ">
                          {item.actionLabel}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* </Box> */}
      </Box>
    </>
  );
};

const questionList = [
  {
    id: 1,
    title: "Explore our Blog",
    description: "See how KompassAI stacks up against other providers.",
    FrameSVG: Frame1SVG,
    actionLabel: "EXPLORE BLOG",
    to: "#",
  },
  {
    id: 2,
    title: "Review Our Solutions",
    description: "See how KompassAI stacks up against other providers.",
    FrameSVG: Frame2SVG,
    actionLabel: "WATCH DEMO",
    to: "#",
  },
  {
    id: 3,
    title: "Give us a ring",
    description: "Monday through Friday from 7AM - 6PM MST.",
    FrameSVG: Frame3SVG,
    actionLabel: "(800) 936-0383",
    to: "#",
  },
  {
    id: 4,
    title: "Search the help center",
    description: "Get instant answers.",
    FrameSVG: Frame4SVG,
    actionLabel: "WATCH DEMO",
    to: "#",
  },
];

export default MeetAnswers;
