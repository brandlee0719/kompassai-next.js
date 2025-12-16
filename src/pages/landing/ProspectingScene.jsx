import TopBar from "@/components/landing/TopBar";
import { Button } from "@material-tailwind/react";
import AnswerPanel from "@/components/prospecting/AnswerPanel";
import DeliverPanel from "@/components/prospecting/DeliverPanel";
import DetailPanel from "@/components/prospecting/DetailsPanel";
import Product from "@/components/prospecting/Products";
import LandingLayout from "@/components/LandingLayout";
import Text from "@/components/Text";
import SupportPanel from "@/components/landing/SupportPanel";
import WhyKompassAIPanel from "@/components/landing/WhyKompassAIPanel";
import QuestionPanel from "@/components/landing/QuestionPanel";
import Datapoints from "@/components/landing/common/Datapoints";

import ShiningIcon from "@/assets/image/icons/shiny.svg";
import BrowserImage from "@/assets/image/browser.png";
import ConnectPanel from "@/components/landing/ConnectPanel";

const topBarData = {
  tag: "LINKEDIN PROSPECTING TOOL",
  title: "Find your prospects on LinkedIn with our integrated Chrome extension",
  subTitle: `Optimize your prospecting by letting us help you find the decision makers that matter on LinkedIn.`,
  shiningIcon: ShiningIcon,
  image: BrowserImage,
};

const description = {
  heading: "What is the KompassAI Chrome Extension?", 
  subHeading: "Scrape data directly from LinkedIn and leverage the world's largest business directory. Our Chrome browser extension cleans the data to ensure you get high-quality, consistent, structured and easily manipulable contact info that's easy to integrate into your database."
}


export default function ProspectingScene() {
  return (
    <LandingLayout pageName="prospecting" background="#F8E665">
      <div>
        <TopBar data={topBarData} background={"bg-accents-yellow"} />
        <SupportPanel/>
        <WhyKompassAIPanel data={description}/>
        <AnswerPanel />
        <Datapoints background={"bg-accents-yellow"} opacity={"bg-opacity-25"}/>
        <QuestionPanel />
        <Product />
        <ConnectPanel background={"bg-accents-yellow"} accent={"bg-accents-gold"}/>
      </div>
    </LandingLayout>
  );
}
