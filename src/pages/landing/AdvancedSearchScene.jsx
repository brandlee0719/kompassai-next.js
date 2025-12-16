import OpportunitiesPanel from "@/components/landing/advanced_search/OpportunitiesPanel";
import DataAnalyst from "@/components/advanced_search/DataAnalyst";
import ProvideBestPanel from "@/components/email_verification/ProvideBestPanel";
import { Button } from "@material-tailwind/react";
import Product from "@/components/prospecting/Products";
import LandingLayout from "@/components/LandingLayout";
import { pageContentWidth } from "@/utils/common";
import SupportPanel from "@/components/landing/SupportPanel";
import WhyKompassAIPanel from "@/components/landing/WhyKompassAIPanel";
import QuestionPanel from "@/components/landing/QuestionPanel";
import Datapoints from "@/components/landing/common/Datapoints";

import ShiningIcon from "@/assets/image/icons/shiny.svg";
import BrowserImage from "@/assets/image/browser.png";
import TopBar from "@/components/landing/TopBar";
import ConnectPanel from "@/components/landing/ConnectPanel";

const topBarData = {
  tag: "Advanced Database Search",
  title: "Prospect clients directly on our platform",
  subTitle: "Power your prospecting with our continuously growing and repeatedly validated database of businesses and professionals",
  shiningIcon: ShiningIcon,
  image: BrowserImage,
};

const description = {
  heading: "What is the Advanced Database tool?", 
  subHeading: "Our platform is powered by a continuously expanding database with multiple levels of cross-references to ensure our data remains fresh and accurate. We refresh our database at least once a month to ensure that our data doesn't become stale."
}


export default function ProspectingScene() {
  return (
    <LandingLayout pageName="advancedsearch" background="#4CD66E">
      <div>
        <TopBar data={topBarData} background={"bg-accents-green"} />
        <SupportPanel title={false} />
        <WhyKompassAIPanel data={description}/>
        <OpportunitiesPanel />
        <DataAnalyst />
        <Datapoints background={"bg-accents-green"} opacity={"bg-opacity-25"}/>
        <QuestionPanel />
        <Product />
        <ConnectPanel background={"bg-accents-green"} accent={"bg-accents-darkGreen"} />
      </div>
    </LandingLayout>
  );
}
