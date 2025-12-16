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

import BlueSwitch from "../team/PinkSwitch";

import { ReactComponent as LockSVGIcon } from "@/assets/image/icons/icon-lock.svg";
import { ReactComponent as PersonSVGIcon } from "@/assets/image/icons/icon-account-circle.svg";
import { ReactComponent as InfoSVGIcon } from "@/assets/image/icons/Info.svg";

import SelectDropdown from "@/components/common/SelectDropdown";
import { Divider } from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function AccountTabComponent() {
  const initialValues = {
    company_name: "",
    email: "anna.a@pinedev.eu",
    sso: true,
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
        <Form className="p-6">
          <div className="w-full justify-start items-center gap-2.5 mb-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-black text-3xl font-normal font-Outfit leading-loose">
                Account
              </div>
              <div className="self-stretch text-stone-350 text-sm font-normal font-Outfit leading-tight">
                Manage your profile and preferences here.
              </div>
            </div>
            <Button
              type="submit"
              className="flex px-3 py-2 bg-stone-950 rounded-md justify-center items-center"
            >
              <div className="text-white text-base font-bold font-Outfit text-sm uppercase leading-tight tracking-tight">
                Save changes
              </div>
            </Button>
          </div>

          <div className="gap-4 flex flex-col ">
            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <LockSVGIcon className="w-5 h-5 relative fill-current text-blue-500" />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Account info
                  </div>
                  <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                    Tell us a bit about your company
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-6 justify-start items-start">
                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Company name
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                      You will use it to login
                    </div>
                  </div>
                  <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                    <Field
                      type="text"
                      name="company_name"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                      placeholder=""
                    />
                  </div>
                  <ErrorMessage
                    name="company_name"
                    component="div"
                    className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                  />
                </div>

                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Contact email
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                      Used to contact you regarding your account
                    </div>
                  </div>
                  <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                    <Field
                      type="email"
                      name="email"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                      placeholder="anna.a@pinedev.eu"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <PersonSVGIcon
                      className="w-5 h-5 relative fill-current text-blue-500"
                    />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Single Sign On
                  </div>
                  <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                    Enable SAML single sign on for your entire team
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-6 justify-start items-start">
                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Email notifications
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                      Opt-in to various notifications
                    </div>
                  </div>
                  <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                    <BlueSwitch />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                  />
                </div>
                <Divider className="w-full" />
                <div className="flex flex-row items-center gap-2">
                  <InfoSVGIcon className="w-5 h-5 relative fill-current text-stone-350" />
                  <div className="text-stone-350 text-xs font-normal font-'Outfit' leading-none">
                    Please contact sales to enable this feature.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
