import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import TabBar from "../common/TabBar";
import BaseContainer from "../BaseContainer";
import { pageContentWidth } from "@/utils/common";
import Text from "../Text";

export default function AnswerPanel(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      <div className="px-12 py-24">
        <div className="w-[16rem] font-Outfit uppercase flex items-center justify-center py-1 text-md rounded-full text-stone-950 bg-accents-yellow">
          Best in Class Capabilities
        </div>
        <TabBar />
      </div>
    </div>
  );
}
