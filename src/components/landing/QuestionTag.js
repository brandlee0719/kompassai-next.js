import { useState } from "react";

import DownBtnIcon from "@/assets/image/icons/downBtn.svg";
import Text from "../Text";

export default function QuestionTag(props) {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="z-0 border-t border-stone-950">
      {
        <div
          className={` justify-center p-[12px] bg-white md:w-[1000px] rounded-[16px] z-0 my-6 transition-transform duration-1000`}
        >
          <div className="flex flex-row ml-3">
            <Text
              variant="SubHeader1"
              className="w-full text-start text-stone-950"
            >
              {props.question}
            </Text>
            <button onClick={handleShowContent}>
              <img
                src={DownBtnIcon}
                width={26}
                height={26}
                style={
                  showContent == true ? { transform: "rotate(180deg)" } : null
                }
              />
            </button>
          </div>

          {showContent ? (
            <Text className="text-stone-950 opacity-70 ml-3 mt-5">
              {props.answer}
            </Text>
          ) : null}
        </div>
      }
    </div>
  );
}
