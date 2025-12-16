import { useState, useMemo, useEffect } from "react";
import { Slider, styled, Box } from "@mui/material";
import useBilling from "@/hooks/useBilling";

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
function PricingSlider({ currentPlan, options, name, state, annual }) {
  const [sliderValue, setSliderValue] = state;
  const sliderSubject = Object.keys(options[0].credits)[0];
  const selectedOption = options[sliderValue];
  const formatValues = useMemo(() => {
    const mappedValues = options.map((option, index) => {
      return { value: index };
    });
    return mappedValues;
  }, [options]);
  return (
    <div className="w-full rounded-lg border-1 border-stone-250 px-6  py-7">
      <div className="font-Outfit mb-[10px] text-2xl text-black">{name}</div>
      <div className="font-Outfit mb-[27px] text-lg text-stone-350">
        Export credits are shared across users. Select how many Export credits
        you would like for your team below.
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between">
          <div className=" font-Outfit select-none text-2xl text-black">
            <span>{currentPlan.price.credits[sliderSubject]}</span> (Selected
            Plan) +
            <span className="mr-1">
              {selectedOption ? selectedOption.credits[sliderSubject] : 0}
            </span>
           {'Credits/' + (annual ? "yr" : "month")}
          </div>
          <div className=" font-Outfit select-none text-2xl text-black">
            ${selectedOption ? selectedOption.price / 100 : 0}/
            {annual ? "year" : "month"}
          </div>
        </div>
        <StyledSlider
          value={sliderValue}
          step={null}
          min={0}
          max={options.length - 1}
          marks={formatValues}
          onChange={(event, value) => {
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
                  <span className="text-sm">
                    {value.credits[sliderSubject]}
                  </span>
                </span>
              </span>
            );
          })}
        </Box>
      </div>
    </div>
  );
}

export default PricingSlider;
