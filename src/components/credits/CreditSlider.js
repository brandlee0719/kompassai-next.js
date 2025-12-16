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
function CreditSlider({ options, state, name, currentTariff, credit_key }) {
  const [sliderValue, setSliderValue] = state;
  const selectedOption = options[sliderValue];

  const formatValues = useMemo(() => {
    const mappedValues = options.map((option, index) => {
      return { value: index };
    });
    return mappedValues;
  }, [options]);

  const getPriceHandler = () => {
    if (!currentTariff) return "";
    let obj = currentTariff.find((x) => {
      return x.key === credit_key;
    });
    return `$${(selectedOption * obj.variations[0].price) / 100}`;
  };

  return (
    <div className="border-1 w-full rounded-lg border-stone-250 px-6  py-7">
      <div className="font-Outfit mb-[10px] text-2xl text-black">{name}</div>
      <div className="font-Outfit mb-[27px] text-lg text-stone-350">
        Export credits are shared across users. Select how many Export credits
        you would like for your team below.
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between">
          <div className=" font-Outfit select-none text-2xl text-black"></div>
          <div className=" font-Outfit select-none text-2xl text-black">
            {getPriceHandler()}
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
                  <span className="text-sm">{value}</span>
                </span>
              </span>
            );
          })}
        </Box>
      </div>
    </div>
  );
}

export default CreditSlider;
