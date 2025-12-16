import DataAnalyst from "@/components/csvexport/DataAnalyst";
import ProvideBestPanel from "@/components/email_verification/ProvideBestPanel";
import { Button } from "@material-tailwind/react";
import Product from "@/components/prospecting/Products";
import LandingLayout from "@/components/LandingLayout";
import BaseContainer from "@/components/BaseContainer";
import { pageContentWidth } from "@/utils/common";

import GearIcon from "@/assets/image/icons/gear.svg";
import LockIcon from "@/assets/image/icons/lock.svg";
import AdvanceIcon from "@/assets/image/icons/advance.svg";
import SupportPanel from "@/components/landing/SupportPanel";
import WhyKompassAIPanel from "@/components/landing/WhyKompassAIPanel";
import QuestionPanel from "@/components/landing/QuestionPanel";

import ShiningIcon from "@/assets/image/icons/shiny.svg";
import BrowserImage from "@/assets/image/browser.png";
import TopBar from "@/components/landing/TopBar";
import ConnectPanel from "@/components/landing/ConnectPanel";

const topBarData = {
  tag: "bulk enrich",
  title: "Get a holistic view of your customer.",
  subTitle: `Our bulk enrichment ensures you know exactly whom you're prospecting so that you can personalize your outreach and maximize conversion.`,
  shiningIcon: ShiningIcon,
  image: BrowserImage
};

const description = {
  heading: "Why Bulk Enrichment?", 
  subHeading: "We believe in quality over quantity. When you turn to us, you know that your CRM will be populated with comprehensive and up-to-date data to ensure that your outreach is precise. We add over 30 different fields so that you can tailor your lead assignments and campaigns for maximum productivity."
}

export default function CSVExportScene() {
  return (
    <LandingLayout pageName="csvexport" background="#9AB2FF">
      <div>
        <TopBar data={topBarData} background={"bg-accents-blue"} />
        <SupportPanel title={false} />
        <WhyKompassAIPanel  data={description}/>
        <DataAnalyst />
        <QuestionPanel />
        <Product />
        <ConnectPanel background={"bg-accents-blue"} accent={"bg-accents-darkBlue"}/>
      </div>
    </LandingLayout>
  );
}
