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

import { ReactComponent as NotificationSVGIcon } from "@/assets/image/icons/icon-notifications.svg";
import { ReactComponent as LockSVGIcon } from "@/assets/image/icons/icon-lock.svg";
import { ReactComponent as DownSVGIcon } from "@/assets/image/icons/down.svg";
import { ReactComponent as PersonSVGIcon } from "@/assets/image/icons/icon-account-circle.svg";

import SelectDropdown from "@/components/common/SelectDropdown";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function ProfileTabComponent() {
  const initialValues = {
    email: "anna.a@pinedev.eu",
    password: "",
    role: "Director",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // console.log("Form submitted:", values);
    setSubmitting(false);
  };

  const roleOptions = ["Director", "Manager", "Employee"];
  const caseOptions = ["Sales 1", "Sales 2", "Sales 3"];

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
                Profile
              </div>
              <div className="self-stretch text-stone-350 text-sm font-normal font-Outfit leading-tight">
                Manage your profile and preferences here
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
            <div className="w-full flex flex-col justify-start items-center rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <LockSVGIcon className="w-5 h-5 relative fill-current text-blue-500" />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Account details
                  </div>
                  <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                    This is how you access your account
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-6 justify-start items-start">
                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Email address
                    </div>
                    <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                      You will use it to login
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

                <div className="w-full lg:w-3/5 flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Password
                    </div>
                    <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                      Minimum of 6 characters
                    </div>
                  </div>
                  <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                    <Field
                      type="password"
                      name="password"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                      placeholder="6 character minimums"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
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
                    Basic info
                  </div>
                  <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                    Update your personal information here
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-6 justify-start items-start">
                <div className="w-full lg:w-3/5 flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Full name
                    </div>
                    {/* <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                      You will use it to login
                    </div> */}
                  </div>
                  <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                    <Field
                      type="text"
                      name="name"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                      placeholder="anna.a@pinedev.eu"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                  />
                </div>

                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Contact number
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                      Used for comminication regarding your account
                    </div>
                  </div>
                  <div className="self-stretch bg-white justify-start items-center gap-2 inline-flex">
                    <Field
                      type="text"
                      name="contact_number"
                      className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug py-2 px-3 border border-stone-250 rounded-md"
                      placeholder="+ 00 0000000000"
                    />
                  </div>
                  <ErrorMessage
                    name="contact_number"
                    component="div"
                    className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                  />
                </div>

                <div className="w-full lg:w-3/5 flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                      Your job level
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                      What's your position at your current workplace?
                    </div>
                  </div>

                  <SelectDropdown
                    options={roleOptions}
                    selectedOption={values.role}
                    onChange={(value) => setFieldValue("role", value)}
                  />
                </div>

                <div className="w-full lg:w-3/5  flex-col justify-center items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-black text-base font-medium font-Outfit leading-snug">
                    Main use case
                    </div>
                    <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                    What's your position at your current workplace?
                    </div>
                  </div>

                  <SelectDropdown
                    options={caseOptions}
                    selectedOption={values.use_case}
                    onChange={(value) => setFieldValue("use_case", value)}
                  />
                </div>

              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-center bg-white rounded-xl p-6 gap-2 border border-stone-250">
              <div className="w-full flex flex-row items-center gap-2.5 mb-8">
                <div className="w-10 h-10 p-2.5 bg-stone-150 rounded-full justify-center items-center flex">
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <NotificationSVGIcon
                      className="w-5 h-5 relative fill-current text-blue-500"
                    />
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-xl font-normal font-Outfit leading-relaxed">
                    Communication from KompassAI
                  </div>
                  <div className="text-right text-stone-350 text-sm font-normal font-Outfit leading-tight">
                    Configure how we reach out to you
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
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
