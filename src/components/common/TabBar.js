import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ProspectImg from "../../assets/image/prospecting/prospect.png";
import IntergratedImg from "../../assets/image/prospecting/intergrated.png";
import ImmediateImg from "../../assets/image/prospecting/immediate.png";

export default function TabBar(props) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
    <div className="flex flex-col md:grid md:grid-cols-2 mt-12 gap-12 items-center">
      <div className="flex-col text-stone-950 pr-24">
        <div className="font-OutfitBold text-[2rem]">
          Integrated with Linkedin Sales Navigator
        </div>
        <div className="font-Outfit text-[1.25rem] mt-12">
          Augment your prospecting efforts through our LinkedIn prospecting tool. Automatically update and enrich your contact list when navigating on LinkedIn cleanly and painlessly.
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between drop-shadow-lg">
          <img src={IntergratedImg} />
        </div>
      </div>
    </div>

    <div className="flex flex-col md:grid md:grid-cols-2 mt-12 gap-12 items-center">
      <div>
        <div className="flex flex-row justify-between drop-shadow-lg">
          <img src={ProspectImg} />
        </div>
      </div>
      <div className="flex-col text-stone-950 pl-24">
        <div className="font-OutfitBold text-[2rem]">
          Prospect on LinkedIn and search a database with 950+ million members
        </div>
        <div className="font-Outfit text-[1.25rem] mt-12">
          Immediately see critical change data such as job changes or title promotions on LinkedIn and incorporate into your database.         </div>
      </div>
    </div>

    <div className="flex flex-col md:grid md:grid-cols-2 mt-12 gap-12 items-center">
      <div className="flex-col text-stone-950 pr-24">
        <div className="font-OutfitBold text-[2rem]">
          Immediately see job changes of your prospects in LinkedIn
        </div>
        <div className="font-Outfit text-[1.25rem] mt-12">
          Immediately see critical change data such as job changes or title promotions on LinkedIn and incorporate into your database. 
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between drop-shadow-lg">
          <img src={ImmediateImg} />
        </div>
      </div>
    </div>


    </>
  );
}
