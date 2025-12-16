import MainLayout from "@/components/MainLayout";

import { ReactComponent as SettingIcon } from "@/assets/image/profile-popup/setting.svg";
import { ReactComponent as CreditSVGIcon } from "@/assets/image/home/icon-credit.svg";
import { ReactComponent as ContactSVGIcon } from "@/assets/image/home/icon-saved-contacts.svg";
import { ReactComponent as CollectedSVGIcon } from "@/assets/image/home/icon-collected-detail.svg";
import { ReactComponent as AccountSVGIcon } from "@/assets/image/icons/icon-account-circle.svg";
import { ReactComponent as DownSVGIcon } from "@/assets/image/icons/down.svg";

// import ContactCreatedComponent from "@/components/analytics/ContactCreatedComponent";
// import CreditDeductedComponent from "@/components/analytics/CreditDeductedComponent";
import ContactCreatedComponent from "@/components/home/ContactCreatedComponent";
import CreditDeductedComponent from "@/components/home/CreditDeductedComponent";
import DataRevealedComponent from "@/components/analytics/DataRevealedComponent";

import SummaryComponent from "@/components/home/SummaryComponent";
import UsageAnalyticComponent from "@/components/home/UsageAnalyticComponent";

import ProfilePopup from "@/components/popup/ProfilePopup";
import { useState } from "react";
import SelectDropdown from "@/components/common/SelectDropdown";
import AnalyticCalendarPopup from "@/components/popup/AnalyticCalendarPopup";

export default function AnalyticsScene() {
  const [calendarPopupAnchorEl, setCalendarPopupAnchorEl] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Anna Aloshyna (Me)");

  const profilePopupClosed = () => {
    setCalendarPopupAnchorEl(null);
  };

  const userOptions = [
    "Anna Aloshyna (Me)",
    "Column Adreas",
    "Jormungand Stump",
  ];

  return (
    <MainLayout>
      <div className="w-full flex flex-row justify-between leading-loose gap-2 p-6 bg-white filter drop-shadow-lg">
        <div className="flex flex-row items-center">
          <SettingIcon className="w-6 h-6 mr-2" />
          <p className="text-2xl text-black font-OutfitBold leading-loose">Analytics</p>
        </div>

        <div className="justify-start items-center gap-4 flex">
          <button
            onClick={(event) => {
              setCalendarPopupAnchorEl(event.currentTarget);
            }}
            className="justify-start items-center gap-2 flex"
          >
            <div className="text-black text-base font-normal font-Outfit leading-tight">
              Last month
            </div>
            <DownSVGIcon className="w-4 h-4 relative" />
          </button>
          <div className="w-64">
            <SelectDropdown
              options={userOptions}
              selectedOption={selectedUser}
              onChange={(value) => setSelectedUser(value)}
              renderValue={(value) => {
                return (
                  <div className="flex flex-row items-center gap-2">
                    <AccountSVGIcon className="w-6 h-6 relative" />
                    <div className="text-stone-950 text-base font-light font-Outfit leading-snug">
                      {value}
                    </div>

                    {/* <DownSVGIcon className="w-4 h-4 relative" /> */}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 ">
        
        <div className="mb-4 sm:mb-1 lg:col-span-1 sm:col-span-4 h-full pt-4 bg-white border-r border-stone-250">
          <div className="flex flex-col justify-start items-start">
            <UsageAnalyticComponent />
          </div>
        </div>

        {/*<div className="col-span-1 bg-blue-500">
          <div className="self-stretch w-full flex flex-col justify-start items-center pt-6 pl-6 gap-2">
            <div className="self-stretch px-6 py-4 bg-zinc-100 rounded-lg justify-start items-center gap-6 inline-flex">
              <CreditSVGIcon className="w-8 h-8 relative" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-right text-black text-xl font-normal font-Outfit leading-relaxed">
                  1 / 5
                </div>
                <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
                  Credits used
                </div>
              </div>
            </div>
            <div className="self-stretch px-6 py-4 bg-zinc-100 rounded-lg justify-start items-center gap-6 inline-flex">
              <ContactSVGIcon className="w-8 h-8 relative" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-right text-black text-xl font-normal font-Outfit leading-relaxed">
                  24
                </div>
                <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
                  Saved contacts
                </div>
              </div>
            </div>
            <div className="self-stretch px-6 py-4 bg-zinc-100 rounded-lg justify-start items-center gap-6 inline-flex">
              <CollectedSVGIcon className="w-8 h-8 p-1 justify-center items-center inline-flex" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-right text-black text-xl font-normal font-Outfit leading-relaxed">
                  37
                </div>
                <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
                  Collected details
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="flex flex-col col-span-3 gap-y-4 p-6">
          <DataRevealedComponent />
          <ContactCreatedComponent />
          <CreditDeductedComponent />
        </div>
      </div>

      <AnalyticCalendarPopup
        anchorEl={calendarPopupAnchorEl}
        handleClose={profilePopupClosed}
      />
    </MainLayout>
  );
}
