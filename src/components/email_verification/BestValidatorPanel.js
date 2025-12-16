import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import AccuraryImg from "@/assets/image/email_verification/accuracy.svg";
import SecureImg from "@/assets/image/email_verification/secure.svg";
import SpeedImg from "@/assets/image/email_verification/speed.svg";



import BaseContainer from "../../components/BaseContainer";

const data = [
  {
    icon: AccuraryImg,
    title: "99% Accuracy Guarantee",
    content:
      "Effective email verification relies on accuracy, and our system assures you a 99% precision rate. Give us a try and witness the results firsthand."
  },
  {
    icon: SecureImg, 
    title: "Secure Email Validaiton",
    content: "While our system verifies your data, you can rest assured that it's secure. We employ military-grade data encryption and utilize one of the world's top content delivery networks for added protection."
  },
  {
    icon: SpeedImg,
    title: "Lightning Speed Validation",
    content: "We work with speed. Our email verifier typically takes just 45 minutes on average to clean a list of 100,000 contacts. What's even more impressive, our email verification services can validate an email address in under 3 seconds."
  }
];
export default function BusinessLeaderPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-white">
      <BaseContainer width="1680">
        <div className="w-full py-24 px-12">
          <div className="w-full">
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">
              <div className="w-full 2xl:w-[650px] font-OutfitBold text-[3rem] text-center text-stone-950 mt-[24px]">
                What makes our validator the best in the business?
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center mt-[40px] md:mt-[40px]">
            <div className="w-full flex flex-col md:flex-row gap-4">
              {data.map((d) => {
                return (
                  <div className="w-1/3 flex flex-col rounded-3xl border border-stone-250 bg-white p-12">
                    <div className="">
                      <ReactSVG beforeInjection={(svg) => {
                          svg.classList.add('h-10')
                          svg.classList.add('w-10')
                        }} 
                        src={d.icon}
                      />
                    </div>
                    <div className="w-full text-2xl text-stone-950 font-OutfitBold mt-8">
                      {d.title}
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="w-full text-md text-stone-950 font-Outfit font-[400] mt-4">
                        {d.content}
                      </div>
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
