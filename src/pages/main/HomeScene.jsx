import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { pageContentWidth } from "@/utils/common";

import { AuthContext } from "@/context/AuthContext";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";
import CompanySearchComponent from "@/components/home/CompanySearchComponent";
import ContactCreatedComponent from "@/components/home/ContactCreatedComponent";
import ContactDeductedComponent from "@/components/home/CreditDeductedComponent";
import ProspectSearchComponent from "@/components/home/ProspectSearchComponent";
import SuggestedComponent from "@/components/home/SuggestedComponent";
import SummaryComponent from "@/components/home/SummaryComponent";
import UsageAnalyticComponent from "@/components/home/UsageAnalyticComponent";
import useBillingStore from "@/store/useBillingStore";

export default function HomeScene() {

  const authContext = useContext(AuthContext);

  const { redirect, selectedPrices, setRedirect } = useBillingStore();
  const navigate = useNavigate();
  console.log(redirect, selectedPrices);
  useEffect(() => {
    if (redirect) {
      navigate(redirect, {
        state: Object.values(selectedPrices).filter((val) => val !== null),
      });
      setRedirect(false)
    }
  }, []);

  return (
    <MainLayout>
      <div
        className="font-Outfit \ leading-loose w-full bg-white px-10
        pb-2 pt-6 text-2xl text-black drop-shadow-xl filter md:px-16"
      >
        <BaseContainer width={pageContentWidth}>
          Welcome to KompassAI, {authContext?.userInfo?.userName}!
        </BaseContainer>
      </div>

      <div className="w-full bg-white">
        <BaseContainer width={pageContentWidth}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="mb-4 h-full border-r border-stone-250 bg-white pt-4 sm:col-span-4 sm:mb-1 lg:col-span-1">
              <div className="flex flex-col items-start justify-start">
                <SummaryComponent />
                <hr className="h-px w-full border-0 bg-stone-250" />
                <UsageAnalyticComponent />
              </div>
            </div>

            <div className="mb-4 bg-white pt-4 sm:col-span-4 sm:mb-1 lg:col-span-2">
              <div className="flex flex-col items-start justify-start gap-y-4">
                {/* <CompanySearchComponent /> */}
                <ContactCreatedComponent />
                <ContactDeductedComponent />
              </div>
            </div>

            <div className="mb-4 bg-white pr-6 pt-4 sm:col-span-4 sm:mb-1 lg:col-span-1">
              <div className="flex flex-col items-start justify-start gap-y-4 md:gap-4">
                <ProspectSearchComponent />
                <SuggestedComponent />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </MainLayout>
  );
}
