import { React, useState, useEffect } from "react";
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
import useBilling from "@/hooks/useBilling";

import PinkSwitch from "../team/PinkSwitch";

import { ReactComponent as NotificationSVGIcon } from "@/assets/image/icons/icon-notifications.svg";
import { ReactComponent as HotelClassSVGIcon } from "@/assets/image/icons/icon-hotel-class.svg";
import { ReactComponent as AccountBalanceSVGIcon } from "@/assets/image/icons/icon-account-balance-wallet.svg";
import { ReactComponent as LockOutlineSVGIcon } from "@/assets/image/icons/icon-lock-outlined.svg";
import { ReactComponent as CreditCardSVGIcon } from "@/assets/image/icons/icon-credit-card.svg";
import { ReactComponent as ReceiptLongSVGIcon } from "@/assets/image/icons/icon-receipt-long.svg";

import SelectDropdown from "@/components/common/SelectDropdown";
import { InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const datePrittier = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function BillingTabComponent() {
  const { getSubscriptionInfo, getBillingHistory } = useBilling();
  const initialValues = {
    email: "anna.a@pinedev.eu",
    password: "",
    role: "Director",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  const navigate = useNavigate();

  const [subscriptionInfo, setSubscriptionInfo] = useState([]);
  const [billingList, setBillingList] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      let res = await getSubscriptionInfo();
      setSubscriptionInfo(res);
    };
    loadInfo();
  }, []);

  useEffect(() => {
    const loadHistory = async () => {
      let res = await getBillingHistory();
      setBillingList(res);
    };
    loadHistory();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="p-6">
          <div className="mb-4 inline-flex w-full items-center justify-start gap-2.5">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
              <div className="font-Outfit leading-loose self-stretch text-3xl font-normal text-black">
                Billing
              </div>
              <div className="font-Outfit leading-tight self-stretch text-sm font-normal text-stone-350">
                Manage your profile and preferences here.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="flex w-full flex-col items-center justify-start gap-2 rounded-xl border border-stone-250 bg-white p-6">
              <div className="mb-8 flex w-full flex-row items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-150 p-2.5">
                  <div className="relative flex h-5 w-5 flex-col items-start justify-start">
                    <AccountBalanceSVGIcon className="relative h-5 w-5 fill-current text-blue-500" />
                  </div>
                </div>
                <div className="inline-flex w-full shrink grow basis-0 flex-col items-start justify-start">
                  <div className="font-Outfit leading-relaxed self-stretch text-xl font-normal text-black">
                    Payment card
                  </div>
                  <div className="font-Outfit leading-tight text-right text-sm font-normal text-stone-350">
                    Add or change your billing method
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-start justify-start gap-y-6">
                <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-3/4">
                  <div className="inline-flex items-center justify-between self-stretch">
                    <div className="font-Outfit leading-snug text-base font-medium text-black">
                      Billing card
                    </div>
                    <div className="font-Outfit leading-tight flex flex-row items-center gap-1 text-right text-sm font-normal text-stone-350">
                      <LockOutlineSVGIcon className="relative h-4 w-4 fill-current text-stone-350" />
                      <div className="font-Outfit leading-tight text-right text-sm font-normal text-stone-350">
                        Secured by Stripe
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-3xl bg-white">
                    <div className="flex w-full gap-4">
                      <TextField
                        className="w-full"
                        placeholder="Card number"
                        InputProps={{
                          sx: {
                            height: "44px",
                            padding: "0.75rem",
                            backgroundColor: "white",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CreditCardSVGIcon className="relative h-4 w-4 fill-current text-stone-350" />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className="w-44"
                        variant="outlined"
                        placeholder="MM / YY"
                        InputProps={{
                          sx: {
                            height: "44px",
                            padding: "0.75rem",
                            backgroundColor: "white",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          },
                        }}
                      />
                      <TextField
                        className="w-44"
                        variant="outlined"
                        placeholder="CVC"
                        InputProps={{
                          sx: {
                            height: "44px",
                            padding: "0.75rem",
                            backgroundColor: "white",
                            borderRadius: "6px",
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
                    className="font-Outfit leading-tight text-sm font-normal text-red-500"
                  />
                </div>

                <div className="flex w-full flex-row gap-4 lg:w-3/4">
                  <div className="flex w-full flex-col items-start justify-center gap-2">
                    <div className="inline-flex items-center justify-between self-stretch">
                      <div className="font-Outfit leading-snug text-base font-medium text-black">
                        Cardholder name
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-3xl bg-white">
                      <TextField
                        name="cardholder_name"
                        className="w-full"
                        variant="outlined"
                        placeholder="Alex Black"
                        InputProps={{
                          sx: {
                            height: "44px",
                            padding: "0.75rem",
                            backgroundColor: "white",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          },
                        }}
                      />
                    </div>
                    <ErrorMessage
                      name="cardholder_name"
                      component="div"
                      className="font-Outfit leading-tight text-sm font-normal text-red-500"
                    />
                  </div>
                  <div className="flex w-52 flex-col items-start justify-center gap-2">
                    <div className="inline-flex items-center justify-between self-stretch">
                      <div className="font-Outfit leading-snug text-base font-medium text-black">
                        Billing zip code
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-start gap-2 self-stretch rounded-3xl bg-white">
                      <TextField
                        name="zip_code"
                        className="w-44"
                        variant="outlined"
                        placeholder="e.g.90500"
                        InputProps={{
                          sx: {
                            height: "44px",
                            padding: "0.75rem",
                            backgroundColor: "white",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          },
                        }}
                      />
                    </div>
                    <ErrorMessage
                      name="zip_code"
                      component="div"
                      className="font-Outfit leading-tight text-sm font-normal text-red-500"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-md bg-stone-950 px-4 py-2"
                >
                  <div className="font-Outfit leading-tight text-base font-bold uppercase tracking-tight text-white">
                    Save card
                  </div>
                </Button>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-start gap-2 rounded-xl border border-stone-250 bg-white p-6">
              <div className="mb-8 flex w-full flex-row items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-150 p-2.5">
                  <div className="relative flex h-5 w-5 flex-col items-start justify-start">
                    <HotelClassSVGIcon className="relative h-5 w-5 fill-current text-blue-500" />
                  </div>
                </div>
                <div className="inline-flex w-full shrink grow basis-0 flex-col items-start justify-start">
                  <div className="font-Outfit leading-relaxed self-stretch text-xl font-normal text-black">
                    Current subscription
                  </div>
                  <div className="font-Outfit leading-tight text-right text-sm font-normal text-stone-350">
                    View and edit your subscription
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-start justify-start gap-y-6">
                <div className="inline-flex items-center justify-start gap-4 self-stretch">
                  <div className="inline-flex h-32 shrink grow basis-0 flex-col items-center justify-between rounded-lg bg-stone-150 px-6 py-4">
                    <div className="flex h-14 flex-col items-center justify-start gap-2 self-stretch">
                      <div className="font-Outfit leading-tight self-stretch text-center text-sm font-normal text-stone-350">
                        Your plan
                      </div>
                      <div className="font-Outfit leading-relaxed self-stretch text-center text-xl font-normal text-black">
                        {subscriptionInfo?.plan
                          ? subscriptionInfo.plan
                          : "Loading..."}
                      </div>
                    </div>

                    <button
                      className="font-Outfit leading-tight self-stretch text-center text-base font-normal text-blue-500"
                      onClick={() => {
                        navigate("/upgrade");
                      }}
                    >
                      Change plan
                    </button>
                  </div>
                  <div className="inline-flex h-32 shrink grow basis-0 flex-col items-center justify-between rounded-lg bg-stone-150 px-6 py-4">
                    <div className="flex h-14 flex-col items-center justify-start gap-2 self-stretch">
                      <div className="font-Outfit leading-tight self-stretch text-center text-sm font-normal text-stone-350">
                        Team members seats
                      </div>
                      <div className="font-Outfit leading-relaxed self-stretch text-center text-xl font-normal text-black">
                        1 / 1
                      </div>
                    </div>
                    <button className="font-Outfit leading-tight self-stretch text-center text-base font-normal text-blue-500">
                      Upgrade to invite members
                    </button>
                  </div>
                  <div className="inline-flex h-32 shrink grow basis-0 flex-col items-center justify-between rounded-lg bg-stone-150 px-6 py-4">
                    <div className="flex h-14 flex-col items-center justify-start gap-2 self-stretch">
                      <div className="font-Outfit leading-tight self-stretch text-center text-sm font-normal text-stone-350">
                        Next renewal
                      </div>
                      <div className="font-Outfit leading-relaxed self-stretch text-center text-xl font-normal text-black">
                        {subscriptionInfo?.renewal_date
                          ? datePrittier(subscriptionInfo.renewal_date)
                          : "Loading..."}
                      </div>
                    </div>
                    <div className="stone-350 font-Outfit leading-none self-stretch text-center text-xs font-normal">
                      You will receive a refill.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-start gap-2 rounded-xl border border-stone-250 bg-white p-6">
              <div className="mb-8 flex w-full flex-row items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-150 p-2.5">
                  <div className="relative flex h-5 w-5 flex-col items-start justify-start">
                    <ReceiptLongSVGIcon className="relative h-5 w-5 fill-current text-blue-500" />
                  </div>
                </div>
                <div className="inline-flex w-full shrink grow basis-0 flex-col items-start justify-start">
                  <div className="font-Outfit leading-relaxed self-stretch text-xl font-normal text-black">
                    Billing history
                  </div>
                  <div className="font-Outfit leading-tight text-right text-sm font-normal text-stone-350">
                    View and download your past invoices
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-start justify-start gap-y-6">
                <div className="flex h-64 flex-col items-start justify-start gap-2 self-stretch">
                  <div className="inline-flex h-14 w-full items-center justify-start gap-4 rounded-lg bg-stone-150 p-4">
                    <div className="font-Outfit leading-snug w-72 text-base font-medium text-black">
                      Description
                    </div>
                    <div className="font-Outfit leading-snug shrink grow basis-0 text-base font-medium text-black">
                      Date
                    </div>
                    <div className="font-Outfit leading-snug shrink grow basis-0 text-base font-medium text-black">
                      Amount
                    </div>
                    <div className="font-Outfit leading-snug shrink grow basis-0 text-base font-medium text-black">
                      Status
                    </div>
                  </div>
                  {billingList.length > 0 && (
                    <div className="overflow-auto">
                      {billingList.map((item) => {
                        return (
                          <div className="inline-flex w-full items-center justify-start gap-4  border-b-[1px] bg-white px-4 py-2">
                            <div
                              className="font-Outfit leading-snug w-72 text-base font-light text-black"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></div>
                            <div className="font-Outfit leading-snug shrink grow basis-0 text-base font-light text-black">
                              {item.date}
                            </div>
                            <div className="font-Outfit leading-snug shrink grow basis-0 text-base font-light uppercase text-black">
                              {item.amount.toLocaleString("en-US", {
                                style: "currency",
                                currency: item.currency,
                              })}
                            </div>
                            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center">
                              <div className="font-Outfit leading-snug text-base font-light capitalize text-black">
                                {item.status}
                              </div>
                              <a
                                href="{link_to_invoice}"
                                className="font-Outfit leading-snug text-base font-normal text-blue-500"
                              >
                                View invoice
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {billingList.length == 0 && (
                    <div className="w-full p-2 text-center text-xl">
                      {" "}
                      Loading...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
