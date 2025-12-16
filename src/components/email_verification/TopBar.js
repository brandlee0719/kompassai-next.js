import { Button } from "@material-tailwind/react";
import BrowserImage from "../../assets/image/browser.png";
import ShiningIcon from "../../assets/image/icons/shiny.svg";
import BaseContainer from "../BaseContainer";

export default function TopBar(props) {
  return (
    <div className="w-full bg-[#051F21]">
      <BaseContainer width="1680">
        <div className="w-full flex flex-col md:flex-row md:justify-between  py-[60px] px-[24px] md:pl-[80px] md:pr-[0px] ">
          <div className="relative flex flex-col items-center md:items-start">
            <Button className="rounded-full p-[5px_16px] text-xs md:text-lg font-[400] text-[#fff] font-Outfit bg-[#1C3F42]">
              EMAIL VERIFICATION
            </Button>
            <div className="font-Outfit w-full md:w-[450px] xl:w-[870px] leading-none text-5xl 2xl:text-7xl font-[700] text-[#fff] mt-[24px]">
              Hire employees worldwide with the #1 Employer of Record
            </div>
            <div className="absolute  top-[30px] right-[10px] md:top-[50px] md:right-[50px]">
              <img src={ShiningIcon} />
            </div>
            <div className="font-Outfit md:w-[450px] w-full xl:w-[870px] text-xl text-[#fff] opacity-70 mt-[40px]">
              Let us hire employees on your behalf to quickly onboard employees
              in 100+
              <br />
              countries without the cost and extra admin.
            </div>
            <Button className="flex items-center justify-center p-[20px_32px] rounded-full bg-[#FFF] mt-[64px]">
              <div className="font-Outfit text-2xl font-[600] text-[#051F21]">
                REQUEST A DEMO
              </div>
            </Button>
          </div>
          <div className=" mt-[24px]">
            <img src={BrowserImage} />
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}
