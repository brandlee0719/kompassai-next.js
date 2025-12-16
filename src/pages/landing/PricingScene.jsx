import { Button } from "@material-tailwind/react";
import { useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SwitchButton from "@/components/common/SwitchButton";
import CheckBoxIcon from "@/assets/image/icons/checkbox_data.svg";
import PlanCalculator from "@/components/pricing/PlanCalculator";
import ROICalculator from "@/components/pricing/ROICalculator";
import DemoCarousel from "@/components/common/CarouselTransition";
import LandingLayout from "@/components/LandingLayout";
import SupportPanel from "@/components/landing/SupportPanel";
import QuestionPanel from "@/components/landing/QuestionPanel";
import { useEffect, useState } from "react";
import PricingComponent from "@/components/pricing/PricingComponent/PricingComponent";
import useBilling from "@/hooks/useBilling";
import PricingTable from "@/components/pricing/PricingTable";
import { useResizeDetector } from "react-resize-detector";
import PricingSlider from "@/components/pricing/PricingSlider";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as TextDecorIcon } from "@/assets/image/icons/text-decor.svg";
import useBillingStore from "@/store/useBillingStore";

const tiers = {
  free: {
    title: "Team",
    slogan: "Test drive it",
    theme: {
      border: "border-stone-250",
      main: "bg-[#f3f3f3]",
    },
  },
  professional: {
    title: "Professional",
    slogan: "Essential for finding your prospects",
    theme: {
      border: "border-[#e7436a]",
      main: "bg-[#F1A9FF]",
    },
  },
  premium: {
    title: "Premium",
    slogan: "Perfect for small teams with simple workflows",
    theme: {
      border: "border-accents-green",
      main: "bg-accents-green",
    },
    promo: "Most popular",
  },
  enterprise: {
    title: "Enterprise",
    slogan: "Ideal for prospecting at large scales",
    theme: {
      border: "border-[#9AB2FF]",
      main: "bg-[#9AB2FF]",
    },
  },
};

const options = [
  "name",
  "company",
  "title",
  "location",
  "work email",
  "private email",
  "mobile number",
  "direct dial",
  "21firmographics",
];
const findKey = (key, target) => {
  return target.find((obj) => {
    return obj.key === key;
  });
};
export default function PricingScene() {
  const [annual, setAnnual] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [plan, setPlan] = useState({ planKey: null, price: null });
  const { selectedPrices, changePrices, cleanPrices, setRedirect } =
    useBillingStore();
  const [emailsCustomIndex, setEmailsCustomIndex] = useState(0);
  const [phonesCustomIndex, setPhonesCustomIndex] = useState(0);
  const [validationCustomIndex, setValidationCustomIndex] = useState(0);
  const [customCreditsInfo, setCustomCreditsInfo] = useState();
  const [tariffList, setTariffList] = useState([]);

  const navigate = useNavigate();
  const { getTariffs, getCustomCreditsInfo } = useBilling();

  const [phones, emails, validations] = useMemo(() => {
    if (!customCreditsInfo) return [];

    const filterByPeriod = (target) => {
      return target.variations.filter((obj) => {
        return annual ? obj.interval === "year" : obj.interval === "month";
      });
    };
    let phones = findKey("customize_phone_credits", customCreditsInfo);
    phones = filterByPeriod(phones);
    let emails = findKey("customize_email_credits", customCreditsInfo);
    emails = filterByPeriod(emails);
    let validations = findKey(
      "customize_email_validation_credits",
      customCreditsInfo,
    );
    validations = filterByPeriod(validations);
    let values = { phones, emails, validations };
    Object.keys(values).forEach((key) => {
      values[key].unshift({
        credits: {
          [key]: 0,
        },
        interval: annual ? "year" : "month",
        lookup_key: "",
        price: 0,
      });
    });

    return [phones, emails, validations];
  }, [customCreditsInfo, annual]);

  const currentPlan = tariffList.find((tariff) => tariff.key === plan.planKey);
  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 1000,
  });
  //Selecting a plan by clicking a button in a table or on a Plan card
  const handleSelection = (product, price_obj) => {
    if (!product.may_be_customized) {
      changePrices({ main: price_obj });
      setRedirect("/billingpay");
      navigate("/signin");
      return;
    } else if (plan.planKey === product.key) {
      setPlan({ planKey: null, price: null });
      return;
    }
    setPlan({ planKey: product.key, price: price_obj });
  };
  //Selecting amount of extra credits on the slider
  const handleCustomSelection = () => {
    const constructedPrice = { main: plan.price };
    if (phonesCustomIndex) {
      constructedPrice.phones = phones[phonesCustomIndex];
    }
    if (emailsCustomIndex) {
      constructedPrice.emails = emails[emailsCustomIndex];
    }
    if (validationCustomIndex) {
      constructedPrice.validations = validations[validationCustomIndex];
    }
    changePrices(constructedPrice);
    setRedirect("/billingpay");
    navigate("/signin");
  };

  const fieldRef = useRef(null);
  useEffect(() => {
    const loadTariffData = async () => {
      cleanPrices();
      const res = await Promise.all([getTariffs(), getCustomCreditsInfo()]);
      const [tariffs, credits] = res;
      setTariffList(tariffs);
      setCustomCreditsInfo(credits);
    };
    loadTariffData();
  }, []);
  //Smoothly scroll sliders into view on selecting customizable plan
  useEffect(() => {
    if (plan.planKey) {
      fieldRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [plan.planKey, fieldRef.current]);

  return (
    <>
      <LandingLayout>
        <div
          ref={ref}
          className="mt-[18px]  flex w-full flex-col items-center md:mt-[64px]"
        >
          <div className="mx-[5px] mt-[8px] flex flex-row items-center rounded-[40px] bg-[#D9D9D9] p-[5px_16px] ">
            <div className="font-Outfit  whitespace-nowrap font-[#0D0D0D] text-[20px] uppercase  ">
              Upgrade
            </div>
          </div>
          <span className="font-OutfitBold relative px-4 text-center text-[64px] text-stone-950">
            Dominate your market
            <TextDecorIcon className="absolute -bottom-0 -right-0" />
          </span>
          <span className="font-Outfit mt-[10px] px-4 text-center text-[26px] text-gray-950 opacity-70">
            Reach millions of decision makers and their teams
          </span>

          <SwitchButton switchState={[annual, setAnnual]} />
        </div>
        <div className="mt-[100px] grid w-full max-w-[1536px] grid-cols-[repeat(auto-fit,minmax(360px,1fr))] items-end justify-center justify-items-center gap-y-8 self-center lg:mt-[76px]">
          {tariffList ? (
            tariffList.map((product, index) => (
              <>
                <PricingComponent
                  key={product.id}
                  tiers={tiers}
                  handleSelection={handleSelection}
                  product={product}
                  planState={[plan, setPlan]}
                  tierNumber={index}
                  annual={annual}
                  expandState={[expanded, setExpanded]}
                />
              </>
            ))
          ) : (
            <></>
          )}
        </div>
        <AnimatePresence>
          {currentPlan && currentPlan.may_be_customized && (
            <motion.div
              ref={fieldRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-[42px] mb-[30px] mt-[72px] flex w-[calc(100%-84px)] scroll-m-[64px] flex-col"
            >
              <div className="font-OutfitSemiBold mb-[30px] text-[28px]">
                Customize Credits
              </div>
              <div className="flex flex-col gap-[70px]">
                <PricingSlider
                  annual={annual}
                  currentPlan={plan}
                  options={phones}
                  name="Phone credits"
                  state={[phonesCustomIndex, setPhonesCustomIndex]}
                ></PricingSlider>
                <PricingSlider
                  annual={annual}
                  currentPlan={plan}
                  options={emails}
                  name="Email credits"
                  state={[emailsCustomIndex, setEmailsCustomIndex]}
                ></PricingSlider>
                <PricingSlider
                  annual={annual}
                  currentPlan={plan}
                  options={validations}
                  name="Validation credits"
                  state={[validationCustomIndex, setValidationCustomIndex]}
                ></PricingSlider>
              </div>

              <Button
                onClick={handleCustomSelection}
                className={`text-md font-Outfit mt-6 flex w-[280px] items-center justify-center self-center rounded-lg bg-black p-[16px_24px] font-[700] uppercase tracking-wide text-white transition-all  `}
              >
                To Checkout
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 17 is the size of scrollbar */}
        {width >= 1440 - 17 && (
          <PricingTable
            tiers={tiers}
            annual={annual}
            planState={[plan, setPlan]}
            products={tariffList}
            handleSelection={handleSelection}
          ></PricingTable>
        )}
        <span className="mt-[150px] px-[24px] text-center text-emerald-500">
          What data do I get?
        </span>
        <div className="m-auto mt-[52px]  flex max-w-[900px] flex-wrap items-center justify-center">
          {options.map((option) => (
            <div className="mx-[5px] mt-[8px] flex flex-row items-center rounded-[40px] bg-[#ffe9ee] p-[5px_8px] ">
              <img className="h-[20px] w-[20px]" src={CheckBoxIcon} />
              <div className="font-Outfit ml-[8px] mr-[13px] whitespace-nowrap font-[#E7436A] text-xl uppercase text-magenta-500 ">
                {option}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[70px] h-[460px] w-full bg-[url('./assets/image/background.svg')] pt-[80px]">
          <span variant="Header1" className="text-center text-white ">
            Need higher volume?
          </span>
          <span
            variant="SubHeader1"
            className="mt-[20px] text-center text-white opacity-70"
          >
            We can happily arrange a custom package to suit your needs. <br />
            Just shoot us a message
          </span>
          <div className="flex w-full justify-center">
            <Button className="font-Outfit text-md mt-[64px] flex items-center justify-center rounded-full bg-white p-[19px_24px] font-[700] text-emerald-500">
              CONTACT US NOW
            </Button>
          </div>
        </div>

        <SupportPanel title={false} />

        <div className="flex flex-col items-center">
          <span
            variant="Header2"
            className="mt-[40px] text-center text-emerald-500 sm:mt-[100px] md:mt-[80px]"
          >
            See how more users you could <br /> convert with KompassAI
          </span>
          <span
            variant="SubHeader1"
            className="mt-[10px] text-center text-emerald-500 opacity-70"
          >
            Use our handly calculator to see how many more users you could
            convert by <br /> choosing KompassAI. Current figures are based on
            data from our customers.
          </span>
          <div className="flex flex-wrap justify-center ">
            <PlanCalculator />
            <ROICalculator />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="mx-[16px] mt-[16px] flex w-[300px] flex-col rounded-[30px] bg-emerald-200 p-[12px_16px] md:p-[12px_40px] xl:w-[600px] 2xl:w-[600px]">
                <div className="flex flex-row">
                  <div className="font-Outfit text-3xl font-[600] text-emerald-500">
                    2,000
                  </div>
                  <div className="font-Outfit text-md mx-[8px] flex items-end font-[400] text-emerald-500">
                    Monthly Email
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="font-Outfit text-3xl font-[600] text-emerald-500">
                    1,000
                  </div>
                  <div className="font-Outfit text-md mx-[8px] flex items-end font-[400] text-emerald-500">
                    Monthly Phone Credits Required
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mx-[16px] mt-[16px] flex w-[300px] flex-col rounded-[30px] bg-emerald-200 p-[12px_16px] text-emerald-500 md:p-[12px_40px] xl:w-[600px] 2xl:w-[600px]">
                <div className="flex flex-row">
                  <div className="font-Outfit text-3xl font-[600] text-emerald-500">
                    3000%
                  </div>
                  <div className="font-Outfit text-md mx-[8px] flex items-end font-[400] text-emerald-500">
                    Return on Investment from our prospecting tool
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DemoCarousel />
        <QuestionPanel />
      </LandingLayout>
    </>
  );
}
