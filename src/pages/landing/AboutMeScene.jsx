import LandingLayout from "@/components/LandingLayout";
import BaseContainer from "@/components/BaseContainer";
import MeetTeam from "@/components/aboutme/MeetTeam";
import Investors from "@/components/aboutme/Investors";
import AboutProduct from "@/components/aboutme/AboutProduct";

import custom1 from "@/assets/image/about/customer1.png";
import custom2 from "@/assets/image/about/customer2.png";
import custom3 from "@/assets/image/about/customer3.png";
import custom4 from "@/assets/image/about/customer4.png";
import custom5 from "@/assets/image/about/customer5.png";
import custom6 from "@/assets/image/about/customer6.png";
import chrome from "@/assets/image/about/Google.svg";
import linkedin from "@/assets/image/about/LinkedIn.svg";
import StarIcon from "@/assets/image/icons/pink_star.svg";
import GearIcon from "@/assets/image/icons/gear.svg";
import LockIcon from "@/assets/image/icons/lock.svg";
import AdvanceIcon from "@/assets/image/icons/advance.svg";
import UserIcon from "@/assets/image/icons/User.svg";
import CompanyIcon from "@/assets/image/icons/Company.svg";
import DataIcon from "@/assets/image/icons/Data.svg";
import HeartIcon from "@/assets/image/icons/heart.svg";
import SubwayIcon from "@/assets/image/customers/Subway.svg";
import InterComIcon from "@/assets/image/customers/Intercom.svg";
import RedbullIcon from "@/assets/image/customers/Redbull.svg";
import Forever21Icon from "@/assets/image/customers/Forever21.svg";
import { pageContentWidth } from "@/utils/common";
import SupportPanel from "@/components/landing/SupportPanel";
import WhatKompassAIPanel from "@/components/landing/WhatKompassAIPanel";

export default function AboutMeScene() {
  return (
    <LandingLayout pageName="aboutme">
      <div className="bg-emerald-200">
        <BaseContainer width={pageContentWidth}>
          <div className="flex flex-col items-center w-full p-3 md:h-[868px] relative text-center">
            <span className="font-Outfit text-xs md:text-md lg:text-lg font-normal leading-7 px-4 py-[10px] bg-white mt-[83px] rounded-full">
              ABOUT KOMPASSAI
            </span>
            <p className="text-xl md:text-4xl xl:text-6xl font-bold leading-[40px] lg:leading-[60px] xl:leading-[70px] mt-[40px]">
              We're making work
            </p>
            <div className="flex flex-row gap-2 lg:gap-4 items-center justify-center">
              <p className="font-bold text-md lg:text-2xl xl:text-4xl p-[7px] xl:p-[17px] bg-magenta-500 text-white rounded-[7px] drop-shadow xl:rounded-[17px] transform -rotate-2 xl:mr-[16px]">
                Meaningful
              </p>
              <p className="text-xl md:text-2xl xl:text-6xl font-bold leading-[40px] lg:leading-[60px] xl:leading-[70px]">
                for everyone,
              </p>
            </div>
            <p className="text-xl md:text-2xl xl:text-6xl font-bold leading-[40px] lg:leading-[60px] xl:leading-[70px]">
              everywhere.
            </p>
            <p className="text-xs lg:text-lg font-normal leading-8 opacity-70  mt-[70px]  xl:mt-[20px]">
              We make managing a global team easy, so businesses don't
            </p>
            <p className="text-xs lg:text-lg font-normal leading-8 opacity-70">
              need to think twice.
            </p>
            <div className="flex flex-col items-center rounded-[16px] drop-shadow  p-[12px] lg:p-[24px] bg-white w-[260px] mt-[130px] lg:mt-[110px]">
              <div className="flex flex-row ">
                <img
                  className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
                  src={StarIcon}
                />
                <img
                  className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
                  src={StarIcon}
                />
                <img
                  className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
                  src={StarIcon}
                />
                <img
                  className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
                  src={StarIcon}
                />
                <img
                  className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
                  src={StarIcon}
                />
              </div>
              <div className="">
                <div className="font-Outfit text-xs lg:text-lg font-[300] text-stone-950 text-center ">
                  <span className="font-[700]">4.8</span>
                  /5 based on 5,649 reviews | GDPR Compliant
                </div>
              </div>
            </div>
            <div className="absolute dr left-[16%]  rounded-full top-[83px] drop-shadow-[35px_35px_35px_rgba(DEEBE9)] box-Shadow-a ">
              <img
                src={custom1}
                className="w-[40px] h-[40px] lg:w-[120px] lg:h-[120px] rounded-full  "
                alt="custom1"
              />
            </div>
            <div className="absolute right-[10%] bg-emerald-300 rounded-full top-[81px]  box-Shadow-a ">
              <img
                src={custom2}
                className="w-[55px] h-[55px] md:w-[100px] md:h-[100px] xl:w-[180px] xl:h-[180px] rounded-full "
                alt="custom2"
              />
            </div>
            <div className="absolute left-[8%] bg-emerald-300 rounded-full top-[262px]  box-Shadow-a ">
              <img
                src={custom3}
                className="w-[55px] h-[55px] md:w-[100px] md:h-[100px] xl:w-[180px] xl:h-[180px] rounded-full "
                alt="custom3"
              />
            </div>
            <div className="absolute  bg-emerald-300 rounded-full top-[458px] left-[23.27%] box-Shadow-a ">
              <img
                src={custom4}
                className="w-[55px] h-[55px] md:w-[100px] md:h-[100px] xl:w-[180px] xl:h-[180px] rounded-full "
                alt="custom4"
              />
            </div>
            <div className="absolute  bg-emerald-300 rounded-full top-[474px] left-[64.52%] box-Shadow-a ">
              <img
                src={custom5}
                className="w-[55px] h-[55px] md:w-[100px] md:h-[100px] xl:w-[180px] xl:h-[180px] rounded-full "
                alt="custom5"
              />
            </div>
            <div className="absolute  bg-emerald-300 rounded-full top-[423px] left-[80%] box-Shadow-a ">
              <img
                src={custom6}
                className="w-[40px] h-[40px] lg:w-[120px] lg:h-[120px] rounded-full "
                alt="custom6"
              />
            </div>
            <div className="absolute  w-[30px] h-[30px] lg:w-[90px] lg:h-[90px] box-Shadow-a   bg-white left-[10.59%] top-[506px]   justify-center flex items-center rounded-[5px] lg:rounded-[12px]">
              <img
                className=" w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] "
                src={chrome}
                alt="chrome"
              />
            </div>

            <div className="absolute w-[30px] h-[30px] lg:w-[90px] lg:h-[90px] box-Shadow-a   bg-white right-[6.59%] top-[265px]  justify-center flex items-center rounded-[5px] lg:rounded-[12px]">
              <img
                className=" w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] "
                src={linkedin}
                alt="linkedin"
              />
            </div>
          </div>
        </BaseContainer>
      </div>
      <SupportPanel />
      <BaseContainer width={pageContentWidth}>
        <WhatKompassAIPanel />

        <div className=" text-3xl lg:text-6xl font-Outfit font-extrabold text-center text-emerald-500 px-[24px] mt-20">
          We stand for fair access to work
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[20px] px-[24px] md:px-[80px] mt-20">
          <div className="border-[1px] rounded-[30px] border-[#DDD] p-[40px]">
            <img src={GearIcon} />
            <div className="font-Outfit text-xl md:text-3xl font-[700] text-stone-950 mt-[40px]">
              We modernize
            </div>
            <div className="font-Outfit text-xl text-stone-950 mt-[15px]">
              Our industry needs rethinking.
              <br />
              Background checks have traditionally been clunky, expensive, hard
              to scale, and confusing. We're here to fix that.
            </div>
          </div>
          <div className="border-[1px] rounded-[30px] border-[#DDD] p-[40px]">
            <img src={LockIcon} />
            <div className="font-Outfit text-xl md:text-3xl font-[700] text-stone-950 mt-[40px]">
              We unblock
            </div>
            <div className="font-Outfit text-xl text-stone-950 mt-[15px]">
              We remove obstacles and unblock potential. Our products are
              designed to make our customers more productive and create new
              opportunities for people who have been kept out of the workforce.
            </div>
          </div>
          <div className="border-[1px] rounded-[30px] border-[#DDD] p-[40px]">
            <img src={AdvanceIcon} />
            <div className="font-Outfit text-xl md:text-3xl font-[700] text-stone-950 mt-[40px]">
              We advance
            </div>
            <div className="font-Outfit text-xl text-stone-950 mt-[15px]">
              We provide you with the solutions vou need to give you a
              competitive advantage. With Checkr, make faster and fairer hiring
              decisions.
            </div>
          </div>
        </div>
      </BaseContainer>
      <div className="bg-emerald-500 mt-[40px] md:mt-[160px] py-[40px] md:py-[80px]">
        {/* <div className='min-h-[100px] relative md:border-r-[2px] border-b-[2px] rounded-xl overflow-visible mt-[20px]'>
                    <div className='absolute top-0 left-0 w-full h-full bg-white'>
                    </div>
                </div> */}
        <BaseContainer width={pageContentWidth}>
          <div className="grid md:grid-cols-2 xl:grid-cols-3  justify-center">
            <div className="flex flex-col  md:flex-row items-center px-[40px]  md:px-[80px] border-b-[1px] xl:border-b-[0px]  md:border-r-[1px] border-[#28656A]">
              <div className=" flex flex-col md:flex-row items-center py-[40px]">
                <div className="font-Outfit text-6xl md:text-7xl xl:text-8xl font-[500] text-[#FFFFFF] ">
                  1000K+
                </div>
                <div className="flex flex-row items-center gap-[16px] justify-center w-full  md:flex-col mx-[20px]">
                  <img src={UserIcon} />
                  <div className="font-Outfit text-3xl md:mt-[20px] font-[700] text-white">
                    Users
                  </div>
                </div>
              </div>
              {/* <div className='divide-x-4 divide-[#FFF] h-full' /> */}
            </div>
            <div className="flex flex-col md:flex-row items-center px-[40px] md:px-[80px]  py-[40px]  md:border-b-[0px] border-b-[1px] xl:border-r-[1px] border-[#28656A]">
              <div className="font-Outfit text-6xl md:text-7xl xl:text-8xl font-[500] text-[#FFFFFF] ">
                300+
              </div>
              <div className="flex flex-row items-center gap-[16px] justify-center w-full  md:flex-col mx-[20px]">
                <img src={CompanyIcon} />
                <div className="font-Outfit text-3xl md:mt-[20px] font-[700] text-white">
                  Employees
                </div>
              </div>
              <div className="divide-x-1 divide-[#DDD] h-full z-40" />
            </div>
            <div className="flex flex-col md:flex-row items-center   px-[40px] md:px-[80px] py-[40px] ">
              <div className="font-Outfit text-6xl md:text-7xl xl:text-8xl font-[500] text-[#FFFFFF] ">
                220M+
              </div>
              <div className=" flex flex-row items-center gap-[16px] justify-center w-full  md:flex-col mx-[20px]">
                <img src={DataIcon} />
                <div className="font-Outfit md:w-[160px] text-[20px] md:text-[28px] md:mt-[20px] font-[700] text-white">
                  Data entries
                </div>
              </div>
              <div className="divide-x-1 divide-[#DDD] h-full" />
            </div>
          </div>
        </BaseContainer>
      </div>
      <BaseContainer width={pageContentWidth}>
        <div className="flex flex-col items-center w-full">
          <div className="lg:w-[850px] text-center text-3xl lg:text-6xl mt-[40px] sm:mt-[100px] lg:mt-[160px] font-Outfit font-[700]  text-emerald-500">
            We’re driven by our values
          </div>
          <div className="w-[64px] h-[64px] rounded-[16px] bg-magenta-500 p-[12px] -rotate-2 my-[36px] md:my-[64px]">
            <img src={HeartIcon} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[24px] md:mb-[64px] w-[100%]">
            <div className="min-h-[100px] relative md:border-r-[2px] border-b-[2px] rounded-xl overflow-visible mt-[20px]">
              <div className="absolute top-0 left-0 w-full h-full bg-white">
                <div className="font-Outfit text-center text-[20px] xl:text-[28px] font-[700] text-stone-950">
                  Embody a service mindset.
                </div>
                <div className="font-Outfit text-center  text-[16px] font-[400] text-stone-950 divide-y">
                  Never stop advocating for the needs of others.
                </div>
              </div>
            </div>
            <div className="min-h-[100px] relative lg:border-r-[2px] border-b-[2px] rounded-xl overflow-visible mt-[20px]">
              <div className="absolute top-0 left-0 w-full h-full bg-white">
                <div className="font-Outfit text-center  text-[20px] xl:text-[28px] font-[700] text-stone-950">
                  Dream big, then make it real.
                </div>
                <div className="font-Outfit text-center  text-[16px] font-[400] text-stone-950">
                  Ensure deep integrity in everything you do.
                </div>
              </div>
            </div>
            <div className="min-h-[100px] relative md:border-r-[2px]  border-b-[2px]   rounded-xl overflow-visible mt-[20px]">
              <div className="absolute top-0 left-0 w-full h-full bg-white">
                <div className="font-Outfit text-center  text-[20px] xl:text-[28px] font-[700] text-stone-950">
                  Be proud of the how.
                </div>
                <div className="font-Outfit text-center  text-[16px] font-[400] text-stone-950">
                  Ensure deep integrity in everything you do.
                </div>
              </div>
            </div>

            <div className="min-h-[100px] relative md:border-r-[2px] border-b-[2px] lg:border-b-[0px] rounded-xl overflow-visible mt-[20px]">
              <div className="absolute top-0 left-0 w-full h-full bg-white">
                <div className="font-Outfit text-center  text-[20px] xl:text-[28px] font-[700] text-stone-950">
                  Embrace an ownership mentality.
                </div>
                <div className="font-Outfit text-center  text-[16px] font-[400] text-stone-950">
                  Take initiative to leave things better than you found them.
                </div>
              </div>
            </div>

            <div className="min-h-[100px] relative md:border-r-[2px] border-b-[2px] lg:border-b-[0px]  rounded-xl overflow-visible mt-[20px]">
              <div className="absolute top-0 left-0 w-full h-full bg-white">
                <div className="font-Outfit text-center  text-[20px] xl:text-[28px] font-[700] text-stone-950">
                  Debate then commit.
                </div>
                <div className="font-Outfit text-center  text-[16px] font-[400] text-stone-950">
                  Share openly, question respectfully, and once a decision is
                  made, commit fully.
                </div>
              </div>
            </div>
            <div className="min-h-[100px] relative border-b-[2px] lg:border-b-[0px] rounded-xl overflow-visible mt-[20px] ">
              <div className="absolute top-0 left-0 w-full h-full bg-white">
                <div className="font-Outfit text-center  text-[20px] xl:text-[28px] font-[700] text-stone-950">
                  Build with humility.
                </div>
                <div className="font-Outfit text-center  text-[16px] font-[400] text-stone-950">
                  Put collective success before individual achievements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
      <MeetTeam />
      <BaseContainer width={pageContentWidth}>
        <div className="flex flex-col items-center">
          <div className="font-Outfit font-[700] text-emerald-500 text-3xl lg:text-6xl mt-[40px] lg:mt-[80px] ">
            Our invetors
          </div>
          <div className="font-Outfit text-emerald-500 text-xl lg:text-2xl mt-8 ">
            We’re backed by the best in the business
          </div>
          <div className="w-full flex flex-wrap justify-center md:justify-evenly py-[64px]">
            <img
              className="w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]"
              src={SubwayIcon}
            />
            <img
              className="w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]"
              src={InterComIcon}
            />
            <img
              className="w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]"
              src={RedbullIcon}
            />
            <img
              className="w-[100px] sm:w-[120px] md:w-[140px] mt-[20px] mx-[10px]"
              src={Forever21Icon}
            />
          </div>
        </div>
      </BaseContainer>
      <Investors />
      <BaseContainer width={pageContentWidth}>
        <AboutProduct />
      </BaseContainer>
    </LandingLayout>
  );
}
