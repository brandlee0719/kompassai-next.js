import ProvideBestPanel from "@/components/email_verification/ProvideBestPanel";
import { Button } from "@material-tailwind/react";
import Product from "@/components/prospecting/Products";
import LandingLayout from "@/components/LandingLayout";
import BaseContainer from "@/components/BaseContainer";
import { pageContentWidth } from "@/utils/common";

import SupportPanel from "@/components/landing/SupportPanel";
import WhyKompassAIPanel from "@/components/landing/WhyKompassAIPanel";
import QuestionPanel from "@/components/landing/QuestionPanel";
import HoursSavedPanel from "@/components/integrations/HoursSavedPanel";
import ConnectorsPanel from "@/components/integrations/ConnectorsPanel";
import HowItWorksPanel from "@/components/integrations/HowItWorksPanel";

import ShiningIcon from "@/assets/image/icons/shiny.svg";
import BrowserImage from "@/assets/image/browser.png";
import TopBar from "@/components/landing/TopBar";
import ConnectPanel from "@/components/landing/ConnectPanel";

const topBarData = {
  tag: "intergration",
  title: "Busy importing and exporting spreadsheets of data?",
  subTitle: `Optimize your prospecting experience with these partner integrations to help your reps be more productive and save time so they can focus on selling.`,
  shiningIcon: ShiningIcon,
  image: BrowserImage
};

const description = {
  heading: "Connect KompassAI with your favorite software", 
  subHeading: "Directly integrate into your existing workflow & enhance your prospecting and sales campaigns. KompassAI’s seamless one-click integrations with leading data management will save time to help you focus on growing your business."
}

export default function IntergrationScene() {
  return (
    <LandingLayout pageName="csvexport" background="#FF9665">
      <div>
        <TopBar data={topBarData} background={"bg-accents-orange"} />
        <SupportPanel title={false} />
        <WhyKompassAIPanel  data={description}/>
        <HoursSavedPanel />
        <ConnectorsPanel />
        <HowItWorksPanel />
        <QuestionPanel />
        <Product />
        <ConnectPanel background={"bg-accents-orange"} accent={"bg-accents-darkOrange"}/>
      </div>
    </LandingLayout>
  );
}
