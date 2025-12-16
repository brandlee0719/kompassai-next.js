import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";

import useKompassSearch from "@/hooks/useKompassSearch";

import MainLayout from "@/components/MainLayout";
import LiveContactTable from "@/components/livesearch/LiveContactTable";
import LiveCompanyTable from "@/components/livesearch/LiveCompanyTable";
import { ContactFilterComponent, CompanyFilterComponent } from "@/components/livesearch/FilterComponent";

import { ReactComponent as GoogleIcon } from "@/assets/image/search/chrome.svg";
import SearchIcon from "@/assets/image/team/search.svg";
import UserIcon from "@/assets/image/search/user.svg";
import HomeIcon from "@/assets/image/search/home.svg";
import BookmarkIcon from "@/assets/image/search/bookmark_fill.svg";

export default function LiveSearchScene() {
  const {postLivesearchContactByFilters} = useKompassSearch();

  const [filterRole, setFilterRole] = useState("All Roles");
  const [currentTab, setCurrentTab] = useState(0);
  const [contactsData, setContactsData] = useState([]);

  return (
    <MainLayout>
      <div className="w-full flex flex-row justify-between gap-2 mb-4 sm:mb-4">
        <p className="text-xl md:text-4xl text-black font-bold font-Outfit leading-loose">Live Search</p>

        {/* Search input */}
        <div className="flex flex-row gap-2">
          <div className="w-[400px] flex flex-row px-4 py-2 rounded-[40px] items-center bg-white border-[1px] border-[#E8E7E7]">
            <ReactSVG src={SearchIcon} />
            <input
              type="text"
              className="w-full rounded-xl outline-none pl-1 font-Outfit font-normal text-sm"
              placeholder="Search for contact or company"
            />
          </div>
          <Button className="self-stretch flex items-center justify-center bg-transparent border-[1px] border-[#0A2E31] text-emerald-500 text-sm font-Outfit font-bold rounded-full px-4 py-2">
            install kompassai extension
            <GoogleIcon className="ml-1 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* TopBar */}
      {/* <div className="w-full flex flex-col justify-start items-center bg-white rounded-2xl p-5 gap-2 mt-5">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <SwitchButton currentIndex={currentTab} setCurrentIndex={setCurrentTab} />
          </div>

        </div>
      </div> */}
      <div className="w-full h-full flex flex-row gap-4">
        <div className=" bg-white rounded-2xl">
          <div className="w-full self-start flex flex-row border-b border-b-[#DAD6D6] mt-2 gap-0 2xl:gap-2 px-1">
            {Array.from([
              { label: "Contacts", icon: UserIcon },
              { label: "Companies", icon: HomeIcon },
              { label: "Favourites", icon: BookmarkIcon },
            ]).map((value, index) => {
              return currentTab == index ? (
                <div
                  className="w-1/3 flex flex-row justify-center items-center gap-1 border-b-2 border-b-[#0A2E31] font-Outfit text-emerald-500 text-xs text-center cursor-pointer px-1 py-1"
                  onClick={() => {
                    setCurrentTab(index);
                  }}
                >
                  <ReactSVG
                    src={value.icon}
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", "width: 12px");
                      svg.setAttribute("fill", "#0A2E31");
                    }}
                  />
                  {value.label}
                </div>
              ) : (
                <div
                  className="w-1/3 flex flex-row justify-center items-center gap-1 border-b-2 border-none font-Outfit text-black text-xs text-center cursor-pointer px-1 py-1"
                  onClick={() => {
                    setCurrentTab(index);
                  }}
                >
                  <ReactSVG
                    src={value.icon}
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", "width: 12px");
                      svg.setAttribute("fill", "#0A2E31");
                    }}
                  />
                  {value.label}
                </div>
              );
            })}
          </div>
          {currentTab == 0 ? (
            <ContactFilterComponent onSearchByFilter={() => {}} />
          ) : currentTab == 1 ? (
            <CompanyFilterComponent />
          ) : currentTab == 2 ? null : null}
        </div>
        <div className="w-full">
          {currentTab == 0 ? (
            <LiveContactTable tableData={contactsData}/>
          ) : currentTab == 1 ? (
            <LiveCompanyTable />
          ) : currentTab == 2 ? (
            <>
            </>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
}
