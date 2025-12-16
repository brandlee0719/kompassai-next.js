import React from "react";
import { Box } from "@mui/material";
import videoImg from "@/assets/image/Home.png";
import HomeBackImg from "@/assets/image/Home_Back.png";

const Introduction = () => {
  window.addEventListener("scroll", function () {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Select the element you want to scale and transform
    const introVideo = document.querySelector(".introduction-video");
    const introBack = document.querySelector(".introduction-back");

    // Define the maximum scroll position where you want the change to occur
    let scale = 1;
    let translateY = -70;
    if (scrollPosition <= 300) {
      scale = 1;
      translateY = -70;
    } else {
      scale = 0.8;
      translateY = 0;
    }
    if (introVideo) {
      introVideo.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    }
    if (introBack) {
      introBack.style.transform = `scale(${scale})`;
    }
  });

  return (
    <Box className="flex items-center justify-center flex-col gap-12 introduction-back">
      <img
        src={HomeBackImg}
        alt="home"
        className="w-full"
        style={{ width: "100vw" }}
      />
      <div className="introduction-video">
        <img src={videoImg} alt="video" style={{ width: "75vw" }} />
      </div>
      <Box className="flex flex-row justify-center"></Box>
    </Box>
  );
};

export default Introduction;
