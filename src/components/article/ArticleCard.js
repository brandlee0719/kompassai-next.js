import CardButton from "../button/CardButton";

export default function ArticleCard(props) {
  const { children } = props;
  return (
    <div className="flex flex-col md:gap-6">
      <div className="w-full mt-[40px]">
        <img src={children.image} className=" w-full" alt="cardImage" />
      </div>
      <div className="flex flex-col mt-[16px] ">
        <div>
          <CardButton children={children.symbol} />
        </div>
        <div className="font-Outfit text-lg 2xl:text-xl font-extrabold mt-[8px] text-stone-950">
          <p>{children.title}</p>
        </div>
        <div className="font-Outfit text-lg xl:text-xl font-normal  text-stone-950">
          <p>{children.content}</p>
        </div>
      </div>
    </div>
  );
}
