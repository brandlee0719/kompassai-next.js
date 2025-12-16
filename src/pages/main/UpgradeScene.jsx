import { Button } from "@material-tailwind/react";
import { useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SwitchButton from "@/components/common/SwitchButton";
import FreeModeComponent from "@/components/pricing/FreeModeComponent";
import ProfessionalModeComponent from "@/components/pricing/ProfessionalModeComponent";
import PremiumModeComponent from "@/components/pricing/PremiumModeComponent";
import ScaleModeComponent from "@/components/pricing/ScaleModeComponent";
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
import MainLayout from "@/components/MainLayout";

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

  const [emailsCustomIndex, setEmailsCustomIndex] = useState(0);
  const [phonesCustomIndex, setPhonesCustomIndex] = useState(0);
  const [validationCustomIndex, setValidationCustomIndex] = useState(0);
  const [customCreditsInfo, setCustomCreditsInfo] = useState();
  const [tarrifList, setTarrifList] = useState([]);

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

  const currentPlan = tarrifList.find((tariff) => tariff.key === plan.planKey);
  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 1000,
  });
  //Selecting a plan by clicking a button in a table or on a Plan card
  const handleSelection = (product, price_obj) => {
    if (!product.may_be_customized) {
      navigate("/billingpay", { state: [price_obj] });
      return;
    } else if (plan.planKey === product.key) {
      setPlan({ planKey: null, price: null });
      return;
    }
    setPlan({ planKey: product.key, price: price_obj });
  };
  //Selecting amount of extra credits on the slider
  const handleCustomSelection = () => {
    const constructedPrice = [plan.price];
    if (phonesCustomIndex) {
      constructedPrice.push(phones[phonesCustomIndex]);
    }
    if (emailsCustomIndex) {
      constructedPrice.push(emails[emailsCustomIndex]);
    }
    if (validationCustomIndex) {
      constructedPrice.push(validations[validationCustomIndex]);
    }

    navigate("/billingpay", { state: constructedPrice });
  };

  const fieldRef = useRef(null);
  useEffect(() => {
    const loadHistory = async () => {
      const res = await Promise.all([getTariffs(), getCustomCreditsInfo()]);
      const [tariffs, credits] = res;
      setTarrifList(tariffs);
      setCustomCreditsInfo(credits);
    };
    loadHistory();
  }, []);
  //Smoothly scroll sliders into view on selecting customizable plan
  useEffect(() => {
    if (plan.planKey) {
      fieldRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [plan.planKey, fieldRef.current]);

  return (
    <>
      <MainLayout>
        <div
          ref={ref}
          className="mt-[18px]  flex w-full flex-col items-center md:mt-[112px]"
        >
          <span className="font-OutfitBold px-4 text-center text-[64px] text-stone-950">
            Select a plan
          </span>
          <span className="font-Outfit mt-[10px] px-4 text-center text-[26px] text-gray-950 opacity-70">
            Reach millions of decision makers and their teams
          </span>

          <SwitchButton switchState={[annual, setAnnual]} />
        </div>
        <div className="mt-[100px] grid w-full max-w-[1536px] grid-cols-[repeat(auto-fit,minmax(360px,1fr))] items-end justify-center justify-items-center gap-y-8 self-center lg:mt-[76px]">
          {tarrifList ? (
            tarrifList.map((product, index) => (
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
            products={tarrifList}
            handleSelection={handleSelection}
          ></PricingTable>
        )}


        <SupportPanel title={false} />
      </MainLayout>
    </>
  );
}
