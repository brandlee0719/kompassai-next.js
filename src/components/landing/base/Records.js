import { Box, Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import { ReactComponent as UserSVG } from "@/assets/image/base/user.svg";
import { ReactComponent as CompanySVG } from "@/assets/image/base/company.svg";
import { ReactComponent as FieldsSVG } from "@/assets/image/base/fields.svg";
import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";

const Records = (props) => {
  const [count, setCount] = useState("0.1");
  const [counterTwo, setCounterTwo] = useState("01.1");
  const [counterThree, setCounterThree] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const recordsRef = useRef(null);

  useEffect(() => {
    let value = 0.1;
    let value1 = 3.5;

    let countTwoOver = 20;
    let valueTwo = 1.1;

    if (props.isCountStart === 1) {
      let valueInterval = setInterval(() => {
        if (value >= value1) {
          // props.setIsCountStart(props.isCountStart + 1);
          clearInterval(valueInterval);
        } else if (value < value1) {
          value += 0.1;
          setCount(value.toFixed(1).padStart(3, "0"));
        }
      }, 40);

      let valueIntervalTwo = setInterval(() => {
        if (valueTwo >= countTwoOver) {
          // props.setIsCountStart(props.isCountStart + 1);
          clearInterval(valueIntervalTwo);
        } else if (valueTwo < countTwoOver) {
          valueTwo += 0.1;
          setCounterTwo(valueTwo.toFixed(1).padStart(4, "0"));
        }
      }, 4);

      const valueIntervalThree = setInterval(() => {
        setCounterThree((prevCounterThree) => {
          if (prevCounterThree >= 100) {
            // props.setIsCountStart(props.isCountStart + 1);
            clearInterval(valueIntervalThree);
            return 100;
          }
          return prevCounterThree + 1;
        });
      }, 5);
      return () => {
        clearInterval(valueInterval);
        clearInterval(valueIntervalTwo);
        clearInterval(valueIntervalThree);
      };
    } else {
      if (!props.isCount) {
        props.setIsCountStart(0);
      } else {
        props.setIsCountStart(props.isCountStart + 1);
      }
      return () => {};
    }
  }, [props.isCountStart, props.isCount]);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px", // no margin
      viewPort: 0.5, // 50% of the component must be in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start your counters here
          props.setIsCountStart(1);
          observer.disconnect(); // Stop observing once the component is in view
        }
      });
    }, options);

    if (recordsRef.current) {
      observer.observe(recordsRef.current); //It is IntersectionObserver method and here observe means start monitoring on this page
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (recordsRef.current) {
        observer.unobserve(recordsRef.current); //here recordRef is stop observing("monitoring") by unobserve method
      }
    };
  }, [props]);

  return (
    <div className="flex flex-col justify-start align-start">
      {/* <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        ref={recordsRef}
        className="pl-18 justify-between"
      > */}
      {/* <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3.7}
          className="max-sm:mb-[20px] max-lg:mb-[20px]"
        > */}
      <div className="mt-8">
        <Box className="flex flex-col items-center justify-center w-full gap-5 max-sm:flex-col max-lg:flex-col max-xl:flex-col max-sm:gap-4 max-lg:gap-4">
          <Box className="w-[100%]">
            <Typography className="text-black text-[42px] max-sm:text-[30px] font-bold max-sm:font-bold">
              {count} B+
            </Typography>
          </Box>
          <Box
            className="flex flex-row w-[100%] max-sm:flex-row max-lg:flex-row max-xl:flex-row max-sm:items-center max-lg:items-center max-xl:items-center items-start justify-start gap-2"
            style={{ marginTop: "-25px" }}
          >
            {/* <UserSVG className="h-[20px] w-[20px]" /> */}
            <Typography className="not-italic text-wrap font-Outfit text-md flex text-black">
              Individual records
            </Typography>
          </Box>
        </Box>
      </div>
      {/* </Grid> */}
      {/* <Divider
          orientation={isMobile || isTablet ? "horizontal" : "vertical"}
          flexItem
          sx={{ width: isMobile || isTablet ? "100%" : "0" }}
          className="bg-[#28656A]"
        ></Divider> */}

      <div className="mt-8">
        <Box className="flex flex-col items-center justify-center w-full gap-8 max-sm:flex-col max-lg:flex-col max-xl:flex-col max-sm:gap-4 max-lg:gap-4">
          <Box className="w-[100%]">
            <Typography className="text-black text-[42px] max-sm:text-[30px] font-bold max-sm:font-bold">
              {counterTwo} MM+
            </Typography>
          </Box>
          <Box
            className="flex flex-row w-[100%] max-sm:flex-row max-lg:flex-row max-xl:flex-row max-sm:items-center max-lg:items-center max-xl:items-center items-start justify-start gap-2"
            style={{ marginTop: "-35px" }}
          >
            {/* <CompanySVG className="h-[20px] w-[20px]" /> */}
            <Typography className="not-italic text-wrap font-Outfit text-md flex text-black">
              Company records
            </Typography>
          </Box>
        </Box>
      </div>

      <div className="mt-8">
        <Box className="flex flex-col justify-center w-full gap-8 max-sm:flex-col max-lg:flex-col max-xl:flex-col max-sm:gap-4 max-lg:gap-4">
          <Box className="w-[70%]">
            <Typography className="text-black text-[42px] max-sm:text-[30px] font-bold max-sm:font-bold">
              {counterThree}+
            </Typography>
          </Box>
          <Box
            className="flex flex-row w-[100%] max-sm:flex-row max-lg:flex-row max-xl:flex-row max-sm:items-center max-lg:items-center max-xl:items-center items-start justify-start gap-2"
            style={{ marginTop: "-35px" }}
          >
            {/* <FieldsSVG className="h-[20px] w-[20px]" /> */}
            <Typography className="not-italic text-wrap font-Outfit text-md flex text-black">
              Total fields
            </Typography>
          </Box>
        </Box>
      </div>
      {/* </Grid> */}
    </div>
  );
};

export { Records };
