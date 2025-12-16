import Text from "../Text";
import DescriptionIcon from "@/assets/image/about_info.png";

export default function WhatKompassAIPanel({ background = "bg-white" }) {
  return (
    <div className="flex flex-col items-center p-6">
      <Text
        variant="Header2"
        className="lg:w-[850px] text-center text-emerald-500 mt-[40px] sm:mt-[100px] lg:mt-[160px]"
      >
        What is Kompass AI?
      </Text>
      <Text
        variant="SubHeader1"
        className="text-center text-emerald-500 opacity-70 mt-3"
      >
        Kompass AI was founded in 2022
      </Text>
      <div className="flex flex-col lg:grid grid-cols-2 ">
        <div className="flex items-end lg:pl-[50px] xl:pl-[160px] 2xl:pl-[260px] mt-[20px]">
          <img className="" src={DescriptionIcon} />
        </div>
        <div className="lg:flex-1 flex flex-col mx-[24px] lg:mx-[80px]">
          <Text className="opacity-70 mt-[40px] md:mt-[80px]">
            World’s largest crowdsourced data community for B2B salespeople or a
            “Waze for salespeople”. Lusha offers B2B salespeople of every
            company size accurate and accessible data through its simple,
            self-service products. With Lusha, sales professionals can identify,
            engage and close prospects, thanks to Lusha’s prospecting platform,
            web extension and API.
          </Text>
          <Text className="opacity-70 mt-[20px]">
            Lusha’s community has expanded to over 670,000 sales professionals
            and 223,000 sales organizations including Zendesk, Google and Yotpo.
          </Text>
        </div>
      </div>
    </div>
  );
}
