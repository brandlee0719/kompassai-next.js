import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/image/icons/logo.svg";
import LinkedInIcon from "../assets/image/icons/LinkedIn.svg";
import TwitterIcon from "../assets/image/icons/Twitter.svg";
import FacebookIcon from "../assets/image/icons/Facebook.svg";
import ChromeIcon from "../assets/image/icons/Chrome.svg";
import LoginPlatformIcon from "../assets/image/icons/LoginPlatform.svg";
import EnterEmailForm from "./common/EnterEmailForm";
import { Input, Button } from "@material-tailwind/react";
import BaseContainer from "./BaseContainer";
import SVGComponent from "./SVGComponent";

export default function LandingFooter(props) {
  return (
    <div className=" justify-center bg-stone-950 pt-12 px-12 pb-6">
      <div className="w-full mb-6">
        <div className="flex flex-wrap justify-between">
          <div className="">
            <Logo className="h-12 fill-current text-white -mt-2" />
            <div className="w-80 font-OutfitMedium text-white text-sm mt-6">
              Gather verified email addresses & phone numbers directly from
              LinkedIn, reach out, and see when they open your emails.
            </div>
            <div className="flex flex-row gap-4 mt-10">
              <a className="w-10 h-10 flex items-center justify-center bg-white rounded-lg cursor-pointer">
                <img src={LinkedInIcon} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-white rounded-lg cursor-pointer">
                <img src={FacebookIcon} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-white rounded-lg cursor-pointer">
                <img src={TwitterIcon} />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-OutfitBold text-white text-lg cursor-pointer mb-2">
              Product
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Pricing
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Products Overview
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Watch Demo of Product
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Book a Demo with Sales Rep
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-OutfitBold text-white text-lg mb-2">
              Resources
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Revenue Calculator for Sales
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Customer Stories
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Blog
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              FAQ
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-OutfitBold text-white text-lg mb-2">
              Company
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              About Us
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Legal Terms & Conditions
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Company Alternatives
            </div>
            <div className="font-Outfit text-white text-sm cursor-pointer">
              Opt Out of the Email List
            </div>
          </div>
          <div className="">
            <Button className="flex flex-row justify-center items-center rounded-xl p-[12px] md:p-[16px] border-white border bg-transparent bg-[#2A2A2A]">
              <img src={ChromeIcon} />
              <div className="font-OutfitBold text-white text-sm cursor-pointer mx-[8px] normal-case">
                Chrome Extension
              </div>
            </Button>
            <Button className="flex flex-row justify-center items-center rounded-xl p-[12px] md:p-[16px] border-white border bg-transparent mt-[16px] bg-[#2A2A2A]">
              <img src={LoginPlatformIcon} />
              <div className="font-OutfitBold text-white text-sm cursor-pointer mx-[8px] normal-case">
                Login on platform
              </div>
            </Button>
          </div>
        </div>
      </div>
      <SVGComponent className="w-full" />
    </div>
  );
}

const navMenus = [
  {
    id: 1,
    name: "Product",
    menus: [
      { label: "Pricing", to: "#" },
      { label: "Products Overview", to: "#" },
      { label: "Watch Demo of Product", to: "#" },
      { label: "Book a Demo with Sales Rep", to: "#" },
    ],
  },
  {
    id: 2,
    name: "Resources",
    menus: [
      { label: "Revenue Calculator for Sales", to: "#" },
      { label: "Customer Stories", to: "#" },
      { label: "Blog", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    id: 3,
    name: "Company",
    menus: [
      { label: "About Us", to: "#" },
      { label: "Legal Terms & Conditions", to: "#" },
      { label: "Company Alternatives", to: "#" },
      { label: "Opt Out of the Email List", to: "#" },
    ],
  },
];
