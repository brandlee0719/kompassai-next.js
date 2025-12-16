import BusinessLeaderPanel from "@/components/email_verification/BusinessLeaderPanel";
import BestValidatorPanel from "@/components/email_verification/BestValidatorPanel";
import CompliancePanel from "@/components/email_verification/CompliancePanel";

import ProvideBestPanel from "@/components/email_verification/ProvideBestPanel";
import { Button } from "@material-tailwind/react";
import Product from "@/components/prospecting/Products";
import LandingLayout from "@/components/LandingLayout";
import SupportPanel from "@/components/landing/SupportPanel";
import WhyKompassAIPanel from "@/components/landing/WhyKompassAIPanel";
import QuestionPanel from "@/components/landing/QuestionPanel";

import ShiningIcon from "@/assets/image/icons/shiny.svg";
import BrowserImage from "@/assets/image/browser.png";
import TopBar from "@/components/landing/TopBar";
import ConnectPanel from "@/components/landing/ConnectPanel";

const topBarData = {
  tag: "EMAIL VERIFICATION",
  title: "Bulk validate emails quickly and cheaply",
  subTitle: `Invalid emails can impact your sender reputation and lead ISPs to reject your email. Protect your email reputation score and avoid being flagged as spam.`,
  shiningIcon: ShiningIcon,
  image: BrowserImage,
};

const description = {
  heading: "What is the KompassAI email verification tool?", 
  subHeading: "We employ a multi-level validation workflow to cross-reference multiple databases to ensure the validity of an email, enabling us to provide email verification services with industry-leading accuracy rates."
}

export default function ProspectingScene() {
  return (
    <LandingLayout pageName="emailverification" background="#F1A9FF">
      <div>
        <TopBar data={topBarData} background={"bg-accents-purple"} />
        <SupportPanel title={false} />
        <WhyKompassAIPanel data={description}/>
        <BusinessLeaderPanel />
        <BestValidatorPanel />
        <CompliancePanel />
        <QuestionPanel />
        <Product />
        <ConnectPanel background={"bg-accents-purple"} accent={"bg-accents-hotPurple"} />
      </div>
    </LandingLayout>
  );
}
