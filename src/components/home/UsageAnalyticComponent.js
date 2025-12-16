import { ReactComponent as DownSVGIcon } from "@/assets/image/icons/down.svg";
import { ReactComponent as CreditSVGIcon } from "@/assets/image/home/icon-credit.svg";
import { ReactComponent as ContactSVGIcon } from "@/assets/image/home/icon-saved-contacts.svg";
import { ReactComponent as CollectedSVGIcon } from "@/assets/image/home/icon-collected-detail.svg";

export default function UsageAnalyticComponent(props) {
  return (
    <div className="w-full pt-6 pr-6 pl-10 md:pl-16 flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch text-black text-lg font-normal font-Outfit leading-relaxed">
          Usage analytics
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <button className="justify-start items-center gap-2 flex">
            <div className="text-black text-base font-normal font-Outfit leading-tight">
              This month
            </div>
            <DownSVGIcon className="w-4 h-4 relative" />
          </button>
          <button className="text-blue-500 text-base font-normal font-Outfit leading-tight">
            View all
          </button>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch p-2 justify-start items-center gap-6 inline-flex">
          <CreditSVGIcon className="bg-white w-10 h-10 p-2 rounded-lg drop-shadow-lg"/>

          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-right text-black text-xl font-normal font-Outfit leading-relaxed">
              1 / 5
            </div>
            <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
              Credits used
            </div>
          </div>
        </div>
        <hr className="w-full h-px bg-stone-250 border-0"/>

        <div className="self-stretch p-2 justify-start items-center gap-6 inline-flex">
          <ContactSVGIcon className="bg-white w-10 h-10 p-2 rounded-lg drop-shadow-lg"/>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-right text-black text-xl font-normal font-Outfit leading-relaxed">
              24
            </div>
            <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
              Saved contacts
            </div>
          </div>
        </div>
        <hr className="w-full h-px bg-stone-250 border-0"/>

        <div className="self-stretch p-2 justify-start items-center gap-6 inline-flex">
          <CollectedSVGIcon className="bg-white w-10 h-10 p-2 rounded-lg drop-shadow-lg"/>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-right text-black text-xl font-normal font-Outfit leading-relaxed">
              37
            </div>
            <div className="opacity-60 text-black text-xs font-normal font-Outfit leading-none">
              Collected details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
