import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";

import PricingScene from "@/pages/landing/PricingScene";
import LandingScene from "@/pages/landing/LandingScene";
import FAQScene from "@/pages/landing/FAQScreen";
import AboutMeScene from "@/pages/landing/AboutMeScene";
import ArticleScene from "@/pages/landing/ArticleScene";
import BlogScene from "@/pages/landing/BlogScene";
import ProspectingScene from "@/pages/landing/ProspectingScene";
import EmailVerificationScene from "@/pages/landing/EmailVerificationScene";
import AdvancedSearchScene from "@/pages/landing/AdvancedSearchScene";
import CSVExportScene from "@/pages/landing/CSVExportScene";
import IntergrationScene from "@/pages/landing/Intergration";

import SignIn from "@/pages/SignIn";
import ResetPassword from "@/pages/ResetPassword";
import SignUp from "@/pages/SignUp";
import EmailVerify from "@/pages/EmailVerify";

import HomeScene from "@/pages/main/HomeScene";
import SettingsScene from "@/pages/main/SettingsScene";
import TeamScene from "@/pages/main/TeamScene";
import InvitationsScene from "@/pages/main/InvitationsScene";
import IntegrationScene from "@/pages/main/IntegrationScene";
import PremiumPlanScene from "@/pages/main/PremiumPlanScene";
import AnalyticsScene from "@/pages/main/AnalyticsScene";
import LiveSearchScene from "@/pages/main/LiveSearchScene";
import KompassSearchScene from "@/pages/main/KompassSearchScene";
import ListsScene from "@/pages/main/ListsScene";
import BulkEnrichScene from "@/pages/main/BulkEnrichScene";
import Splash from "./../pages/landing/Splash";

import EmailValidationScene from "@/pages/main/EmailValidationScene";
import BillingPayScene from "@/pages/main/BillingPayScene";
import UpgradeScene from "@/pages/main/UpgradeScene";
import CreditsScene from "@/pages/main/CreditsScene";

export default function Router() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 3250); // Wait for 5 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  return (
    <div>
      {!showMain && (
        <div id="splash">
          <Splash />
        </div>
      )}
      {showMain && (
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LandingScene />}></Route>
              <Route path="/pricing" element={<PricingScene />}></Route>
              <Route path="/upgrade" element={<UpgradeScene />}></Route>
              <Route path="/credits" element={<CreditsScene />}></Route>
              <Route path="/billingpay" element={<BillingPayScene />}></Route>
              <Route path="/faq" element={<FAQScene />}></Route>
              <Route path="/aboutme" element={<AboutMeScene />}></Route>
              <Route path="/blog" element={<BlogScene />}></Route>
              <Route path="/article" element={<ArticleScene />}></Route>
              <Route path="/prospecting" element={<ProspectingScene />}></Route>
              <Route
                path="/emailverification"
                element={<EmailVerificationScene />}
              ></Route>
              <Route
                path="/advancedsearch"
                element={<AdvancedSearchScene />}
              ></Route>
              <Route path="/csvexport" element={<CSVExportScene />}></Route>
              <Route path="/intergration" element={<IntergrationScene />}></Route>

              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/reset" element={<ResetPassword />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/verification" element={<EmailVerify />}></Route>

              <Route path="/home" element={<HomeScene />}></Route>
              <Route
                path="/premium-plan"
                element={<PremiumPlanScene />}
              ></Route>
              <Route path="/invitations" element={<InvitationsScene />}></Route>
              <Route path="/settings" element={<SettingsScene />}></Route>
              <Route path="/team" element={<TeamScene />}></Route>
              <Route path="/integrate" element={<IntegrationScene />}></Route>
              <Route path="/livesearch" element={<LiveSearchScene />}></Route>
              <Route path="/list" element={<ListsScene />}></Route>
              <Route path="/analytics" element={<AnalyticsScene />}></Route>
              <Route path="/search" element={<KompassSearchScene />}></Route>
              <Route path="/bulkenrich" element={<BulkEnrichScene />}></Route>
              <Route
                path="/email-validation"
                element={<EmailValidationScene />}
              ></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      )}
    </div>
  );
}
