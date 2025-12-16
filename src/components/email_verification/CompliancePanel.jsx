import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import GDPRImg from "@/assets/image/email_verification/gdpr.svg";
import SOC2Img from "@/assets/image/email_verification/soc2.svg";
import SOC3Img from "@/assets/image/email_verification/soc3.svg";
import ISO27Img from "@/assets/image/email_verification/iso27.svg";



import BaseContainer from "../../components/BaseContainer";

const data = [
  {
    icon: GDPRImg,
    title: "GDPR Compliant",
  },
  {
    icon: SOC2Img, 
    title: "SOC2 Compliant",
  },
  {
    icon: SOC3Img,
    title: "SOC3 Compliant",
  },
  {
    icon: ISO27Img,
    title: "ISO 27001 Certified",
  }
];
export default function BusinessLeaderPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-stone-50">
      <BaseContainer width="1680">
        <div className="w-full py-12 px-12">
          <div className="w-full">
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">
              <div className="w-full 2xl:w-[650px] font-OutfitBold text-[2.25rem] text-center text-stone-950">
                Our Background check partner, certn, keeps<br />your results safe and secure
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center mt-12">
            <div className="w-full flex flex-col md:flex-row justify-center gap-12">
              {data.map((d) => {
                return (
                  <div className="w-1/12 flex flex-col text-center">
                    <div className="">
                      <ReactSVG beforeInjection={(svg) => {
                          svg.classList.add('h-8')
                          svg.classList.add('mx-auto')
                        }} 
                        src={d.icon}
                      />
                    </div>
                    <div className="w-full text-lg text-stone-950 font-Outfit mt-8">
                      {d.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
}
