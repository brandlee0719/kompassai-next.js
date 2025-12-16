import { Button } from "@material-tailwind/react";
import Text from "../Text";

export default function ConnectPanel({background, accent}) {
  return (




    <div className={`flex flex-col items-center w-full ${background} rounded-t-[2.5rem] gap-16 py-16`}>
      <div
        className="relative text-center font-OutfitBold text-stone-950 text-[4.5rem] leading-[5rem]"
      >
        Connect to the largest and <br />
        most accurate
        <div
          className={`inline-block ${accent} -rotate-6 rounded-xl text-white ml-4 text-[2.25rem] px-3 leading-[3.6rem] drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]`}
        >
          Database
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="px-8 py-2 text-sm bg-transparent border border-stone-950 font-OutfitBold text-stone-950 rounded-md">
          TRY TODAY
        </Button>
        <Button className="px-4 py-2 text-sm bg-stone-950 text-white font-OutfitBold rounded-md">
          CREATE A CUSTOM PLAN
        </Button>
      </div>
    </div>
  );
}
