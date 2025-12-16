import React, { useState, Component, useEffect } from "react";
import PersonIcon from "../../assets/image/icons/person.png";
import SlideMarkIcon from "../../assets/image/icons/water.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoCarousel(props) {
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [direction, setDirection] = useState("left");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndex1 = () => {
    setCurrentIndex(0);
  };
  const handleIndex2 = () => {
    setCurrentIndex(1);
  };
  const handleIndex3 = () => {
    setCurrentIndex(2);
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1 === 2 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? 2 : prevIndex - 1));
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      <div className="relative m-auto md:w-[800px] px-[8px] md:px-[24px] ">
        {currentIndex == 0 && (
          <AnimatePresence>
            <motion.div
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              className="flex flex-col items-center justify-center"
            >
              <div className=" box-Shadow stroke-[10px] stroke-[#000] rounded-[30px] my-[40px] md:my-[80px] p-[32px] md:p-[40px]">
                <div className="flex flex-col items-center md:flex-row">
                  <img
                    src={PersonIcon}
                    className="max-w-[80px]  max-h-[80px] md:max-w-[120px] md:max-h-[120px]"
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <div className="font-Outfit text-xl font-[700] text-stone-950 md:mx-[64px] ">
                      If you do ROI on KompassAI it’s well, over 1000%. I’ve
                      made my money back tenfold with Kompass AI.
                    </div>
                    <div className=" font-Outfit text-md font-[400] text-stone-950 md:mx-[64px]">
                      Niklas Anzingeri, Strategic Initiatives Leader
                    </div>
                    <div className="font-Outfit text-md font-[400] text-magenta-500 mx-[64px]">
                      Dalia Research
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center top-[20px] md:top-[50px] rotate-6 bg-magenta-500 b-[20px]  rounded-[16px] w-[46px] h-[44px] md:w-[62px] md:h-[56px] p-[12px] ">
                <img src={SlideMarkIcon} />
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {currentIndex == 1 && (
          <AnimatePresence>
            <motion.div
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              className="flex flex-col items-center justify-center"
            >
              <div className=" box-Shadow stroke-[10px] stroke-[#000] rounded-[30px] my-[40px] md:my-[80px] p-[32px] md:p-[40px]">
                <div className="flex flex-col items-center md:flex-row">
                  <img
                    src={PersonIcon}
                    className="max-w-[80px]  max-h-[80px] md:max-w-[120px] md:max-h-[120px]"
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <div className="font-Outfit text-[16px] md:text-[20px] font-[700] text-stone-950 md:mx-[64px] ">
                      If you do ROI on KompassAI it’s well, over 1000%. I’ve
                      made my money back tenfold with Kompass AI.
                    </div>
                    <div className=" font-Outfit text-[14px] md:text-[20px] font-[400] text-stone-950 md:mx-[64px]">
                      Niklas Anzingeri, Strategic Initiatives Leader
                    </div>
                    <div className="font-Outfit text-[14px] md:text-[18px] font-400] text-magenta-500 mx-[64px]">
                      Dalia Research
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center top-[50px] rotate-6 bg-magenta-500 b-[20px]  rounded-[16px] w-[46px] h-[44px] md:w-[62px] md:h-[56px] p-[12px] ">
                <img src={SlideMarkIcon} />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {currentIndex == 2 && (
          <AnimatePresence>
            <motion.div
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              className="flex flex-col items-center justify-center"
            >
              <div className=" box-Shadow stroke-[10px] stroke-[#000] rounded-[30px] my-[40px] md:my-[80px] p-[32px] md:p-[40px]">
                <div className="flex flex-col items-center md:flex-row">
                  <img
                    src={PersonIcon}
                    className="max-w-[80px]  max-h-[80px] md:max-w-[120px] md:max-h-[120px]"
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <div className="font-Outfit text-[16px] md:text-[20px] font-[700] text-stone-950 md:mx-[64px] ">
                      If you do ROI on KompassAI it’s well, over 1000%. I’ve
                      made my money back tenfold with Kompass AI.
                    </div>
                    <div className=" font-Outfit text-[14px] md:text-[20px] font-[400] text-stone-950 md:mx-[64px]">
                      Niklas Anzingeri, Strategic Initiatives Leader
                    </div>
                    <div className="font-Outfit text-[14px] md:text-[18px] font-400] text-magenta-500 mx-[64px]">
                      Dalia Research
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center top-[50px] rotate-6 bg-magenta-500 b-[20px]  rounded-[16px] w-[46px] h-[44px] md:w-[62px] md:h-[56px] p-[12px] ">
                <img src={SlideMarkIcon} />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <div className="flex flex-col h-[16px]  items-center mb-[50px]">
          <div className="flex flex-row w-[60px]  justify-between">
            <div
              onClick={handleIndex1}
              className={`${
                currentIndex == 0 ? "bg-emerald-500" : "bg-[#ABCEC9]"
              } rounded-full w-[12px] h-[12px] md:w-[16px] md:h-[16px]`}
            ></div>
            <div
              onClick={handleIndex2}
              className={`${
                currentIndex == 1 ? "bg-emerald-500" : "bg-[#ABCEC9]"
              } rounded-full w-[12px] h-[12px] md:w-[16px] md:h-[16px]`}
            ></div>
            <div
              onClick={handleIndex3}
              className={`${
                currentIndex == 2 ? "bg-emerald-500" : "bg-[#ABCEC9]"
              } rounded-full w-[12px] h-[12px] md:w-[16px] md:h-[16px]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
