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

import { BaseInputProps } from "@/theme/typography";
import FilterDropdown from "@/components/common/FilterDropdown";

import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";
import useList from "@/hooks/useList";
import { toast } from "react-toastify";
import useKompassSearch from "@/hooks/useKompassSearch";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

export default function SaveToListDialog({ open, close, params }) {
  // const { createContactList } = useList();

  const { postSaveKompassSearchContacts } = useKompassSearch();
  const { selectedAdaptIds, contactList } = params;

  const [listTitle, setListTitle] = React.useState(null);
  const [saving, setSaving] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const onSave = async () => {
    if (listTitle == null || listTitle?.length == 0) {
      toast.error("Cannot save empty name.", { theme: "colored" });
      return;
    }

    setSaving(true);
    const result = await postSaveKompassSearchContacts({
      listTitle,
      adaptIds: selectedAdaptIds,
    });
    setSaving(false);

    if (result.status) {
      toast.success(result.message, { theme: "colored" });
      close(true);
    } else toast.error(result.message, { theme: "colored" });
  };

  return (
    <BootstrapDialog fullScreen={fullScreen} open={open} onClose={close}>
      <button
        onClick={close}
        className="absolute right-0 top-0 flex flex-row justify-end pt-4 pr-4"
      >
        <CloseSVGIcon className="w-4 h-4 relative" />
      </button>
      <DialogContent>
        {/* <DialogContentText>
          Are you sure you want to log out?
        </DialogContentText> */}
        <div className="font-Outfit text-2xl text-black font-bold text-center p-3">
          Select a list
        </div>
        <div className="font-Outfit text-md text-black text-left p-1">
          List names
        </div>
        <div className="min-w-[400px]">
          <FilterDropdown
            options={
              contactList
                ? contactList.map((contact) => {
                    return {
                      label: contact.listTitle,
                      value: contact.listTitle,
                    };
                  })
                : [{ label: "123123" }]
            }
            onChange={(value) => {
              setListTitle(value);
            }}
          />
        </div>
        <div className="w-full flex flex-row justify-center font-Outfit text-lg text-black font-bold gap-2 mt-4">
          <Button
            disabled={saving}
            className="flex items-center justify-center border-[1px] border-none bg-blue-500 disabled:bg-[#929292] text-white text-base font-Outfit rounded-full py-2"
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
