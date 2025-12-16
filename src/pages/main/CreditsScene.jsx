import { Button } from "@material-tailwind/react";
import { useRef, useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Env from "@/env";

import MainLayout from "@/components/MainLayout";
import useBilling from "@/hooks/useBilling";
import useStripe from "@/hooks/useStripe";
import CreditSlider from "@/components/credits/CreditSlider";

import BaseContainer from "@/components/BaseContainer";
import { pageContentWidth } from "@/utils/common";

import { useResizeDetector } from "react-resize-detector";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as TextDecorIcon } from "@/assets/image/icons/text-decor.svg";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(Env.STRIPE_API_KEY);

export default function CreditsScene() {
  const [clientSecret, setClientSecret] = useState("");
  const [stripeError, setStripeError] = useState("");
  const [emailsCustomIndex, setEmailsCustomIndex] = useState(0);
  const [phonesCustomIndex, setPhonesCustomIndex] = useState(0);
  const [validationCustomIndex, setValidationCustomIndex] = useState(0);
  const [customCreditsInfo, setCustomCreditsInfo] = useState();
  const navigate = useNavigate();
  const { getCustomOTP } = useBilling();
  const { getCreditPaymentLink } = useStripe();

  const loadStripe = async (data) => {
    let res = await getCreditPaymentLink(data);
    // if (res.status === false) navigate("/home");
    if (res.status) {
      setClientSecret(res.data.client_secret);
    } else {
      setStripeError(res.message);
    }
  };
  const redirectToSuccessPage = () => {
    // Редирект на страницу успешного завершения оплаты
    navigate("/home");
  };

  const handleCustomSelection = () => {
    let constructedPrice = [];
    if (phonesCustomIndex) {
      constructedPrice.push({
        lookup_key: "phone_credits_key",
        quantity: options.phone_credits[phonesCustomIndex],
      });
    }
    if (emailsCustomIndex) {
      constructedPrice.push({
        lookup_key: "email_credits_key",
        quantity: options.email_credits[emailsCustomIndex],
      });
    }
    if (validationCustomIndex) {
      constructedPrice.push({
        lookup_key: "email_validation_credits_key",
        quantity: options.email_validation_credits[validationCustomIndex],
      });
    }
    if (validationCustomIndex || emailsCustomIndex || phonesCustomIndex)
      loadStripe(constructedPrice);
  };

  const fieldRef = useRef(null);

  const options = {
    phone_credits: [0, 150, 500, 1000, 5000, 10000, 25000, 50000, 100000],
    email_credits: [
      0, 1000, 5000, 10000, 50000, 1000000, 250000, 500000, 1000000,
    ],
    email_validation_credits: [
      0, 500, 2000, 5000, 10000, 25000, 100000, 250000, 500000,
    ],
  };

  useEffect(() => {
    const loadTariffData = async () => {
      const res = await getCustomOTP();
      setCustomCreditsInfo(res);
    };
    loadTariffData();
  }, []);
  const clearStripe = () => {
    setClientSecret("");
    setStripeError("");
  };

  return (
    <MainLayout>
      <div
        className="mt-[18px]  flex w-full flex-col items-center md:mt-[64px]"
      >
        <div className="mx-[5px] mt-[8px] flex flex-row items-center rounded-[40px] bg-[#D9D9D9] p-[5px_16px] ">
          <div className="font-Outfit  whitespace-nowrap font-[#0D0D0D] text-[20px] uppercase  ">
            Credits
          </div>
        </div>
        <span className="font-OutfitBold relative px-4 text-center text-[64px] text-stone-950">
          Buy extra credits
          <TextDecorIcon className="absolute -bottom-0 -right-0" />
        </span>
        {/* <span className="font-Outfit mt-[10px] px-4 text-center text-[26px] text-gray-950 opacity-70">
          Reach millions of decision makers and their teams
        </span> */}
      </div>
      {customCreditsInfo && !clientSecret && (
        <div className="mb-6">
          <AnimatePresence>
            <motion.div
              ref={fieldRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-[42px] mb-[30px] mt-[72px] flex w-[calc(100%-84px)] scroll-m-[64px] flex-col"
            >
              <div className="flex flex-col gap-[70px]">
                <CreditSlider
                  currentTariff={customCreditsInfo}
                  name="Phone credits"
                  credit_key="phone_credits"
                  options={options["phone_credits"]}
                  state={[phonesCustomIndex, setPhonesCustomIndex]}
                ></CreditSlider>
                <CreditSlider
                  currentTariff={customCreditsInfo}
                  name="Email credits"
                  credit_key="email_credits"
                  options={options["email_credits"]}
                  state={[emailsCustomIndex, setEmailsCustomIndex]}
                ></CreditSlider>
                <CreditSlider
                  currentTariff={customCreditsInfo}
                  name="Validation credits"
                  credit_key="email_validation_credits"
                  options={options["email_validation_credits"]}
                  state={[validationCustomIndex, setValidationCustomIndex]}
                ></CreditSlider>
              </div>
            </motion.div>

            {(validationCustomIndex ||
              emailsCustomIndex ||
              phonesCustomIndex) && (
              <Button
                onClick={handleCustomSelection}
                className={`text-md font-Outfit ml-auto mr-auto  mt-6 flex w-[280px] items-center justify-center self-center rounded-lg bg-black p-[16px_24px] font-[700] uppercase tracking-wide text-white transition-all  `}
              >
                To Checkout
              </Button>
            )}
          </AnimatePresence>
        </div>
      )}

      {clientSecret && (
        <BaseContainer width={pageContentWidth}>
          <Button
            onClick={() => clearStripe()}
            className="font-Outfit mb-6 ml-auto mr-auto h-11 w-56 rounded-md bg-blue-500 px-3 py-1 text-lg font-medium uppercase text-white"
          >
            go back
          </Button>
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
        </BaseContainer>
      )}

      {stripeError && (
        <div className="flex w-full flex-col items-center justify-center">
          <div className="my-24 flex w-5/12 flex-col gap-3 rounded-md border-[1px] border-[#E6E6E6] p-10">
            <div className="font-Outfit flex flex-col self-stretch text-center text-3xl font-extrabold">
              Sorry, we got problems
            </div>
            <div className="font-Outfit flex-wrap text-center text-lg">
              {stripeError}
            </div>
            <div className="font-Outfit mt-10 flex-wrap text-center text-lg">
              <Button
                onClick={() => navigate(-1)}
                className="font-Outfit h-11 w-56 rounded-md bg-blue-500 px-3 py-1 text-lg font-medium uppercase text-white"
              >
                go back
              </Button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
