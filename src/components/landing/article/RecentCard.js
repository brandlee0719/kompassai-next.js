import RecentCardBtn from "../article/RecentCardBtn";

export default function RecentCard(props) {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between">
      <div className="w-full mt-[40px]">
        <img src={children.image} className=" w-full" alt="cardImage" />
      </div>
      <div className="flex flex-col mt-[16px] px-[24px] ">
        <div>
          <RecentCardBtn children={children.symbol} />
        </div>
        <div className="font-Outfit text-[20px] md:text-[28px] font-bold mt-[8px] text-stone-950">
          <p>{children.title}</p>
        </div>
        <div className="font-Outfit text-[16px] md:text-[20px] font-normal mt-[24px]  text-stone-950">
          <p>{children.content}</p>
        </div>
      </div>
    </div>
  );
}
