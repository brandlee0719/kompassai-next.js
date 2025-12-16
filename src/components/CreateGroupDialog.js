import * as React from "react";
import { Button } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";
import { ReactComponent as GroupSVGIcon } from "@/assets/image/icons/group.svg";

import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

export default function CreateGroupDialog({
  open,
  handleClose,
  handleContactSales,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BootstrapDialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <button
        onClick={handleClose}
        className="absolute right-0 top-0 flex flex-row justify-end pt-4 pr-4"
      >
        <CloseSVGIcon className="w-4 h-4 relative" />
      </button>
      <DialogContent className="p-8">
        <div className="flex flex-row justify-center">
          <GroupSVGIcon className="w-16 h-16 relative" />
        </div>
        <div className="self-stretch flex-col justify-start items-center gap-4 flex p-4">
          <div className="self-stretch text-center text-stone-950 text-3xl font-bold font-Outfit leading-loose">
            Increase your efficiency with groups
          </div>
          <div className="self-stretch text-center text-stone-950 text-base font-light font-Outfit leading-snug">
            Upgrade your plan to create groups and efficiently manage credit
            consumption.
          </div>
        </div>
        <div className="w-full flex flex-row justify-center font-Outfit text-lg text-black font-bold gap-2 my-4">
          <Button
            className="w-[220px] flex items-center justify-center border-[1px] border-[#E7436A] bg-magenta-500 text-white text-xs font-Outfit rounded-full py-4"
            onClick={handleContactSales}
          >
            contact sales
          </Button>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
}
