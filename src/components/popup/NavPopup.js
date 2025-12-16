import { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Menu from "@mui/material/Menu";

import { profilePopupNavList } from "@/utils/common";

import { ReactComponent as SettingIcon } from "@/assets/image/profile-popup/setting.svg";
import { ReactComponent as TeamIcon } from "@/assets/image/profile-popup/team_management.svg";
import { ReactComponent as InviteIcon } from "@/assets/image/profile-popup/invite.svg";
import { ReactComponent as IntegrationIcon } from "@/assets/image/profile-popup/integration.svg";
import { ReactComponent as AnalysticsIcon } from "@/assets/image/profile-popup/analytics.svg";
import { ReactComponent as HelpIcon } from "@/assets/image/profile-popup/help.svg";
import { ReactComponent as Logout } from "@/assets/image/profile-popup/logout.svg";
import Navbar from "../landing/base/Navbar";

export default function NavPopup({
  anchorEl,
  handleClose,
  isProduct,
  isResources,
  onMouseLeave,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ horizontal: "center", vertical: "top" }}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      PaperProps={{
        elevation: 0,
        sx: {
          width: "100%",
          borderRadius: "20px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 8,
          "& .MuiAvatar-root": {
            width: "100%",
            // height: 32,
            // ml: -0.5,
            // mr: 1,
          },
          "& .MuiList-root": {
            ml: 1,
            mr: 1,
          },
        },
      }}
    >
      <Navbar
        isProduct={isProduct}
        isResources={isResources}
        onMouseLeave={onMouseLeave}
      />
    </Menu>
  );
}
