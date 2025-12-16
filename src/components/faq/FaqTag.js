import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import DownBtnIcon from "../../assets/image/icons/roundBtn.svg";
import Text from "../Text";
export default function FaqTag(props) {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="rounded-[16px] px-[40px] py-[32px] mt-[40px] mx-[40px] border">
      <div className="flex flex-row justify-between items-center">
        <Text variant="SubHeader1" className=" text-stone-950">
          {props.title}
        </Text>
        <button onClick={handleShowContent}>
          <img
            src={DownBtnIcon}
            width={26}
            height={26}
            className={showContent && "rotate-180"}
            alt="arrow"
          />
        </button>
      </div>

      {showContent && (
        <div className="pt-[20px] text-stone-950">
          <ul>
            <a href="/home">
              <Text variant="LinkButton">Webinars &gt;</Text>
            </a>
          </ul>
          <ul>
            <a href="/home">
              <Text variant="LinkButton">Blog &gt;</Text>
            </a>
          </ul>
          <ul>
            <a href="/home">
              <Text variant="LinkButton">FAQ &gt;</Text>
            </a>
          </ul>
          <ul>
            <a href="/home">
              <Text variant="LinkButton">
                Revenue Calculator for Sales &gt;
              </Text>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}
