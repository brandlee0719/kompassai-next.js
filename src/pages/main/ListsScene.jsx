import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";

import FilterDropdown from "@/components/common/FilterDropdown";
import FilterAutocomplete from "@/components/common/FilterAutocomplete";
import SearchInput from "@/components/common/SearchInput";
import MainList from "@/components/lists/MainList";
import SubProfileList from "@/components/lists/SubProfileList";

import TeamIcon from "@/assets/image/team/team.svg";
import GoogleIcon from "@/assets/image/search/chrome.svg";
import InviteMemberIcon from "@/assets/image/team/invite.svg";
import SearchIcon from "@/assets/image/team/search.svg";

import { ReactComponent as ContactIcon } from "@/assets/image/lists/contact.svg";
import { ReactComponent as NewContactIcon } from "@/assets/image/lists/newcontact.svg";
import { ReactComponent as NewListIcon } from "@/assets/image/lists/newlist.svg";
import { ReactComponent as BackSVG } from "@/assets/image/integrations/back.svg";

import { kompassColors } from "@/theme/palette";

export default function ListsScene() {
  const [filterRole, setFilterRole] = useState("All Roles");
  const [currentContact, setCurrentContact] = useState(null);

  const onContactSelected = (contact) => {
    setCurrentContact(contact);
  }

  return (
    <MainLayout>

      {
        currentContact == null ? (
          <>
            <div className="w-full flex flex-row justify-between leading-loose gap-2 bg-white filter drop-shadow-lg p-6">
              <p className="text-2xl text-black font-OutfitBold leading-loose">Lists</p>
            </div>

            <MainList onContactSelected={onContactSelected} />
          </>
        ) : (
          <>
            <div className="w-full flex flex-col text-xl md:text-2xl text-black justify-start font-bold font-Outfit leading-loose gap-2 mb-2 sm:mb-4 px-6 pt-6">
              <Button
                className="flex flex-row items-center text-blue-500 bg-transparent gap-2 p-0"
                onClick={() => {
                  setCurrentContact(null);
                }}
              >
                <BackSVG stroke={`${kompassColors.blue}`} />
                <p>Back</p>
              </Button>
            </div>

            <SubProfileList contact={currentContact} />
          </>
        )
      }
    </MainLayout>
  );
}
