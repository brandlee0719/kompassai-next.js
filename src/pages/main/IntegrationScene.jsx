import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";

import MainLayout from "@/components/MainLayout";
import IntegrateCard from "@/components/integrations/IntegrateCard";

import IntegrateIcon from "@/assets/image/integrations/integrate.svg";
import SalesforceIcon from "@/assets/image/integrations/salesforce.svg";
import OutreachIcon from "@/assets/image/integrations/outreach.svg";
import HubspotIcon from "@/assets/image/integrations/hubspot.svg";
import PipedriveIcon from "@/assets/image/integrations/pipedrive.svg";
import ZapierIcon from "@/assets/image/integrations/zapier.svg";
import ZohoIcon from "@/assets/image/integrations/zoho.svg";
import CopyKeyIcon from "@/assets/image/integrations/copykey.svg";
import { ReactComponent as InfoSVGIcon } from "@/assets/image/icons/Info.svg";

import { ReactComponent as BackSVG } from "@/assets/image/integrations/back.svg";
import GetStartedCard from "@/components/integrations/GetStartedCard";

const integrations = [
  {
    label: "Salesforce",
    description:
      "Send your KompassAI contacts directly to Salesforce as either leads or contacts.",
    icon: SalesforceIcon,
  },
  {
    label: "Outreach",
    description:
      "Ensure every lead is saved to the right sequence. From nurture to conversion.",
    icon: OutreachIcon,
  },
  {
    label: "Hubspot",
    description:
      "Push your contacts and leads to Hubspot CRM and automate deal making.",
    icon: HubspotIcon,
  },
  {
    label: "Pipedrive",
    description:
      "Fill up your Pipedrive with new opportunities and prospects from Linkedin.",
    icon: PipedriveIcon,
  },
  {
    label: "Zapier",
    description: "Send your contacts to 5000+ apps via Zapier automation.",
    icon: ZapierIcon,
    visible: true,
  },
  {
    label: "Zoho CRM",
    description:
      "Feed enriched prospects to Zoho CRM and automate cold outreach.",
    icon: ZohoIcon,
  },
];

export default function IntegrationScene() {
  const [connectTabVisible, setConnectTabVisible] = useState(false);

  return (
    <MainLayout>
      {!connectTabVisible ? (
        <>
          <div className="w-full flex flex-row gap-4 px-6 pt-6 pb-4 bg-white filter drop-shadow-lg">
            <ReactSVG src={IntegrateIcon} className="w-6 h-6" />
            <div>
              <p className="text-2xl text-stone-950 font-OutfitBold">Integrations</p>
              <div className="w-full flex flex-row items-center text-center text-sm text-[#5E5E5E] font-Outfit leading-loose pt-1">
                <p>
                  Quit switching tools and work from one place. Integrate to any
                  tool in 60 seconds and supercharge your workflows in 1 click.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center p-6 gap-3">
              {integrations.map((item, index) => {
                return (
                  <IntegrateCard
                    info={item}
                    onConnect={() => {
                      setConnectTabVisible(true);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex flex-row items-center text-center text-sm font-Outfit leading-loose">
            <Button
              className="flex flex-row justify-center items-center text-magenta-500 gap-2 p-0"
              onClick={() => {
                setConnectTabVisible(false);
              }}
            >
              <BackSVG />
              <p>Back</p>
            </Button>
          </div>

          <div className="w-full flex flex-row items-center justify-center md:justify-start text-center text-xl md:text-2xl text-black font-bold font-Outfit leading-loose gap-2 mt-1">
            <ReactSVG
              src={ZapierIcon}
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width: 35px");
              }}
            />
            <p>Get started with Zapier</p>
          </div>
          <div className="w-full flex flex-row items-center text-center text-sm text-[#5E5E5E] font-Outfit leading-loose md:ml-10">
            <p>
              Push contacts to over 5000+ apps including Google Sheets in one
              click.
            </p>
          </div>

          <hr
            className="h-[2px] rounded-full my-4"
            width="100%"
            color="#E8E7E7"
          />

          <div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center gap-3">
              <GetStartedCard
                id={1}
                title="Copy your Zapier key"
                description="You'll enter this key later on Zapier's editor."
              >
                <div className="w-full flex flex-row p-[8px_12px] rounded-[40px] items-center bg-white border-[1px] border-[#E8E7E7]">
                  <input
                    type="text"
                    className="w-full rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-sm"
                    placeholder=""
                  />
                  <ReactSVG src={CopyKeyIcon} />
                </div>
              </GetStartedCard>
              <GetStartedCard
                id={2}
                title="Create your Zap"
                description="Add the KompassAI app to your Zapier account."
              >
                <Button className="w-full flex items-center justify-center border-[1px] border-[#E7436A] bg-magenta-500 text-white text-sm font-Outfit font-bold rounded-full px-1 py-2">
                  add kompassai to zapier
                </Button>
              </GetStartedCard>
              <GetStartedCard
                id={3}
                title="Sync a contact"
                description="Syncing any contact or list will push the contact(s) to your Zapier automation."
              ></GetStartedCard>
            </div>
          </div>

          <hr
            className="h-[2px] rounded-full my-4"
            width="100%"
            color="#E8E7E7"
          />

          <div className="flex flex-row items-center justify-center gap-2">
            <InfoSVGIcon className="w-5 h-5 relative" />
            <div className="opacity-60 text-black text-xs font-normal font-['Outfit'] leading-none">
              Still have questions? Reach out to our
              <span className="text-magenta-500 cursor-pointer select-none ml-1">
                support
              </span>{" "}
              and we'll help you get started with Zapier.
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
}
