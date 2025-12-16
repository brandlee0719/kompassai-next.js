import React from "react";
import { Button } from "@material-tailwind/react";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import PinkSwitch from "../team/PinkSwitch";

import { ReactComponent as FiInvoiceSVGIcon } from "@/assets/image/icons/fi-invoice.svg";
import { ReactComponent as FiStatisticSVGIcon } from "@/assets/image/icons/fi-statistic.svg";
import { ReactComponent as FiZeppierSVGIcon } from "@/assets/image/icons/fi-zeppier.svg";
import { ReactComponent as LockOutlineSVGIcon } from "@/assets/image/icons/icon-lock-outlined.svg";
import { ReactComponent as CreditCardSVGIcon } from "@/assets/image/icons/icon-credit-card.svg";
import { ReactComponent as ReceiptLongSVGIcon } from "@/assets/image/icons/icon-receipt-long.svg";

import SelectDropdown from "@/components/common/SelectDropdown";
import { Divider, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function TeamManagementTabComponent() {
  const initialValues = {
    email: "anna.a@pinedev.eu",
    password: "",
    role: "Director",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // console.log("Form submitted:", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div className="w-full justify-start items-center gap-2.5 mb-4 inline-flex">
            <div className="ml-4 grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-black text-3xl font-normal font-Outfit leading-loose">
                Want to get your whole team working on KompassAI?
              </div>
              {/* <div className="self-stretch text-zinc-600 text-sm font-normal font-Outfit leading-tight">
                Want to get your whole team working on KompassAI?
              </div> */}
            </div>
          </div>

          <div className="gap-4 flex flex-row">
            <div className="w-full h-64 p-6 bg-white rounded-2xl border flex-col justify-start items-start gap-4 inline-flex">
              <FiInvoiceSVGIcon className="w-20 h-20 relative" />
              <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                Simplified billing and invoicing
              </div>
              <Divider className="w-full" />
              <div className="self-stretch text-black text-base font-light font-Outfit leading-snug">
                Save time with one-click billing and invoicing. Connect all of
                your team’s seats (up to 5) to the same billing account!
              </div>
            </div>
            <div className="w-full h-64 p-6 bg-white rounded-2xl border flex-col justify-start items-start gap-4 inline-flex">
              <FiStatisticSVGIcon className="w-20 h-20 relative" />
              <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                Simplified billing and invoicing
              </div>
              <Divider className="w-full" />
              <div className="self-stretch text-black text-base font-light font-Outfit leading-snug">
                Save time with one-click billing and invoicing. Connect all of
                your team’s seats (up to 5) to the same billing account!
              </div>
            </div>
            <div className="w-full h-64 p-6 bg-white rounded-2xl border flex-col justify-start items-start gap-4 inline-flex">
              <FiZeppierSVGIcon className="w-20 h-20 relative" />
              <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                Saleforce & Zapier integrations
              </div>
              <Divider className="w-full" />
              <div className="self-stretch text-black text-base font-light font-Outfit leading-snug">
                Save time with one-click billing and invoicing. Connect all of
                your team’s seats (up to 5) to the same billing account!
              </div>
            </div>
          </div>

          <div className="w-full justify-center items-center flex flex-row gap-4 py-8">
            <Button
              type="submit"
              className="w-52 px-6 flex py-3 bg-rose-500 rounded-full justify-center items-center gap-2"
            >
              <Link
                to={"/premium-plan"}
                className="text-white text-base font-bold font-Outfit uppercase leading-tight tracking-tight"
              >
                Start Team Plan
              </Link>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
