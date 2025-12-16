import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Button, Select, Option } from "@material-tailwind/react";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";

import SwitchButton from "@/components/team/SwitchButton";

import TeamIcon from "@/assets/image/team/team.svg";
import SearchIcon from "@/assets/image/team/search.svg";
import InviteMemberIcon from "@/assets/image/team/invite.svg";
import SelectDropdown from "@/components/common/SelectDropdown";
import EnhancedTable from "@/components/team/TeamTable";
import TeamManagementTabComponent from "@/components/settings/TeamManagementTabComponent";
import AddTeamSeatDialog from "@/components/AddTeamSeatDialog";
import InviteMemberDialog from "@/components/InviteMemberDialog";
import CreateGroupDialog from "@/components/CreateGroupDialog";
import useTeam from "@/hooks/useTeam";


export default function TeamScene() {
  const [filterRole, setFilterRole] = useState("All Roles");
  const [visibleTeamSeatDialog, setVisibleTeamSeatDialog] = useState(false);
  const [visibleInviteMemberDialog, setVisibleInviteMemberDialog] =
    useState(false);
  const [visibleCreateGroupDialog, setVisibleCreateGroupDialog] =
    useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState({
    "sort": -1,
    "sortBy": "email"
  });
  const [data, setData] = useState([]);
  const { inviteMembers, getTeamMembers, deleteMember, updateTeamMember } = useTeam();
  const navigate = useNavigate();

  // useEffect with async call.

  const fetchData = useCallback(async (
    searchValue = "",
    filterRole = "",
    sort = {
      "sort": -1,
      "sortBy": "email"
    }
  ) => {
    const response = await getTeamMembers({
      searchValue,
      filterRole,
      sort
    });
    setData(response.data);
  },[]);

  useEffect(() => {
    fetchData(
      searchValue,
      filterRole,
      sort
    );
  }, [sort, searchValue, filterRole, fetchData]);


  return (
    <MainLayout>
      <div className="w-full flex flex-row items-center text-center text-xl md:text-2xl text-black font-bold font-Outfit leading-loose gap-2 mb-4 sm:mb-4">
        <ReactSVG src={TeamIcon} />
        <p>Team management</p>
      </div>

      {/* TopBar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex bg-white text-[#5E5E5E] font-Outfit rounded-full text-sm p-3">
            Users & admins:<span className="text-black text-md ml-1">4/4</span>
          </div>
          <div className="flex bg-white text-[#5E5E5E] font-Outfit rounded-full text-sm p-3">
            Credits usage:<span className="text-black text-md ml-1">2/5</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Button
            onClick={() => {
              navigate("/billingpay");
              setVisibleTeamSeatDialog(true);
            }}
            className="flex items-center justify-center  border-[1px] bg-none text-sm text-white hover:text-white hover:bg-black font-Outfit font-semibold  p-[12px_24px]"
          >
            Add seats
          </Button>
          <Button
            onClick={() => {
              setVisibleInviteMemberDialog(true);
            }}
            className="flex items-center justify-center border-black bg-white border-[1px] bg-none text-sm text-black hover:bg-[#000] font-Outfit font-semibold  gap-2 p-[12px_24px] hover:text-white"
          >
            {/* <ReactSVG src={InviteMemberIcon} /> */}
            Invite members
          </Button>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col justify-start items-center bg-white rounded-2xl p-5 gap-2 mt-5">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
            <div>
              <SwitchButton />
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-end gap-2">
              {/* Search input */}
              <div className="w-45 flex flex-row p-[8px_12px] rounded-[40px] items-center bg-white border-[1px] border-[#E8E7E7]">
                <ReactSVG src={SearchIcon} />
                <input
                  type="text"
                  className="w-full rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-sm"
                  placeholder="Search for member..."
                  value={searchValue}
                  onChange={(e) => {
                    fetchData(
                      e.target.value,
                      filterRole
                    );
                    setSearchValue(e.target.value);
                  }}
                />
              </div>

              {/* Filter Role */}
              <div className="w-45">
                <SelectDropdown
                  options={["All Roles", "Manager", "Admin", "User"]}
                  selectedOption={filterRole}
                  onChange={(value) => {
                    fetchData(
                      searchValue,
                      value
                    );
                    setFilterRole(value);
                  }}
                  defaultValue="Manager"
                  sx={{
                    borderRadius: "25px",
                    width: "120px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <EnhancedTable 
              filterRole={filterRole}
              searchValue={searchValue}
              data={data}
              setData={setData}
              sort={sort}
              setSort={setSort}
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <TeamManagementTabComponent />
        </div>
      </div>

      <AddTeamSeatDialog
        open={visibleTeamSeatDialog}
        handleClose={() => {
          setVisibleTeamSeatDialog(false);
        }}
        handleAddSeat={() => {
          navigate("/billingpay");
        }}
      />
      <InviteMemberDialog
        open={visibleInviteMemberDialog}
        handleClose={() => {
          setVisibleInviteMemberDialog(false);
        }}
        handleInviteMember={() => {
          setVisibleInviteMemberDialog(false);
        }}
      />
      <CreateGroupDialog
        open={visibleCreateGroupDialog}
        handleClose={() => {
          setVisibleCreateGroupDialog(false);
        }}
        handleContactSales={() => {
          setVisibleCreateGroupDialog(false);
        }}
      />
    </MainLayout>
  );
}

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ReactSVG } from "react-svg";
// import { Button, Select, Option } from "@material-tailwind/react";

// import BaseContainer from "@/components/BaseContainer";
// import MainLayout from "@/components/MainLayout";

// import SwitchButton from '@/components/team/SwitchButton';

// import TeamIcon from "@/assets/image/team/team.svg";
// import SearchIcon from "@/assets/image/team/search.svg";
// import InviteMemberIcon from "@/assets/image/team/invite.svg";

// export default function TeamScene() {
//   return (
//     <MainLayout>
//       <div className="w-full flex flex-row items-center text-center text-xl md:text-2xl text-black font-bold font-Outfit leading-loose gap-2 mb-4 sm:mb-4">
//         <ReactSVG src={TeamIcon} />
//         <p>Team management</p>
//       </div>

//       {/* TopBar */}
//       <div className="w-full flex flex-row justify-between items-center gap-2">
//         <div className="flex flex-row gap-2">
//           <div className="flex bg-white text-[#5E5E5E] font-Outfit rounded-full text-sm p-3">
//             Users & admins:<span className="text-black text-md ml-1">4/4</span>
//           </div>
//           <div className="flex bg-white text-[#5E5E5E] font-Outfit rounded-full text-sm p-3">
//             Credits usage:<span className="text-black text-md ml-1">2/5</span>
//           </div>
//         </div>
//         <div className="flex flex-row gap-2">
//           <Button className="flex items-center justify-center border-[#E7436A] border-[1px] bg-none text-sm text-magenta-500 hover:text-white hover:bg-magenta-500 font-Outfit font-semibold rounded-full p-[12px_24px]">
//             create group
//           </Button>
//           <Button className="flex items-center justify-center border-[#E7436A] border-[1px] bg-none text-sm text-magenta-500 hover:text-white hover:bg-magenta-500 font-Outfit font-semibold rounded-full p-[12px_24px]">
//             Add seats
//           </Button>
//           <Button className="flex items-center justify-center border-none bg-magenta-500 border-[1px] bg-none text-sm text-white hover:bg-[#F7436A] font-Outfit font-semibold rounded-full gap-2 p-[12px_24px]">
//             <ReactSVG src={InviteMemberIcon} />
//             invite members
//           </Button>
//         </div>
//       </div>
//       <div>

//         <div className="w-full flex flex-col justify-start items-center bg-white rounded-2xl p-5 gap-2 mt-5">
//           <div className="w-full flex flex-row justify-start items-center gap-2">
//             <SwitchButton />

//             {/* Search input */}
//             <div className='flex flex-row p-[8px_12px] rounded-[40px] items-center bg-white border-[1px] border-[#E8E7E7]'>
//               <ReactSVG src={SearchIcon} />
//               <input type="text" className='w-full rounded-xl outline-none pl-[16px] font-Outfit font-[300px] text-sm' placeholder='Search for member...' />
//             </div>

//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }
