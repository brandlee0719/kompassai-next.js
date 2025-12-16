import { ReactComponent as ExtensionSVGIcon } from "@/assets/image/home/icon-puzzel-piece.svg";
import { ReactComponent as PeoplesSVGIcon } from "@/assets/image/home/icon-peoples.svg";

export default function SuggestedComponent(props) {
  return (
    <div className="w-full p-6 bg-stone-150 rounded-xl flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch text-stone-950 text-lg font-Outfit leading-relaxed">
        Suggested for you
      </div>
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <ExtensionSVGIcon className="w-8 h-8 fill-current text-blue-500" />
        <div className="grow shrink basis-0 flex-col">
          <div className="self-stretch text-stone-950 text-md font-Outfit leading-snug">
            Install KompassAI Extension
          </div>
          <div className="self-stretch text-stone-350 text-xs font-Outfit leading-tight">
            Work with Lusha across the web
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-stone-250 border-0"/>
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <PeoplesSVGIcon className="w-8 h-8 fill-current text-blue-500"/>
        <div className="grow shrink basis-0 flex-col gap-1">
          <div className="self-stretch text-stone-950 text-md font-medium font-Outfit leading-snug">
            Buy more seats
          </div>
          <div className="self-stretch text-stone-350 text-xs font-Outfit leading-tight">
            You have 1 seat in your account
          </div>
        </div>
      </div>
    </div>
  );
}
