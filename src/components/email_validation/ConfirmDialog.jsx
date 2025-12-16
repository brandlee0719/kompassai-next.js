import * as React from "react";
import { Button } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
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
        <div className="font-Outfit p-3 text-xl font-bold text-black">
          Are you sure you to validate emails?
        </div>
        <div className="font-Outfit mt-4 flex w-full flex-row justify-center gap-2 text-lg font-bold text-black">
          <Button
            className="font-Outfit flex w-[100px] items-center justify-center rounded-full border-[1px] border-[#000] bg-transparent bg-white py-2 text-base font-light text-black"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            className="font-Outfit flex w-[100px] items-center justify-center rounded-full border-[1px] bg-blue-500 py-2 text-base font-light text-white"
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
