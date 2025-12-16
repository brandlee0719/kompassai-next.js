import { ReactComponent as SearchSVGIcon } from "@/assets/image/home/icon-search.svg";

export default function CompanySearchComponent(props) {
  return (
    <div className="w-full pt-3 px-4 flex items-center">
      <div className="w-full grid grid-cols-6 gap-4">
        <div className="col-span-2 flex items-center">
          <p className="text-black text-lg font-normal font-Outfit leading-relaxed">
            Company Search
          </p>
        </div>
        <div className="col-span-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts or companies"
              className="w-full px-4 py-3 rounded-3xl border border-stone-250 text-black placeholder-stone-350 text-base font-Outfit leading-tight pl-10"
            />
            <div className="absolute left-3 top-3">
              <SearchSVGIcon className="w-6 h-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
