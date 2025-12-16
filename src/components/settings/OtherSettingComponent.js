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

import { ReactComponent as ContactsSVGIcon } from "@/assets/image/icons/icon-contacts.svg";
import { ReactComponent as AccountSettingSVGIcon } from "@/assets/image/icons/icon-account-settings.svg";
import { ReactComponent as FindPageSVGIcon } from "@/assets/image/icons/icon-find-in-page.svg";
import { ReactComponent as MailSVGIcon } from "@/assets/image/icons/icon-mail.svg";
import { ReactComponent as InfoSVGIcon } from "@/assets/image/icons/Info.svg";

import SelectDropdown from "@/components/common/SelectDropdown";
import { Divider } from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function OtherSettingTabComponent() {
  const initialValues = {
    email: "anna.a@pinedev.eu",
    password: "",
    role: "Director",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // console.log("Form submitted:", values);
    setSubmitting(false);
  };

  const roleOptions = ["All Type Email", "Email Type 1", "Email Type 2"];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="p-6">
          <div className="w-full justify-start items-center gap-2.5 mb-4 inline-flex">
            <div className="ml-4 grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-black text-3xl font-normal font-Outfit leading-loose">
                Other settings
              </div>
              <div className="self-stretch text-zinc-600 text-sm font-normal font-Outfit leading-tight">
                Manage your profile and preferences here.
              </div>
            </div>
            <Button
              type="submit"
              className="flex px-3 py-2 bg-stone-950 rounded-md justify-center items-center"
            >
              <div className="text-white text-base font-bold text-sm font-Outfit uppercase leading-tight tracking-tight">
                Save changes
              </div>
            </Button>
          </div>

          <div className="gap-4 flex flex-col ">

            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <AccountSettingSVGIcon className="w-5 h-5 relative fill-current text-blue-500" 
                    />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Contact preferences
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
                      Email type
                    </div>
                  </div>

                  <SelectDropdown
                    options={roleOptions}
                    selectedOption={values.role}
                    onChange={(value) => setFieldValue("role", value)}
                  />
                </div>

                <Divider className="w-full" />

                <div className="flex flex-row items-center gap-2">
                  <InfoSVGIcon className="w-4 h-4 relative fill-current text-stone-350" />
                  <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
                    You may set your contact lookup preferences type ty ONLY
                    search for professional OR personal emails. You will then
                    only be charged a lookup if we find the corresponding type.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <FindPageSVGIcon className="w-5 h-5 relative fill-current text-blue-500" 
                    />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    GDPR
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
                      EU profiles
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                      Filter EU profiles from search results
                    </div>
                  </div>
                  <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                    <BlueSwitch />
                  </div>
                </div>

                <Divider className="w-full" />

                <div className="flex flex-row items-center gap-2">
                  <InfoSVGIcon className="w-4 h-4 relative fill-current text-stone-350"  />
                  <div className="text-stone-350 text-xs font-normal font-Outfit leading-none">
                    Filters EU profiles from KompassAI search based on available
                    location data. Direct lookups EU Citizens via extention,
                    api, files can still occur.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <MailSVGIcon className="w-5 h-5 relative fill-current text-blue-500"  />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Email preferences
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
                      Billing notification emails
                    </div>
                  </div>
                  <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                    <BlueSwitch />
                  </div>
                </div>

                <Divider className="w-full" />

                <div className="flex flex-row items-center gap-2">
                  <InfoSVGIcon className="w-4 h-4 relative fill-current text-stone-350" />
                  <div className="text-stone-350 text-xs font-normal font-Outfit leading-none">
                    Filters EU profiles from KompassAI search based on available
                    location data. Direct lookups EU Citizens via extention,
                    api, files can still occur.
                  </div>
                </div>
              </div>
            </div>
          
            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <ContactsSVGIcon className="w-5 h-5 relative fill-current text-blue-500" 
                    />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Account Status
                  </div>
                  <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                    Your account
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-6 justify-start items-start">
                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Danger Zone
                    </div>
                  </div>
                  <div className="self-stretch flex-row bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                    <div className="w-28 h-6 px-2.5 bg-stone-150 rounded-3xl justify-center items-center gap-1 inline-flex">
                      <div className="text-stone-950 text-xs font-light font-Outfit leading-none">
                        Active
                      </div>
                    </div>
                    <button className="text-red-500 text-base font-normal font-Outfit leading-tight underline">
                      De-activate and close account
                    </button>
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
