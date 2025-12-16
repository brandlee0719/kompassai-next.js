import { useState, useEffect, useContext } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Menu from "@mui/material/Menu";

import { AuthContext } from "@/context/AuthContext";

import { profilePopupNavList } from "@/utils/common";
import { getShortName } from "@/utils/common";

import { ReactComponent as SettingIcon } from "@/assets/image/profile-popup/setting.svg";
import { ReactComponent as TeamIcon } from "@/assets/image/profile-popup/team_management.svg";
import { ReactComponent as InviteIcon } from "@/assets/image/profile-popup/invite.svg";
import { ReactComponent as IntegrationIcon } from "@/assets/image/profile-popup/integration.svg";
import { ReactComponent as AnalysticsIcon } from "@/assets/image/profile-popup/analytics.svg";
import { ReactComponent as HelpIcon } from "@/assets/image/profile-popup/help.svg";
import { ReactComponent as Logout } from "@/assets/image/profile-popup/logout.svg";
import { ReactComponent as HotelClassSVGIcon } from "@/assets/image/home/icon-hotel-class.svg";

export default function ProfilePopup({ anchorEl, handleClose, handleLogout }) {
  const authContext = useContext(AuthContext);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: "20px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "& .MuiList-root": {
            ml: 1,
            mr: 1,
          },
        },
      }}
    >
      <div className="w-[282px] flex flex-col justify-center bg-white p-4 gap-4">
        {/* The Avatar & Name */}
        <div className="w-full flex flex-row gap-2">
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-bluegrey-200 rounded-full text-lg text-blue-500 font-Outfit font-extrabold">
            {getShortName(authContext?.userInfo?.userName)}
          </div>
          <div className="flex flex-col">
            <div className="text-md font-Outfit font-bold leading-tight">
              {authContext?.userInfo?.userName}
            </div>
            <div className="text-start text-sm text-[#929292] font-Outfit leading-tight">
              {authContext?.userInfo?.email}
            </div>
          </div>
        </div>
        {/* The Credits */}
        <div className="w-full flex flex-col gap-2">
          <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-sm font-bold font-Outfit leading-tight">
                Credits
              </div>
              <div className="text-sm font-bold font-Outfit leading-tight">
                1 / 5
              </div>
            </div>
            <div className="self-stretch h-1.5 relative">
              <div className="w-full h-1.5 left-0 top-0 absolute opacity-10 bg-[#929292] rounded" />
              <div className="w-1/5 h-1.5 left-0 top-0 absolute bg-blue-500 rounded" />
            </div>
          </div>
        </div>

        <hr className="w-full bg-stone-250 my-2" />

        <div className="w-full flex flex-col justify-start gap-0">
          {profilePopupNavList.map((item, index) => {
            return (
              <Link key={index} to={item.router}>
                <div className="w-full flex flex-row items-center text-center font-Outfit text-md cursor-pointer bg-none hover:bg-gray-200 rounded-full transition-all duration-300 py-1 px-2 gap-1">
                  <ReactSVG src={item.icon} />
                  <p>{item.label}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <hr className="w-full bg-stone-250 my-2" />

        <div className="w-full flex flex-col justify-start items-center gap-0">
          <div className="w-full flex flex-row items-center text-center font-Outfit text-md cursor-pointer bg-none hover:bg-gray-200 rounded-full transition-all duration-300 py-1 px-2 gap-1">
            <HelpIcon />
            <p>Help</p>
          </div>
          <div
            className="w-full flex flex-row items-center text-center font-Outfit text-md cursor-pointer bg-none hover:bg-gray-200 rounded-full transition-all duration-300 py-1 px-2 gap-1"
            onClick={handleLogout}
          >
            <Logout />
            <p>Log out</p>
          </div>
        </div>
      </div>
    </Menu>
  );
}
