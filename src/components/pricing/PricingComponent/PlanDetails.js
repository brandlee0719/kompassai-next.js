import pluralize from "pluralize";
import PlanMenu from "./PlanMenu";
import { useState } from "react";
import PropTypes from "prop-types";
function PlanDetails(props) {
  const { stripePrice, annual } = props;
  // const [showDropDown, setShowDropDown] = useState(false);
  // const options = stripePrice?.credits
  //   ? Object.keys(stripePrice.credits).map((key) => ({
  //       amount: stripePrice.credits[key],
  //       text: key,
  //     }))
  //   : [];
  // const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <div className="font-Outfit text-lg text-stone-350 flex flex-col gap-1">
        <span>{stripePrice.credits.emails + " Email credits (1 User)"}</span>
        <span>{stripePrice.credits.phones + " Phone credits (1 User)"}</span>
        <span>
          {stripePrice.credits.validations + " Email validation (1 User)"}{" "}
        </span>
      </div>
    </>
  );
}

export default PlanDetails;

//Select from old design
{
  /* <div className="flex flex-col">
      <PlanMenu
        options={options}
        menuState={[showDropDown, setShowDropDown]}
        selectionState={[selectedOption, setSelectedOption]}
      ></PlanMenu>
      <div className="">
        <div className="mt-[8px] w-full text-center text-xs opacity-40">
          Credits are provided upfront
        </div>
        <div className="mt-[16px] flex min-h-[36px] flex-row items-center justify-center  gap-1">
          <div className=" whitespace-nowrap text-sm font-[700] opacity-70">
            Total price:
          </div>
          <div className=" ml-[8px]  text-xs font-[400] opacity-70">
            { stripePrice?.price ? (stripePrice.price / 100) : '0' }
            {annual ? 'per month, billed annually': 'per month'}
          </div>
        </div>
      </div>
    </div> */
}
