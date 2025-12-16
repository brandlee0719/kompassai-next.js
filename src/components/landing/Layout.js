import React, { useState, useRef, useEffect, useContext } from "react";
import LandingHeader from "../components/landing/LandingHeader";
import LandingFooter from "../components/landing/LandingFooter";

const LandingLayout = ({ children, pageName }) => {
  const getBackColor = function () {
    if (pageName === "prospecting") return "#75EED9";
    if (pageName === "aboutme") return "#ECF4F3";
    if (pageName === "faq") return "#ECF4F3";
    if (pageName === "emailverification") return "#051F21";
    if (pageName === "advancedsearch") return "#E7436A";
    if (pageName === "csvexport") return "#4DBBA8";
    return "#ffffff";
  };

  const getInvertState = function () {
    if (pageName === "emailverification") return true;
    if (pageName === "advancedsearch") return true;
    return false;
  };

  return (
    <>
      {/* <Head>
        <title>KompassAI</title>
        <meta name="description" content="KompassAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full relative m-auto max-w-[1920px] overflow-hidden min-h-screen">
        <LandingHeader
          backColor={getBackColor()}
          invertColor={getInvertState()}
        />
        {children}
        <LandingFooter />
      </main>
    </>
  );
};
export default LandingLayout;
