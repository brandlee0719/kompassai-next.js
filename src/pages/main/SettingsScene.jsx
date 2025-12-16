import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";
import SettingsNavBar from "@/components/settings/SettingsNavBar";
import ProfileTabComponent from "@/components/settings/ProfileTabComponent";

import { ReactComponent as SettingIcon } from "@/assets/image/profile-popup/setting.svg";
import AccountTabComponent from "@/components/settings/AccountTabComponent";
import BillingTabComponent from "@/components/settings/BillingTabComponent";
import OtherSettingTabComponent from "@/components/settings/OtherSettingComponent";

export default function SettingsScene() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <MainLayout>
      <div className="w-full flex flex-row gap-4 p-6 bg-white filter drop-shadow-lg">
        <SettingIcon className="w-6 h-6 mt-1" />
        <p className="text-2xl text-stone-950 font-OutfitBold">Account & setting</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        <div className="col-span-1">
          <SettingsNavBar
            currentTabIndex={currentTabIndex}
            setCurrentTabIndex={setCurrentTabIndex}
          />
        </div>
        <div className="col-span-3">
          {currentTabIndex == 0 ? (
            <ProfileTabComponent />
          ) : currentTabIndex == 1 ? (
            <AccountTabComponent />
          ) : currentTabIndex == 2 ? (
            <BillingTabComponent />
          ) : currentTabIndex == 3 ? (
            <OtherSettingTabComponent />
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
}
