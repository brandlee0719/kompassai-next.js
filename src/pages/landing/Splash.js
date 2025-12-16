import React, { useEffect } from "react";
// import { Box } from "@mui/material";
import { ReactComponent as MainLogo } from "@/assets/image/icons/logo.svg";
const Splash = () => {
  useEffect(() => {
    const Splash = document.querySelector(".splash");
    // Splash.classList.remove("my-logo");
    let intervalId = setInterval(() => {
      setTimeout(() => {
        Splash.style.top = "1.5rem";
        Splash.style.position = "absolute";
        Splash.style.height =
          "2rem"; /* Use viewport height to fill the screen */
        Splash.style.scale = "1";
      }, 0);

      clearInterval(intervalId); // Clear the interval when all quotes have been processed
      setTimeout(() => {
        // Reset quoteIndex to 0 and start the interval again
        setInterval(() => {
          setTimeout(() => {
            Splash.style.position = "absolute";
            Splash.style.top = "1.5rem";
            Splash.style.left = "3rem";
            Splash.style.height = "2rem";
            Splash.style.transition =
              "all 0.1s cubic-bezier(0.72, 0, 0.12, 1) 0s;";
          }, 2);
        }, 750);
      }, 0); // Wait for the last quote to finish before restarting
    }, 2000); // Adjust the interval time as needed based on the transition time and delay

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };

    // clearTimeout(secondTimer); // Clean up the second timer
  }, []);
  return (
    <div className="splashContainer">
      <MainLogo className="splash my-logo" />
      {/* <Box
        className="w-[300px] h-[100px] bg-[#AAAAAA] opacity-90 position-absolute"
        style={{
          left: "45vw",
          top: "50vh",
        }}
      ></Box> */}
    </div>
  );
};

export default Splash;
