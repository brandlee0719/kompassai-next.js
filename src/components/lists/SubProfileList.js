import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";

import useList from "@/hooks/useList";

import FilterDropdown from "@/components/common/FilterDropdown";
import SearchInput from "@/components/common/SearchInput";
import CreateNewListDialog from "@/components/lists/CreateNewListDialog";
import SubProfileListTable from "@/components/lists/SubProfileListTable";

import ContactListTable from "./ContactListTable";
import LightSpinner from "../common/LightSpinner";

import { ReactComponent as NewListIcon } from "@/assets/image/lists/newlist.svg";
import DownloadIcon from "@/assets/image/lists/download.svg";

export default function SubProfileList({ contact }) {
  const { getProfilesByContactId } = useList();

  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const reload = async () => {
    setLoading(true);

    const response = await getProfilesByContactId({ contactId: contact._id });
    if (response.status) {
      const newTableData = [...response.data];
      setTableData(newTableData);
      console.log("=================");
      console.log(response.data);
    } else {
      toast.error(response.message, { theme: "colored" });
    }

    setLoading(false);
  };

  let loaded = false;
  useEffect(() => {
    if (loaded) return;
    reload();
    loaded = true;
  }, []);

  return (
    <>
      {loading ? <LightSpinner /> : null}
      {/* TopBar */}
      <div className="w-full flex flex-row justify-between items-center gap-2 px-3">
        <div className="text-4xl text-black font-bold font-Outfit leading-loose ml-6">
          {contact?.listTitle}
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-2">
          <div className="w-full flex flex-row items-center">
            <SearchInput
              placeholder="Search for lists..."
              onInputChanged={(value) => {
                setSearchFilter(value);
              }}
            />
          </div>
        </div>
      </div>

      <SubProfileListTable
        searchFilter={searchFilter}
        tableData={tableData.filter((item) => {
          return JSON.stringify(item).indexOf(searchFilter) >= 0;
        })}
        listId={contact._id}
        listTitle={contact.listTitle}
        setLoading={setLoading}
        reload={reload}
      />
    </>
  );
}
