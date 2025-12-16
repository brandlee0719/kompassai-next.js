import CardButton from "../button/CardButton";
import RecentCard from "./RecentCard";
import { recentStories } from "../../utils/common";

export default function RecentBar(props) {
  const { children } = props;
  return (
    <div className="flex flex-col p-[80px] mt-[160px] bg-emerald-200">
      <div className="font-Outfit mb-[64px] font-[700] text-4xl lg:text-6xl text-emerald-500 text-center">
        Most recent
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[40px] ">
        {recentStories &&
          recentStories.map((relatedstory) => (
            <RecentCard children={relatedstory} />
          ))}
      </div>
    </div>
  );
}
