import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { kompassColors } from "theme/palette";

const CustomizedSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: kompassColors.blue,
    "&:hover": {
      backgroundColor: alpha(kompassColors.blue, theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: kompassColors.blue,
  },
}));

export default function BlueSwitch() {
  return (
    <div>
      <CustomizedSwitch />
    </div>
  );
}
