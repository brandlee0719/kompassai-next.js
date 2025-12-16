import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import RoundBtnIcon from "@/assets/image/icons/roundBtn.svg";
import TeammemberIcon1 from "@/assets/image/about/team1.png";
import TeammemberIcon2 from "@/assets/image/about/team2.png";
import TeammemberIcon3 from "@/assets/image/about/team3.png";
import TeammemberIcon4 from "@/assets/image/about/team4.png";

export default function MeetTeam(props) {
  return (
    <div className="bg-emerald-200 flex flex-col xl:grid grid-cols-2 gap-[80px] p-[40px] md:p-[80px]">
      <div className="flex flex-col">
        <div className="font-Outfit font-[700] text-3xl lg:text-6xl text-emerald-500">
          Meet our team
        </div>
        <div className="font-Outfit font-[700] text-lg md:text-xl opacity-70 mt-20  text-emerald-500">
          You usually need to open a local entity to hire an employee in another
          country. It can take a lot of time, along with the ongoing payroll and
          HR admin. With our Employer of Record product, we hire employees on
          your behalf who work for you just like the rest of your team.
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center md:flex-row bg-white p-[24px] rounded-[30px]">
          <img
            className="rounded-[24px] w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            src={TeammemberIcon1}
          />

          <div className="flex flex-col items-center md:items-start justify-between w-full md:mx-[32px]">
            <div className="font-Outfit font-[700] text-[24px] md:text-[28px]  text-emerald-500">
              Jaylon Press
            </div>
            <div className="font-Outfit font-[400] text-[16px] md:text-[22px] mb-[40px]  text-emerald-500 opacity-40">
              Co-Founder & President
            </div>
            <div className="font-Outfit font-[400] text-[16px] bg-emerald-200 rounded-[16px] p-[16px] md:text-[20px]  text-emerald-500">
              “Who dares, wins.”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row bg-white p-[24px] rounded-[30px] mt-[16px]">
          <img
            className="rounded-[24px] w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            src={TeammemberIcon2}
          />

          <div className="flex flex-col items-center md:items-start justify-between w-full md:mx-[32px]">
            <div className="font-Outfit font-[700] text-[24px] md:text-[28px]  text-emerald-500">
              Jakob Levin
            </div>
            <div className="font-Outfit font-[400] text-[16px] md:text-[22px] mb-[40px]  text-emerald-500 opacity-40">
              Co-Founder & President
            </div>
            <div className="font-Outfit font-[400] text-[16px] bg-emerald-200 rounded-[16px] p-[16px] md:text-[20px]  text-emerald-500">
              “Everything you want waits on the other side of consistency.”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row bg-white p-[24px] rounded-[30px] mt-[16px]">
          <img
            className="rounded-[24px] w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            src={TeammemberIcon3}
          />

          <div className="flex flex-col items-center md:items-start justify-between w-full md:mx-[32px]">
            <div className="font-Outfit font-[700] text-[24px] md:text-[28px]  text-emerald-500">
              Maria George
            </div>
            <div className="font-Outfit font-[400] text-[16px] md:text-[22px] mb-[40px]  text-emerald-500 opacity-40">
              VP Customer Success
            </div>
            <div className="font-Outfit font-[400] text-[16px] bg-emerald-200 rounded-[16px] p-[16px] md:text-[20px]  text-emerald-500">
              “Unleashing the power of entrepreneurship...”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row bg-white p-[24px] rounded-[30px] mt-[16px]">
          <img
            className="rounded-[24px] w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            src={TeammemberIcon4}
          />

          <div className="flex flex-col items-center md:items-start justify-between w-full md:mx-[32px]">
            <div className="font-Outfit font-[700] text-[24px] md:text-[28px]  text-emerald-500">
              Lincoln Rhiel Madsen
            </div>
            <div className="font-Outfit font-[400] text-[16px] md:text-[22px] mb-[40px]  text-emerald-500 opacity-40">
              VP Sales
            </div>
            <div className="font-Outfit font-[400] text-[16px] bg-emerald-200 rounded-[16px] p-[16px] md:text-[20px]  text-emerald-500">
              "If you’re offered a seat on a rocket ship, don’t ask what seat!
              Just get on."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
