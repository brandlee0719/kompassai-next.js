import { useMemo, useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import * as Env from '@/env';


import { pageContentWidth } from "@/utils/common";
import useStripe from "@/hooks/useStripe";

import BaseContainer from "@/components/BaseContainer";
import MainLayout from "@/components/MainLayout";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import ArrowLeftIcon from "../../assets/image/icons/Arrow_Left.svg";

import { AnimatePresence, motion } from "framer-motion";
import { Slider, styled, Box } from "@mui/material";

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: "#e8e7e7 ",
  "& .MuiSlider-thumb": {
    backgroundColor: "white",
    width: "24px",
    height: "24px",
    boxShadow: "0 4px 8px -2px rgba(16, 24, 40, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 4px 8px 4px rgba(16, 24, 40, 0.1)",
    },
  },
  ".MuiSlider-rail": {
    backgroundColor: "#E8E7E7 ",
    height: "8px",
    border: "none",
  },
  ".MuiSlider-mark": {
    display: "none",
  },
  ".MuiSlider-track": {
    backgroundColor: "#9AB2FF ",
    height: "8px",
    border: "none",
  },
}));

const stripePromise = loadStripe(Env.STRIPE_API_KEY);

export default function BillingPayScene() {
  const location = useLocation();
  const product = location.state;
  let navigate = useNavigate();

  const fieldRef = useRef(null);

  const [clientSecret, setClientSecret] = useState("");
  const [stripeError, setStripeError] = useState("");

  const { getPaymentLink } = useStripe();

  const loadStripe = async () => {
    let res = await getPaymentLink(product, selectedOption.user);
    // if (res.status === false) navigate("/home");
    if (res.status) {
      setClientSecret(res.data.client_secret);
    } else {
      setStripeError(res.message)
    }
  };

  useEffect(() => {
    console.log("load page effect");
    loadStripe();
  }, []);

  const redirectToSuccessPage = () => {
    // Редирект на страницу успешного завершения оплаты
    navigate("/home");
  };

  const options = [
    {
      user: 1,
    },
    {
      user: 3,
    },
    {
      user: 5,
    },
    {
      user: 7,
    },
    {
      user: 10,
    },
    {
      user: 15,
    },
    {
      user: 20,
    },
    {
      user: 30,
    },
    {
      user: 50,
    },
    {
      user: 75,
    },
    {
      user: 100,
    },
  ];

  const [sliderValue, setSliderValue] = useState(0);
  const sliderSubject = Object.keys(options[0]);
  const selectedOption = options[sliderValue];
  const formatValues = useMemo(() => {
    const mappedValues = options.map((option, index) => {
      return { value: index };
    });
    return mappedValues;
  }, [options]);

  useEffect(() => {
    loadStripe();
  }, [sliderValue]); // указываем зависимость - count

  return (
    <MainLayout>
      <div
        className="font-Outfit leading-loose flex w-full bg-white
        px-10 pb-4 pt-4 text-2xl text-black drop-shadow-xl filter md:px-16 "
      >
        <button className="flex items-center" onClick={() => navigate(-1)}>
          <img src={ArrowLeftIcon} className="mr-2 inline text-blue-500" />
          <span className="text-m font-Outfit leading-tight cursor-pointer font-normal text-blue-500">
            Back
          </span>
        </button>
        <div className="ml-10">Payment</div>
      </div>
      <BaseContainer width={pageContentWidth}>
        <AnimatePresence>
          <motion.div
            ref={fieldRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-[42px] mb-[30px] mt-[72px] flex w-[calc(100%-84px)] scroll-m-[64px] flex-col"
          >
            <div className="border-1 w-full rounded-lg border-stone-250 px-6  py-7">
              <div className="font-Outfit mb-[10px] text-2xl text-black">
                User Credits
              </div>
              <div className="font-Outfit mb-[27px] text-lg text-stone-350">
                Select count of users for your subscription
              </div>
              <StyledSlider
                value={sliderValue}
                step={null}
                min={0}
                max={options.length - 1}
                marks={formatValues}
                onChange={(event, value) => {
                  setClientSecret("");
                  setStripeError('')
                  setSliderValue(value);
                }}
              ></StyledSlider>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  marginBottom: "25px",
                }}
              >
                {options.map((value, index) => {
                  return (
                    <span
                      className="absolute top-0 hidden cursor-pointer select-none md:block"
                      onClick={() => setSliderValue(index)}
                      style={{
                        left: `${(index / (options.length - 1)) * 100}%`,
                        transform: `translateX(${
                          !index
                            ? "0%"
                            : index === options.length - 1
                              ? "-100%"
                              : "-50%"
                        })`,
                        display:
                          !index || index === options.length - 1 ? "block" : "",
                      }}
                    >
                      <span className=" font-OutfitMedium flex items-end gap-[2px] whitespace-nowrap ">
                        <span className="text-sm">{value.user}</span>
                      </span>
                    </span>
                  );
                })}
              </Box>
            </div>
          </motion.div>
        </AnimatePresence>
      </BaseContainer>
      <div className="flex h-full w-full items-center bg-white">
        <BaseContainer width={pageContentWidth}>
          <div id="checkout">
            {clientSecret && (
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{
                  clientSecret,
                }}
              >
                <EmbeddedCheckout
                  onSuccess={() => redirectToSuccessPage()}
                  successUrl={`${window.location.origin}/home`}
                />
              </EmbeddedCheckoutProvider>
            )}
          </div>
          {stripeError && (
            <div className="w-full flex flex-col items-center justify-center">
            <div className="w-5/12 flex flex-col rounded-md border-[1px] border-[#E6E6E6] p-10 my-24 gap-3">
              <div className="self-stretch flex flex-col font-Outfit text-center font-extrabold text-3xl">Sorry, we got problems</div>
              <div className="flex-wrap font-Outfit text-center text-lg">
                {stripeError}
              </div>
              <div className="flex-wrap font-Outfit text-center text-lg mt-10">
                <Button onClick={() => navigate(-1)} className="w-56 h-11 text-white bg-blue-500 font-Outfit rounded-md py-1 px-3 uppercase font-medium text-lg">
                  go back
                </Button>
              </div>
            </div>
          </div>
          )}
        </BaseContainer>
      </div>
    </MainLayout>
  );
}
