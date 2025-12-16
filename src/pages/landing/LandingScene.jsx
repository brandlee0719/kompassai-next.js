import BaseContainer from "@/components/BaseContainer";
import { Box, Grid, Button, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import WorldMap from "@/components/landing/base/WorldMap";
import { Records } from "@/components/landing/base/Records";
import { Typography } from "@material-tailwind/react";
import { PerfectLead } from "@/components/landing/base/PerfectLead";
import TrustedUser from "@/components/landing/base/TrustedUser";
import KompassAi from "@/components/landing/base/KompassAi";
import LandingLayout from "@/components/LandingLayout";
import Text from "@/components/Text";

import useKompassRouter from "@/hooks/useKompassRouter";
import SVGComponent from "./SVGComponent";
import Companines from "./Companies";
import Introduction from "./Introduction";
import Splash from "./Splash";

const ColorChangingButton = () => {
  const colors = ["#F44E66", "#23D09C", "#7646EC"];
  const [hoverCount, setHoverCount] = useState(0);

  const handleHover = () => {
    let ChangeButton = document.getElementById("changeButton");
    setHoverCount((hoverCount) => (hoverCount + 1) % colors.length);
    // classList = `flex flex-row justify-center rounded-[10px] bg-[#000000] text-[#FFFFFF] m-4 p-4 max-sm:p-3 hover:bg-[${colors[hoverCount]}]`;
    // buttonStyle = style;
    // console.log(buttonStyle);
    // buttonStyle.backgroundColor = colors[hoverCount];
    // ChangeButton.classList.add(`hover:bg-[${colors[hoverCount]}]`);
    ChangeButton.style.backgroundColor = `${colors[hoverCount]}`;
  };
  const handleOut = () => {
    let ChangeButton = document.getElementById("changeButton");
    ChangeButton.style.backgroundColor = `#000000`;
    // buttonStyle.backgroundColor = "black";
  };

  return (
    <button
      id="changeButton"
      className="flex flex-row justify-center rounded-md bg-stone-950 text-white font-OutfitMedium m-2 px-4 py-2 max-sm:p-3"
      onMouseOver={handleHover}
      onMouseOut={handleOut}
    >
      TRY AI SEARCH
      {/* <span
        className="ml-8 arrow-icons flex flex-row justify-center"
        onMouseOver={() =>
          setHoverCount((hoverCount) => (hoverCount - 1) % colors.length)
        }
      >
        <i className="opacity-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
            role="presentation"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M10.53 17.53l-1.06-1.06L13.94 12 9.47 7.53l1.06-1.06L16.06 12z"
              ></path>
            </g>
          </svg>
        </i>
        <i className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
            role="presentation"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M10.53 17.53l-1.06-1.06L13.94 12 9.47 7.53l1.06-1.06L16.06 12z"
              ></path>
            </g>
          </svg>
        </i>
      </span> */}
    </button>
  );
};
export default function LandingScene() {
  const { kompassNavigate } = useKompassRouter();
  useEffect(() => {
    // kompassNavigate("/pricing");
  }, []);

  const [isSticky, setIsSticky] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const largeDevice = useMediaQuery(theme.breakpoints.down("lg"));
  const [isCountStart, setIsCountStart] = useState(0);
  const [isCount, setIsCount] = useState(false);

  const initialElements = [
    {
      label: "North America",
      number: "1.4B+",
      top: "11.1%",
      left: "24.4%",
      // order: 1,
      show: "fade-out",
    },
    {
      label: "South America",
      number: "180M+",
      top: "78.5%",
      left: "24%",
      // order: 2,
      show: "fade-out",
    },
    {
      label: "Europe",
      number: "285M+",
      top: "30.1%",
      left: "43.8%",
      // order: 3,
      show: "fade-out",
    },
    {
      label: "Africa",
      number: "82M+",
      top: "55%",
      left: "42.8%",
      // order: 4,
      show: "fade-out",
    },
    {
      label: "Asia",
      number: "355M+",
      top: "36%",
      left: "67.2%",
      // order: 5,
      show: "fade-out",
    },
    {
      label: "Oceania",
      number: "28M+",
      top: "75%",
      left: "71%",
      // order: 6,
      show: "fade-out",
    },
  ];

  const [elements, setElements] = useState(initialElements);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.getElementsByClassName("count-animation"); // Adjust the selector to match your sections

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          if (isCountStart > 0) {
            setIsCount(false);
            setIsCountStart(isCountStart + 1);
          }
          setIsCount(true);
          setIsCountStart(isCountStart + 1);
          setElements(initialElements);
          setCurrentIndex(0);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollValue_ = window.scrollY;
    setScrollValue(scrollValue_);
  };

  useEffect(() => {
    let quotes = document.getElementsByClassName("quotes");
    let quoteIndex = 0;
    if (quotes.length > 0) {
      let intervalId = setInterval(() => {
        let quote = quotes[quoteIndex % quotes.length];
        quote.classList.remove("hide");
        quote.classList.add("slideUpShow");

        setTimeout(() => {
          quote.classList.remove("slideUpShow");
          quote.classList.add("slideUpHide");
        }, 2500);
        quote.classList.remove("slideUpHide");
        quoteIndex++;
        if (quoteIndex === quotes.length) {
          quoteIndex = 0;
        }
      }, 3000); // Adjust the interval time as needed based on the transition time and delay

      return () => {
        clearInterval(intervalId); // Cleanup the interval on component unmount
      };
    }
  }, [showMain]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="main">
        <LandingLayout>
          <div className="w-full">
            <div className="text-gray-600  antialiased max-h-fit overflow-x-hidden max-w-full">
              <Box className="w-[100%] inline-block max-sm:h-fit">
                <Box
                  className=" pb-16"
                  sx={{
                    minHeight: "80vh",
                    background: "#FFFFFF",
                  }}
                >
                  <Box
                    sx={{ height: "calc(100vh - 300px)" }}
                    className="w-[100%] min-h-[700px] flex flex-col justify-center items-center mx-auto my-0 kompass-animation"
                  >
                    <Box className="w-[100%] relative h-[700px] max-sm:h-[400px] my-0 mx-auto">
                      <SVGComponent />
                      <>
                        {/* <Box className="w-[1500px] relative h-[800px] my-0 mx-auto"> */}
                        <Box
                          className="flex flex-col items-center justify-center mt-[55px] max-sm:mt-3"
                          style={{ position: "relative", marginTop: "175px" }}
                        >
                          <Box>
                            <Box
                              className={`text-[70px] max-sm:text-[56px] text-[#000] text-center font-bold font-Outfit`}
                              style={{
                                lineHeight: "1.3",
                                fontWeight: "bold",
                              }}
                            >
                              <Text variant="Header1">
                                Best Contact Data{" "}
                                <br className="max-sm:hidden" />{" "}
                                <div className="flex flex-row justify-start ">
                                  <span className="h-12 mr-3">in</span>
                                  <div className="text-[55px] max-sm:text-[30px] font-bold inline-block ">
                                    <div class="container">
                                      <h2 class="quotes position-absolute hide text-blue-500">
                                        the WORLD
                                      </h2>
                                      <h2 class="quotes position-absolute hide text-blue-500">
                                        North America
                                      </h2>
                                      <h2 class="quotes position-absolute hide text-blue-500">
                                        South America
                                      </h2>
                                      <h2 class="quotes position-absolute hide text-blue-500">
                                        Europe
                                      </h2>
                                      <h2 class="quotes position-absolute hide text-blue-500">
                                        Africa
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </Text>
                            </Box>
                          </Box>
                          <Box className="max-w-1/2 mt-20 max-sm:w-full max-sm:mt-4 flex items-center justify-center text-center text-stone-350 max-sm:px-4">
                            <Text variant="SubHeader1">
                              Export leads from LinkedIn with accurate contact
                              info <br /> and connect directly with your
                              audience
                            </Text>
                          </Box>
                          <Box
                            className="max-w-[500px] max-sm:mx-4 border border-stone-950 rounded-md flex items-center justify-between relative mt-16"
                          >
                            <Box className="w-[200px] flex items-center justify-start flex-1 ml-6">
                              <Typewriter
                                options={{
                                  strings: [
                                    "Elon Musk",
                                    "Mark Zuckerberg",
                                    "Warren Buffet",
                                    "Jay Z",
                                    "Stephen Curry",
                                  ],
                                  autoStart: true,
                                  loop: true,
                                  skipAddStyles: true,
                                  wrapperClassName: "font-Outfit text-stone-350"
                                }}
                              />
                            </Box>
                            <ColorChangingButton />
                          </Box>
                        </Box>
                        {/* </Box> */}
                      </>
                    </Box>
                  </Box>

                  {/* <SupportPanel background={"bg-transparent"} /> */}
                </Box>

                <>
                  <Box className="max-sm:py-20 max-sm:px-4 mt-8">
                    <Introduction />
                  </Box>
                  <div
                    className="flex flex-col justify-center relative mb-24 gap-8"
                  >
                    <div className="flex flex-row justify-center">
                      <Text variant="SubHeader1" className="text-stone-950">
                        Join sales and recruiting professionals from startups to Fortune 500 companies on our beta list!
                      </Text>
                    </div>
                    <Companines />
                  </div>
                </>

                <>
                  <Box className="relative">
                    <Box
                      className="count-animation flex items-center justify-center flex-col w-auto rounded-3xl bg-[#F4F4F8] m-2"
                      
                    >
                      <Grid container >
                        <Grid item xs={5} className="pl-10 pt-10 pb-14">
                          <Box className="">
                            <Box>
                              <div className="text-black font-OutfitBold text-[3rem] leading-relaxed">
                                We provide the most accurate data
                              </div>
                            </Box>
                            <Box className="flex items-center justify-left">
                              <div className="text-black font-Outfit text-lg pt-4">
                                Our proprietary AI-powered data models enable us to deliver<br />unparalleled data quality
                              </div>
                            </Box>
                            <Records
                              isCountStart={isCountStart}
                              setIsCountStart={setIsCountStart}
                              isCount={isCount}
                              setIsCount={setIsCount}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={7}>
                          <Box
                            className="w-full relative m-0"
                            // style={{ minHeight: "50vh !important" }}
                          >
                            <Box className="w-full flex items-center justify-center">
                              <WorldMap
                                initialElements={initialElements}
                                elements={elements}
                                setElements={setElements}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                              />
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </>

                {/* Perfect Leads Component.....................................  */}
                <>
                  <Box className="relative">
                    <PerfectLead />
                  </Box>
                </>

                {/* KOMPASSAI Component.....................................  */}
                <>
                  <Box className="relative">
                    <KompassAi />
                  </Box>
                </>

                {/* Trusted Component */}
                <>
                  <Box className="relative">
                    <TrustedUser />
                  </Box>
                </>

                {/* Questions? Meet answers! Component */}
                <>
                  {/* <Box className="max-w-[1840px] relative my-0 mx-auto">
                <MeetAnswers />
              </Box> */}
                  <Box className="w-full bg-accents-yellow px-12 py-24 rounded-t-[2.5rem] gap-12 flex flex-col justify-center items-center">
                    <Box className="flex flex-col items-center justify-center">
                      <Box className="font-bold">
                        <div
                          className="text-center font-OutfitBold text-stone-950 text-[4rem]"
                        >
                          Get started with Kompass AI
                        </div>
                      </Box>
                    </Box>
                    <Box className="flex flex-row max-sm:flex-col items-center justify-center gap-4">
                      <Box className="flex justify-center items-center rounded-lg bg-white bg-opacity-80 py-1 px-2">
                        <Button>
                          <div className="font-OutfitBold text-md uppercase text-stone-950">
                            REQUEST A DEMO
                          </div>
                        </Button>
                      </Box>
                      <Box className="flex justify-center items-center rounded-lg bg-stone-950 py-1 px-2">
                        <Button>
                          <div className="font-OutfitBold text-md uppercase text-white">
                            SIGNUP FOR FREE
                          </div>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </>
              </Box>
            </div>
          </div>
        </LandingLayout>
      </div>
    </div>
  );
}
