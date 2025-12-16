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

export default function ConfirmDialog({ open, handleClose, handleOK }) {
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
          Are you sure you to start the bulk enrich?
        </div>
        <div className="w-full flex flex-row justify-center font-Outfit text-lg text-black font-bold gap-2 mt-4">
          <Button
            className="w-[100px] flex items-center justify-center bg-transparent text-black bg-white border-[1px] border-[#000] font-light text-base font-Outfit rounded-full py-2"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            className="w-[100px] flex items-center justify-center border-[1px] bg-blue-500 text-white font-light text-base font-Outfit rounded-full py-2"
            onClick={handleOK}
          >
            Yes
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
