import CardButton from "../button/CardButton";
import RecentCard from "./RecentCard";

import Img1 from "@/assets/image/login/img2.png";
import Img2 from "@/assets/image/login/img5.png";
import Img3 from "@/assets/image/login/img6.png";

const relatedStories = [
  {
    image: Img1,
    symbol: "data analytics",
    title: "AI in business: how KompassAI can transform your operations",
    content: "",
  },
  {
    image: Img2,
    symbol: "data analytics",
    title: "Demystifying big data: your KompassAI companion",
    content: "",
  },
  {
    image: Img3,
    symbol: "data analytics",
    title: "Unlocking data insights: a beginner's guide to KompassAI",
    content: "",
  },
];

const recentStories = [
  {
    image: Img1,
    symbol: "data analytics",
    title: "Unlocking data insights: a beginner's guide to KompassAI",
    content:
      "Dive into the world of data analytics with KompassAI and learn how it can empower your decision-making.",
  },
  {
    image: Img2,
    symbol: "Marketing",
    title: "AI in business: how KompassAI can transform your operations",
    content:
      "Explore how artificial intelligence can optimize various aspects of your business with KompassAI.",
  },
  {
    image: Img3,
    symbol: "Trends",
    title: "The power of predictive analytics: a closer look with KompassAI",
    content:
      "Discover how predictive analytics can help you anticipate trends and stay ahead of the competition.",
  },
];

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
