import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

import SearchIcon from "@/assets/image/team/search.svg";

export default function SearchInput(props) {
  const { onInputChanged } = props;

  return (
    <div className="flex flex-row gap-2">
      <div
        className={`min-w-[${
          props?.width ? props.width : 400
        }px] flex flex-row px-4 py-2 rounded-[40px] items-center bg-white border-[1px] border-stone-250`}
      >
        <ReactSVG src={SearchIcon} />
        <input
          type="text"
          className="w-full rounded-xl outline-none pl-1 font-Outfit font-normal text-base"
          placeholder={
            props?.placeholder
              ? props.placeholder
              : "Search for contact or company"
          }
          onChange={(event) => {
            onInputChanged(event.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}
