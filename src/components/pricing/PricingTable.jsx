import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";
import { ReactComponent as CheckIcon } from "@/assets/image/icons/check.svg";
import { ReactComponent as ErrorIcon } from "@/assets/image/icons/error.svg";
import cn from "classnames";
export default function PricingTable({ tiers, annual, products, planState, handleSelection }) {
  
  const [plan, setPlan] = planState;
  const benefits = useMemo(() => {
    const benefitMap = new Map();
    const tiersKeys = Object.keys(tiers);
    for (let key in tiers) {
      const features =
        key === "free" && products
          ? products.find((prod) => prod.key === key)?.features
          : products.find((prod) => prod.key === key)?.additionalFeatures;
      features?.forEach((benefit) => {
        tiersKeys.forEach((tierKey) => {
          if (benefitMap.has(benefit)) {
            benefitMap.set(benefit, [...benefitMap.get(benefit), tierKey]);
            return;
          }
          benefitMap.set(benefit, [tierKey]);
        });
      });
      tiersKeys.shift();
    }
    let array = Array.from(benefitMap, ([key, value]) => ({ key, value }));
    return array;
  }, [tiers, products]);
  console.log(benefits)
  return (
    <div className="w-[calc(100%-84px) mx-[42px] mt-[155px] flex flex-col">
      <div className="flex w-full justify-between border-b-[1px] border-black">
        <div className="font-OutfitMedium mb-[28px] mr-[20px] flex-1 self-end text-[34px] 2xl:mr-[85px]">
          Get search & AI-driven insights on your company data
        </div>
        <div className="w-100% flex overflow-hidden rounded-lg rounded-bl-none rounded-br-none border-[1px] border-b-0 border-black">
          {products.map((product) => {
            const price_obj =
              product.variations.length > 1
                ? product.variations.find(
                    (x) => x.interval === (annual ? "year" : "month"),
                  )
                : product.variations[0];
            return (
              <div
                className={`${
                  tiers[product.key].theme.main
                } flex h-[220px] w-[253px] min-w-[253px] flex-col items-center justify-center border-r-[1px] border-gray-950 p-8`}
              >
                <div className="font-OutfitSemiBold text-[36px] leading-[100%]">
                  {product.name}
                </div>

                <div className="font-Outfit flex items-end text-black">
                  <span className="font-Outfit mr-1 mt-2 text-[24px] leading-[120%] text-black">
                    ${price_obj.price / 100}
                  </span>
                  <span className="font-OutfitBold text-sm">
                    {annual ? "/year" : "/month"}
                  </span>
                </div>
                <Button
                  onClick={() => {
                    handleSelection(product, price_obj);
                  }}
                  className={cn(
                    `text-md font-Outfit mt-auto flex h-[52px] w-full cursor-pointer items-center justify-center rounded-lg bg-black p-[16px_24px] font-[700] leading-[140%] tracking-wide text-white transition-all  `,
                    {
                      "border-1 border-black bg-white !text-black":
                        plan.planKey === product.key,
                    },
                  )}
                >
                  {plan.planKey === product.key ? "Selected" : "Select plan"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Benefits table */}
      <div className="mt-[60px] flex w-full flex-col ">
        {benefits.map(({ value, key }) => {
          return (
            <div
              key={key}
              className="grid w-full grid-cols-[auto_repeat(4,253px)] gap-y-3 odd:bg-[#F7F9FD]"
            >
              <div className="font-Outfit px-[32px] py-[30px] text-[24px] leading-[100%] text-black">
                {key}
              </div>
              {Object.keys(tiers).map((tier) => {
                return (
                  <div className="flex items-center justify-center px-5 py-3">
                    {value.includes(tier) ? (
                      <CheckIcon></CheckIcon>
                    ) : (
                      <ErrorIcon></ErrorIcon>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
