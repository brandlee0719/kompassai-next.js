import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import TabBar from "../common/TabBar";
import ExpandIcon from "../../../assets/image/icons/expand.svg";
import GuardIcon from "../../../assets/image/icons/guard.svg";
import ClockIcon from "../../../assets/image/icons/clock.svg";

export default function DetailPanel(props) {
  return (
    <div className="flex flex-col lg:flex-row bg-emerald-200 p-[40px] md:p-[80px]">
      <div className="flex-1 flex-col items-start">
        <div className="w-[200px] font-Outfit flex items-center justify-center p-[10px_16px] text-md font-[400] rounded-full text-[#000] bg-white">
          HOW IT WORKS
        </div>
        <div className="font-Outfit text-4xl text-stone-950 font-[600] mt-[24px]">
          We handle data, so you can
          <br /> focus on selling
        </div>
        <div className="font-Outfit text-xl font-[400] text-stone-950 mt-[60px]">
          You usually need to open a local entity to hire an employee in another
          <br /> country. It can take a lot of time, along with the ongoing
          payroll and
          <br /> HR admin. With our Employer of Record product, we hire
          employees
          <br /> on your behalf who work for you just like the rest of your
          team.
        </div>
      </div>
      <div className="flex-1 flex-col pt-[80px] lg:ml-[10px]">
        <div>
          <div className="flex flex-row items-center">
            <div className="p-[8px] md:p-[20px] min-w-[80px] h-[80px] md:min-w-[120px] md:h-[120px] rounded-[16px] bg-white">
              <img src={ExpandIcon} />
            </div>
            <div className="mx-[12px] md:mx-[48px]">
              <div className="font-Outfit text-3xl font-extrabold text-emerald-500">
                Expand your talent pool
              </div>
              <div className="font-Outfit text-lg font-[400] text-stone-950 mt-[10px]">
                With legal entities in 100+ countries and expert visa support,
                onboard worldwide employees from anywhere.
              </div>
            </div>
          </div>
          <hr
            className="h-[2px] rounded-full"
            width="100%"
            color="#ABCEC9"
            style={{ marginTop: 40, marginBottom: 40 }}
          />
        </div>

        <div>
          <div className="flex flex-row items-center ">
            <div className="p-[8px] md:p-[20px] min-w-[80px] h-[80px] md:min-w-[120px] md:h-[120px] rounded-[16px] bg-white">
              <img src={GuardIcon} />
            </div>
            <div className="mx-[12px] md:mx-[48px]">
              <div className="font-Outfit text-3xl font-extrabold text-emerald-500">
                Let us handle compliance
              </div>
              <div className="font-Outfit text-lg font-[400] text-stone-950 mt-[10px]">
                We handle everything, so you’re compliant when it comes to
                contracts, minimum wage, terminations, and other local laws.
              </div>
            </div>
          </div>
          <hr
            className="h-[2px] rounded-full"
            width="100%"
            color="#ABCEC9"
            style={{ marginTop: 40, marginBottom: 40 }}
          />
        </div>
        <div>
          <div className="flex flex-row items-center ">
            <div className="p-[8px] md:p-[20px] min-w-[80px] h-[80px] md:min-w-[120px] md:h-[120px] rounded-[16px] bg-white">
              <img src={ClockIcon} />
            </div>
            <div className="mx-[12px] md:mx-[48px]">
              <div className="font-Outfit text-3xl font-extrabold text-emerald-500">
                Spend less time on payroll
              </div>
              <div className="font-Outfit text-lg font-[400] text-stone-950 mt-[10px]">
                Pay everyone with one bulk payment and we will manage the hard
                stuff like tax deductions, pensions, benefits, and government
                fees.
              </div>
            </div>
          </div>
          <hr
            className="h-[2px] rounded-full"
            width="100%"
            color="#ABCEC9"
            style={{ marginTop: 40, marginBottom: 40 }}
          />
        </div>
      </div>
    </div>
  );
}
