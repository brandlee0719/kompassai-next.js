import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CustomCheckBox } from "@/assets/image/icons/checkbox_free.svg";
import { ReactComponent as DownSVGIcon } from "@/assets/image/icons/down.svg";
import cn from "classnames";
import { Input, Button } from "@material-tailwind/react";
import Text from "@/components/Text";
import PlanDetails from "./PlanDetails";

export default function PricingComponent(props) {
  const { tiers, product, annual, expandState, planState, handleSelection } =
    props;
  const navigate = useNavigate();
  const [plan, setPlan] = planState;
  const theme = tiers[product.key].theme;
  const promo = product.key == "premium";

  const [showBenefits, setShowBenefits] = expandState;

  const tierIndex = Object.keys(tiers).indexOf(product.key);
  const prevTier = tierIndex === 0 ? null : Object.keys(tiers)[tierIndex - 1];
  const features = tierIndex ? product.additionalFeatures : product.features;
  const price_obj =
    product.variations.length > 1
      ? product.variations.find(
          (x) => x.interval === (annual ? "year" : "month"),
        )
      : product.variations[0];

  return (
    <div
      className={`${theme.border} border-inset mx-[16px] flex w-[calc(100%-16px)] flex-col justify-between rounded-lg border-[2px] sm:w-[315px] xl:w-[360px]`}
    >
      <div className={`${theme.main} w-full rounded-lg`}>
        {promo ? (
          <div
            className={`align-center flex ${theme.border} ${theme.main} h-[84px]} justify-center rounded-[8px] rounded-bl-none rounded-br-none text-black`}
          >
            <Text
              variant="Caption"
              className={`flex  p-[20px]  text-lg uppercase text-black drop-shadow-lg`}
            >
              Most popular
            </Text>
          </div>
        ) : (
          <></>
        )}
        <div
          className={`relative flex w-full flex-col rounded-lg  rounded-bl-none rounded-br-none bg-white ${theme.text}  p-[24px_32px_16px_32px]`}
        >
          <span className="font-OutfitBold text-[28px] ">{product.name}</span>
          <Text
            variant="CaptionRegular"
            className="text-md mt-4 min-h-[5ch] text-stone-950 "
          >
            {tiers[product.key].slogan}
          </Text>

          {product.key !== "free" && (
            <div className="mt-[40px] flex flex-row gap-2">
              <span className="font-OutfitSemiBold text-[46px] text-black">
                ${price_obj.price / 100}
              </span>
              <div className="mb-[12px] flex items-end text-black">
                <span className="font-OutfitBold">
                  /{annual ? "year" : "month"}
                </span>
              </div>
            </div>
          )}
          {product.key == "free" && (
            <div className="mt-[40px] flex flex-row gap-2">
              <span className="font-OutfitSemiBold text-[46px] text-black">
                ${product.variations[0].price / 100}
              </span>
              <div className="mb-[12px] flex items-end text-black">
                <div className="font-OutfitBold">/month</div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white p-[0px_32px_24px_32px]">
          <PlanDetails stripePrice={price_obj} annual={annual}></PlanDetails>
          <Button
            onClick={() => handleSelection(product, price_obj)}
            className={cn(
              `text-md  font-Outfit mt-6 flex w-full items-center justify-center rounded-lg border-1 border-black bg-black p-[16px_24px] font-[700] uppercase tracking-wide text-white transition-all  `,
              {
                " bg-white text-black": plan.planKey === product.key,
              },
            )}
          >
            {plan.planKey === product.key ? "Selected" : "Select plan"}
          </Button>
          <div
            className={`mt-[40px] flex flex-col overflow-hidden transition-[height] ${
              !showBenefits ? "h-0" : "h-[380px]"
            }`}
          >
            {prevTier && (
              <div className=" font-OutfitBold mb-2 text-lg text-[#090C05]">{`Everything in ${
                prevTier.charAt(0).toLocaleUpperCase() + prevTier.slice(1)
              }, plus`}</div>
            )}

            {features.map((benefit) => (
              <>
                <div key={benefit} className="mt-2 flex flex-row items-center">
                  <CustomCheckBox
                    className={`fill-[#f3f3f3] stroke-[#090C05]`}
                  />
                  <div className="font-OutfitLight ml-[8px] text-lg text-stone-950">
                    {benefit}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="group flex w-full justify-center">
        <div
          onClick={() => setShowBenefits(!showBenefits)}
          className="mb-[32px] flex cursor-pointer  select-none flex-row px-[32px]"
        >
          <div className="font-Outfit text-xl font-[400] group-hover:scale-[1.01] ">
            Show plan comparison
          </div>
          <div className="ml-[16px] flex items-center transition-all group-hover:rotate-180">
            <DownSVGIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
