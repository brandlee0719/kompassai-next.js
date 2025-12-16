import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/image/icons/logo.svg";
import LinkedInIcon from "../../assets/image/icons/LinkedIn.svg";
import TwitterIcon from "../../assets/image/icons/Twitter.svg";
import FacebookIcon from "../../assets/image/icons/Facebook.svg";
import ChromeIcon from "../../assets/image/icons/Chrome.svg";
import LoginPlatformIcon from "../../assets/image/icons/LoginPlatform.svg";
import EnterEmailForm from "./common/EnterEmailForm";
import { Input, Button } from "@material-tailwind/react";

export default function LandingFooter(props) {
  return (
    <div className="p-[20px_30px] md:p-[30px_160px] justify-center bg-[#051F21]  ">
      <div className="flex flex-wrap  justify-between items-center">
        <div className="mt-[20px]">
          <Logo className="w-[130px] h-[25px]" fill="#ffffff" />
          <div className="w-[260px] font-Outfit text-white text-sm font-[500] mt-[10px] md:mt-[20px]">
            Gather verified email addresses & phone numbers directly from
            LinkedIn, reach out, and see when they open your emails.
          </div>
          <div className="flex flex-row gap-5 mt-[10px]">
            <a className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-lg cursor-pointer">
              <img src={LinkedInIcon} />
            </a>
            <a className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-lg cursor-pointer">
              <img src={FacebookIcon} />
            </a>
            <a className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-lg cursor-pointer">
              <img src={TwitterIcon} />
            </a>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="font-Outfit text-white text-lg font-[700] cursor-pointer">
            Product
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[20px] md:mt-[15px] ">
            Pricing
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px] ">
            Products Overview
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Watch Demo of Product
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Book a Demo with Sales Rep
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="font-Outfit text-white text-lg font-[700] ">
            Resources
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[20px] md:mt-[15px] ">
            Revenue Calculator for Sales
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Customer Stories
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Blog
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            FAQ
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="font-Outfit text-white text-lg font-[700] ">
            Company
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[20px] md:mt-[15px] ">
            About Us
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Legal Terms & Conditions
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Company Alternatives
          </div>
          <div className="font-Outfit text-white text-sm font-[400] cursor-pointer mt-[12px] md:mt-[15px]">
            Opt Out of the Email List
          </div>
        </div>
        <div className="mt-[20px]">
          <Button className="flex flex-row justify-center items-center rounded-[20px] p-[12px] md:p-[16px] border-[#FFF] border-[1px]">
            <img src={ChromeIcon} />
            <div className="font-Outfit text-white text-sm cursor-pointer font-[400] mx-[8px] normal-case">
              Chrome Extension
            </div>
          </Button>
          <Button className="flex flex-row justify-center items-center rounded-[20px] p-[12px] md:p-[16px] border-[#FFF] border-[1px] mt-[16px]">
            <img src={LoginPlatformIcon} />
            <div className="font-Outfit text-white text-sm cursor-pointer font-[400] mx-[8px] normal-case">
              Login on platform
            </div>
          </Button>
        </div>
      </div>
      <hr size="8" width="100%" color="white" style={{ marginTop: 30 }} />
      <div className="flex flex-wrap items-center justify-between">
        <div className="lg:text-2xl font-[600] font-Outfit text-white w-full md:w-1/2 mt-[10px]">
          Join the 15,000+ businesses simplifying <br /> their finances with
          KompassAI
        </div>
        <div className="mt-[20px]">
          <EnterEmailForm />
          <div className="text-sm font-[500] font-Outfit text-white mt-[8px] ml-[24px]">
            No personal credit checks or founder guarantee.
          </div>
        </div>
      </div>
      <hr size="8" width="100%" color="white" style={{ marginTop: 20 }} />
      <div className="flex flex-wrap justify-between mt-[10px] md:mt-[15px]">
        <div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm mt-[20px]">
            © 2023 Ramp Business Corporation. “Ramp” and the Ramp logo are
            registered trademarks of the company.
          </div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm">
            The Ramp Visa Commercial Card and the Ramp Visa Corporate Card are
            issued by Sutton Bank and Celtic Bank (Members FDIC), respectively.
          </div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm">
            *International payments may be subject to a currency conversion fee.
            Flex extended payment terms and other optional international
            payments may incur transactional or financing fees. Please see the
            Platform Agreement and Payment Card Addendum for additional details.
          </div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm">
            *Individual results may vary. Ramp makes no guarantee as to the
            savings any specific customer will experience.
          </div>
        </div>
        <div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm mt-[20px]">
            Please visit our Terms of Service for more details. Read our
            Editorial Guidelines and Privacy Policy
          </div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm">
            Ramp Payments Corporation - NMLS 2371465
          </div>
          <div className=" w-[260px] sm:w-[360px] md:w-[544px] lg:w-[744px] text-white opacity-50 font-Outfit text-sm">
            Ramp Financing Corporation - NMLS 2431387
          </div>
        </div>
      </div>
    </div>
  );
}
