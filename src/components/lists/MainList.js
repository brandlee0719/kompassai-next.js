import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";
import { toast } from "react-toastify";

import useList from "@/hooks/useList";

import FilterDropdown from "@/components/common/FilterDropdown";
import SearchInput from "@/components/common/SearchInput";
import CreateNewListDialog from "@/components/lists/CreateNewListDialog";

import { ReactComponent as NewListIcon } from "@/assets/image/lists/newlist.svg";
import ContactListTable from "./ContactListTable";
import LightSpinner from "../common/LightSpinner";

export default function MainList({ onContactSelected }) {
  const { getContactList } = useList();

  const [loading, setLoading] = useState(false);
  const [isVisibleNewList, handleVisibleNewList] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const reload = async () => {
    setLoading(true);

    const response = await getContactList();
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
      <div className="w-full flex flex-row justify-between items-center gap-2 p-6">
        <div className="w-[70%] flex flex-row md:flex-row items-center gap-3">
          <div className="w-full flex flex-row items-center gap-3">
            {/* Search input */}
            <SearchInput
              placeholder="Search for lists..."
              onInputChanged={(searchFilter) => {
                setSearchFilter(searchFilter);
              }}
            />
            {/* <div className="min-w-[200px]">
              <FilterDropdown
                options={[{ label: "All Users" }]}
                onChange={(value) => {
                }}
              />
            </div>
            <div className="min-w-[200px]">
              <FilterDropdown
                options={[{ label: "All Users" }]}
                onChange={(value) => {
                }}
              />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-3">
          <Button
            onClick={() => {
              handleVisibleNewList(true);
            }}
            className="flex flex-row items-center justify-center border border-stone-950 bg-white font-OutfitBold text-stone-950 font-bold text-sm rounded-md gap-2 py-2 px-4"
          >
            Create new list
            <NewListIcon className="w-4 h-4 fill-current text-stone-950" />
          </Button>
          <Button className="flex flex-row items-center justify-center border border-stone-950 bg-white font-OutfitBold text-stone-950 font-bold text-sm rounded-md py-2 px-5">
            Upload CSV
          </Button>
        </div>
      </div>

      <ContactListTable
        setLoading={setLoading}
        tableData={tableData.filter((item) => {
          return item?.listTitle?.indexOf(searchFilter) >= 0;
        })}
        onContactSelected={onContactSelected}
        reload={reload}
      />

      <CreateNewListDialog
        open={isVisibleNewList}
        close={(bUpdate = false) => {
          handleVisibleNewList(false);
          if (bUpdate === true) reload();
        }}
      />
    </>
  );
}
