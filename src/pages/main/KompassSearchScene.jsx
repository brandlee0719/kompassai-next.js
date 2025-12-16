import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";

import useKompassSearch from "@/hooks/useKompassSearch";
import useLocalStorage from '@/hooks/useLocalStorage';

import { STORAGE_KEY } from '@/utils/constants'
import { getUUID } from "@/utils/common";

import MainLayout from "@/components/MainLayout";
import KompassSearchContactTable from "@/components/search/SearchContactTable";
import {
  CompanyTable as KompassSearchCompanyTable,
  CompanyFavoriteTable as KompassSearchFavoriteTable
} from "@/components/search/SearchCompanyTable";

import {
  ContactFilterComponent,
  CompanyFilterComponent,
} from "@/components/search/SearchFilterComponent";

import { ReactComponent as GoogleIcon } from "@/assets/image/search/chrome.svg";
import SearchIcon from "@/assets/image/team/search.svg";
import UserIcon from "@/assets/image/search/user.svg";
import HomeIcon from "@/assets/image/search/home.svg";
import BookmarkIcon from "@/assets/image/search/bookmark_fill.svg";

export default function KompassSearchScene() {

  const [currentTab, setCurrentTab] = useState(0);

  // const [contactFilter, setContactFilter] = useState(null);
  // const [companyFilter, setCompanyFilter] = useState(null);

  const [loading, setLoading] = useState(false);

  const [contactFilter, setContactFilter, updateContactFilter, removeContactFilter] = useLocalStorage(STORAGE_KEY.KOMPASS_SEARCH_CONTACT_FILTER, null);
  const [companyFilter, setCompanyFilter, updateCompanyFilter, removeCompanyFilter] = useLocalStorage(STORAGE_KEY.KOMPASS_SEARCH_COMPANY_FILTER, null);

  // useEffect(() => {

  // }, [contactFilter, companyFilter]);

  return (
    <MainLayout loading={loading}>
      <div className="w-full flex flex-row justify-between leading-loose gap-2 p-6 bg-white filter drop-shadow-lg">
        <p className="text-2xl text-black font-OutfitBold leading-loose">Search Kompass</p>

        {/* Search input */}
        <div className="flex flex-row gap-2">
          {/* <div className="w-[400px] flex flex-row px-4 py-2 rounded-full items-center bg-white border border-stone-250">
            <ReactSVG src={SearchIcon} />
            <input
              type="text"
              className="w-full rounded-xl outline-none pl-1 font-Outfit font-normal text-sm placeholder-stone-350"
              placeholder="Search for contact or company"
            />
          </div> */}
          <Button className="self-stretch flex items-center justify-center bg-stone-950 text-white text-sm font-OutfitBold rounded-full px-4 py-2 gap-2">
            <div className="">install kompassai extension</div>
            <GoogleIcon className="ml-1 w-5 h-5 fill-current text-white" />
          </Button>
        </div>
      </div>


      {/*  */}
      <div className={"grid grid-cols-12 w-full h-full" + ((currentTab == 0 || currentTab == 1) ? "" : " hidden")}>
        <div className="col-span-3 bg-white border-r border-stone-250">
          <div className="w-full self-start flex flex-row border-b border-stone-250 mt-4 gap-0 2xl:gap-2 px-1">
            {Array.from([
              { label: "Contacts", icon: UserIcon },
              { label: "Companies", icon: HomeIcon },
              { label: "Favorites", icon: BookmarkIcon },
            ]).map((value, index) => {
              return currentTab == index ? (
                <div
                  className="w-1/3 flex flex-row justify-center items-center gap-1 border-b-2 border-blue-500 font-OutfitMedium text-stone-950 text-sm text-center cursor-pointer px-1 py-2"
                  onClick={() => {
                    setCurrentTab(index);
                  }}
                >
                  <ReactSVG
                    src={value.icon}
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", "width: 16px");
                      svg.setAttribute("fill", "#000");
                    }}
                  />
                  {value.label}
                </div>
              ) : (
                <div
                  className="w-1/3 flex flex-row justify-center items-center gap-1 border-b-2 border-none font-OutfitMedium text-stone-950 text-sm text-center cursor-pointer px-1 py-2"
                  onClick={() => {
                    setCurrentTab(index);
                  }}
                >
                  <ReactSVG
                    src={value.icon}
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", "width: 16px");
                      svg.setAttribute("fill", "#000");
                    }}
                  />
                  {value.label}
                </div>
              );
            })}
          </div>
          {/* {currentTab == 0 ? ( */}
          <ContactFilterComponent contactFilter={contactFilter} onSearchByFilter={(filter) => { setContactFilter(filter) }} visible={currentTab == 0} />
          <CompanyFilterComponent companyFilter={companyFilter} onSearchByFilter={(filter) => { setCompanyFilter(filter) }} visible={currentTab == 1} />
        </div>
        <div className="col-span-9">
          <KompassSearchContactTable filter={contactFilter} showSpinner={setLoading} visible={currentTab == 0} />
          <KompassSearchCompanyTable filter={companyFilter} showSpinner={setLoading} visible={currentTab == 1} searchCompanyContacts={(params) => { setContactFilter(params); setCurrentTab(0); }} />
        </div>
      </div>


      {/* Favorite Tab */}
      <div className={"w-full h-full flex flex-col" + (currentTab == 2 ? "" : " hidden")}>
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-3 bg-white">
            <div className="w-full self-start flex flex-row border-b border-stone-250 mt-4 gap-0 2xl:gap-2 px-1">
              {Array.from([
                { label: "Contacts", icon: UserIcon },
                { label: "Companies", icon: HomeIcon },
                { label: "Favorites", icon: BookmarkIcon },
              ]).map((value, index) => {
                return currentTab == index ? (
                  <div
                    className="w-1/3 flex flex-row justify-center items-center gap-1 border-b-2 border-blue-500 font-OutfitMedium text-stone-950 text-sm text-center cursor-pointer px-1 py-2"
                    onClick={() => {
                      setCurrentTab(index);
                    }}
                  >
                    <ReactSVG
                      src={value.icon}
                      beforeInjection={(svg) => {
                        svg.setAttribute("style", "width: 16px");
                        svg.setAttribute("fill", "#000");
                      }}
                    />
                    {value.label}
                  </div>
                ) : (
                  <div
                    className="w-1/3 flex flex-row justify-center items-center gap-1 border-b-2 border-none font-OutfitMedium text-stone-950 text-sm text-center cursor-pointer px-1 py-2"
                    onClick={() => {
                      setCurrentTab(index);
                    }}
                  >
                    <ReactSVG
                      src={value.icon}
                      beforeInjection={(svg) => {
                        svg.setAttribute("style", "width: 16px");
                        svg.setAttribute("fill", "#000");
                      }}
                    />
                    {value.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <KompassSearchFavoriteTable filter={companyFilter} showSpinner={setLoading} visible={currentTab == 2} searchCompanyContacts={(params) => { setContactFilter(params); setCurrentTab(0); }} />
      </div>
    </MainLayout>
  );
}
