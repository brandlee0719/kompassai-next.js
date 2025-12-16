import { Button } from "@material-tailwind/react";
import SearchBar from "@/components/common/SearchBar";
import FaqHeader from "@/components/faq/FaqHeader";
import FaqLeftBar from "@/components/faq/FaqLeftBar";
import FaqTag from "@/components/faq/FaqTag";
import BackgroundImage from "@/assets/image/background.svg";
import LandingLayout from "@/components/LandingLayout";
import BaseContainer from "@/components/BaseContainer";
import { pageContentWidth } from "@/utils/common";
import Text from "@/components/Text";

export default function FAQScene() {
  return (
    <LandingLayout pageName={"faq"}>
      <div>
        <div className="bg-emerald-200 pb-[80px] px-[12px]">
          <BaseContainer width={pageContentWidth}>
            <div className="flex flex-col items-center">
              <div className="flex bg-white p-[5px_16px] rounded-full mt-[60px] font-Outfit font-[400px] text-lg">
                FAQ
              </div>

              <Text
                variant="Header2"
                className="text-center text-stone-950 mt-4"
              >
                Questions you might have
              </Text>

              <Text
                variant="SubHeader1"
                className="text-center text-stone-950 mt-6 opacity-70"
              >
                Discovering answers to common queries
              </Text>

              <SearchBar />

              <div className="w-full md:w-[744px] flex flex-wrap  px-[24px] gap-2">
                <div className="font-Outfit p-[8px_16px] text-md font-[400] bg-emerald-300 rounded-full text-emerald-500">
                  KompassAI Chrome Extension overview
                </div>
                <div className="font-Outfit p-[8px_16px] text-md font-[400] bg-emerald-300 rounded-full text-emerald-500">
                  Link your mailbox
                </div>
                <div className="font-Outfit p-[8px_16px] text-md font-[400] bg-emerald-300 rounded-full text-emerald-500">
                  Sending limits overview
                </div>
                <div className="font-Outfit p-[8px_16px] text-md font-[400] bg-emerald-300 rounded-full text-emerald-500">
                  Sequences overview
                </div>
                <div className="font-Outfit p-[8px_16px] text-md font-[400] bg-emerald-300 rounded-full text-emerald-500">
                  Avoid spam filters
                </div>
              </div>
            </div>
          </BaseContainer>
        </div>

        <BaseContainer width={pageContentWidth}>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start  md:px-[80px] lg:px-[160px]">
            <div className="">
              <FaqLeftBar />
              <div className="flex flex-col justify-evenly  bg-[url('./assets/image/background.svg')] w-[260px] h-[260px] rounded-[16px] items-center bg-[#BDDBD7] p-[20px]">
                <div className="flex flex-col text-[28px] text-white font-[700]">
                  Create prospect
                  <div className="flex text-[28px] text-white font-[700]">
                    list from
                    <span className="flex items-center ml-[8px] justify-center bg-magenta-500 text-[16px] w-[93px] h-[36px] p-[12px] rounded-[12px] rotate-2">
                      Linkedin
                    </span>
                  </div>
                </div>
                <Button className="flex items-center justify-center p-[16px_24px] bg-white rounded-full text-emerald-500 text-[16px] w-[179px] h-[51px]">
                  Try for free
                </Button>
              </div>
            </div>
            <div className="">
              <FaqHeader
                header={"Get started"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />

              <FaqHeader
                header={"Home"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />

              <FaqHeader
                header={"Search & Prospecting"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />

              <FaqHeader
                header={"Engage"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />

              <FaqHeader
                header={"Plays"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />

              <FaqHeader
                header={"Enrich"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />

              <FaqHeader
                header={"Deals"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />

              <FaqHeader
                header={"Integrations"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />

              <FaqHeader
                header={"Settings & Billing"}
                value={
                  "Welcome to all things homely! Click into the overview section below to learn about the control center, the cockpit, and the data health center."
                }
              />
              <FaqTag title="The Basics" />
              <FaqTag title="Email Deliverability & Domain Reputation" />
              <FaqTag title="Account Settings" />
            </div>
          </div>
        </BaseContainer>

        <div className="mb-[24px] md:mb-[80px]"></div>
      </div>
    </LandingLayout>
  );
}
