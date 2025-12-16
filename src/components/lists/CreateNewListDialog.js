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
import { InputAdornment, TextField } from "@mui/material";
import { CircularProgress } from "@mui/material";

import { toast } from "react-toastify";

import useList from "@/hooks/useList";
import { CONTACT_LIST_TYPE } from "@/utils/constants";
import { BaseInputProps } from "@/theme/typography";

import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

export default function CreateNewListDialog({ open, close }) {
  const { createContactList } = useList();

  const [listTitle, setListTitle] = React.useState("");
  const [saving, setSaving] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const onSave = async () => {
    if (listTitle.length == 0) {
      toast.error("Cannot save empty name.", { theme: "colored" });
      return;
    }

    setSaving(true);
    const result = await createContactList({
      listTitle,
      listType: CONTACT_LIST_TYPE.KOMPASS_SEARCH,
    });
    setSaving(false);

    if (result.status) {
      toast.success(`"${listTitle}" Contact List has been created.`, {
        theme: "colored",
      });
      onClose(true);
    } else toast.error(result.message, { theme: "colored" });
  };

  const onClose = (bUpdate) => {
    setListTitle("");
    close(bUpdate === true);
  };

  return (
    <BootstrapDialog fullScreen={fullScreen} open={open} onClose={onClose}>
      <button
        onClick={onClose}
        className="absolute right-0 top-0 flex flex-row justify-end pr-4 pt-4"
      >
        <CloseSVGIcon className="relative h-4 w-4" />
      </button>
      <DialogContent>
        {/* <DialogContentText>
          Are you sure you want to log out?
        </DialogContentText> */}
        <div className="font-Outfit p-3 text-center text-2xl font-bold text-black">
          Create new list
        </div>
        <div className="font-Outfit text-md p-1 text-left text-black">
          List name
        </div>
        <div className="mt-1 min-w-[400px]">
          <TextField
            className="w-full"
            placeholder="List name"
            value={listTitle}
            onChange={(e) => {
              setListTitle(e.target.value);
            }}
            InputProps={BaseInputProps}
          />
        </div>
        <div className="font-Outfit mt-4 flex w-full flex-row justify-center gap-2 text-lg font-bold text-black">
          <Button
            disabled={saving}
            className="font-Outfit flex items-center justify-center rounded-full border-[1px] border-none bg-magenta-500 py-2 text-base text-white disabled:bg-[#929292]"
            onClick={onSave}
          >
            {saving ? (
              <CircularProgress
                size="1.2rem"
                className="mr-2"
                style={{ color: "white" }}
              />
            ) : null}
            Save
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
