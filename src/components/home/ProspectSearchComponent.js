import { useState } from "react";
import { ReactComponent as SearchDesignSVGIcon } from "@/assets/image/home/design-eye-search.svg";
import useKompassRouter from "@/hooks/useKompassRouter";

const buttonSwitches = [
  { id: 1, label: "Recent activity" },
  { id: 2, label: "Saved searches" },
];

export default function ProspectSearchComponent(props) {
  const { kompassNavigate } = useKompassRouter();
  const [selectedButton, setSelectedButton] = useState({
    id: 1,
    label: "Recent activity",
  });

  const inActiveSwitchButtonClass =
    "grow shrink basis-0 self-stretch px-3 py-1 rounded-xl justify-center items-center flex";
  const inActiveTextButtonClass =
    "text-sm font-medium font-Outfit leading-tight";
  const activeSwitchButtonClass =
    "bg-gray-950 grow shrink basis-0 self-stretch px-3 py-2 rounded-lg justify-center items-center flex";
  const activeTextButtonClass =
    "text-white text-sm font-medium font-Outfit leading-tight";

  return (
    <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl border border-stone-250 bg-white p-6">
      <div className="flex flex-col items-center justify-start gap-y-6 self-stretch">
        <div className="inline-flex items-center justify-between self-stretch">
          <div className="font-Outfit leading-relaxed shrink grow basis-0 text-lg font-normal text-black">
            Search History
          </div>
          <div className="flex items-center justify-end gap-8">
            <button className="font-Outfit leading-tight text-blue-500">
              View all
            </button>
          </div>
        </div>

        {/* <div
          className={`w-full h-full p-1 rounded-lg border border-stone-250 justify-center items-center gap-1 inline-flex`}
        >
          {buttonSwitches?.map((item) => (
            <button
              key={item.id}
              className={
                selectedButton.id === item.id
                  ? activeSwitchButtonClass
                  : inActiveSwitchButtonClass
              }
              onClick={() => {
                setSelectedButton(item);
              }}
            >
              <div
                className={
                  selectedButton.id === item.id
                    ? activeTextButtonClass
                    : inActiveTextButtonClass
                }
              >
                {item.label}
              </div>
            </button>
          ))}
        </div> */}
      </div>

      <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-6 self-stretch">
        <div className="mt-12 flex flex-col items-center justify-start gap-6 self-stretch px-6">
          <div className="relative h-16 w-16">
            <SearchDesignSVGIcon className="absolute left-1 top-1 h-14 w-14" />
          </div>
          <div className="flex h-16 flex-col items-center justify-start gap-1 self-stretch">
            <div className="font-Outfit leading-snug self-stretch text-center text-base font-medium text-black">
              No searches yet
            </div>
            <div className="font-Outfit leading-tight self-stretch text-center text-sm font-normal text-neutral-400">
              Use Prospect search to generate targeted lists of decision makers
            </div>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-lg border bg-gray-950 px-6 py-3"
          onClick={() => {
            kompassNavigate("/search");
          }}
        >
          <p className="font-OutfitBold text-sm uppercase text-white 2xl:text-base">
            prospect search
          </p>
        </button>
      </div>
    </div>
  );
}
