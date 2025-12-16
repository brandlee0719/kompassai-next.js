import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "@/assets/image/settings/profile.svg";
import { ReactComponent as AccountIcon } from "@/assets/image/settings/account.svg";
import { ReactComponent as BilingIcon } from "@/assets/image/settings/biling.svg";
import { ReactComponent as OtherSettingsIcon } from "@/assets/image/settings/othersettings.svg";

export default function SettingsNavBar({
  currentTabIndex,
  setCurrentTabIndex,
}) {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-6 gap-1 border-r border-stone-250">
      <div
        className={`w-full flex flex-row items-center rounded-md hover:bg-stone-150 ${
          currentTabIndex == 0 ? "bg-stone-150" : "bg-none"
        } text-center cursor-pointer gap-2 p-3`}
        onClick={() => {
          setCurrentTabIndex(0);
        }}
      >
        <ProfileIcon className="h-4 w-4"/>
        <p className="text-md font-Outfit">Profile</p>
      </div>
      <div
        className={`w-full flex flex-row items-center rounded-md hover:bg-stone-150 ${
          currentTabIndex == 1 ? "bg-stone-150" : "bg-none"
        } text-center cursor-pointer gap-2 p-3`}
        onClick={() => {
          setCurrentTabIndex(1);
        }}
      >
        <AccountIcon className="h-4 w-4"/>
        <p className="text-md font-Outfit">Account</p>
      </div>
      <div
        className={`w-full flex flex-row items-center rounded-md hover:bg-stone-150 ${
          currentTabIndex == 2 ? "bg-stone-150" : "bg-none"
        } text-center cursor-pointer gap-2 p-3`}
        onClick={() => {
          setCurrentTabIndex(2);
        }}
      >
        <BilingIcon className="h-4 w-4"/>
        <p className="text-md font-Outfit">Biling</p>
      </div>
      <div
        className={`w-full flex flex-row items-center rounded-md hover:bg-stone-150 ${
          currentTabIndex == 3 ? "bg-stone-150" : "bg-none"
        } text-center cursor-pointer gap-2 p-3`}
        onClick={() => {
          setCurrentTabIndex(3);
        }}
      >
        <OtherSettingsIcon className="h-4 w-4"/>
        <p className="text-md font-Outfit">Other settings</p>
      </div>
    </div>
  );
}
