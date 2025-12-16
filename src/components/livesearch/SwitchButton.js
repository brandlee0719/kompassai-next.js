import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function SwitchButton(props) {
  const { currentIndex, setCurrentIndex } = props;
  const options = ["Contacts", "Companies", "Favourites"];
  return (
    // <div className="w-[200px] h-[30px] flex items-center justify-center">
    <Button className="w-[300px] h-10 flex flex-row rounded-full border-[1px] border-[#0A2E31] bg-transparent p-1 normal-case">
      {options.map((item, index) => {
        return (
          <>
            <div
              className={
                currentIndex == index
                  ? "flex w-1/3 h-full justify-center items-center text-sm font-[400] rounded-full  bg-emerald-500  text-white p-2"
                  : "flex w-1/3 h-full justify-center items-center  text-sm text-emerald-500 font-[400] rounded-full p-2"
              }
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              {item}
            </div>
          </>
        );
      })}

      {/* {isAnnual ? (
          <>
            <div className="flex w-1/2 h-full justify-center items-center text-sm font-[400] rounded-full  bg-emerald-500  text-white p-2">
              Members(4)
            </div>
            <div className="flex w-1/2 h-full justify-center items-center  text-sm text-emerald-500 font-[400] rounded-full p-2">
              Other tab
            </div>
          </>
        ) : (
          <>
            <div className="flex w-1/2 h-full justify-center items-center text-sm font-[400] rounded-full  text-emerald-500 p-2">
              Members(4)
            </div>
            <div className="flex w-1/2 h-full justify-center items-center  bg-emerald-500  text-white  text-sm font-[400] rounded-full p-2">
              Other tab
            </div>
          </>
        )} */}
    </Button>
    // </div>
  );
}
