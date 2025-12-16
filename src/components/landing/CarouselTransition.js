import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WaterIcon from "../../assets/image/icons/water.svg";
import PersonIcon from "../../assets/image/icons/person.png";
import SlideMarkIcon from "../../assets/image/icons/water.svg";
import { Button } from "@material-tailwind/react";

export default function DemoCarousel(props) {
  return (
    <Carousel className="relative w-full px-[8px] md:px-[24px] ">
      <div className="flex flex-col items-center justify-center">
        <div className=" box-Shadow stroke-[10px] stroke-[#000] rounded-[30px] my-[80px] md:p-[64px]">
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={PersonIcon}
              className="max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px]"
            />
            <div className="flex flex-col items-center md:items-start">
              <div className="font-Outfit text-[16px] md:text-[28px] font-[700] text-stone-950 md:mx-[64px] ">
                If you do ROI on KompassAI it’s well, over 1000%. I’ve made my
                money back tenfold with Kompass AI.
              </div>
              <div className=" font-Outfit text-[14px] md:text-[26px] font-[400] text-stone-950 md:mx-[64px]">
                Niklas Anzingeri, Strategic Initiatives Leader
              </div>
              <div className="font-Outfit text-[14px] md:text-[20px] font-400] text-magenta-500 mx-[64px]">
                Dalia Research
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-row mb-[64px]'>
                    <Button className='w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]'>
                    </Button>
                    <Button className='w-[16px] h-[16px] rounded-full bg-emerald-500 mx-[8px]'>
                    </Button>
                    <Button className='w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]'>
                    </Button>
                </div> */}
        <div className="absolute flex items-center justify-center top-[30px] md:top-[60px] rotate-6 bg-magenta-500 b-[20px]  rounded-[16px] w-[46px] h-[44px] md:w-[62px] md:h-[56px] p-[12px] ">
          <img src={SlideMarkIcon} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className=" shadow-lg stroke-[10px] stroke-[#000] rounded-[30px] my-[80px] md:p-[64px]">
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={PersonIcon}
              className="max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px]"
            />
            <div className="flex flex-col items-center md:items-start">
              <div className="font-Outfit text-[16px] md:text-[28px] font-[700] text-stone-950 md:mx-[64px] ">
                If you do ROI on KompassAI it’s well, over 1000%. I’ve made my
                money back tenfold with Kompass AI.
              </div>
              <div className=" font-Outfit text-[14px] md:text-[26px] font-[400] text-stone-950 md:mx-[64px]">
                Niklas Anzingeri, Strategic Initiatives Leader
              </div>
              <div className="font-Outfit text-[14px] md:text-[20px] font-400] text-magenta-500 mx-[64px]">
                Dalia Research
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-row mb-[64px]'>
                    <Button className='w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]'>
                    </Button>
                    <Button className='w-[16px] h-[16px] rounded-full bg-emerald-500 mx-[8px]'>
                    </Button>
                    <Button className='w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]'>
                    </Button>
                </div> */}
        <div className="absolute flex items-center justify-center top-[30px] md:top-[60px] rotate-6 bg-magenta-500 b-[20px]  rounded-[16px] w-[46px] h-[44px] md:w-[62px] md:h-[56px] p-[12px] ">
          <img src={SlideMarkIcon} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className=" shadow-lg stroke-[10px] stroke-[#000] rounded-[30px] my-[80px] md:p-[64px]">
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={PersonIcon}
              className="max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px]"
            />
            <div className="flex flex-col items-center md:items-start">
              <div className="font-Outfit text-[16px] md:text-[28px] font-[700] text-stone-950 md:mx-[64px] ">
                If you do ROI on KompassAI it’s well, over 1000%. I’ve made my
                money back tenfold with Kompass AI.
              </div>
              <div className=" font-Outfit text-[14px] md:text-[26px] font-[400] text-stone-950 md:mx-[64px]">
                Niklas Anzingeri, Strategic Initiatives Leader
              </div>
              <div className="font-Outfit text-[14px] md:text-[20px] font-400] text-magenta-500 mx-[64px]">
                Dalia Research
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-row mb-[64px]'>
                    <Button className='w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]'>
                    </Button>
                    <Button className='w-[16px] h-[16px] rounded-full bg-emerald-500 mx-[8px]'>
                    </Button>
                    <Button className='w-[16px] h-[16px] rounded-full bg-[#ABCEC9] mx-[8px]'>
                    </Button>
                </div> */}
        <div className="absolute flex items-center justify-center top-[30px] md:top-[60px] rotate-6 bg-magenta-500 b-[20px]  rounded-[16px] w-[46px] h-[44px] md:w-[62px] md:h-[56px] p-[12px] ">
          <img src={SlideMarkIcon} />
        </div>
      </div>
    </Carousel>
  );
}
