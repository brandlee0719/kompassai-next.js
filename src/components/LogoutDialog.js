import * as React from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

export default function LogoutDialog({ open, handleClose, handleLogout }) {
  // const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BootstrapDialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogContent>
        {/* <DialogContentText>
          Are you sure you want to log out?
        </DialogContentText> */}
        <div className="font-Outfit text-xl text-black font-bold p-3">
          Are you sure you want to log out?
        </div>
        <div className="w-full flex flex-row justify-center font-Outfit text-lg text-black font-bold gap-2 mt-4">
          <Button
            className="w-[100px] flex items-center justify-center bg-transparent border-[1px] border-blue-500 text-blue-500 text-xs font-Outfit font-bold rounded-full py-2"
            onClick={handleClose}
          >
            Back
          </Button>
          <Button
            className="w-[100px] flex items-center justify-center border-none bg-blue-500 text-white text-xs font-Outfit rounded-full py-2"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </DialogContent>
      {/* <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </BootstrapDialog>
  );
}
