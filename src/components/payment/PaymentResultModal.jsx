import * as React from "react";
import { Button } from "@material-tailwind/react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as Checkbox } from "@/assets/image/icons/checkbox_free.svg";
import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import cl from "classnames";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

//Displays result of the payment to the user, purely presentational for now
//could get extra data for payment and could be displayed anywhere
export default function PaymentResultModal() {
  const theme = useTheme();
  //this should be put in global state
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const [show, setShow] = useState(false); //check if it's in QP
  const error = query.get("billing-success") === 'false' ?  true : false;
  const handleClose = () => {
    setShow(false);
  };
  useEffect(()=>{
    setShow(query.get("billing-success"))
  }, [query])
  return (
    <BootstrapDialog fullScreen={fullScreen} open={show}>
      <button
        onClick={() => {
          setShow(false);
        }}
        className="flex flex-row justify-end pr-4 pt-4"
      >
        <CloseSVGIcon className="relative h-4 w-4" />
      </button>
      <DialogContent className="p-8">
        <div className="flex flex-row justify-center">
          <Checkbox
            className={cl({
              "h-16 w-16 relative fill-[#F0FEFC] stroke-[#75eed9]": true,
              "fill-[#ffeef2] stroke-[#e7436a]": error,
            })}
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-4 self-stretch p-4">
          <div className="font-Outfit leading-loose self-stretch text-center text-3xl font-bold text-stone-950">
            {error ? "Payment unsuccessful": "Payment success"}
          </div>
          <div className="font-Outfit leading-snug self-stretch text-center text-base font-light text-stone-950">
            {error ? "There was an error during processing of your payment, please try again" : "Payment successful, product should appear in your account shortly"}
          </div>
        </div>
        <div className="font-Outfit my-4 flex w-full flex-row justify-center gap-2 text-lg font-bold text-black">
          <Button
            className="font-Outfit flex w-[220px] uppercase items-center justify-center rounded-full border-[1px] border-[#E7436A] bg-magenta-500 py-4 text-xs text-white"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
}
