import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";
import SettingsNavBar from "@/components/settings/SettingsNavBar";
import ProfileTabComponent from "@/components/settings/ProfileTabComponent";

import { ReactComponent as LeftArrowSVGIcon } from "@/assets/image/icons/icon-left.svg";

import { ReactComponent as NotificationSVGIcon } from "@/assets/image/icons/icon-notifications.svg";
import { ReactComponent as HotelClassSVGIcon } from "@/assets/image/icons/icon-hotel-class.svg";
import { ReactComponent as AccountBalanceSVGIcon } from "@/assets/image/icons/icon-account-balance-wallet.svg";
import { ReactComponent as LockOutlineSVGIcon } from "@/assets/image/icons/icon-lock-outlined.svg";
import { ReactComponent as CreditCardSVGIcon } from "@/assets/image/icons/icon-credit-card.svg";
import { ReactComponent as DiscoverSVGIcon } from "@/assets/image/logos/discover-41.svg";
import { ReactComponent as MasterCardSVGIcon } from "@/assets/image/logos/mastercard-21.svg";
import { ReactComponent as PaypalSVGIcon } from "@/assets/image/logos/paypal-31.svg";
import { ReactComponent as RecurlySVGIcon } from "@/assets/image/logos/recurly-logo-purple-1.svg";
import { ReactComponent as PciSVGIcon } from "@/assets/image/logos/pci.svg";
import { ReactComponent as SecureSVGIcon } from "@/assets/image/logos/secure.svg";
import { ReactComponent as VisaSVGIcon } from "@/assets/image/logos/visa-1.svg";
import { ReactComponent as AmericanExpressSVGIcon } from "@/assets/image/logos/american-express-11.svg";

import SelectDropdown from "@/components/common/SelectDropdown";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { InputAdornment, TextField } from "@mui/material";
import { Button } from "@material-tailwind/react";

import useKompassRouter from '@/hooks/useKompassRouter';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const buttonSwitches = [
  { id: 1, label: "Credit Card" },
  { id: 2, label: "Paypal" },
];

export default function PremiumPlanScene() {
  const { kompassNavigate } = useKompassRouter();
  const [selectedButton, setSelectedButton] = useState({
    id: 1,
    label: "Recent activity",
  });

  const inActiveSwitchButtonClass =
    "grow shrink basis-0 self-stretch px-3 py-1 rounded-3xl justify-center items-center flex";
  const inActiveTextButtonClass =
    "text-sm font-medium font-Outfit leading-tight";
  const activeSwitchButtonClass =
    "bg-teal-950 grow shrink basis-0 self-stretch px-3 py-1 rounded-3xl justify-center items-center flex";
  const activeTextButtonClass =
    "text-white text-sm font-medium font-Outfit leading-tight";

  const initialValues = {
    email: "anna.a@pinedev.eu",
    password: "",
    role: "Director",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // console.log("Form submitted:", values);
    setSubmitting(false);
  };

  const roleOptions = [
    "480 credits up to 1 user",
    "Email Type 1",
    "Email Type 2",
  ];

  const goBack = () => {
    window.history.back();
  };

  return (
    <MainLayout>
      <button
        onClick={goBack}
        className="flex flex-row gap-2 justify-start items-center mb-4"
      >
        <LeftArrowSVGIcon className="w-4 h-4 relative" />
        <div className="text-rose-500 text-base font-normal font-Outfit leading-tight">
          Back
        </div>
      </button>
      <div className="w-full flex flex-row items-center text-center text-xl md:text-2xl text-black font-bold font-Outfit leading-loose gap-2 mb-4 lg:mb-8">
        <p>Premium Plan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 lg:px-32 gap-y-4">
        <div className="col-span-4 xl:col-span-2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="w-full flex flex-col justify-start items-center bg-white rounded-2xl p-5 gap-2 mb-4">
                  <div className="w-full text-stone-950 text-xl font-normal font-Outfit leading-relaxed mb-4">
                    Credits
                  </div>

                  <div className="w-full flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-Outfit leading-snug">
                        How many credits/users would you like in your new plan?
                      </div>
                    </div>

                    <SelectDropdown
                      options={roleOptions}
                      selectedOption={values.role}
                      onChange={(value) => setFieldValue("role", value)}
                    />
                    <div className="opacity-60 text-stone-950 text-xs font-normal font-Outfit leading-none">
                      Credits are provided upfront
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start items-center bg-white rounded-2xl p-5 gap-2 gap-y-6">
                  <div className="w-full text-stone-950 text-xl font-normal font-Outfit leading-relaxed ">
                    Payment method
                  </div>

                  <div
                    className={`w-full h-11 p-1 rounded-3xl border border-teal-950 justify-center items-center gap-1 inline-flex`}
                  >
                    {buttonSwitches?.map((item) => (
                      <button
                        key={item.id}
                        className={
                          selectedButton.id === item.id
                            ? activeSwitchButtonClass
                            : inActiveSwitchButtonClass
                        }
                        onClick={() => {
                          setSelectedButton(item);
                        }}
                      >
                        <div
                          className={
                            selectedButton.id === item.id
                              ? activeTextButtonClass
                              : inActiveTextButtonClass
                          }
                        >
                          {item.label}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="w-full flex flex-col sm:flex-row  gap-4 ">
                    <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-2 ">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-black text-base font-medium font-Outfit leading-snug">
                          First Name
                        </div>
                      </div>
                      <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                        <Field
                          type="text"
                          name="first_name"
                          className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                          placeholder=""
                        />
                      </div>
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                      />
                    </div>

                    <div className="w-full sm:w-1/2 flex-col justify-center items-start gap-2 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-black text-base font-medium font-Outfit leading-snug">
                          Last Name
                        </div>
                      </div>
                      <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                        <Field
                          type="text"
                          name="last_name"
                          className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                          placeholder=""
                        />
                      </div>
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    <div className="w-full flex-col justify-center items-start gap-2 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-black text-base font-medium font-Outfit leading-snug">
                          Cardholder name
                        </div>
                      </div>

                      <SelectDropdown
                        options={roleOptions}
                        selectedOption={values.role}
                        onChange={(value) => setFieldValue("role", value)}
                      />
                    </div>

                    <div className="w-full sm:w-1/2 flex-col justify-center items-start gap-2 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-black text-base font-medium font-Outfit leading-snug">
                          Billing zip code
                        </div>
                      </div>
                      <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                        <Field
                          type="text"
                          name="last_name"
                          className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                          placeholder="e.g.90500"
                        />
                      </div>
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-Outfit leading-snug">
                        Street
                      </div>
                    </div>
                    <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                      <Field
                        type="text"
                        name="last_name"
                        className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                        placeholder="Street"
                      />
                    </div>
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>

                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2 flex-col justify-center items-start gap-2 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-black text-base font-medium font-Outfit leading-snug">
                          City
                        </div>
                      </div>
                      <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                        <Field
                          type="text"
                          name="city"
                          className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                          placeholder="e.g.90500"
                        />
                      </div>
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                      />
                    </div>

                    <div className="w-full sm:w-1/2 flex-col justify-center items-start gap-2 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-black text-base font-medium font-Outfit leading-snug">
                          State
                        </div>
                      </div>

                      <SelectDropdown
                        options={roleOptions}
                        selectedOption={values.role}
                        onChange={(value) => setFieldValue("role", value)}
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-Outfit leading-snug">
                        Company
                      </div>

                      <div className="text-right items-center flex flex-row text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                        <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                          Optional
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                      <Field
                        type="text"
                        name="company"
                        className="grow shrink basis-0 text-black text-base font-light font-Outfit leading-snug p-3 border border-stone-200 rounded-3xl"
                        placeholder="Company"
                      />
                    </div>
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>

                  <div className="w-full flex-col justify-center items-start gap-2 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-Outfit leading-snug">
                        Billing card
                      </div>
                      <div className="text-right items-center flex flex-row text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                        <LockOutlineSVGIcon className="w-4 h-4 relative" />
                        <div className="text-right text-neutral-400 text-sm font-normal font-Outfit leading-tight">
                          Secured by Stripe
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-white rounded-3xl justify-start items-center gap-2 inline-flex">
                      <div className="flex flex-col md:flex-row w-full gap-4">
                        <TextField
                          className="w-full"
                          placeholder="Card number"
                          InputProps={{
                            sx: {
                              height: "44px",
                              padding: "0.75rem",
                              backgroundColor: "white",
                              borderRadius: "50px",
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                <CreditCardSVGIcon className="w-4 h-4 relative" />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className="w-full md:w-60"
                          variant="outlined"
                          placeholder="MM / YY"
                          InputProps={{
                            sx: {
                              height: "44px",
                              padding: "0.75rem",
                              backgroundColor: "white",
                              borderRadius: "50px",
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            },
                          }}
                        />
                        <TextField
                          className="w-full md:w-60"
                          variant="outlined"
                          placeholder="CVC"
                          InputProps={{
                            sx: {
                              height: "44px",
                              padding: "0.75rem",
                              backgroundColor: "white",
                              borderRadius: "50px",
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm font-normal font-Outfit leading-tight"
                    />
                  </div>

                  <div className="w-full flex flex-row justify-end">
                    <Button
                      type="submit"
                      className="w-52 px-2 flex py-3 bg-rose-500 rounded-full justify-center items-center gap-2"
                    >
                      <div className="text-white text-base font-bold font-Outfit uppercase leading-tight tracking-tight">
                        Secure Checkout
                      </div>
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="col-span-4 xl:col-span-2">
          <div className="w-full h-full p-6 bg-zinc-200 rounded-2xl border flex-col justify-between items-start inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch justify-start items-center gap-8 inline-flex">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-4 flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-teal-950 text-xl font-normal font-Outfit leading-relaxed">
                      Total
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch h-16 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch opacity-70 justify-start items-center gap-6 inline-flex">
                  <div className="grow shrink basis-0 text-teal-950 text-base font-light font-Outfit leading-snug">
                    Todays total $36 x 12 months
                  </div>
                  <div className="text-teal-950 text-base font-medium font-Outfit leading-snug">
                    $421
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-6 inline-flex">
                  <div className="grow shrink basis-0 text-teal-950 text-3xl font-normal font-Outfit leading-loose">
                    Today’s total:
                  </div>
                  <div className="text-teal-950 text-3xl font-normal font-Outfit leading-loose">
                    $421
                  </div>
                </div>
              </div>

              <div className="self-stretch">
                <p className="text-teal-950 text-base font-light font-Outfit leading-snug">
                  Your Professional subscription begins today and will renew on
                  Oct 5, 2024 .<br /> Once your credit card payment has gone
                  through you’ll have access to 1.500 lookups per year, where
                  credits are allocated aall upfront.
                </p>
              </div>

              <div>
                <button className="text-rose-500 text-xs font-normal font-Outfit leading-none">
                  Privacy policy
                </button>

                <span className="text-slate-600 text-xs font-normal font-Outfit leading-none">
                  {" and "}
                </span>

                <button className="text-rose-500 text-xs font-normal font-Outfit leading-none">
                  Subscription terms
                </button>
              </div>

              <div className="self-stretch justify-start items-center gap-2 flex flex-col sm:flex-row">
                <div className="w-full grow shrink basis-0 h-12 px-3 py-3 bg-white rounded-lg justify-center items-center gap-2 flex">
                  <LockOutlineSVGIcon className="w-5 h-5 relative" />
                  <div>
                    <span className="text-teal-950 text-sm font-normal font-Outfit leading-tight">
                      Secured with{" "}
                    </span>
                    <span className="text-teal-950 text-sm font-semibold font-Outfit leading-tight">
                      SSL
                    </span>
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 h-12 px-3 py-3 bg-white rounded-lg justify-center items-center gap-2 flex">
                  <LockOutlineSVGIcon className="w-5 h-5 relative" />
                  <div>
                    <span className="text-teal-950 text-sm font-normal font-Outfit leading-tight">
                      Secured by{" "}
                    </span>
                    <span className="text-teal-950 text-sm font-semibold font-Outfit leading-tight">
                      PayPal
                    </span>
                  </div>
                </div>
                <div className="w-full grow shrink basis-0 h-12 px-3 py-3 bg-white rounded-lg justify-center items-center gap-2 flex">
                  <LockOutlineSVGIcon className="w-5 h-5 relative" />
                  <div>
                    <span className="text-teal-950 text-sm font-normal font-Outfit leading-tight">
                      Powered by{" "}
                    </span>
                    <span className="text-teal-950 text-sm font-semibold font-Outfit leading-tight">
                      Recurly
                    </span>
                  </div>
                </div>
              </div>

              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <LockOutlineSVGIcon
                  className="w-5 h-5 relative"
                  fill="#1C1B1F"
                />
                <div className="grow shrink basis-0">
                  <span className="text-slate-600 text-xs font-normal font-Outfit leading-none">
                    For your security KompassAI does not access or store credit
                    card information. Your card payment is secured by Recurly.{" "}
                  </span>
                  <button className="text-rose-500 text-xs font-normal font-Outfit leading-none">
                    More information
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 self-stretch p-6 bg-white rounded-lg flex flex-col justify-center items-center gap-8 ">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="grow shrink basis-0 h-5 text-teal-950 text-base font-medium font-Outfit leading-snug">
                  Guaranteed Safe Checkout
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-right text-teal-950 text-sm font-normal font-Outfit leading-tight">
                    Powered by
                  </div>
                  <RecurlySVGIcon className="w-16 h-5 relative" />
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-4 flex">
                <div className="justify-center items-center gap-6 flex flex-col sm:flex-row ">
                  <VisaSVGIcon className="w-20 h-6 relative" />
                  <MasterCardSVGIcon className="w-8 h-6 relative" />
                  <DiscoverSVGIcon className="w-24 h-6 relative" />
                  <AmericanExpressSVGIcon className="w-6 h-6 relative" />
                  <PaypalSVGIcon className="w-24 h-6 relative" />
                </div>
                <div className="justify-center items-center mt-6 gap-6 flex flex-col sm:flex-row ">
                  <SecureSVGIcon className="w-24 h-6 relative" />
                  <PciSVGIcon className="w-14 h-14 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
