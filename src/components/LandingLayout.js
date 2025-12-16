import React, { useState, useRef, useEffect, useContext } from "react";
import LandingHeader from "../components/LandingHeader";
import LandingFooter from "../components/LandingFooter";
import BaseContainer from "./BaseContainer";

const LandingLayout = ({ children, pageName, background="#ffffff", inverse=false }) => {
  

  const getStickyState = function () {
    if (pageName === "article") return false;
    return true;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <main className="relative m-auto min-h-screen">
        <LandingHeader
          backColor={background}
          invertColor={inverse}
          isOpen={isOpen}
          handleOpen={handleOpen}
          isSticky={getStickyState()}
          handleClose={handleClose}
        />
        <div className="w-full">{children}</div>
        <LandingFooter />
      </main>
    </>
  );
};
export default LandingLayout;
