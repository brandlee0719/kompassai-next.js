import { Button } from "@material-tailwind/react";
import Text from "../Text";

export default function WhyKompassAIPanel({ data, background = "bg-white" }) {
  return (
    <div className="flex flex-col items-center py-6 gap-6 mb-12 mt-24">
      <div
        className="text-center font-OutfitBold text-[3.5rem] text-stone-950 w-6/12"
      >
        {data.heading}
      </div>
      <div
        className="text-center font-Outfit text-[1.25rem] text-stone-350 w-8/12"
      >
        {data.subHeading}
      </div>

    </div>
  );
}
