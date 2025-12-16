import LandingHeader from "@/components/LandingHeader";
import SortTab from "@/components/blog/SortTab";
import LandingFooter from "@/components/LandingFooter";

import LandingLayout from "@/components/LandingLayout";
import BaseContainer from "@/components/BaseContainer";

import Card from "@/components/card/Card";
import CardButton from "@/components/button/CardButton";

import MainPng from "@/assets/image/login/main.png";
import Img1 from "@/assets/image/login/img1.png";
import Img2 from "@/assets/image/login/img2.png";
import Img3 from "@/assets/image/login/img3.png";
import Img4 from "@/assets/image/login/img4.png";
import Img5 from "@/assets/image/login/img5.png";
import Img6 from "@/assets/image/login/img6.png";
import Img7 from "@/assets/image/login/img7.png";
import { Button } from "@material-tailwind/react";

export default function BlogScene() {
  const symbol = ["data analytics", "marketing", "trends", "guide"];

  const cardDetails = [
    {
      image: Img1,
      symbol: symbol[0],
      title: "Unlocking data insights: a beginner's guide to KompassAI",
      content:
        "Dive into the world of data analytics with KompassAI and learn how it can empower your decision-making.",
    },
    {
      image: Img2,
      symbol: symbol[1],
      title: "AI in business: how KompassAI can transform your operations",
      content:
        "Explore how artificial intelligence can optimize various aspects of your business with KompassAI.",
    },
    {
      image: Img3,
      symbol: symbol[2],
      title: "The power of predictive analytics: a closer look with KompassAI",
      content:
        "Discover how predictive analytics can help you anticipate trends and stay ahead of the competition.",
    },
    {
      image: Img4,
      symbol: symbol[3],
      title: "AI and customer engagement: enhance your strategy with KompassAI",
      content:
        "Learn how AI can revolutionize your customer engagement and retention strategies.",
    },
    {
      image: Img5,
      symbol: symbol[0],
      title: "Demystifying big data: your KompassAI companion",
      content:
        "Big data can be overwhelming, but with KompassAI, you'll gain clarity and actionable insights.",
    },
    {
      image: Img6,
      symbol: symbol[0],
      title: "Unlocking data insights: a beginner's guide to KompassAI",
      content:
        "Dive into the world of data analytics with KompassAI and learn how it can empower your decision-making.",
    },
    {
      image: Img7,
      symbol: symbol[3],
      title: "Getting started with KompassAI",
      content:
        "New to KompassAI? This guide will walk you through the setup process and initial usage.",
    },
    {
      image: Img2,
      symbol: symbol[1],
      title: "AI in business: how KompassAI can transform your operations",
      content:
        "Explore how artificial intelligence can optimize various aspects of your business with KompassAI.",
    },
    {
      image: Img3,
      symbol: symbol[2],
      title: "The power of predictive analytics: a closer look with KompassAI",
      content:
        "Discover how predictive analytics can help you anticipate trends and stay ahead of the competition.",
    },
    {
      image: Img3,
      symbol: symbol[2],
      title: "The power of predictive analytics: a closer look with KompassAI",
      content:
        "Discover how predictive analytics can help you anticipate trends and stay ahead of the competition.",
    },
  ];

  return (
    <LandingLayout>
      <BaseContainer>
        <div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mt-[30px] md:mt-[60px] justify-center bg-white w-[86px] h-[37px] font-Outfit text-md rounded-full text-magenta-500 font-[400] ">
              BLOG
            </div>
            <div className="font-Outfit text-4xl md:text-6xl text-stone-950 font-[700] mt-[16px] text-center">
              KompassAI insights
            </div>
            <div className="font-Outfit text-lg md:text-2xl opacity-70 text-stone-950 font-[400] mt-[24px] ">
              Explore the KompassAI knowledge base
            </div>
          </div>
          <SortTab />
          <div className="px-[20px] md:px-[80px]">
            <hr className="h-[1px] rounded-full" width="100%" color="#DDD" />
          </div>
          <div className="mt-20 px-[40px] md:px-[80px] grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between items-center">
            <div className="">
              <img
                src={MainPng}
                className="w-full rounded-[30px]"
                alt="main_png"
              />
            </div>
            <div className=" py-6 flex flex-col md:gap-10">
              <div className=" flex flex-col md:gap-4 items-center md:items-start">
                <div>
                  <CardButton children="data analytics" />
                </div>
                <div className="font-Outfit text-3xl xl:text-5xl font-semibold  md:leading-[55.2px] text-center md:text-start">
                  <p>Unlocking data insights:</p>
                  <p>a beginner's guide to KompassAI</p>
                </div>
                <p className="font-Outfit text-gl xl:text-xl font-normal leading-7 text-center md:text-start">
                  Dive into the world of data analytics with KompassAI and learn
                  how it can empower your decision making.
                </p>
              </div>
              <div className="flex items-center md:items-start flex-col">
                <Button className="font-Outfit text-md border-[1px] rounded-full border-solid border-[#090C05] px-6 py-4 mt-[40px]">
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20 gap-10 mb-40 mx-[20px] md:mx-[80px]">
            {cardDetails &&
              cardDetails.map((cardDetail) => <Card children={cardDetail} />)}
          </div>
        </div>
      </BaseContainer>
    </LandingLayout>
  );
}
