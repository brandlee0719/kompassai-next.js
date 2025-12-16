import { Button } from "@material-tailwind/react";

import BaseContainer from "../BaseContainer";
import { pageContentWidth } from "../../utils/common";
import Text from "../Text";

export default function TopBar({ data, background}) {
  const bgTag = data.bgTag ?? background;
  const textTagColor = data.invertColor ? "text-white" : "text-stone-950";
  const bgButtonColor = data.invertColor ? "bg-white" : "bg-stone-950";
  const textButtonColor = data.invertColor ? "text-stone-950" : "text-white";

  return (
    <div className={`w-full ${background}`}>
      <BaseContainer width={pageContentWidth}>
        <div className="w-full flex flex-col md:flex-row md:justify-between py-16 px-12 md:pl-12 md:pr-0 ">
          <div className="relative flex flex-col items-center md:items-start">
            <Button
              className={`rounded-full p-[5px_16px] text-black text-xs md:text-lg font-[400] font-Outfit bg-white/50`}
            >
              {data.tag}
            </Button>
            <Text
              variant="Header2"
              className={`w-full md:w-[450px] xl:w-[870px] text-stone-950 mt-6 " +
                ${data.invertColor ? "text-white" : ""}`}
            >
              {data.title}
            </Text>
            <div className="absolute  top-[30px] right-[10px] md:top-[50px] md:right-[50px]">
              <img src={data.shiningIcon} />
            </div>
            <Text
              variant="SubHeader1"
              className={`md:w-[450px] w-full xl:w-[870px] text-stone-950 opacity-70 mt-[40px] " +
                ${data.invertColor ? "text-white" : ""}`}
            >
              {data.subTitle}
            </Text>
            <Button
              className={`flex items-center justify-center p-[20px_32px] rounded-lg ${bgButtonColor} mt-[64px]`}
            >
              <div
                className={`font-Outfit text-2xl font-[600] ${textButtonColor}`}
              >
                REQUEST A DEMO
              </div>
            </Button>
          </div>
          <div className="mt-[24px]">
            <img src={data.image} />
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}
